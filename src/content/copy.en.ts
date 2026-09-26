// English page copy — same shape as the Portuguese source in copy.ts (typed as `Copy`,
// so a missing or extra key fails the build). Written for an international reader rather
// than translated word for word: same claims, no invented metrics.
import cubeIcon from '../assets/web/icon-cube.webp'
import gearIcon from '../assets/web/icon-gear.webp'
import shieldIcon from '../assets/web/icon-shield.webp'
import aboutPhoto from '../assets/desktop/about.webp'
// English twins of the art with baked-in labels (masters: src/assets/hero/*-en.png and
// src/assets/imagesdeprojetos/*-en.png, built by scripts/translate-images/run.sh).
import heroScene from '../assets/web/hero-scene-en.webp'
import project1 from '../assets/desktop/project-1-en.webp'
import project2 from '../assets/desktop/project-2-en.webp'
import project3 from '../assets/desktop/project-3-en.webp'
import mockLaptop from '../assets/desktop/mock-laptop-en.webp'
import automacaoHeroFlow from '../assets/desktop/automacao-hero-flow-en.webp'
import automacaoHeroCard from '../assets/desktop/automacao-hero-card-en.webp'
import softwareHeroWide from '../assets/desktop/software-hero-wide-en.webp'
import softwareHeroFlow from '../assets/desktop/software-hero-flow-en.webp'
import softwareHub from '../assets/desktop/software-hub-en.webp'
import type { Copy } from './copy'

export const en: Copy = {
  meta: {
    title: 'Fernando Araújo — Software, automation and cybersecurity',
    description:
      'I build custom systems, websites, integrations and automations, with a focus on performance, security and cutting manual work.',
  },

  art: {
    heroScene,
    mockLaptop,
    automacaoHeroFlow,
    automacaoHeroCard,
    softwareHeroWide,
    softwareHeroFlow,
    softwareHub,
  },

  ui: {
    backToProjects: 'Back to projects',
    mainNav: 'Main',
    footerNav: 'Footer',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    email: 'Email',
    heroGlobeAlt: 'Translucent globe over a waterfront city',
    aboutPhotoAlt: 'Portrait of Fernando Araújo',
  },

  brand: {
    name: 'Fernando Araújo',
    tagline: 'Software. Automation. Cybersecurity.',
    taglineShort: 'Software · Automation · Cybersecurity',
  },

  nav: [
    { label: 'Services', href: '#servicos' },
    { label: 'Projects', href: '#projetos' },
    { label: 'About', href: '#sobre' },
    { label: 'Process', href: '#processo' },
    { label: 'Contact', href: '#contato' },
  ],

  navCta: 'Book a call',

  hero: {
    eyebrow: ['Digital solutions', 'developer'],
    title: {
      before: 'Software, automation and ',
      accent: 'cybersecurity',
      after: ' for companies that need solutions that actually work.',
    },
    lead: 'I build custom systems, websites, integrations and automations, with a technical approach focused on performance, security and less manual work.',
    primary: 'Book a call',
    secondary: 'See solutions',
    sceneCaption: ['Secure from', 'day one.'],
  },

  trust: [
    {
      icon: 'code',
      mobile: ['End-to-end', 'development'],
      title: 'End-to-end development',
      sub: 'From front end to API, database and integrations.',
    },
    {
      icon: 'workflow',
      mobile: ['Process', 'automation'],
      title: 'Process automation',
      sub: 'Bots, workflows and integrations that turn repetitive tasks into systems.',
    },
    {
      icon: 'shield',
      mobile: ['Secure from', 'day one'],
      title: 'Secure from day one',
      sub: 'Applications built with both a developer’s and an offensive-security mindset.',
    },
  ],

  services: {
    eyebrow: 'Services',
    title: ['Technical solutions for', 'real business problems.'],
    lead: 'I don’t just build “websites”. I build digital tools that help companies run better, sell better and clear bottlenecks.',
    more: 'See all services',
    items: [
      {
        title: 'Software development',
        text: 'Custom websites, internal systems, dashboards, portals, APIs and web applications.',
        image: cubeIcon,
        href: '/projetos/sistema-de-gestao-operacional',
      },
      {
        title: 'Automation',
        text: 'Bots, integrations between platforms, customer-service flows, data collection and automation of manual processes.',
        image: gearIcon,
        href: '/projetos/automacao-de-processos',
      },
      {
        title: 'Cybersecurity',
        text: 'Web application security assessments, vulnerability discovery, configuration reviews and remediation guidance.',
        image: shieldIcon,
        href: '/projetos/aplicacoes-web-seguras',
      },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    title: 'Proven in practice.',
    more: 'See all projects',
    items: [
      {
        title: 'Systems that organize operations',
        text: 'Applications that centralize data, records, reports, users and internal workflows.',
        image: project1,
        href: '/projetos/sistema-de-gestao-operacional',
      },
      {
        title: 'Automating repetitive tasks',
        text: 'Bots and integrations that cut manual work, speed up customer service and connect different services.',
        image: project2,
        href: '/projetos/automacao-de-processos',
      },
      {
        title: 'Secure web applications',
        text: 'Development with close attention to authentication, access control, APIs, validation and application security.',
        image: project3,
        href: '/projetos/aplicacoes-web-seguras',
      },
    ],
  },

  projectPages: {
    'aplicacoes-web-seguras': {
      back: 'Back to projects',
      eyebrow: 'Cybersecurity',
      title: 'Web application security assessment',
      lead: 'A full penetration test of a web platform, focused on finding vulnerabilities, validating risk and delivering practical remediation advice.',
      primary: 'Book a call',
      secondary: 'Talk about your project',
      badges: [
        { icon: 'shield', title: 'Web application', sub: 'Defined and tested scope' },
        { icon: 'code', title: 'Recognized methodology', sub: 'OWASP, PTES and best practices' },
        { icon: 'file', title: 'Technical report', sub: 'Findings, impact and fixes' },
      ],
      overview: {
        eyebrow: 'Overview',
        title: 'About the project',
        text: 'I carried out a security assessment of a web platform used by customers and partners, aiming to identify vulnerabilities, validate their level of risk and provide clear recommendations to improve security.',
        meta: [
          { icon: 'calendar', label: 'Period', value: 'Aug 2024' },
          { icon: 'grid', label: 'Type', value: 'Web application (production)' },
          { icon: 'users', label: 'Role', value: 'Pentester and security consultant' },
          { icon: 'file', label: 'Deliverables', value: 'Technical report + recommendations' },
        ],
      },
      methodology: {
        eyebrow: 'Methodology',
        title: 'How it was done',
        lead: 'The work followed a structured methodology, combining recognized security-testing practices with the specific context of the system.',
        steps: [
          { title: 'Planning', text: 'Defining the scope, assets and rules of engagement.' },
          { title: 'Reconnaissance', text: 'Mapping the application, its technologies and attack surface.' },
          {
            title: 'Security testing',
            text: 'Manual and tool-assisted testing (OWASP Top 10, authentication, access control, APIs, etc.).',
          },
          { title: 'Analysis and reporting', text: 'Risk rating, evidence and practical recommendations.' },
        ],
      },
      findings: {
        eyebrow: 'Key findings',
        title: 'Vulnerabilities identified',
        lead: 'Vulnerabilities of varying severity were found, including authentication, access-control and input-validation issues.',
        items: [
          {
            level: 'high',
            title: 'High severity',
            text: 'Broken access control on API endpoints, allowing unauthorized access to data.',
          },
          {
            level: 'medium',
            title: 'Medium severity',
            text: 'Insufficient input validation on specific fields, opening the door to injection attacks.',
          },
          {
            level: 'low',
            title: 'Low severity',
            text: 'Exposed version and configuration details that could make future attacks easier.',
          },
        ],
      },
      results: {
        eyebrow: 'Results',
        title: 'Impact and improvements',
        text: 'The report covered the impact of each vulnerability along with prioritized technical recommendations, so the team could fix the issues and strengthen the application’s security.',
        checklist: [
          'Smaller attack surface',
          'Critical vulnerabilities fixed',
          'A better development process',
          'More trust from users and partners',
        ],
      },
      cta: {
        eyebrow: 'Security is good business',
        title: 'Shall we assess your application’s security?',
        text: 'Identify risks, protect your data and grow with confidence.',
        button: 'Book a call',
        secondary: 'Chat on WhatsApp',
      },
    },
  },

  automacaoPage: {
    eyebrow: 'Automation',
    hero: {
      title: 'Automate the work that today depends on someone remembering, copying or repeating it.',
      lead: 'I connect your tools, eliminate manual tasks and turn processes into automated workflows — from customer service and leads to internal systems and operations.',
      primary: 'Map a process with me',
      secondary: 'Chat on WhatsApp',
      // Must match the labels baked into automacao-hero-flow-en.webp.
      flow: [
        { icon: 'message', label: 'New lead' },
        { icon: 'file', label: 'Data collection' },
        { icon: 'database', label: 'CRM updated' },
        { icon: 'bell', label: 'Team notified' },
        { icon: 'mail', label: 'Automatic follow-up' },
      ],
      trust: [
        { icon: 'zap', title: 'Less manual work', sub: 'Eliminate repetitive tasks' },
        { icon: 'clock', title: 'More speed', sub: 'Processes run on their own' },
        { icon: 'check', title: 'Fewer errors', sub: 'Information is always accurate' },
        { icon: 'users', title: 'Predictable operations', sub: 'Track everything in one place' },
      ],
    },
    methodology: {
      eyebrow: 'How I work',
      title: 'From analysis to operation',
      lead: 'I get to know your context, design the right solution and make sure it works day to day. You don’t need to become a tech expert.',
      steps: [
        {
          num: '01',
          icon: 'search',
          title: 'We map the process',
          text: 'We map tasks, exceptions, bottlenecks and opportunities.',
          delivery: 'Deliverable: process map',
        },
        {
          num: '02',
          icon: 'workflow',
          title: 'We design the automation',
          text: 'We define the rules, the systems involved and the expected behavior.',
          delivery: 'Deliverable: proposed workflow',
        },
        {
          num: '03',
          icon: 'code',
          title: 'We build and test it',
          text: 'Integrations, automations and error handling.',
          delivery: 'Deliverable: working automation',
        },
        {
          num: '04',
          icon: 'chart',
          title: 'We put it into operation',
          text: 'Monitoring, adjustments and documentation.',
          delivery: 'Deliverable: process up and running',
        },
      ],
    },
    beforeAfter: {
      eyebrow: 'The process in practice',
      title: 'From manual to automatic',
      lead: 'The same process. Two very different scenarios.',
      before: {
        title: 'Before',
        icon: 'pin',
        tagline: 'Wasted time + errors + lost leads',
        items: [
          { icon: 'message', text: 'A lead comes in on WhatsApp' },
          { icon: 'mail', text: 'Someone opens the message' },
          { icon: 'copy', text: 'Copies the details' },
          { icon: 'file', text: 'Pastes them into a spreadsheet' },
          { icon: 'user', text: 'Lets the salesperson know' },
          { icon: 'clock', text: 'Has to remember to follow up' },
        ],
      },
      after: {
        title: 'After',
        icon: 'shieldCheck',
        tagline: 'A smooth, reliable process',
        items: [
          { icon: 'check', text: 'A lead comes in on WhatsApp' },
          { icon: 'check', text: 'Data is collected automatically' },
          { icon: 'check', text: 'CRM updated in real time' },
          { icon: 'check', text: 'The right person is notified' },
          { icon: 'check', text: 'Follow-up is scheduled' },
          { icon: 'check', text: 'Everything logged and traceable' },
        ],
      },
      resultTitle: 'One workflow. Many tasks gone.',
      resultText: 'Your team only steps in where a real decision is needed. The automation takes care of the rest.',
      annotation: 'Lighter processes, stronger businesses.',
    },
    features: {
      eyebrow: 'What can be automated',
      title: 'Tasks that turn into results',
      lead: 'Examples of processes I automate for different kinds of businesses.',
      items: [
        { icon: 'users', title: 'Lead triage', text: 'Qualify and route leads automatically.' },
        { icon: 'message', title: 'First-line support', text: 'Bots that answer and qualify your customers.' },
        { icon: 'bell', title: 'Notifications and alerts', text: 'Get notified about the events that matter.' },
        { icon: 'link', title: 'Syncing data between platforms', text: 'Connect your systems and keep information flowing.' },
        { icon: 'database', title: 'CRM and spreadsheet updates', text: 'Keep your data up to date at all times.' },
        { icon: 'check', title: 'Follow-ups and confirmations', text: 'Send reminders and keep track of every step.' },
      ],
    },
    reliability: {
      eyebrow: 'Automation built for the real world',
      title: 'Reliability at every step',
      lead: 'Beyond making it work, my focus is keeping it working — securely, documented and easy to maintain.',
      items: [
        { icon: 'shield', title: 'Failure handling', text: 'Processes never fail silently.' },
        { icon: 'database', title: 'Data validation', text: 'Information is checked before moving on.' },
        { icon: 'chart', title: 'Monitoring', text: 'See how everything runs and spot improvements.' },
        { icon: 'file', title: 'Documentation', text: 'You know exactly how everything was built.' },
      ],
    },
    featured: {
      eyebrow: 'Featured projects',
      title: 'Real results, different contexts',
      lead: 'Every business has its own challenge. The solution is always tailored.',
      more: 'See all projects',
      items: [
        {
          tag: 'Retail / E-commerce',
          icon: 'shop',
          title: 'Automated customer service and lead qualification',
          text: 'WhatsApp, CRM and sales system integrated to serve and qualify leads automatically.',
        },
        {
          tag: 'Services',
          icon: 'calendar',
          title: 'Scheduling and notifications',
          text: 'A booking workflow with automatic reminders and calendar sync.',
        },
        {
          tag: 'Internal operations',
          icon: 'file',
          title: 'Centralized data',
          text: 'Integration across multiple systems, with spreadsheets and reports updated automatically.',
        },
      ],
    },
    cta: {
      eyebrow: 'Next step',
      title: 'Shall we find out what’s worth automating?',
      text: 'In a first conversation, you show me how the process works today. I’ll point out what can be automated and walk you through a possible approach.',
      button: 'Map my process',
      secondary: 'Chat on WhatsApp',
      note: 'No commitment. No technical scope required.',
    },
  },

  softwarePage: {
    hero: {
      eyebrow: 'Custom software development',
      title: 'Custom software to organize and scale your operations',
      lead: 'I turn manual processes, spreadsheets and disconnected tools into internal systems built around the way your company actually works.',
      primary: 'Book a call',
      secondary: 'Talk about your project',
      artAlt: 'Spreadsheets, WhatsApp, email, approvals and other tools connected to a single dashboard: your system.',
      trust: [
        { icon: 'database', title: 'Centralized data', sub: 'Everything in one place' },
        { icon: 'gear', title: 'Automated processes', sub: 'Less manual work' },
        { icon: 'chart', title: 'A clear view of operations', sub: 'Real-time metrics' },
      ],
    },
    transformation: {
      eyebrow: 'Built around the way you work',
      title: 'A solution built for your reality',
      lead: {
        before: 'Every company operates differently. That’s why the ',
        accent: 'system is designed',
        after: ' around your processes, users, rules and integration needs.',
      },
      beforeTitle: 'Your operation today',
      afterTitle: 'With a custom system',
      rows: [
        { before: { icon: 'sheet', text: 'Scattered spreadsheets' }, after: { icon: 'database', text: 'Centralized data' } },
        { before: { icon: 'file', text: 'Manual processes' }, after: { icon: 'gear', text: 'Automated workflows' } },
        { before: { icon: 'whatsapp', text: 'Information lost in WhatsApp' }, after: { icon: 'file', text: 'History in the system' } },
        { before: { icon: 'chart', text: 'No clear metrics' }, after: { icon: 'chart', text: 'Real-time dashboard' } },
      ],
      hubAlt:
        'A custom-built system at the center, connected to customer management, processes and approvals, reports and metrics, integrations, data entry and records, and teams and permissions.',
    },
    methodology: {
      eyebrow: 'Methodology',
      title: 'From diagnosis to continuous improvement',
      lead: 'A structured process that reduces risk, brings clarity to the scope and lets you follow along at every stage.',
      deliveryLabel: 'Deliverable',
      steps: [
        {
          title: 'Diagnosis',
          text: 'Mapping your processes, bottlenecks and operational goals.',
          delivery: { icon: 'file', text: 'Operations map' },
        },
        {
          title: 'Structuring',
          text: 'Defining workflows, rules, screens and priorities.',
          delivery: { icon: 'workflow', text: 'Scope + workflows' },
        },
        {
          title: 'Incremental development',
          text: 'Step-by-step implementation, validated throughout the project.',
          delivery: { icon: 'code', text: 'Testable releases' },
        },
        {
          title: 'Launch and evolution',
          text: 'Deployment, adjustments, documentation and ongoing support.',
          delivery: { icon: 'file', text: 'System + documentation' },
        },
      ],
    },
    capabilities: {
      eyebrow: 'What the system can solve',
      title: 'Features designed for real-world operations',
      items: [
        { icon: 'database', title: 'Centralize your operations', text: 'Customers, teams, records and data in one place.' },
        { icon: 'chart', title: 'See what’s happening', text: 'Reports and metrics to track performance.' },
        { icon: 'shield', title: 'Control who can do what', text: 'Permissions by role and access level.' },
        { icon: 'link', title: 'Connect the tools you already use', text: 'Integrations with the services and systems in your workflow.' },
        { icon: 'file', title: 'Know who changed what', text: 'A full, transparent history of every change.' },
        { icon: 'gear', title: 'Automate repetitive processes', text: 'Automatic statuses, approvals, notifications and tasks.' },
      ],
    },
    example: {
      eyebrow: 'Transformation example',
      title: 'How a system can change your operations',
      steps: [
        {
          tone: 'problem',
          title: 'Problem',
          text: 'Information and tasks scattered across spreadsheets, messages and different tools.',
        },
        {
          tone: 'solution',
          title: 'Solution',
          text: 'A centralized system with users, history, permissions and automations.',
        },
        {
          tone: 'result',
          title: 'Result',
          text: 'More control, less rework and a much clearer operation.',
        },
      ],
    },
    outcomes: {
      eyebrow: 'What the project aims to improve',
      title: 'Designed to make a real difference day to day',
      lead: 'During the diagnosis, we decide which of these indicators the system should improve.',
      items: [
        { icon: 'clock', text: 'Less rework' },
        { icon: 'chart', text: 'More visibility into operations' },
        { icon: 'database', text: 'Less reliance on spreadsheets' },
        { icon: 'zap', text: 'Information at your fingertips' },
        { icon: 'gear', text: 'More control over internal processes' },
        { icon: 'target', text: 'Better-informed decisions' },
      ],
    },
    idealFor: {
      eyebrow: 'Ideal for companies where...',
      title: 'Your company probably needs custom software if...',
      items: [
        { icon: 'refresh', text: 'The same information has to be updated in several places' },
        { icon: 'sheet', text: 'Key processes still depend on spreadsheets' },
        { icon: 'whatsapp', text: 'Approvals and requests happen over WhatsApp' },
        { icon: 'chart', text: 'Reports mean pulling data together by hand' },
      ],
    },
    cta: {
      eyebrow: 'Let’s talk',
      title: 'Shall we see whether custom software makes sense for your operation?',
      text: 'Tell me how your process works today and I’ll help you pinpoint what can be centralized, automated or turned into software.',
      button: 'Review my project',
      secondary: 'Chat on WhatsApp',
    },
  },

  process: {
    eyebrow: 'Process',
    title: 'A simple, technical, straightforward process.',
    steps: [
      {
        title: 'Understanding the problem',
        text: 'First, I learn how your company works today, where the bottlenecks are and what result you want to achieve.',
      },
      {
        title: 'Solution proposal',
        text: 'You get a clear proposal covering scope, timeline, suggested architecture and investment.',
      },
      {
        title: 'Development and validation',
        text: 'The solution is built incrementally, with testing and regular check-ins along the way.',
      },
      {
        title: 'Delivery and evolution',
        text: 'After delivery, I can keep supporting maintenance, improvements, integrations and security.',
      },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'Development with a software and security mindset.',
    photo: aboutPhoto,
    paragraphs: [
      'I’m a full-stack developer with experience in web applications, APIs, dashboards, systems and automations. I also have hands-on training in networking and offensive security, which lets me think not only about how to build a solution, but also about how it could fail, be exploited or cause problems down the line.',
      'My background combines software development with cybersecurity, including studies and certifications such as CCNA and eJPT, plus hands-on preparation in pentesting and application security.',
      'I work directly on every project, from understanding the problem to implementation and delivery, aiming for solutions that are simple, reliable and suited to the reality of the business.',
    ],
    featuresTitle: 'More than code.',
    features: [
      {
        icon: 'lightbulb',
        title: 'Product mindset',
        text: 'Every solution starts from the business problem, not just the technology.',
      },
      {
        icon: 'layers',
        title: 'Full-stack experience',
        text: 'Front end, back end, APIs, databases and integrations under one technical vision.',
      },
      {
        icon: 'shield',
        title: 'Applied security',
        text: 'Development know-how combined with pentesting and vulnerability analysis.',
      },
      {
        icon: 'handshake',
        title: 'Direct contact',
        text: 'You talk directly to the person who understands, designs and builds the solution.',
      },
    ],
  },

  cta: {
    title: 'Have a manual process to streamline, a system to build or an application that needs improving?',
    text: 'Let’s talk about the problem and find out whether a technical solution makes sense for your company.',
    button: 'Book a call',
    secondary: 'Chat on WhatsApp',
  },

  footer: {
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/fernando-ara%C3%BAjo-882b93223/' },
    ],
    note: ['Technical consulting in software,', 'automation and cybersecurity.'],
  },
}
