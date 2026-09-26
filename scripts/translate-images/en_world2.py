import sys, cv2, numpy as np
from PIL import Image
sys.path.insert(0, sys.argv[0].rsplit('/',1)[0])
from tx import *
M='/usr/share/fonts/noto/NotoSans-Medium.ttf'
src, out = sys.argv[1], sys.argv[2]
img = cv2.cvtColor(cv2.imread(src), cv2.COLOR_BGR2RGB)
boxes = [((940,300,1120,470),'light',22), ((1585,422,1775,528),'light',22)]
for box,mode,th in boxes:
    m = text_mask(img, box, mode, th, dil=3)
    img = erase(img, m, 7)
pil = Image.fromarray(img).convert('RGBA')
W=(250,252,255,255); sh=((20,70,120,110),1,1,1.5)
for t,x,b,a in [('Ideas',955,334,-8.5),('Automation',958,374,-7),('Security',954,413,-5.5),('Real impact.',954,449,-4)]:
    draw_text(pil,t,x,b,30,M,W,a,shadow=sh,sx=0.86)
for t,x,b,a in [('More efficient',1593,450,3.6),('More secure',1593,483,3.2),('A better tomorrow',1593,515,2.4)]:
    draw_text(pil,t,x,b,19,M,W,a,shadow=sh)
pil.convert('RGB').save(out)
