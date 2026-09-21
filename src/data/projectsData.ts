import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: 'tradeboot-ai',
    title: 'TradeBoot AI',
    category: 'AI & Financial Technology',
    tagline: 'AI-Powered Stock Market Telemetry & Predictive Analytics',
    description: 'A cutting-edge market intelligence platform that processes real-time equities data, computes technical sentiment, and generates algorithmic trend signals with sub-millisecond execution telemetry.',
    challenge: 'Retail and institutional traders needed an algorithmic system capable of crunching multi-exchange order books and sentiment feeds without latency lag or false-positive indicator noise.',
    solution: 'Engineered a concurrent Python/Node streaming engine paired with custom LLM financial summarizers and interactive TradingView chart integrations for real-time risk alerts.',
    impactMetrics: [
      { label: 'Latency', value: '< 45ms' },
      { label: 'Model Accuracy', value: '91.4%' },
      { label: 'Active Signals/Day', value: '1,200+' }
    ],
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'Tailwind', 'WebSockets', 'Redis', 'PostgreSQL'],
    accentColor: 'from-white/15 via-zinc-400/10 to-transparent'
  },
  {
    id: 'business-management-platform',
    title: 'Business Management Platform',
    category: 'Enterprise SaaS & Operations',
    tagline: 'Unified Sales, Expense, Inventory & Invoicing OS',
    description: 'An all-in-one business execution system engineered to streamline daily operational workflows, track revenue pipelines, manage warehouse stocks, and generate tax-compliant invoices.',
    challenge: 'Small and mid-sized enterprises were juggling 5+ disconnected SaaS tools for billing, inventory, and accounting, leading to reconciliations mismatches and severe human error.',
    solution: 'Designed an integrated multi-tenant operations suite with automated ledger sync, low-stock trigger automation, and an intuitive executive analytics cockpit.',
    impactMetrics: [
      { label: 'Admin Hours Saved', value: '65%' },
      { label: 'Sync Accuracy', value: '99.98%' },
      { label: 'Invoice Gen Speed', value: '3 Sec' }
    ],
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe', 'Tailwind CSS'],
    accentColor: 'from-zinc-300/15 via-zinc-500/10 to-transparent'
  },
  {
    id: 'ai-customer-assistant',
    title: 'AI Customer Assistant',
    category: 'Conversational AI & Customer Experience',
    tagline: 'Intelligent 24/7 Support & Lead-Generation Copilot',
    description: 'An enterprise conversational AI agent that indexes product catalogs, past resolution tickets, and documentation to deliver instant, human-like answers and qualify inbound enterprise leads.',
    challenge: 'Support teams faced overwhelming ticket queues for common queries, resulting in 18+ hour wait times and lost lead conversion opportunities during off-business hours.',
    solution: 'Deployed a RAG-backed conversational agent with context memory, autonomous calendar booking, automated CRM updates, and seamless agent escalation fallback.',
    impactMetrics: [
      { label: 'Resolution Rate', value: '78%' },
      { label: 'Response Time', value: '< 1.2s' },
      { label: 'Lead Capture Lift', value: '+42%' }
    ],
    technologies: ['OpenAI API', 'LangChain', 'Python', 'React', 'Vector DB', 'WebSockets', 'Node.js'],
    accentColor: 'from-white/15 via-zinc-400/10 to-transparent'
  },
  {
    id: 'ecommerce-platform',
    title: 'Modern E-Commerce Platform',
    category: 'Digital Commerce & High-Scale Web',
    tagline: 'Scalable Headless Multi-Storefront Shopping Engine',
    description: 'A blazing fast headless e-commerce store with instant product filtering, lightning-fast edge caching, frictionless checkout, and synchronized inventory across regional fulfillment centers.',
    challenge: 'Traditional monolithic storefronts caused mobile bounce rates above 60% due to slow 4+ second page loads and cart drop-offs during high-traffic flash promotional events.',
    solution: 'Built a decoupled React/Next.js storefront powered by edge CDN caching, instant cart updates, optimized checkout funnel, and automated multi-currency processing.',
    impactMetrics: [
      { label: 'Page Load Time', value: '0.8s' },
      { label: 'Checkout Conversion', value: '+34%' },
      { label: 'Peak Uptime', value: '99.99%' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'AWS CloudFront', 'Stripe'],
    accentColor: 'from-zinc-400/15 via-zinc-600/10 to-transparent'
  }
];
