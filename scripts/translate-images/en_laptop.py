import sys, cv2, numpy as np
from PIL import Image, ImageFont
sys.path.insert(0, sys.argv[0].rsplit('/',1)[0])
from tx import *; from laptop_boxes import ITEMS
F={'R':'/usr/share/fonts/noto/NotoSans-Regular.ttf','M':'/usr/share/fonts/noto/NotoSans-Medium.ttf','B':'/usr/share/fonts/noto/NotoSans-Bold.ttf'}
PT={'search':'Buscar...','painel':'Painel','seg':'Segurança','disp':'Dispositivos','ativ':'Atividade','conf':'Configurações',
 'alerta':'ALERTA DE SEGURANÇA','h1a':'Atividade suspeita','h1b':'detectada','p1':'Detectamos uma atividade incomum na sua conta.',
 'p2':'Revise a atividade e tome uma ação para manter','p3':'seus dados seguros.','btn':'Revisar atividade','dismiss':'Dispensar',
 'dev_l':'Dispositivo afetado','today':'Hoje, 9:42','type_l':'Tipo de incidente','login':'Login suspeito','unusual':'Local incomum',
 'loc_l':'Localização','unknown':'Desconhecida','help':'Ajuda','safer1':'Mais seguro hoje','safer2':'para um amanhã melhor.',
 'yours1':'Sua segurança','yours2':'importa'}
# max right edge each English line may reach before it gets condensed
LIMIT={'h1a':1150,'p1':1200,'p2':1200,'btn':985,'dismiss':1146,'dev_l':782,'type_l':990,'login':990,'unusual':990,
       'loc_l':1206,'unknown':1206,'yours1':1296,'safer2':760,'alerta':1040}
def fit(text, font, width):
    lo,hi=4.0,80.0
    for _ in range(30):
        mid=(lo+hi)/2
        if ImageFont.truetype(font, mid).getlength(text) > width: hi=mid
        else: lo=mid
    return lo
src,out=sys.argv[1],sys.argv[2]
SHARE={}
img = cv2.cvtColor(cv2.imread(src), cv2.COLOR_BGR2RGB)
meas={k:measure(img,b,mode) for k,b,mode,en,w in ITEMS}
for k,b,mode,en,w in ITEMS:
    x0,y0,x1,y1=b; bb=(x0-3,y0-4,x1+3,y1+4)
    img = erase(img, text_mask(img,bb,mode,14,bg_k=25,dil=3), 5)
GROUPS=[['h1a','h1b'],['p1','p2','p3'],['painel','seg','disp','ativ','conf'],['safer1','safer2'],['yours1','yours2'],['dev_l','type_l','loc_l']]
for gname in GROUPS:
    k0=gname[0]; b0=[i for i in ITEMS if i[0]==k0][0]
    v=fit(PT[k0],F[b0[4]],meas[k0]['right']-meas[k0]['x']+1)
    for k in gname: SHARE[k]={'v':v}
pil = Image.fromarray(img).convert('RGBA')
for k,b,mode,en,w in ITEMS:
    m=meas[k]; font=F[w]
    size=fit(PT[k], font, m['right']-m['x']+1)
    size=SHARE.get(k,{}).get('v',size)
    width=ImageFont.truetype(font,size).getlength(en)
    sx=1.0
    if k in LIMIT and m['x']+width > LIMIT[k]: sx=max(0.82,(LIMIT[k]-m['x'])/width)
    angle = 0.0 if m['base']>760 else 1.2
    col = m['color']+(255,)
    draw_text(pil,en,int(m['x']),m['base'],round(size*4)/4,font,col,angle,sx=sx)
    print(k, en, 'size', round(size,1), 'sx', round(sx,2))
pil.putalpha(Image.open(src).convert('RGBA').split()[3]); pil.save(out)
