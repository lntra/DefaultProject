import sys, cv2, numpy as np
from PIL import Image
sys.path.insert(0, sys.argv[0].rsplit('/',1)[0])
from tx import *
M='/usr/share/fonts/noto/NotoSans-Medium.ttf'
src, out = sys.argv[1], sys.argv[2]
img = cv2.cvtColor(cv2.imread(src), cv2.COLOR_BGR2RGB)
for b in [(236,462,346,503),(460,498,560,560),(695,524,810,580),(916,403,1042,463),(964,604,1094,666)]:
    img = erase(img, text_mask(img, b, 'dark', 30, dil=3), 6)
pil = Image.fromarray(img).convert('RGBA')
NAVY=(10,40,112,255)
# (text, centre x, baseline, size, angle)
for t,cx,b,sz,a in [
    ('New lead',290,491,23,-5.5),
    ('Data',508,522,26,-3),('collection',508,546,26,-3),
    ('CRM',751,546,22,0),('updated',751,572,22,0),
    ('Team',980,428,23,0),('notified',980,451,23,0),
    ('Automatic',1030,631,24,0),('follow-up',1030,654,24,0)]:
    draw_text(pil,t,cx,b,sz,M,NAVY,a,anchor='ms',sx=0.94 if t=='collection' else 1.0)
pil.convert('RGB').save(out)
