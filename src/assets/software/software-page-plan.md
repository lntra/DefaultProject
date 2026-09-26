# Página "Sistema de gestão operacional" — plano de redesign

Route: `/projetos/sistema-de-gestao-operacional`

Sources:
- `developmentofscreen.txt`: commercial critique of the current page (positioning, pain, methodology, evidence).
- `referencesoftware.png`: target visual composition that applies the critique.
- `../hero/software.png`: the current page (before), for comparison.

## Goal

Keep the Frutiger Aero corporate identity (blues, white, glass, water, bubbles, generous white space)
and change the **narrative**: the page stops looking like a SaaS product page ("Sistema de gestão
operacional para empresas") and sells **the service of building custom software**, with
lower perceived risk for the client.

Guardrails from the text:
- No invented metrics (no "+70%"), no neon, no dark backgrounds, no giant headlines.
- Mostly **replace** sections. Do not add many new ones. The page stays about the same length.
- Visual elements represent the service: processes → connection → centralization → automation → organization.

## Implementation approach

- New bespoke page `src/pages/SoftwarePage.tsx` + `SoftwarePage.css` (prefix `sp-`), following the
  `AutomacaoPage` precedent: its own content object `softwarePage` in `src/content/copy.ts` and an
  explicit route in `App.tsx`, declared before `/projetos/:slug`.
- Remove the old `'sistema-de-gestao-operacional'` entry from `projectPages`. The homepage link keeps the same URL.
- Reuse global tokens and utilities (`.glass`, `.btn`, `.eyebrow`, `.container`) and `CtaCard`.
- Illustrations are final art with the labels drawn in. Masters are in `src/assets/hero/`
  (`software-hero-wide.png`, `software-hub.png`). `npm run assets` writes the desktop hero backdrop,
  a tight mobile crop of the hero, and the hub as
  `src/assets/desktop/software-hero-{wide,flow}.webp` and `software-hub.webp`. The labels
  are in the image, so each `<img>` has descriptive alt text from `copy.ts`.
- Mobile-first (430px column, like the rest of the site). Desktop layout at `min-width: 1024px`.

## Sections (top → bottom)

### 1. Hero: pain + custom software + outcome
- Back link "Voltar para projetos".
- Eyebrow: **Desenvolvimento de software sob medida**
- H1: **Software sob medida para organizar e escalar sua operação**
- Lead: *Transformo processos manuais, planilhas e ferramentas desconectadas em sistemas internos feitos para a realidade da sua empresa.*
- Buttons: **Agendar uma conversa →** (primary) · **Falar sobre seu projeto** (glass)
- Trust bar (3): Dados centralizados / Tudo em um só lugar · Processos automatizados / Menos trabalho manual · Visão da operação / Indicadores em tempo real
- Art (right on desktop, below the copy on mobile): 5 glass "source" chips (Planilhas [Excel green],
  WhatsApp [WA green], E-mail, Aprovações, Outras ferramentas) → glowing blue curves → a glass
  **"Seu sistema"** dashboard panel (sidebar dots, bar chart, donut, list rows). Built over the city/water photo.

### 2. Transformation: "Uma solução feita para a sua realidade"
Replaces the Tipo/Escopo/Papel/Entregáveis card and the laptop mockup.
- Eyebrow + H2: **Uma solução feita para a sua realidade**
- Lead: *Cada empresa opera de um jeito. Por isso, o **sistema é desenhado** de acordo com seus processos, usuários, regras e necessidades de integração.*
- Glass comparison card, two columns with arrows:
  | Sua operação hoje (red) | Sistema desenvolvido (green) |
  |---|---|
  | Planilhas dispersas | Dados centralizados |
  | Processos manuais | Fluxos automatizados |
  | Informações no WhatsApp | Histórico no sistema |
  | Falta de indicadores | Dashboard em tempo real |
- Art: hub diagram. Central glowing glass tile **"Sistema sob medida"** (cube icon), connected to 6
  satellite glass tiles: Gestão de clientes, Processos e aprovações, Relatórios e indicadores,
  Integrações, Cadastros e registros, Equipes e permissões.

### 3. Methodology: risk reduction + deliverables
- Eyebrow **Metodologia** · H2 **Do diagnóstico à evolução contínua**
- Lead: *Um processo estruturado para reduzir riscos, dar clareza ao escopo e permitir acompanhamento em cada etapa.*
- 4 steps, numbered blue orb + arrow between them, and a translucent **Entregável** capsule under each:
  1. Diagnóstico: Mapeamento dos processos, gargalos e objetivos da operação. → *Mapa da operação*
  2. Estruturação: Definição de fluxos, regras, telas e prioridades. → *Escopo + fluxos*
  3. Desenvolvimento em etapas: Implementação progressiva com validações ao longo do projeto. → *Versões testáveis*
  4. Implantação e evolução: Publicação, ajustes, documentação e continuidade. → *Sistema + documentação*

### 4. Capabilities: outcome language
- Eyebrow **O que o sistema pode resolver** · H2 **Funcionalidades pensadas para a operação real**
- 6 glass cards (3×2 on desktop), icon on the left:
  Centralize sua operação · Enxergue o que está acontecendo · Controle quem pode fazer o quê ·
  Conecte as ferramentas que você já usa · Saiba quem fez cada alteração · Automatize processos repetitivos
  (each with a one-line technical detail underneath).

### 5. Transformation example: proof, no invented numbers
- Eyebrow **Exemplo de transformação** · H2 **Como um sistema pode mudar a operação**
- 3 cards joined by arrows: **Problema** (red tint, alert icon) → **Solução** (blue, lightbulb) → **Resultado** (green, check).

### 6. Outcomes the project aims to improve
- Eyebrow **Resultados que o projeto busca melhorar** · H2 **O sistema é pensado para gerar impacto na rotina**
- Lead (from the text): *Durante o diagnóstico, definimos quais desses indicadores o sistema deve melhorar.*
- 6 compact glass pills with icon: Menos retrabalho · Mais visibilidade da operação · Menor dependência
  de planilhas · Informação acessível com rapidez · Mais controle sobre processos internos · Decisões com mais contexto.

### 7. When it makes sense: recognizable symptoms
- Eyebrow **Ideal para empresas que...** · H2 **Sua empresa provavelmente precisa de um sistema sob medida se...**
- 4 glass cards: A mesma informação precisa ser atualizada em vários lugares · Processos importantes ainda
  dependem de planilhas · Aprovações e solicitações acontecem pelo WhatsApp (WA icon) · Relatórios exigem juntar dados manualmente.

### 8. CTA: analyze the project
Reuses `CtaCard`:
- Eyebrow **Vamos conversar?**
- Title **Vamos entender se um sistema sob medida faz sentido para sua operação?**
- Text *Me conte como seu processo funciona hoje e eu te ajudo a identificar o que pode ser centralizado, automatizado ou transformado em software.*
- Buttons **Analisar meu projeto →** · **Falar pelo WhatsApp**

## Deliberately left out
- The optional "Software pensado para funcionar no mundo real" (Operação / Evolução / Segurança) block
  from the text is not in the reference composition. It is left out to keep the page length unchanged (text: "Eu não deixaria a página maior").
- Real case numbers ("4 ferramentas → 1 sistema"): only if real data exists. The example stays qualitative.

## Acceptance
- Route renders the new page. The other project pages and the automação page are unchanged.
- `npm run build` and `npm run lint` pass.
- Layout holds at mobile (≈390px) and desktop (≈1440px): no horizontal scroll, and the illustrations stay legible.
