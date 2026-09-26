"""Splits the desktop CTA banner into a leafless base + transparent leaf layers,
so the leaves can sway in CSS without ghosting over the originals.

    python3 scripts/cta-leaves/split.py

Reads  src/assets/desktop/cta-banner.webp (the master banner, kept untouched)
Writes src/assets/desktop/cta-banner-base.webp   banner with the leaves blur-filled away
       src/assets/desktop/cta-leaf-left.webp     left sprig, alpha, full-banner size
       src/assets/desktop/cta-leaf-right.webp    blurred top-right leaf, same
"""
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

root = Path(__file__).resolve().parents[2]
out = root / 'src/assets/desktop'
img = Image.open(out / 'cta-banner.webp').convert('RGB')
a = np.asarray(img).astype(np.int16)
r, g, b = a[..., 0], a[..., 1], a[..., 2]
h, w = g.shape
ys, xs = np.mgrid[0:h, 0:w]

# leaves are yellow-green (green clearly above blue); the glass/water is cyan-blue
greenness = np.clip((g - b - 6) / 30, 0, 1)
left = greenness * (xs < 290) * ~((xs < 110) & (ys < 30))
right = greenness * ((xs > 1840) & (ys < 150))


def box(x, r):
    # separable box blur (edge-padded); three passes approximate a gaussian
    for axis in (0, 1):
        pad = [(0, 0)] * x.ndim
        pad[axis] = (r + 1, r)
        c = np.cumsum(np.pad(x, pad, mode='edge'), axis=axis)
        n = x.shape[axis]
        x = (np.take(c, range(2 * r + 1, 2 * r + 1 + n), axis=axis) - np.take(c, range(0, n), axis=axis)) / (2 * r + 1)
    return x


def gblur(x, r):
    for _ in range(3):
        x = box(x, max(1, r // 2))
    return x


def soften(m, grow):
    # grow the key a little so the leaf's bright rim comes along, then feather it
    im = Image.fromarray((m * 255).astype(np.uint8))
    im = im.filter(ImageFilter.MaxFilter(grow)).filter(ImageFilter.GaussianBlur(1.2))
    return np.asarray(im).astype(np.float32) / 255


left_a = soften(left, 5)
right_a = soften(right, 7)
both = np.clip(left_a + right_a, 0, 1)

# blur-fill: repeatedly blur the image with the leaves masked out and pour the
# surroundings into the hole (normalized convolution)
known = 1 - np.clip(soften(both, 9) * 1.4, 0, 1)
fill = a.astype(np.float32)
acc = fill * known[..., None]
wsum = known.copy()
for radius in (4, 10, 24, 48):
    num = np.stack([gblur(acc[..., c], radius) for c in range(3)], -1)
    den = gblur(wsum, radius)
    est = num / np.maximum(den[..., None], 1e-4)
    hole = (1 - known)[..., None]
    fill = fill * (1 - hole) + est * hole
base = Image.fromarray(np.clip(fill, 0, 255).astype(np.uint8))
base.save(out / 'cta-banner-base.webp', quality=90, method=6)

for name, alpha in (('left', left_a), ('right', right_a)):
    rgba = np.dstack([a.astype(np.uint8), (alpha * 255).astype(np.uint8)])
    Image.fromarray(rgba, 'RGBA').save(out / f'cta-leaf-{name}.webp', quality=92, method=6)
print('ok')
