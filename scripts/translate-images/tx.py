import cv2, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def text_mask(img, box, mode, thresh=40, bg_k=31, dil=2):
    x0,y0,x1,y1 = box
    roi = img[y0:y1, x0:x1]
    g = cv2.cvtColor(roi, cv2.COLOR_RGB2GRAY).astype(np.int16)
    bg = cv2.medianBlur(cv2.cvtColor(roi, cv2.COLOR_RGB2GRAY), bg_k).astype(np.int16)
    diff = g - bg if mode == 'light' else bg - g
    m = (diff > thresh).astype(np.uint8) * 255
    if dil:
        m = cv2.dilate(m, np.ones((3,3),np.uint8), iterations=dil)
    full = np.zeros(img.shape[:2], np.uint8)
    full[y0:y1, x0:x1] = m
    return full

def lines(mask, box, min_rows=3):
    x0,y0,x1,y1 = box
    m = mask[y0:y1, x0:x1] > 0
    rows = m.sum(1)
    out=[]; inrun=False
    for i,v in enumerate(rows):
        if v>2 and not inrun: start=i; inrun=True
        elif v<=2 and inrun:
            inrun=False
            if i-start>=min_rows:
                cols=np.where(m[start:i].any(0))[0]
                out.append((x0+cols[0], y0+start, x0+cols[-1], y0+i))
    if inrun:
        cols=np.where(m[start:].any(0))[0]; out.append((x0+cols[0], y0+start, x0+cols[-1], y1))
    return out

def erase(img, mask, radius=6):
    return cv2.inpaint(img, mask, radius, cv2.INPAINT_TELEA)

def smooth_fill(img, mask, box, k=41):
    """Replace masked pixels by a normalized blur of unmasked neighbours (smoother than Telea on glass)."""
    x0,y0,x1,y1 = box
    roi = img[y0:y1,x0:x1].astype(np.float32); m = (mask[y0:y1,x0:x1]==0).astype(np.float32)
    num = cv2.GaussianBlur(roi*m[...,None], (k,k), 0); den = cv2.GaussianBlur(m, (k,k), 0)[...,None]
    fill = num/np.maximum(den,1e-3)
    # repeat for holes wider than the kernel
    for _ in range(4):
        hole = den[...,0] < 0.05
        if not hole.any(): break
        k2 = k*2+1
        num = cv2.GaussianBlur(roi*m[...,None], (k2,k2), 0); den = cv2.GaussianBlur(m,(k2,k2),0)[...,None]
        fill = np.where(hole[...,None], num/np.maximum(den,1e-3), fill); k = k2
    soft = cv2.GaussianBlur(mask[y0:y1,x0:x1].astype(np.float32)/255, (5,5), 0)[...,None]
    out = img.copy()
    out[y0:y1,x0:x1] = (roi*(1-soft) + fill*soft).clip(0,255).astype(np.uint8)
    return out

def draw_text(pil, text, x, baseline, size, font, fill, angle=0, shadow=None, glow=None, anchor='ls', tracking=0, sx=1.0):
    """Render one line onto its own layer (so it can be rotated about its baseline start) and composite."""
    f = ImageFont.truetype(font, size)
    W,H = pil.size
    layer = Image.new('RGBA', (W,H), (0,0,0,0))
    d = ImageDraw.Draw(layer)
    if tracking:
        cx = x
        for ch in text:
            d.text((cx, baseline), ch, font=f, fill=fill, anchor=anchor)
            cx += f.getlength(ch) + tracking
    else:
        d.text((x, baseline), text, font=f, fill=fill, anchor=anchor)
    if sx != 1.0:
        layer = layer.transform(layer.size, Image.AFFINE, (1/sx, 0, x - x/sx, 0, 1, 0), resample=Image.BICUBIC)
    if angle:
        layer = layer.rotate(angle, resample=Image.BICUBIC, center=(x, baseline))
    if glow:
        col, rad = glow
        a = layer.split()[3].filter(ImageFilter.GaussianBlur(rad))
        g = Image.new('RGBA',(W,H),col); g.putalpha(a.point(lambda v: min(255,int(v*col[3]/255))))
        pil.alpha_composite(g)
    if shadow:
        col, dx, dy, rad = shadow
        a = layer.split()[3].filter(ImageFilter.GaussianBlur(rad))
        s = Image.new('RGBA',(W,H),col[:3]+(0,)); s.putalpha(a.point(lambda v: int(v*col[3]/255)))
        s = s.transform(s.size, Image.AFFINE, (1,0,-dx,0,1,-dy))
        pil.alpha_composite(s)
    # slight softening so the text sits in the painted art instead of looking vector-sharp
    layer = layer.filter(ImageFilter.GaussianBlur(0.35))
    pil.alpha_composite(layer)
    return f.getlength(text)*sx

def measure(img, box, mode, thresh=35):
    """Left x, baseline at left x, x-height, angle (deg, PIL sign) and ink colour of the single text line in box."""
    m = text_mask(img, box, mode, thresh, dil=0)
    x0,y0,x1,y1 = box
    sub = m[y0:y1, x0:x1] > 0
    cols = np.where(sub.any(0))[0]
    lx, rx = cols[0], cols[-1]
    def base_xh(c0, c1):
        r = sub[:, c0:c1].sum(1).astype(float)
        r = np.convolve(r, [0.25,0.5,0.25], 'same')
        d = r[:-1] - r[1:]
        half = len(r)//3
        b = int(np.argmax(d[half:])) + half + 1          # sharpest drop in the lower part = baseline
        t = int(np.argmax(-d[:b-2])) + 1                  # sharpest rise above it = x-height top
        return b, b - t
    w = rx - lx
    bl, xh = base_xh(lx, lx + w//3 + 1)
    br, _  = base_xh(rx - w//3, rx + 1)
    ang = -np.degrees(np.arctan2(br - bl, (w*2)//3))      # image y down -> PIL ccw positive
    _, xh_all = base_xh(lx, rx + 1)
    px = img[m > 0].astype(int); g = px.sum(1)
    ink = px[g <= np.percentile(g, 25)] if mode == 'dark' else px[g >= np.percentile(g, 75)]
    return dict(x=x0+lx, base=y0+bl, right=x0+rx, xh=xh_all, angle=round(float(ang),2), color=tuple(int(v) for v in ink.mean(0)))
