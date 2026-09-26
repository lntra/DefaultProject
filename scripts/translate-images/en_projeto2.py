# Homepage project thumbnail 2 — automation hub: inputs on the left, results on the right.
import sys
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0])
from relabel import relabel

NAVY = (14, 30, 76, 255)
ITEMS = [
    # inputs ('E-mail' and 'WhatsApp' read the same in English)
    dict(box=(282, 330, 372, 366), mode='dark', pt='Planilha', en='Spreadsheet', w='SB', color=NAVY, group='in'),
    dict(box=(282, 505, 400, 545), mode='dark', pt='Formulário', en='Form', w='SB', color=NAVY, group='in'),
    # results — boxes stop short of the green check badges
    dict(box=(1280, 150, 1425, 195), mode='dark', pt='Tarefa criada', en='Task created', w='SB', color=NAVY, group='out'),
    dict(box=(1283, 330, 1474, 375), mode='dark', pt='Status atualizado', en='Status updated', w='SB', color=NAVY, group='out'),
    dict(box=(1283, 515, 1495, 560), mode='dark', pt='Notificação enviada', en='Notification sent', w='SB', color=NAVY, group='out'),
    dict(box=(1282, 690, 1503, 735), mode='dark', pt='Integração concluída', en='Integration complete', w='SB', color=NAVY, group='out', limit=1492),
]

if __name__ == '__main__':
    relabel(sys.argv[1], sys.argv[2], ITEMS, sizing='cap')
