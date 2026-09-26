# Homepage project thumbnail 1 — operations dashboard with module cards.
import sys
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0])
from relabel import relabel

NAVY = (14, 30, 76, 255)
ITEMS = [
    dict(box=(258, 150, 356, 194), mode='dark', pt='Clientes', en='Customers', w='SB', color=NAVY),
    dict(box=(226, 400, 338, 445), mode='dark', pt='Cadastros', en='Records', w='SB', color=NAVY),
    dict(box=(232, 618, 344, 662), mode='dark', pt='Relatórios', en='Reports', w='SB', color=NAVY),
    dict(box=(1388, 250, 1485, 296), mode='dark', pt='Equipes', en='Teams', w='SB', color=NAVY),
    dict(box=(1410, 550, 1545, 596), mode='dark', pt='Aprovações', en='Approvals', w='SB', color=NAVY),
    # number formats: 1.248 -> 1,248 and 99,8% -> 99.8% (only the separator changes)
    dict(glyph=',', box=(678, 350, 683, 358), x=682.5, base=356, size=25, w='B', color=NAVY),
    dict(glyph='.', box=(1092, 303, 1100, 327), x=1096.5, base=318.5, size=25, w='B', color=NAVY),
]

if __name__ == '__main__':
    relabel(sys.argv[1], sys.argv[2], ITEMS)
