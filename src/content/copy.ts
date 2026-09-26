// Page copy — source: media/TextForPage.txt (sections: Hero, Serviços, Projetos/capacidade prática,
// Processo, Sobre, Bloco de diferenciais, CTA final).
// The "diferenciais" block has no area of its own on mobile, so it lives inside the About
// features list instead of becoming a new section.
import cubeIcon from '../assets/web/icon-cube.webp'
import gearIcon from '../assets/web/icon-gear.webp'
import shieldIcon from '../assets/web/icon-shield.webp'
import project1 from '../assets/desktop/project-1.webp'
import project2 from '../assets/desktop/project-2.webp'
import project3 from '../assets/desktop/project-3.webp'
import aboutPhoto from '../assets/desktop/about.webp'
// Art with Portuguese labels baked in — each has an English twin (see copy.en.ts).
import heroScene from '../assets/web/hero-scene.webp'
import mockLaptop from '../assets/desktop/mock-laptop.webp'
import automacaoHeroFlow from '../assets/desktop/automacao-hero-flow.webp'
import automacaoHeroCard from '../assets/desktop/automacao-hero-card.webp'
import softwareHeroWide from '../assets/desktop/software-hero-wide.webp'
import softwareHeroFlow from '../assets/desktop/software-hero-flow.webp'
import softwareHub from '../assets/desktop/software-hub.webp'

// Everything language-specific lives in this file (pt) and in copy.en.ts (en), which
// must match the `Copy` type exported at the bottom. Components read it via useCopy().

export const meta = {
  title: 'Fernando Araújo — Software, automação e cybersecurity',
  description:
    'Desenvolvo sistemas, sites, integrações e automações sob medida, com foco em performance, segurança e redução de trabalho manual.',
}

export const art = {
  heroScene,
  mockLaptop,
  automacaoHeroFlow,
  automacaoHeroCard,
  softwareHeroWide,
  softwareHeroFlow,
  softwareHub,
}

// Small interface strings (links, aria labels, alt text) that sit outside the sections.
export const ui = {
  backToProjects: 'Voltar para projetos',
  mainNav: 'Principal',
  footerNav: 'Rodapé',
  openMenu: 'Abrir menu',
  closeMenu: 'Fechar menu',
  email: 'E-mail',
  heroGlobeAlt: 'Globo terrestre translúcido sobre uma cidade à beira da água',
  aboutPhotoAlt: 'Retrato de Fernando Araújo',
}

export const brand = {
  name: 'Fernando Araújo',
  tagline: 'Software. Automação. Cybersecurity.',
  taglineShort: 'Software · Automação · Cybersecurity',
}

export const nav = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Processo', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

export const navCta = 'Agendar uma conversa'

export const hero = {
  // the text file suggests "desenvolvedor de soluções digitais" / "consultor técnico" over "freelancer"
  eyebrow: ['Desenvolvedor de', 'soluções digitais'],
  title: {
    before: 'Software, automação e ',
    accent: 'cybersecurity',
    after: ' para empresas que precisam de soluções que realmente funcionam.',
  },
  lead: 'Desenvolvo sistemas, sites, integrações e automações sob medida, com uma abordagem técnica focada em performance, segurança e redução de trabalho manual.',
  primary: 'Agendar uma conversa',
  secondary: 'Ver soluções',
  sceneCaption: ['Segurança desde', 'o início.'],
}

export const trust = [
  {
    icon: 'code',
    mobile: ['Desenvolvimento', 'completo'],
    title: 'Desenvolvimento completo',
    sub: 'Do front-end à API, banco de dados e integrações.',
  },
  {
    icon: 'workflow',
    mobile: ['Automação de', 'processos'],
    title: 'Automação de processos',
    sub: 'Bots, fluxos, integrações e tarefas repetitivas transformadas em sistemas.',
  },
  {
    icon: 'shield',
    mobile: ['Segurança desde', 'o início'],
    title: 'Segurança desde o início',
    sub: 'Aplicações pensadas com visão de desenvolvimento e segurança ofensiva.',
  },
]

// Each service opens the case-study page of its area (same targets as `projects`).
export const services = {
  eyebrow: 'Serviços',
  title: ['Soluções técnicas para', 'problemas reais de negócio.'],
  lead: 'Não trabalho apenas com “sites”. Desenvolvo ferramentas digitais que ajudam empresas a operar melhor, vender melhor e reduzir gargalos.',
  more: 'Ver todos os serviços',
  items: [
    {
      title: 'Desenvolvimento de software',
      text: 'Sites, sistemas internos, dashboards, portais, APIs e aplicações web sob medida.',
      image: cubeIcon,
      href: '/projetos/sistema-de-gestao-operacional',
    },
    {
      title: 'Automação',
      text: 'Bots, integrações entre plataformas, fluxos de atendimento, coleta de dados e automação de processos manuais.',
      image: gearIcon,
      href: '/projetos/automacao-de-processos',
    },
    {
      title: 'Cybersecurity',
      text: 'Análise de segurança de aplicações web, identificação de vulnerabilidades, revisão de configurações e orientação para correção.',
      image: shieldIcon,
      href: '/projetos/aplicacoes-web-seguras',
    },
  ],
}

// "Projetos / capacidade prática" — sold by the type of problem solved, no invented metrics.
// `href` points to a detail page once one exists for that project; otherwise it falls
// back to the contact section.
export const projects = {
  eyebrow: 'Projetos',
  title: 'Capacidade prática.',
  more: 'Ver todos os projetos',
  items: [
    {
      title: 'Sistemas que organizam operações',
      text: 'Aplicações para centralizar dados, cadastros, relatórios, usuários e fluxos internos.',
      image: project1,
      href: '/projetos/sistema-de-gestao-operacional',
    },
    {
      title: 'Automação de tarefas repetitivas',
      text: 'Bots e integrações para reduzir trabalho manual, acelerar atendimento e conectar serviços diferentes.',
      image: project2,
      href: '/projetos/automacao-de-processos',
    },
    {
      title: 'Aplicações web seguras',
      text: 'Desenvolvimento com atenção a autenticação, controle de acesso, APIs, validações e segurança de aplicações.',
      image: project3,
      href: '/projetos/aplicacoes-web-seguras',
    },
  ],
}

type Badge = { icon: string; title: string; sub: string }
type MetaItem = { icon: string; label: string; value: string }
type Step = { title: string; text: string }
type Finding = { level: 'high' | 'medium' | 'low'; title: string; text: string }
type FeatureItem = { icon: string; title: string; text: string }
type IdealForItem = { icon: string; text: string }

// Case-study page content. Every project shares the same hero / badges / overview /
// methodology / results / CTA shape (see ProjectPage.tsx — keep these sections visually
// identical across projects). The one part that changes shape is the section between
// methodology and results: the cybersecurity project reports `findings` (severity-rated
// vulnerabilities); a project can report `features` (a plain capability grid) instead.
// The software and automation projects have bespoke pages (see `softwarePage` /
// `automacaoPage` below). A project can also add an optional `idealFor` strip — a
// short qualifying checklist, styled like the homepage `trust` bar — right before the CTA.
interface ProjectPageContent {
  back: string
  eyebrow: string
  title: string
  lead: string
  primary: string
  secondary: string
  badges: Badge[]
  overview: { eyebrow: string; title: string; text: string; meta: MetaItem[] }
  methodology: { eyebrow: string; title: string; lead: string; steps: Step[] }
  findings?: { eyebrow: string; title: string; lead: string; items: Finding[] }
  features?: { eyebrow: string; title: string; lead: string; items: FeatureItem[] }
  results: { eyebrow: string; title: string; text: string; checklist: string[] }
  idealFor?: { title: string; items: IdealForItem[] }
  cta: { eyebrow: string; title: string; text: string; button: string; secondary: string }
}

// Project case-study pages — keyed by the slug used in the route (/projetos/:slug).
export const projectPages: Record<string, ProjectPageContent> = {
  'aplicacoes-web-seguras': {
    back: 'Voltar para projetos',
    eyebrow: 'Cybersecurity',
    title: 'Avaliação de segurança em aplicação web',
    lead: 'Pentest completo em uma plataforma web com foco em identificação de vulnerabilidades, validação de riscos e recomendações práticas de correção.',
    primary: 'Agendar uma conversa',
    secondary: 'Falar sobre seu projeto',
    badges: [
      {
        icon: 'shield',
        title: 'Aplicação web',
        sub: 'Escopo definido e testado',
      },
      {
        icon: 'code',
        title: 'Metodologia reconhecida',
        sub: 'OWASP, PTES e boas práticas',
      },
      {
        icon: 'file',
        title: 'Relatório técnico',
        sub: 'Achados, impacto e correções',
      },
    ],
    overview: {
      eyebrow: 'Visão geral',
      title: 'Sobre o projeto',
      text: 'Realizei uma avaliação de segurança em uma plataforma web utilizada por clientes e parceiros, com o objetivo de identificar vulnerabilidades, validar o nível de risco e fornecer recomendações claras para melhoria da segurança.',
      meta: [
        { icon: 'calendar', label: 'Período', value: 'Ago 2024' },
        { icon: 'grid', label: 'Tipo', value: 'Aplicação web (produção)' },
        { icon: 'users', label: 'Papel', value: 'Pentester e consultor de segurança' },
        { icon: 'file', label: 'Entregáveis', value: 'Relatório técnico + recomendações' },
      ],
    },
    methodology: {
      eyebrow: 'Metodologia',
      title: 'Como foi feito',
      lead: 'O trabalho seguiu uma metodologia estruturada, combinando práticas reconhecidas de testes de segurança e adaptação ao contexto do sistema.',
      steps: [
        { title: 'Planejamento', text: 'Definição de escopo, ativos e regras de teste.' },
        { title: 'Reconhecimento', text: 'Mapeamento da aplicação, tecnologias e superfícies de ataque.' },
        {
          title: 'Testes de segurança',
          text: 'Execução de testes manuais e com ferramentas (OWASP Top 10, autenticação, controle de acesso, APIs, etc.).',
        },
        { title: 'Análise e relatório', text: 'Classificação de riscos, evidências e recomendações práticas.' },
      ],
    },
    findings: {
      eyebrow: 'Principais achados',
      title: 'Vulnerabilidades identificadas',
      lead: 'Foram encontradas vulnerabilidades de diferentes níveis de severidade, incluindo problemas de autenticação, controle de acesso e validação de entrada.',
      items: [
        {
          level: 'high',
          title: 'Alta severidade',
          text: 'Controle de acesso inadequado em endpoints da API, permitindo acesso não autorizado a dados.',
        },
        {
          level: 'medium',
          title: 'Média severidade',
          text: 'Validação de entrada insuficiente em campos específicos, com possibilidade de ataques de injeção.',
        },
        {
          level: 'low',
          title: 'Baixa severidade',
          text: 'Exposição de informações de versão e configurações que podem facilitar ataques futuros.',
        },
      ],
    },
    results: {
      eyebrow: 'Resultados',
      title: 'Impacto e melhorias',
      text: 'O relatório entregue incluiu a análise de impacto de cada vulnerabilidade e recomendações técnicas priorizadas, permitindo que a equipe corrigisse os problemas e fortalecesse a segurança da aplicação.',
      checklist: [
        'Redução da superfície de ataque',
        'Correção das vulnerabilidades críticas',
        'Melhoria no processo de desenvolvimento',
        'Maior confiança para usuários e parceiros',
      ],
    },
    cta: {
      eyebrow: 'Segurança também é negócio',
      title: 'Vamos avaliar a segurança da sua aplicação?',
      text: 'Identifique riscos, proteja seus dados e ganhe mais confiança para crescer com segurança.',
      button: 'Agendar uma conversa',
      secondary: 'Falar pelo WhatsApp',
    },
  },
}

export type ProjectSlug = keyof typeof projectPages

// Bespoke content for the automação case-study page (src/pages/AutomacaoPage.tsx).
// This one has its own section shapes (process-flow hero, before/after, reliability,
// featured projects) instead of the generic ProjectPageContent shape above.
export const automacaoPage = {
  eyebrow: 'Automação',
  hero: {
    title: 'Automatize o trabalho que hoje depende de alguém lembrar, copiar ou repetir.',
    lead: 'Conecto suas ferramentas, elimino tarefas manuais e transformo processos em fluxos automáticos — de atendimento e leads a sistemas internos e operações.',
    primary: 'Mapear um processo comigo',
    secondary: 'Falar pelo WhatsApp',
    flow: [
      { icon: 'message', label: 'Novo lead' },
      { icon: 'file', label: 'Coleta de dados' },
      { icon: 'database', label: 'CRM atualizado' },
      { icon: 'bell', label: 'Notificação da equipe' },
      { icon: 'mail', label: 'Follow-up automático' },
    ],
    trust: [
      { icon: 'zap', title: 'Menos trabalho manual', sub: 'Elimine tarefas repetitivas' },
      { icon: 'clock', title: 'Mais velocidade', sub: 'Processos acontecem sozinhos' },
      { icon: 'check', title: 'Menos erros', sub: 'Informações sempre corretas' },
      { icon: 'users', title: 'Operação previsível', sub: 'Acompanhe tudo em um só lugar' },
    ],
  },
  methodology: {
    eyebrow: 'Como eu trabalho',
    title: 'Da análise à operação',
    lead: 'Entendo seu contexto, desenho a melhor solução e deixo tudo funcionando no dia a dia. Você não precisa virar especialista em tecnologia.',
    steps: [
      {
        num: '01',
        icon: 'search',
        title: 'Entendemos o processo',
        text: 'Mapeamos tarefas, exceções, gargalos e oportunidades.',
        delivery: 'Entrega: mapa do fluxo',
      },
      {
        num: '02',
        icon: 'workflow',
        title: 'Desenhamos a automação',
        text: 'Definimos regras, sistemas envolvidos e comportamento esperado.',
        delivery: 'Entrega: fluxo proposto',
      },
      {
        num: '03',
        icon: 'code',
        title: 'Implementamos e testamos',
        text: 'Integrações, automações e tratamento de erros.',
        delivery: 'Entrega: automação funcionando',
      },
      {
        num: '04',
        icon: 'chart',
        title: 'Colocamos em operação',
        text: 'Monitoramento, ajustes e documentação.',
        delivery: 'Entrega: processo pronto',
      },
    ],
  },
  beforeAfter: {
    eyebrow: 'Processo na prática',
    title: 'Do manual ao automático',
    lead: 'O mesmo processo. Dois cenários diferentes.',
    before: {
      title: 'Antes',
      icon: 'pin',
      tagline: 'Tempo gasto + erros + leads perdidos',
      items: [
        { icon: 'message', text: 'Lead chega pelo WhatsApp' },
        { icon: 'mail', text: 'Alguém abre a mensagem' },
        { icon: 'copy', text: 'Copia as informações' },
        { icon: 'file', text: 'Cola em uma planilha' },
        { icon: 'user', text: 'Avisa o vendedor' },
        { icon: 'clock', text: 'Lembra de fazer follow-up' },
      ],
    },
    after: {
      title: 'Depois',
      icon: 'shieldCheck',
      tagline: 'Processo fluido e confiável',
      items: [
        { icon: 'check', text: 'Lead chega pelo WhatsApp' },
        { icon: 'check', text: 'Dados são coletados automaticamente' },
        { icon: 'check', text: 'CRM atualizado em tempo real' },
        { icon: 'check', text: 'Responsável recebe notificação' },
        { icon: 'check', text: 'Follow-up é programado' },
        { icon: 'check', text: 'Tudo registrado e rastreável' },
      ],
    },
    resultTitle: 'Um fluxo. Vários trabalhos eliminados.',
    resultText: 'Sua equipe entra apenas onde realmente precisa tomar uma decisão. O resto, a automação cuida.',
    annotation: 'Processos mais leves, negócios mais fortes.',
  },
  features: {
    eyebrow: 'O que pode ser automatizado',
    title: 'Tarefas que viram resultados',
    lead: 'Exemplos de processos que automatizo para diferentes tipos de negócio.',
    items: [
      { icon: 'users', title: 'Triagem de leads', text: 'Classifique e direcione leads automaticamente.' },
      { icon: 'message', title: 'Atendimento inicial', text: 'Bots que respondem e qualificam seus clientes.' },
      { icon: 'bell', title: 'Notificações e alertas', text: 'Seja avisado sobre eventos importantes.' },
      { icon: 'link', title: 'Envio de dados entre plataformas', text: 'Conecte seus sistemas e automatize informações.' },
      { icon: 'database', title: 'Atualização de CRM/planilhas', text: 'Mantenha seus dados sempre atualizados.' },
      { icon: 'check', title: 'Follow-up e confirmações', text: 'Envie lembretes e acompanhe cada etapa.' },
    ],
  },
  reliability: {
    eyebrow: 'Automação feita para o mundo real',
    title: 'Confiabilidade em cada etapa',
    lead: 'Mais do que fazer funcionar, meu foco é que a automação continue funcionando — de forma segura, documentada e fácil de manter.',
    items: [
      { icon: 'shield', title: 'Tratamento de falhas', text: 'Processos não param silenciosamente.' },
      { icon: 'database', title: 'Validação dos dados', text: 'Informações são verificadas antes de seguir.' },
      { icon: 'chart', title: 'Monitoramento', text: 'Acompanhe o funcionamento e identifique melhorias.' },
      { icon: 'file', title: 'Documentação', text: 'Você sabe como tudo foi estruturado.' },
    ],
  },
  featured: {
    eyebrow: 'Projetos em destaque',
    title: 'Resultados reais, contextos diferentes',
    lead: 'Cada negócio tem um desafio. A solução é sempre adaptada.',
    more: 'Ver todos os projetos',
    items: [
      {
        tag: 'Comércio / E-commerce',
        icon: 'shop',
        title: 'Atendimento e qualificação automática',
        text: 'Integração entre WhatsApp, CRM e sistema de vendas para atender e qualificar leads automaticamente.',
      },
      {
        tag: 'Serviços',
        icon: 'calendar',
        title: 'Agendamento e notificações',
        text: 'Fluxo de agendamento com lembretes automáticos e sincronização de calendário.',
      },
      {
        tag: 'Operações internas',
        icon: 'file',
        title: 'Centralização de dados',
        text: 'Integração entre múltiplos sistemas com atualização automática de planilhas e relatórios.',
      },
    ],
  },
  cta: {
    eyebrow: 'Próximo passo',
    title: 'Vamos encontrar o que vale a pena automatizar?',
    text: 'Em uma conversa inicial, você me mostra como o processo funciona hoje. Eu identifico os pontos que podem ser automatizados e explico uma possível abordagem.',
    button: 'Mapear meu processo',
    secondary: 'Falar pelo WhatsApp',
    note: 'Sem compromisso. Sem necessidade de escopo técnico.',
  },
}

// Bespoke content for the software case-study page (src/pages/SoftwarePage.tsx).
// Plan: src/assets/software/software-page-plan.md — sells custom software development as a
// service (pain → transformation → low-risk method → outcomes), not a ready-made product.
// No invented metrics: the transformation example stays qualitative.
export const softwarePage = {
  hero: {
    eyebrow: 'Desenvolvimento de software sob medida',
    title: 'Software sob medida para organizar e escalar sua operação',
    lead: 'Transformo processos manuais, planilhas e ferramentas desconectadas em sistemas internos feitos para a realidade da sua empresa.',
    primary: 'Agendar uma conversa',
    secondary: 'Falar sobre seu projeto',
    artAlt:
      'Planilhas, WhatsApp, e-mail, aprovações e outras ferramentas conectadas a um único painel: seu sistema.',
    trust: [
      { icon: 'database', title: 'Dados centralizados', sub: 'Tudo em um só lugar' },
      { icon: 'gear', title: 'Processos automatizados', sub: 'Menos trabalho manual' },
      { icon: 'chart', title: 'Visão da operação', sub: 'Indicadores em tempo real' },
    ],
  },
  transformation: {
    eyebrow: 'Uma solução feita para a sua realidade',
    title: 'Uma solução feita para a sua realidade',
    lead: {
      before: 'Cada empresa opera de um jeito. Por isso, o ',
      accent: 'sistema é desenhado',
      after: ' de acordo com seus processos, usuários, regras e necessidades de integração.',
    },
    beforeTitle: 'Sua operação hoje',
    afterTitle: 'Sistema desenvolvido',
    rows: [
      { before: { icon: 'sheet', text: 'Planilhas dispersas' }, after: { icon: 'database', text: 'Dados centralizados' } },
      { before: { icon: 'file', text: 'Processos manuais' }, after: { icon: 'gear', text: 'Fluxos automatizados' } },
      { before: { icon: 'whatsapp', text: 'Informações no WhatsApp' }, after: { icon: 'file', text: 'Histórico no sistema' } },
      { before: { icon: 'chart', text: 'Falta de indicadores' }, after: { icon: 'chart', text: 'Dashboard em tempo real' } },
    ],
    hubAlt:
      'Sistema sob medida no centro, conectado a gestão de clientes, processos e aprovações, relatórios e indicadores, integrações, cadastros e registros, e equipes e permissões.',
  },
  methodology: {
    eyebrow: 'Metodologia',
    title: 'Do diagnóstico à evolução contínua',
    lead: 'Um processo estruturado para reduzir riscos, dar clareza ao escopo e permitir acompanhamento em cada etapa.',
    deliveryLabel: 'Entregável',
    steps: [
      {
        title: 'Diagnóstico',
        text: 'Mapeamento dos processos, gargalos e objetivos da operação.',
        delivery: { icon: 'file', text: 'Mapa da operação' },
      },
      {
        title: 'Estruturação',
        text: 'Definição de fluxos, regras, telas e prioridades.',
        delivery: { icon: 'workflow', text: 'Escopo + fluxos' },
      },
      {
        title: 'Desenvolvimento em etapas',
        text: 'Implementação progressiva com validações ao longo do projeto.',
        delivery: { icon: 'code', text: 'Versões testáveis' },
      },
      {
        title: 'Implantação e evolução',
        text: 'Publicação, ajustes, documentação e continuidade.',
        delivery: { icon: 'file', text: 'Sistema + documentação' },
      },
    ],
  },
  capabilities: {
    eyebrow: 'O que o sistema pode resolver',
    title: 'Funcionalidades pensadas para a operação real',
    items: [
      { icon: 'database', title: 'Centralize sua operação', text: 'Clientes, equipes, cadastros e registros em um só lugar.' },
      { icon: 'chart', title: 'Enxergue o que está acontecendo', text: 'Relatórios e indicadores para acompanhar o desempenho.' },
      { icon: 'shield', title: 'Controle quem pode fazer o quê', text: 'Permissões por função e nível de acesso.' },
      { icon: 'link', title: 'Conecte as ferramentas que você já usa', text: 'Integrações com serviços e sistemas do seu fluxo.' },
      { icon: 'file', title: 'Saiba quem fez cada alteração', text: 'Histórico e rastreabilidade com transparência.' },
      { icon: 'gear', title: 'Automatize processos repetitivos', text: 'Status, aprovações, notificações e tarefas automáticas.' },
    ],
  },
  example: {
    eyebrow: 'Exemplo de transformação',
    title: 'Como um sistema pode mudar a operação',
    steps: [
      {
        tone: 'problem',
        title: 'Problema',
        text: 'Informações e tarefas espalhadas entre planilhas, mensagens e diferentes ferramentas.',
      },
      {
        tone: 'solution',
        title: 'Solução',
        text: 'Sistema centralizado com usuários, histórico, permissões e automações.',
      },
      {
        tone: 'result',
        title: 'Resultado',
        text: 'Mais controle, menos retrabalho e uma operação muito mais clara.',
      },
    ],
  },
  outcomes: {
    eyebrow: 'Resultados que o projeto busca melhorar',
    title: 'O sistema é pensado para gerar impacto na rotina',
    lead: 'Durante o diagnóstico, definimos quais desses indicadores o sistema deve melhorar.',
    items: [
      { icon: 'clock', text: 'Menos retrabalho' },
      { icon: 'chart', text: 'Mais visibilidade da operação' },
      { icon: 'database', text: 'Menor dependência de planilhas' },
      { icon: 'zap', text: 'Informação acessível com rapidez' },
      { icon: 'gear', text: 'Mais controle sobre processos internos' },
      { icon: 'target', text: 'Decisões com mais contexto' },
    ],
  },
  idealFor: {
    eyebrow: 'Ideal para empresas que...',
    title: 'Sua empresa provavelmente precisa de um sistema sob medida se...',
    items: [
      { icon: 'refresh', text: 'A mesma informação precisa ser atualizada em vários lugares' },
      { icon: 'sheet', text: 'Processos importantes ainda dependem de planilhas' },
      { icon: 'whatsapp', text: 'Aprovações e solicitações acontecem pelo WhatsApp' },
      { icon: 'chart', text: 'Relatórios exigem juntar dados manualmente' },
    ],
  },
  cta: {
    eyebrow: 'Vamos conversar?',
    title: 'Vamos entender se um sistema sob medida faz sentido para sua operação?',
    text: 'Me conte como seu processo funciona hoje e eu te ajudo a identificar o que pode ser centralizado, automatizado ou transformado em software.',
    button: 'Analisar meu projeto',
    secondary: 'Falar pelo WhatsApp',
  },
}

export const process = {
  eyebrow: 'Processo',
  title: 'Um processo simples, técnico e direto.',
  steps: [
    {
      title: 'Entendimento do problema',
      text: 'Primeiro eu entendo como sua empresa trabalha hoje, onde estão os gargalos e qual resultado você quer atingir.',
    },
    {
      title: 'Proposta de solução',
      text: 'Você recebe uma proposta clara com escopo, prazo, arquitetura sugerida e investimento.',
    },
    {
      title: 'Desenvolvimento e validação',
      text: 'A solução é construída de forma incremental, com testes e acompanhamento durante o processo.',
    },
    {
      title: 'Entrega e evolução',
      text: 'Depois da entrega, posso continuar apoiando manutenção, melhorias, integrações e segurança.',
    },
  ],
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Desenvolvimento com visão de software e segurança.',
  photo: aboutPhoto,
  paragraphs: [
    'Sou desenvolvedor full stack com experiência em aplicações web, APIs, dashboards, sistemas e automações. Também tenho formação prática em redes e segurança ofensiva, o que me permite pensar não apenas em como construir uma solução, mas também em como ela pode falhar, ser explorada ou gerar problemas no futuro.',
    'Minha experiência combina desenvolvimento de software com cybersecurity, incluindo estudos e certificações como CCNA e eJPT, além de preparação prática em pentesting e segurança de aplicações.',
    'Trabalho diretamente com cada projeto, desde o entendimento do problema até a implementação e entrega, buscando soluções simples, confiáveis e adequadas à realidade do negócio.',
  ],
  // "Bloco de diferenciais"
  featuresTitle: 'Mais do que código.',
  features: [
    {
      icon: 'lightbulb',
      title: 'Visão de produto',
      text: 'A solução é pensada a partir do problema do negócio, não apenas da tecnologia.',
    },
    {
      icon: 'layers',
      title: 'Experiência full stack',
      text: 'Frontend, backend, APIs, banco de dados e integrações dentro da mesma visão técnica.',
    },
    {
      icon: 'shield',
      title: 'Segurança aplicada',
      text: 'Conhecimento de desenvolvimento combinado com pentesting e análise de vulnerabilidades.',
    },
    {
      icon: 'handshake',
      title: 'Contato direto',
      text: 'Você fala diretamente com quem entende, projeta e desenvolve a solução.',
    },
  ],
}

export const cta = {
  title: 'Tem um processo manual, um sistema que precisa ser criado ou uma aplicação que precisa ser melhorada?',
  text: 'Vamos conversar sobre o problema e descobrir se uma solução técnica faz sentido para sua empresa.',
  button: 'Agendar uma conversa',
  secondary: 'Falar pelo WhatsApp',
}

export const footer = {
  links: [
    { label: 'Privacidade', href: '#' },
    { label: 'Termos', href: '#' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernando-ara%C3%BAjo-882b93223/' },
  ],
  note: ['Consultoria técnica em software,', 'automação e cybersecurity.'],
}

export const pt = {
  meta,
  art,
  ui,
  brand,
  nav,
  navCta,
  hero,
  trust,
  services,
  projects,
  projectPages,
  automacaoPage,
  softwarePage,
  process,
  about,
  cta,
  footer,
}

export type Copy = typeof pt
