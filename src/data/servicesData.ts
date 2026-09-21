import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Web Development',
    shortDesc: 'Modern, scalable and high-performance websites and web applications built for speed, security, and conversion.',
    icon: 'Globe',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'SSR/SSG'],
    fullDescription: 'We build high-performance web applications, enterprise portals, and customer-facing websites. From responsive architectures to dynamic single-page and server-rendered applications, our solutions combine fluid user experience with high security and SEO visibility.',
    deliverables: [
      'Custom Web Applications & SPA/PWA architectures',
      'High-conversion Corporate & Marketing Websites',
      'Headless CMS & E-commerce Implementations',
      'Performance Optimization & Core Web Vitals < 1s',
      'Full Responsive Compatibility & Accessibility (WCAG 2.1)'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'REST APIs', 'Vite']
  },
  {
    id: 'mobile-development',
    number: '02',
    title: 'Mobile App Development',
    shortDesc: 'Beautiful and reliable Android and iOS applications using modern cross-platform and native technologies.',
    icon: 'Smartphone',
    tags: ['iOS', 'Android', 'Flutter', 'React Native', 'Offline-First'],
    fullDescription: 'Deliver seamless mobile experiences directly into your users\' hands. We develop robust, reactive, and fluid mobile applications with native device integrations, offline sync, biometric security, and streamlined app store releases.',
    deliverables: [
      'Cross-platform iOS and Android App Development',
      'Smooth 60/120fps Gesture & Fluid Animations',
      'Real-time Data Sync & Offline Local Caching',
      'Biometric Authentication & Secure Hardware Key storage',
      'App Store & Google Play Store Compliance & Publishing'
    ],
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'SQLite']
  },
  {
    id: 'ai-machine-learning',
    number: '03',
    title: 'AI & Machine Learning',
    shortDesc: 'AI-powered applications, intelligent automation, chatbots, predictive systems, and fine-tuned LLM workflows.',
    icon: 'Bot',
    tags: ['LLMs', 'RAG', 'Computer Vision', 'Predictive AI', 'NLP'],
    fullDescription: 'Turn data into real competitive advantage. We engineer pragmatic AI solutions ranging from context-aware generative AI assistants and retrieval-augmented generation (RAG) to custom predictive models that drive intelligent automation.',
    deliverables: [
      'Enterprise LLM & RAG Knowledgebase Systems',
      'Intelligent Autonomous Chatbots & Copilots',
      'Predictive Analytics & Churn / Demand Forecasting',
      'Computer Vision & Automated Document Processing',
      'AI Workflow Orchestration with Human-in-the-Loop'
    ],
    technologies: ['Python', 'PyTorch', 'OpenAI/Anthropic/Gemini APIs', 'LangChain', 'LlamaIndex', 'Vector DBs (Pinecone, Chroma)']
  },
  {
    id: 'saas-development',
    number: '04',
    title: 'SaaS Development',
    shortDesc: 'Scalable cloud-based software products designed for multi-tenancy, recurring business growth, and rapid iteration.',
    icon: 'Layers',
    tags: ['Multi-Tenant', 'Stripe Billing', 'RBAC', 'Microservices', 'Analytics'],
    fullDescription: 'Transforming software concepts into venture-scale, revenue-generating SaaS platforms. We architect multi-tenant infrastructures with strict tenant data isolation, automated billing cycles, feature flagging, and onboarding experiences.',
    deliverables: [
      'Multi-tenant Architecture & Isolated Databases',
      'Subscription, Invoicing & Usage-based Billing',
      'Role-based Access Control (RBAC) & Team Workspaces',
      'Self-serve Onboarding & Product Analytics',
      'API-first integrations and Webhook dispatchers'
    ],
    technologies: ['Node.js', 'Go', 'PostgreSQL', 'Stripe API', 'Redis', 'Docker', 'Kubernetes']
  },
  {
    id: 'cloud-backend',
    number: '05',
    title: 'Cloud & Backend',
    shortDesc: 'Secure APIs, databases, resilient cloud infrastructure, and scalable backend microservices engineered to handle load.',
    icon: 'Cloud',
    tags: ['AWS', 'GCP', 'Docker', 'PostgreSQL', 'GraphQL', 'Kubernetes'],
    fullDescription: 'The engine that powers your business logic. We design cloud-native, fault-tolerant backends and microservices that scale horizontally with high uptime, low latency, automated CI/CD pipelines, and rigorous data compliance.',
    deliverables: [
      'High-throughput RESTful and GraphQL API Design',
      'Database Schema Architecture, Optimization & Sharding',
      'Containerization (Docker) & Orchestration (K8s)',
      'Infrastructure as Code (Terraform) & Automated CI/CD',
      'Zero-downtime Deployments & 24/7 Health Telemetry'
    ],
    technologies: ['AWS', 'Google Cloud', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'Node.js', 'Python']
  },
  {
    id: 'business-automation',
    number: '06',
    title: 'Business Automation',
    shortDesc: 'Automate repetitive workflows, bridge disjointed tools, and multiply team productivity with intelligent software.',
    icon: 'Cpu',
    tags: ['Workflows', 'Integration', 'Webhooks', 'CRM Sync', 'RPA'],
    fullDescription: 'Eliminate friction and human error by connecting your disparate business systems. We build bespoke automation pipelines, automated data extraction, ERP/CRM synchronization, and event-driven operational engines.',
    deliverables: [
      'End-to-End Workflow & Task Automation Pipelines',
      'CRM, ERP & Accounting Software Deep Integrations',
      'Automated Invoicing, Payment & Ledger Reconciliation',
      'Event-Driven Webhook Relays & Alerting Dashboards',
      'Custom Internal Employee & Operations Tooling'
    ],
    technologies: ['Node.js', 'Python', 'Zapier/n8n/Make', 'Webhooks', 'REST APIs', 'PostgreSQL']
  }
];
