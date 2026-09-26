"""Generic relabel pass: erase baked-in Portuguese labels and re-set them in English.

Each label is described by a dict:
    box     (x0, y0, x1, y1) around ONE line of text in the master
    mode    'dark' (text darker than its background) or 'light'
    pt      the original string — used to fit the font size to the measured width
    en      the replacement string ('' = erase only)
    w       'R' | 'M' | 'SB' | 'B'  weight
  optional:
    size    force a font size (else fitted from `pt`)
    angle   force the tilt in degrees (else measured; short words get the group's)
    limit   right edge the English may reach before being condensed
    dx, dy  nudge the measured left x / baseline
    align   'center' keeps the English centred where the original was (badges, captions)
    color   force the ink colour
    group   labels sharing a size/angle (the member with the widest line sets it)
    thresh  mask threshold for erasing (default 16)

A 'glyph' swap replaces one character inside a word without touching its neighbours
(e.g. the thousands/decimal separator of a number). `box` is the exact rectangle of the
old glyph — it is filled flat with the surrounding background, no detection — and the new
glyph is centred on `x` at baseline `base`:
    {'glyph': ',', 'box': (...), 'x': cx, 'base': y, 'size': s, 'w': 'B', 'color': (...)}
"""
import cv2
import numpy as np
from PIL import Image, ImageFont

from tx import draw_text, erase, measure, text_mask

FONTS = {
    'R': '/usr/share/fonts/noto/NotoSans-Regular.ttf',
    'M': '/usr/share/fonts/noto/NotoSans-Medium.ttf',
    'SB': '/usr/share/fonts/noto/NotoSans-SemiBold.ttf',
    'B': '/usr/share/fonts/noto/NotoSans-Bold.ttf',
}
# SemiBold isn't installed everywhere; fall back to Bold.
try:
    ImageFont.truetype(FONTS['SB'], 10)
except OSError:
    FONTS['SB'] = FONTS['B']


def fit(text, font, width):
    lo, hi = 4.0, 120.0
    for _ in range(30):
        mid = (lo + hi) / 2
        if ImageFont.truetype(font, mid).getlength(text) > width:
            hi = mid
        else:
            lo = mid
    return lo


def cap_fit(img, it, m, font):
    """Size from the height of the label's first capital (minus ~1.5px of anti-alias halo)
    and the horizontal squeeze that makes Noto match the original's width — for art set
    in a narrower face than Noto Sans. Returns (size, sx)."""
    x0, y0, x1, y1 = it['box']
    first = text_mask(img, it['box'], it['mode'], 30, dil=0)[y0:y1, int(m['x']):int(m['x']) + 10] > 0
    cap = m['base'] - (y0 + np.where(first.any(1))[0][0]) - 1.5
    probe = ImageFont.truetype(font, 100).getbbox('H', anchor='ls')
    size = cap / ((probe[3] - probe[1]) / 100)
    sx = (m['right'] - m['x'] + 1) / ImageFont.truetype(font, size).getlength(it['pt'])
    return size, min(1.0, max(0.75, sx))


def relabel(src, out, items, verbose=True, sizing='width', protect=()):
    """sizing='width': fit Noto to the original's width (art set in a Noto-like face).
    sizing='cap': match cap height and squeeze to the original's width (narrower faces).
    protect: rectangles restored from the master after erasing — text that must survive
    but sits too close to an erased line (tilted cards)."""
    rgba = Image.open(src).convert('RGBA')
    img = np.array(rgba.convert('RGB'))

    # 1. measure everything on the untouched master
    meas = {}
    for i, it in enumerate(items):
        if 'glyph' in it:
            continue
        meas[i] = measure(img, it['box'], it['mode'])

    # group sizes / angles come from the member with the widest measured line
    master = img.copy()  # sizing always reads the untouched art, even after erasing

    def size_of(i):
        it, m = items[i], meas[i]
        font = FONTS[it['w']]
        if sizing == 'cap':
            return cap_fit(master, it, m, font)
        return fit(it['pt'], font, m['right'] - m['x'] + 1), 1.0

    groups = {}
    for i, it in enumerate(items):
        if i in meas and it.get('group'):
            m = meas[i]
            size, sq = size_of(i)
            g = groups.setdefault(it['group'], {'width': -1})
            if m['right'] - m['x'] > g['width']:
                g.update(width=m['right'] - m['x'], size=size, sq=sq, angle=m['angle'])

    # 2. erase
    for it in items:
        x0, y0, x1, y1 = it['box']
        if 'glyph' in it:
            # flat fill with the median of the light pixels around the glyph
            ring = img[y0 - 6:y1 + 6, x0 - 6:x1 + 6].reshape(-1, 3)
            light = ring[ring.sum(1) >= np.percentile(ring.sum(1), 60)]
            img[y0:y1, x0:x1] = np.median(light, 0).astype(np.uint8)
            continue
        bb = (x0 - 3, y0 - 4, x1 + 3, y1 + 4)
        img = erase(img, text_mask(img, bb, it['mode'], it.get('thresh', 16), bg_k=25, dil=3), 5)

    for x0, y0, x1, y1 in protect:
        img[y0:y1, x0:x1] = master[y0:y1, x0:x1]

    pil = Image.fromarray(img).convert('RGBA')

    # 3. draw
    for i, it in enumerate(items):
        if 'glyph' in it:
            f = FONTS[it['w']]
            draw_text(pil, it['glyph'], it['x'], it['base'], it['size'], f, it['color'], it.get('angle', 0), anchor='ms')
            continue
        if not it['en']:
            continue
        m = meas[i]
        font = FONTS[it['w']]
        g = groups.get(it.get('group'))
        if g:
            size, sq = g['size'], g['sq']
        else:
            size, sq = size_of(i)
        size = it.get('size', size)
        angle = it.get('angle', g['angle'] if g else m['angle'])
        width = ImageFont.truetype(font, size).getlength(it['en']) * sq
        x, base = int(m['x']) + it.get('dx', 0), m['base'] + it.get('dy', 0)
        if it.get('align') == 'center':
            x = round((m['x'] + m['right']) / 2 - width / 2) + it.get('dx', 0)
        sx = sq
        if 'limit' in it and x + width > it['limit']:
            sx = max(0.72, sq * (it['limit'] - x) / width)
        color = it.get('color', m['color'] + (255,))
        draw_text(pil, it['en'], x, base, round(size * 4) / 4, font, color, angle, sx=sx)
        if verbose:
            print(f"  {it['pt']!r:32} -> {it['en']!r:32} size {size:5.1f} angle {angle:5.2f} sx {sx:.2f}")

    pil.putalpha(rgba.split()[3])
    pil.save(out)
