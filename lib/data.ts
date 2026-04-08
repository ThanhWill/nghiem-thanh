export const personalInfo = {
  name: 'Nguyen Nghiem Thanh',
  role: 'I build enterprise web platforms that perform — from UI to cloud.',
  tagline: 'Delivered B2B & B2C platforms for Toyota, cut load times by 60% across production systems.',
  comment: 'React · Angular · Node · Azure',
  description:
    'Senior Full-Stack Engineer with 8+ years building scalable web platforms across e-commerce, B2B, and SaaS domains. Specialized in React/Next.js/Angular frontends and Python/Node.js/Java backends with production experience on enterprise systems for Toyota Motor Philippines. Led frontend migrations, SAP Hybris integrations, and headless commerce architecture.',
  email: 'thanh029023@gmail.com',
  github: 'https://github.com/ThanhWill',
  linkedin: 'https://www.linkedin.com/in/willson29996/',
  cvPdf: '/thanh-cv.pdf',
  cvDocx: '/cv.docx',
  avatarUrl: '/avatar.png',
}

export const stats = [
  { value: '8+',  label: 'Years Experience' },
  { value: '15+', label: 'Production Systems' },
  { value: '3',   label: 'Enterprise Clients' },
  { value: '60%', label: 'Performance Gain' },
]

export const strengths = [
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description:
      'Profiling, code splitting, SSR/SSG, caching strategies and render optimization — I\'ve cut load times by 60%+ on legacy systems.',
  },
  {
    icon: '🏗️',
    title: 'Fullstack Architecture',
    description:
      'From React/Angular frontends to Django, Spring Boot microservices, RabbitMQ event buses, and Apache Camel integrations.',
  },
  {
    icon: '☸️',
    title: 'DevOps & Infrastructure',
    description:
      'Container-based deployments on Kubernetes, Docker log monitoring, CI/CD pipelines and health-check automation.',
  },
  {
    icon: '🧪',
    title: 'Code Quality',
    description:
      'TypeScript strict mode, Jest/Jasmine test suites, code reviews, and clean architecture patterns across every layer.',
  },
]

export const skills = {
  frontend: [
    'React', 'Next.js', 'Angular', 'Vue / Nuxt', 'TypeScript', 'JavaScript (ES6+)',
    'Tailwind CSS', 'Redux / NgRx', 'GraphQL', 'Core Web Vitals',
  ],
  backend: [
    'Node.js / NestJS', 'Python / Django', 'Java / Spring Boot', 'ASP.NET Core',
    'REST APIs', 'GraphQL', 'PostgreSQL', 'MySQL / SQL Server',
    'RabbitMQ', 'SAP Hybris', 'Saleor Commerce', 'Supabase',
  ],
  tools: [
    'Docker', 'Azure', 'Jenkins', 'Vercel', 'CI/CD Pipelines',
    'Jest / Jasmine', 'Git / GitHub / GitLab', 'Mixpanel', 'Firebase', 'Agile / Scrum',
  ],
}

// ── Projects ──────────────────────────────────────────────────────────────────

export interface ProjectLayer {
  label: string
  sublabel: string
  color: string
  textColor?: string
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  featured: boolean
  type: string
  highlights: string[]
  layers?: ProjectLayer[]
  side?: string          // FE-only / BE-only / FE + BE / FE + BE + DevOps
}

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce Microservices Platform',
    description:
      'Full-stack e-commerce system spanning a Django/Saleor commerce core, Spring Boot Java microservices, React frontends, RabbitMQ messaging, and Apache Camel integration with SAP and Toyota insurance systems — deployed on Kubernetes.',
    tags: ['React', 'Django', 'Python', 'GraphQL', 'Spring Boot', 'Java', 'RabbitMQ', 'Apache Camel', 'Kubernetes', 'Docker'],
    featured: true,
    type: 'Architecture',
    side: 'FE + BE',
    highlights: [
      'FE: React backoffice admin + React storefront, connected via GraphQL',
      'BE (Saleor): Django/Python commerce core — Products, Cart, Orders, Promotions',
      'BE (Microservices): Spring Boot Java — Product, Payment (T-Wallet), Inventory',
      'RabbitMQ lightweight event bus for async inter-service communication',
      'Apache Camel integration with SAP DBM/CDC, T-Sure, Toyota Insurance, 3rd-party Delivery',
      'Deployed & monitored on Kubernetes; Docker container health checks & log tailing',
    ],
    layers: [
      { label: 'React FE', sublabel: 'Backoffice · Storefront · GraphQL', color: '#61dafb', textColor: '#000' },
      { label: 'Saleor / Django', sublabel: 'Python · Commerce Core · GraphQL API', color: '#0c4b33', textColor: '#3ecf8e' },
      { label: 'Spring Boot', sublabel: 'Java · Product · Payment · Inventory', color: '#f89820' },
      { label: 'RabbitMQ', sublabel: 'Async event bus', color: '#ff6600' },
      { label: 'Apache Camel', sublabel: 'SAP · T-Sure · Toyota Insurance · Delivery', color: '#d97706' },
      { label: 'Kubernetes + Docker', sublabel: 'Orchestration · Logs · CI/CD', color: '#326ce5' },
    ],
  },
  {
    id: 'toyota',
    title: 'Toyota Motor Philippines — online.toyota.com.ph',
    description:
      'Full-stack e-commerce platform for Toyota Philippines, built on SAP Hybris Commerce (Java/Spring backend) with Angular 18 SPA + Express SSR frontend. Handles B2B dealer and B2C customer journeys across vehicles, insurance, and accessories.',
    tags: ['Angular 18', 'TypeScript', 'SAP Hybris', 'Java/Spring', 'OAuth2', 'SAP CPI', 'Gigya', 'Express SSR', 'Jenkins', 'Azure'],
    featured: false,
    type: 'Enterprise',
    side: 'FE + BE',
    highlights: [
      'FE: Angular 18 SPA (portal-storefront) with Express SSR — vehicles, bookings, dashboard, reports, claims & insurance portals',
      'FE: Auth interceptor attaching OAuth2 tokens to every HTTP request; multi-language i18n support',
      'BE: SAP Hybris Commerce extensions — tmpcore, tmpfacades, tmpocc, tmpwebservices, tmppayment, tmpordermanagement',
      'BE: OCC REST API (/occ/v2/tmp/*) + custom endpoints (/tmpocc/*, /tmpwebservices/*) + OAuth2 server',
      'Integrations: Gigya SSO identity, SAP CPI data flows (bookings, orders, vehicles, insurance), Payment/Wallet, SFTP for vehicle data',
      'Deployment: Jenkins CI/CD → SAP Commerce Cloud (CCv2) across DEV / STG / PROD environments',
    ],
  },
  {
    id: 'dnp',
    title: 'DNP Education Platform (Japan)',
    description:
      'Japanese e-learning platform for Dai Nippon Printing. Teachers upload exam papers which are automatically scanned and laid out column-by-column for each student. One teacher can manage and upload across multiple grades and classes simultaneously.',
    tags: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'Memcached', 'Azure Blob', 'Docker', 'Noto Sans JP'],
    featured: false,
    type: 'Fullstack',
    side: 'FE + BE',
    highlights: [
      'FE: Teacher uploads exam paper → NestJS scans and auto-layouts into per-student columns',
      'FE: Multi-grade upload — one teacher manages multiple grades and classes simultaneously',
      'FE: Japanese font rendering (Noto Sans JP) + full i18n with Next.js',
      'BE: NestJS — exam scan pipeline, grade/class management, RBAC',
      'BE: Redis + Memcached caching — repeat uploads of the same exam return instantly from cache',
      'Infra: PostgreSQL (data) + Azure Blob (files); Docker containerised deployment',
    ],
  },
  {
    id: 'taskmanager',
    title: 'Task Management System',
    description:
      'Fullstack productivity app with drag-and-drop Kanban board, SSR, real-time collaboration, AWS S3 image storage, and full CI/CD pipeline from commit to production.',
    tags: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'Supabase', 'AWS S3', 'DnD', 'Jest', 'GitHub Actions'],
    featured: false,
    type: 'Fullstack',
    side: 'FE + BE',
    highlights: [
      'FE: Drag-and-drop Kanban board (react-dnd) with SSR via Next.js 14 App Router',
      'FE: AWS S3 pre-signed URLs for direct image/attachment uploads from browser',
      'BE: Express REST API — JWT auth, RBAC, task/project management logic',
      'BE: Supabase (PostgreSQL + Realtime) for live board updates across users',
      'Infra: GitHub Actions CI/CD — Jest tests on every PR, auto-deploy on merge',
    ],
  },
  {
    id: 'inspectoro',
    title: 'Inspectoro — Supply Chain Platform',
    description:
      'Supply chain management SaaS built at Inspectoro. Angular SPA connected to a Python FastAPI backend, with AWS RDS for structured data and AWS S3 for inspection documents and media.',
    tags: ['Angular', 'TypeScript', 'Python', 'FastAPI', 'AWS RDS', 'AWS S3', 'PostgreSQL', 'Docker'],
    featured: false,
    type: 'Enterprise',
    side: 'FE + BE',
    highlights: [
      'FE: Angular SPA — inventory tracking, supplier management, inspection reports',
      'BE: Python FastAPI — supply chain logic, REST API, async background tasks',
      'Data: AWS RDS (PostgreSQL) for structured supply chain records',
      'Storage: AWS S3 for inspection documents, photos and media files',
      'Infra: Docker-containerised services deployed on AWS',
    ],
  },
]

// ── Experience ────────────────────────────────────────────────────────────────

export const experience = [
  {
    role: 'Software Developer',
    company: 'SAI Digital (Outsource)',
    period: 'Dec 2023 – Present',
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'Full-stack engineer on enterprise platforms for Toyota Motor Philippines. Delivered headless commerce architecture with Saleor/Django + React, SAP Hybris integrations with Angular 18, and the DNP education platform with Next.js + NestJS.',
    achievements: [
      'TMP CX Overhaul: headless commerce with Saleor (Python/Django) + React — multi-category catalog, GraphQL API, real-time product & order management',
      'Toyota B2B/B2C: Angular 18 SPA + SAP Hybris (Java/Spring) — OCC API integration, OAuth2 auth, Gigya SSO, SAP CPI data flows',
      'DNP (Japan): Next.js + NestJS — teacher exam upload pipeline, per-student column layout, Redis + Memcached caching, Azure Blob storage',
      'Led cross-functional alignment with BA teams, senior devs, and project managers across multiple concurrent projects',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Inspectoro (Product)',
    period: 'Sep 2022 – Sep 2023',
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'Maintained and extended the Inhand platform and Sight Dashboard at a product company. Focus on zero-downtime stability, analytics instrumentation, and Angular upgrades.',
    achievements: [
      'Maintained zero-downtime stability for Inhand platform while shipping new logic and retailer customization features',
      'Implemented Mixpanel tracking across 15+ user flows — enabled data-driven product decisions',
      'Redesigned Sight Dashboard reporting format; improved Angular version and established code review standards',
      'Developed custom backend fields for retailer-specific needs, bridging frontend and backend requirements',
    ],
  },
  {
    role: 'Software Developer',
    company: 'CMC Global (Outsource)',
    period: 'Jul 2021 – Sep 2022',
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'Outsourced engineer delivering full-stack web applications for international clients — B2B platforms, e-commerce, and management dashboards.',
    achievements: [
      'Built customizable drag-and-drop B2B platform using React + Redux for enhanced data monitoring',
      'Delivered SEO-optimized e-commerce platform with Next.js, Angular, and Node.js',
      'Developed React/Node.js management dashboard for contract and employee performance tracking',
      'Built responsive MVC website with Vanilla JavaScript and Python',
    ],
  },
  {
    role: 'Front-End Developer',
    company: 'HDWEBSOFT (Outsource)',
    period: 'Oct 2018 – Jan 2021',
    location: 'Ho Chi Minh City, Vietnam',
    description:
      'Frontend developer on outsourced projects for international clients. Led legacy-to-modern migrations and delivered full-stack web applications across diverse domains.',
    achievements: [
      'Led Trade In Tech migration from HTML5/Vanilla JS to React — architecture setup and full code integration',
      'Delivered 4+ full-stack web apps (Vue.js, React, Node.js) spanning building management, recruitment, e-commerce, and event booking',
      'Contributed to collaborative gaming projects (Poker, Mahjong) with React + Express — real-time interactive features',
      'Set up CI/CD pipelines reducing deployment time by 50%; wrote test suites with Jest and Jasmine',
    ],
  },
]

export const performanceStats = [
  { metric: 'Load Time Reduction', value: '60%', description: 'Legacy system optimization' },
  { metric: 'Bundle Size Cut',     value: '40%', description: 'Code splitting + tree shaking' },
  { metric: 'LCP Achieved',        value: '1.8s', description: 'Largest Contentful Paint' },
  { metric: 'Lighthouse Score',    value: '95+',  description: 'Performance score' },
]

