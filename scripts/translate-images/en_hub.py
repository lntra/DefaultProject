import sys, cv2, numpy as np
from PIL import Image
sys.path.insert(0, sys.argv[0].rsplit('/',1)[0])
from tx import *
M='/usr/share/fonts/noto/NotoSans-Medium.ttf'; B='/usr/share/fonts/noto/NotoSans-Bold.ttf'
src, out = sys.argv[1], sys.argv[2]
img = cv2.cvtColor(cv2.imread(src), cv2.COLOR_BGR2RGB)
dark_boxes = [(146,366,306,446),(586,272,775,358),(948,558,1136,642),(84,726,258,806),(284,1020,468,1108),(870,985,1062,1038)]
for b in dark_boxes:
    img = erase(img, text_mask(img, b, 'dark', 30, dil=3), 6)
img = erase(img, text_mask(img, (444,684,704,792), 'light', 25, dil=3), 7)
# faint mirrored reflection of the "Cadastros e registros" label in the water
rb=(282,1152,430,1202)
img = smooth_fill(img, text_mask(img, rb, 'dark', 8, bg_k=41, dil=3), rb, k=31)
pil = Image.fromarray(img).convert('RGBA')
NAVY=(12,38,98,255)
labels = [  # (lines, x, first baseline, spacing, size)
    (['Customer','management'],156,400,37,32),
    (['Processes &','approvals'],596,306,37,36),
    (['Reports &','metrics'],958,593,40,36),
    (['Teams &','permissions'],93,758,37,35),
    (['Data entry &','records'],293,1057,37,36),
    (['Integrations'],880,1020,0,36),
]
for lines_,x,b,sp,sz in labels:
    for i,t in enumerate(lines_):
        draw_text(pil,t,x,b+i*sp,sz,M,NAVY,sx=0.95 if t=='management' else 1.0)
W=(255,255,255,255); glow=((190,230,255,150),4)
for t,b in [('Custom-built',725),('system',782)]:
    draw_text(pil,t,573,b,46,B,W,glow=glow,anchor='ms')
pil.convert('RGB').save(out)
