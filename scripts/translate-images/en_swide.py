import sys, cv2, numpy as np
from PIL import Image, ImageOps
sys.path.insert(0, sys.argv[0].rsplit('/',1)[0])
from tx import *
M='/usr/share/fonts/noto/NotoSans-Medium.ttf'; B='/usr/share/fonts/noto/NotoSans-Bold.ttf'
src, out = sys.argv[1], sys.argv[2]
img = cv2.cvtColor(cv2.imread(src), cv2.COLOR_BGR2RGB)
for box,mode,th in [((468,262,604,302),'dark',30),((468,564,614,602),'dark',30),((468,667,640,704),'dark',30),
                    ((905,368,1082,410),'light',30)]:
    img = erase(img, text_mask(img, box, mode, th, dil=3), 6)
# reflection of the last label in the water
rb=(466,742,648,792)
m = np.maximum(text_mask(img, rb, 'dark', 22, dil=3), text_mask(img, rb, 'light', 22, dil=3))
img = erase(img, m, 6)
pil = Image.fromarray(img).convert('RGBA')
NAVY=(10,30,140,255)
draw_text(pil,'Spreadsheets',476,285,20,M,NAVY,-6.5,sx=0.86)
draw_text(pil,'Approvals',475,590,24,M,NAVY,-0.5)
draw_text(pil,'Other tools',475,692,23,M,NAVY,1)
draw_text(pil,'Your system',915,398,25,B,(255,255,255,255),3,shadow=((10,60,150,90),1,1,1.5))
# faint mirrored reflection of "Other tools"
W,H = pil.size
refl = Image.new('RGBA',(W,H),(0,0,0,0))
draw_text(refl,'Other tools',475,692,23,M,(20,110,220,120),1)
refl = refl.crop((460,660,660,705)).transpose(Image.FLIP_TOP_BOTTOM).filter(ImageFilter.GaussianBlur(0.8))
# squash vertically a touch, like the original reflection
refl = refl.resize((refl.width, int(refl.height*0.9)))
pil.alpha_composite(refl,(460,752))
pil.convert('RGB').save(out)
