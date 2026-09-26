# Homepage project thumbnail 3 — secure web app: auth/permission cards on the left,
# security review panel on the right. 'Security Review', 'SSO · MFA' and 'rate limiting'
# are already English and stay untouched.
import sys
sys.path.insert(0, sys.argv[0].rsplit('/', 1)[0])
from relabel import relabel

GREEN = (22, 120, 72, 255)
ITEMS = [
    # left cards: bold title + grey subtitle lines
    dict(box=(190, 180, 328, 224), mode='dark', pt='Autenticação', en='Authentication', w='B'),
    dict(box=(190, 220, 300, 252), mode='dark', pt='Login seguro', en='Secure login', w='R'),
    dict(box=(190, 402, 312, 442), mode='dark', pt='Permissões', en='Permissions', w='B'),
    dict(box=(190, 441, 340, 472), mode='dark', pt='Controle de acesso', en='Role-based access', w='R', group='rbac', limit=332),
    # the line starts with a lowercase 'p', so it borrows the size of the line above
    dict(box=(190, 470, 334, 501), mode='dark', pt='por papéis (RBAC)', en='control (RBAC)', w='R', group='rbac'),
    dict(box=(192, 628, 330, 667), mode='dark', pt='APIs seguras', en='Secure APIs', w='B'),
    dict(box=(194, 666, 300, 699), mode='dark', pt='Validações e', en='Validation and', w='R'),
    # review panel
    dict(box=(1488, 195, 1590, 232), mode='dark', pt='Aprovado', en='Approved', w='SB', color=GREEN, align='center'),
    dict(box=(1428, 275, 1552, 305), mode='dark', pt='Vulnerabilidades', en='Vulnerabilities', w='SB', group='rt'),
    dict(box=(1428, 303, 1540, 327), mode='dark', pt='Nenhuma crítica', en='None critical', w='R', group='rs'),
    dict(box=(1428, 346, 1542, 376), mode='dark', pt='Configurações', en='Configuration', w='SB', group='rt'),
    dict(box=(1428, 369, 1610, 394), mode='dark', pt='Conforme as boas práticas', en='Follows best practices', w='R', group='rs', limit=1610),
    dict(box=(1428, 414, 1586, 444), mode='dark', pt='APIs e autenticação', en='APIs & authentication', w='SB', group='rt', limit=1600),
    dict(box=(1428, 440, 1600, 466), mode='dark', pt='Validadas e seguras', en='Validated and secure', w='R', group='rs'),
    dict(box=(1428, 488, 1600, 518), mode='dark', pt='Dados e formulários', en='Data & forms', w='SB', group='rt'),
    dict(box=(1428, 513, 1595, 537), mode='dark', pt='Proteção e criptografia', en='Protection & encryption', w='R', group='rs', limit=1605),
    dict(box=(1202, 484, 1362, 512), mode='dark', pt='Avaliação de Segurança', en='Security Rating', w='M', align='center'),
    # code review card
    dict(box=(1284, 624, 1448, 658), mode='dark', pt='Revisão de código', en='Code review', w='SB'),
    dict(box=(1484, 630, 1582, 662), mode='dark', pt='Conforme', en='Compliant', w='SB', color=GREEN, align='center'),
    dict(box=(1282, 671, 1512, 698), mode='dark', pt='Padrões de segurança aplicados', en='Security standards applied', w='R'),
]

if __name__ == '__main__':
    # 'SSO · MFA' sits one pixel under 'Login seguro' on the tilted card: keep it intact
    relabel(sys.argv[1], sys.argv[2], ITEMS, sizing='cap', protect=[(192, 249, 292, 282)])
