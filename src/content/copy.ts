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
] as const

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
    },
    {
      title: 'Automação',
      text: 'Bots, integrações entre plataformas, fluxos de atendimento, coleta de dados e automação de processos manuais.',
      image: gearIcon,
    },
    {
      title: 'Cybersecurity',
      text: 'Análise de segurança de aplicações web, identificação de vulnerabilidades, revisão de configurações e orientação para correção.',
      image: shieldIcon,
    },
  ],
} as const

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
} as const

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
// vulnerabilities); the software and automation projects report `features` (a plain
// capability grid) instead. A project can also add an optional `idealFor` strip — a
// short qualifying checklist, styled like the homepage `trust` bar — right before the CTA.
interface ProjectPageContent {
  back: string
  eyebrow: string
  title: string
  lead: string
  primary: string
  secondary: string
  badges: Badge[]
  illustration: { lines: string[] }
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
    illustration: {
      lines: ['Identificar', 'Corrigir', 'Fortalecer', 'Seguir evoluindo'],
    },
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

  'sistema-de-gestao-operacional': {
    back: 'Voltar para projetos',
    eyebrow: 'Software',
    title: 'Sistema de gestão operacional para empresas',
    lead: 'Sistemas sob medida que centralizam informações, reduzem o trabalho manual e oferecem mais visibilidade para toda a operação da sua empresa.',
    primary: 'Agendar uma conversa',
    secondary: 'Falar sobre seu projeto',
    badges: [
      { icon: 'database', title: 'Dados centralizados', sub: 'Todas as informações em um só lugar' },
      { icon: 'gear', title: 'Processos organizados', sub: 'Fluxos mais ágeis e padronizados' },
      { icon: 'chart', title: 'Visão clara do negócio', sub: 'Relatórios e indicadores em tempo real' },
    ],
    illustration: {
      lines: ['Centralizar', 'Organizar', 'Visualizar', 'Evoluir'],
    },
    overview: {
      eyebrow: 'Visão geral',
      title: 'Uma solução feita para a sua realidade',
      text: 'Desenvolvo sistemas internos e aplicações web sob medida para empresas que precisam centralizar dados, organizar processos e ter uma visão clara da operação. Cada projeto é desenhado de acordo com os desafios do negócio, com foco em usabilidade, segurança e resultados no dia a dia.',
      meta: [
        { icon: 'grid', label: 'Tipo', value: 'Aplicação web sob medida' },
        { icon: 'file', label: 'Escopo', value: 'Painel interno + usuários + relatórios' },
        { icon: 'users', label: 'Papel', value: 'Desenvolvimento e arquitetura' },
        { icon: 'file', label: 'Entregáveis', value: 'Sistema funcional + documentação' },
      ],
    },
    methodology: {
      eyebrow: 'Metodologia',
      title: 'Do planejamento à evolução contínua',
      lead: 'Um processo estruturado para transformar planilhas e processos manuais em um sistema confiável, construído em etapas validadas com você.',
      steps: [
        { title: 'Diagnóstico', text: 'Entendimento dos processos, desafios e objetivos da operação.' },
        { title: 'Modelagem', text: 'Definição da estrutura do sistema, fluxos e requisitos.' },
        { title: 'Desenvolvimento', text: 'Construção, testes e implantação do sistema.' },
        { title: 'Entrega e evolução', text: 'Acompanhamento, melhorias contínuas e novos módulos.' },
      ],
    },
    features: {
      eyebrow: 'O que o sistema entrega',
      title: 'Funcionalidades que fazem a diferença',
      lead: 'Um sistema pensado para reduzir retrabalho e dar mais controle sobre a operação, do cadastro ao relatório.',
      items: [
        { icon: 'user', title: 'Cadastros e usuários', text: 'Gestão de clientes, fornecedores, produtos, equipes e muito mais.' },
        { icon: 'chart', title: 'Relatórios e indicadores', text: 'Dados atualizados para acompanhar o desempenho.' },
        { icon: 'lock', title: 'Permissões e perfis', text: 'Controle de acesso por função e nível de permissão.' },
        { icon: 'link', title: 'Integrações com ferramentas', text: 'Conexão com outros sistemas e serviços que você já utiliza.' },
        { icon: 'clock', title: 'Histórico e rastreabilidade', text: 'Registro de todas as ações com total transparência.' },
        { icon: 'workflow', title: 'Fluxos internos', text: 'Processos padronizados e mais eficiência na operação.' },
      ],
    },
    results: {
      eyebrow: 'Resultados reais',
      title: 'Impacto e melhorias para o seu negócio',
      text: 'O sistema entrega mais controle sobre a operação, reduzindo retrabalho e dando à equipe uma visão confiável dos dados para decisões mais seguras.',
      checklist: ['Menos retrabalho', 'Mais controle', 'Dados em um só lugar', 'Decisão com mais contexto'],
    },
    idealFor: {
      title: 'Ideal para empresas que...',
      items: [
        { icon: 'file', text: 'Utilizam planilhas dispersas' },
        { icon: 'workflow', text: 'Precisam organizar seus processos' },
        { icon: 'chart', text: 'Desejam mais controle e visibilidade' },
        { icon: 'users', text: 'Querem crescer com mais eficiência' },
      ],
    },
    cta: {
      eyebrow: 'Sistemas sob medida',
      title: 'Vamos organizar a operação da sua empresa?',
      text: 'Converse sobre sua necessidade e descubra como um sistema sob medida pode trazer mais eficiência e controle para o seu negócio.',
      button: 'Agendar uma conversa',
      secondary: 'Falar pelo WhatsApp',
    },
  },

  'automacao-de-processos': {
    back: 'Voltar para projetos',
    eyebrow: 'Automação',
    title: 'Automação de processos e tarefas repetitivas',
    lead: 'Conecte suas ferramentas, elimine o trabalho manual e libere sua equipe para o que realmente importa. Automação sob medida para tornar sua operação mais ágil, eficiente e escalável.',
    primary: 'Agendar uma conversa',
    secondary: 'Falar sobre seu projeto',
    badges: [
      { icon: 'zap', title: 'Menos trabalho manual', sub: 'Automatize tarefas repetitivas' },
      { icon: 'clock', title: 'Atendimento mais rápido', sub: 'Respostas e processos ágeis' },
      { icon: 'link', title: 'Integrações entre sistemas', sub: 'Conecte suas ferramentas' },
    ],
    illustration: {
      lines: ['Conectar', 'Automatizar', 'Acompanhar', 'Escalar'],
    },
    overview: {
      eyebrow: 'Visão geral',
      title: 'Mais eficiência para o seu negócio',
      text: 'Implemento automações que conectam suas ferramentas e sistemas, reduzindo a fricção operacional e eliminando tarefas repetitivas. Com fluxos inteligentes, sua equipe ganha tempo, o atendimento se torna mais ágil e os processos passam a funcionar de forma integrada e confiável.',
      meta: [
        { icon: 'gear', label: 'Tipo', value: 'Automação + integrações' },
        { icon: 'file', label: 'Escopo', value: 'Fluxos, bots e notificações' },
        { icon: 'users', label: 'Papel', value: 'Desenho técnico e implementação' },
        { icon: 'file', label: 'Entregáveis', value: 'Fluxo automatizado + documentação' },
      ],
    },
    methodology: {
      eyebrow: 'Como funciona',
      title: 'Do planejamento à operação',
      lead: 'Um processo estruturado para identificar oportunidades, desenhar o fluxo certo e colocar a automação em produção com confiança.',
      steps: [
        { title: 'Mapeamento do processo', text: 'Entendimento das necessidades e identificação de oportunidades.' },
        { title: 'Desenho do fluxo', text: 'Criação do fluxo ideal com as ferramentas mais adequadas.' },
        { title: 'Integrações e testes', text: 'Configuração, testes e validação de todo o processo.' },
        { title: 'Acompanhamento e melhoria', text: 'Monitoramento dos resultados e melhorias contínuas.' },
      ],
    },
    features: {
      eyebrow: 'O que pode ser automatizado',
      title: 'Tarefas que viram resultados',
      lead: 'Da triagem de leads ao follow-up automático — fluxos que tiram trabalho repetitivo das mãos da sua equipe.',
      items: [
        { icon: 'users', title: 'Triagem de leads', text: 'Classifique e direcione leads automaticamente.' },
        { icon: 'message', title: 'Atendimento inicial', text: 'Bots que respondem e orientam seus clientes.' },
        { icon: 'bell', title: 'Notificações e alertas', text: 'Seja avisado sobre eventos importantes.' },
        { icon: 'link', title: 'Envio de dados entre plataformas', text: 'Conecte seus sistemas e automatize informações.' },
        { icon: 'database', title: 'Atualização de CRM/planilhas', text: 'Mantenha seus dados sempre atualizados.' },
        { icon: 'check', title: 'Follow-up e confirmações', text: 'Envie lembretes e acompanhe cada etapa.' },
      ],
    },
    results: {
      eyebrow: 'Impacto e melhorias',
      title: 'Resultados que você sente no dia a dia',
      text: 'A automação reduz o tempo gasto em tarefas manuais, diminui erros e dá à equipe mais velocidade e previsibilidade no atendimento.',
      checklist: ['Menos tempo gasto em tarefas manuais', 'Menos erros manuais', 'Mais velocidade no atendimento', 'Operação mais previsível'],
    },
    idealFor: {
      title: 'Quando esse tipo de automação faz sentido?',
      items: [
        { icon: 'users', text: 'Equipes que repetem tarefas todos os dias' },
        { icon: 'message', text: 'Negócios com atendimento via WhatsApp ou e-mail' },
        { icon: 'database', text: 'Operações com múltiplas ferramentas' },
        { icon: 'file', text: 'Processos manuais que tomam muito tempo' },
      ],
    },
    cta: {
      eyebrow: 'Vamos dar o próximo passo?',
      title: 'Vamos automatizar o que hoje toma tempo da sua equipe?',
      text: 'Converse sobre o seu cenário e descubra como a automação pode gerar mais produtividade e melhores resultados para o seu negócio.',
      button: 'Agendar uma conversa',
      secondary: 'Falar pelo WhatsApp',
    },
  },
}

export type ProjectSlug = keyof typeof projectPages

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
} as const

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
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
  note: ['Consultoria técnica em software,', 'automação e cybersecurity.'],
}
