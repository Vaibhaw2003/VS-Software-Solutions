import { TechStackCategory } from '../types';

export const techStackData: TechStackCategory[] = [
  {
    category: 'Frontend',
    description: 'Ultra-fast, accessible, and reactive user interfaces across web and mobile platforms.',
    icon: 'Layout',
    skills: [
      { name: 'React', description: 'Component-driven reactive SPAs with seamless state management', level: 'Core Frontend' },
      { name: 'Next.js', description: 'Server-side rendering, static generation, and edge routing', level: 'Production SSR' },
      { name: 'Flutter', description: 'High-performance cross-platform iOS and Android applications', level: 'Mobile Native' },
      { name: 'TypeScript', description: 'Strict type safety ensuring zero runtime regressions', level: 'Language standard' },
      { name: 'Tailwind CSS', description: 'Utility-first modern design token system & fluid responsiveness', level: 'UI Framework' }
    ]
  },
  {
    category: 'Backend',
    description: 'Fault-tolerant microservices, resilient APIs, and concurrent processing architectures.',
    icon: 'Server',
    skills: [
      { name: 'Node.js', description: 'Event-driven, asynchronous high-throughput backend services', level: 'Runtime' },
      { name: 'Python', description: 'Data processing pipelines, scientific computing & AI services', level: 'Language' },
      { name: 'Java', description: 'Robust, enterprise-grade distributed systems and business logic', level: 'Enterprise' },
      { name: 'FastAPI / Express', description: 'Low-latency REST and GraphQL API gateways', level: 'Framework' }
    ]
  },
  {
    category: 'Database',
    description: 'Relational, document, and in-memory databases structured for zero data loss and sub-10ms queries.',
    icon: 'Database',
    skills: [
      { name: 'PostgreSQL', description: 'ACID-compliant relational database with JSONB and vector extensions', level: 'Primary RDBMS' },
      { name: 'MongoDB', description: 'Flexible schemaless NoSQL database for rapid document iterations', level: 'Document Store' },
      { name: 'Firebase', description: 'Real-time client state synchronization and serverless authentication', level: 'Realtime Backend' },
      { name: 'Redis', description: 'Ultra-fast in-memory cache, pub/sub bus, and rate-limiting store', level: 'Cache & Queue' }
    ]
  },
  {
    category: 'AI & Machine Learning',
    description: 'Next-generation generative AI, retrieval systems, and predictive models.',
    icon: 'Brain',
    skills: [
      { name: 'Python (PyTorch)', description: 'Model training, fine-tuning, embeddings, and inference pipelines', level: 'AI Engineering' },
      { name: 'Machine Learning', description: 'Classification, anomaly detection, regression, and forecasting algorithms', level: 'Data Science' },
      { name: 'LLM APIs', description: 'OpenAI, Anthropic Claude, and Gemini model orchestrations', level: 'Generative AI' },
      { name: 'Vector DBs & RAG', description: 'Semantic retrieval, Pinecone, Chroma, and hybrid search', level: 'Knowledge Retrieval' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    description: 'Elastic containerized infrastructure with continuous deployment and automated recovery.',
    icon: 'CloudRain',
    skills: [
      { name: 'AWS', description: 'Elastic compute (EC2, ECS), serverless Lambda, S3, and RDS architectures', level: 'Cloud Infrastructure' },
      { name: 'Google Cloud', description: 'Cloud Run, Vertex AI, BigQuery, and scalable multi-region clusters', level: 'Cloud & Data' },
      { name: 'Docker', description: 'Immutable container packaging for consistent dev-to-prod parity', level: 'Containerization' },
      { name: 'CI/CD Pipelines', description: 'GitHub Actions, automated testing, linting, and zero-downtime rollouts', level: 'DevOps' }
    ]
  }
];
