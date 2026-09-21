import { SolutionItem } from '../types';

export const solutionsData: SolutionItem[] = [
  {
    id: 'business-management',
    title: 'Business Management Systems',
    tagline: 'End-to-end unified operations engine',
    description: 'Centralize fragmented operations, team collaboration, permissions, task lifecycles, and core internal workflows in one streamlined interface.',
    features: ['Workflow Automation', 'Department Hubs', 'Audit Logs', 'Granular RBAC'],
    icon: 'Briefcase',
    category: 'Operations'
  },
  {
    id: 'crm-customer-platforms',
    title: 'CRM & Customer Platforms',
    tagline: 'Intelligent lead tracking and customer journeys',
    description: 'Track deals, engage prospects automatically, log customer interactions, and improve lifetime retention with context-aware client portals.',
    features: ['Pipeline Management', 'Automated Sequences', 'Lead Scoring', 'Multi-channel Inboxes'],
    icon: 'Users',
    category: 'Growth'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots & Virtual Copilots',
    tagline: '24/7 intelligent conversational assistants',
    description: 'Context-aware AI assistants trained on your proprietary company knowledge to qualify inbound leads, resolve support tickets, and guide users.',
    features: ['RAG Knowledge Base', 'Human Handoff', 'Multi-lingual Support', 'CRM Integration'],
    icon: 'Bot',
    category: 'AI'
  },
  {
    id: 'inventory-billing',
    title: 'Inventory & Billing Software',
    tagline: 'Real-time stock telemetry and automated invoices',
    description: 'Eliminate stock-outs, synchronize multi-warehouse inventory in real-time, generate compliant GST/tax invoices, and reconcile recurring payments.',
    features: ['Barcode/SKU Tracking', 'Automated GST Invoices', 'Low Stock Alerts', 'Ledger Sync'],
    icon: 'Receipt',
    category: 'Operations'
  },
  {
    id: 'ecommerce-platforms',
    title: 'E-commerce Platforms',
    tagline: 'High-conversion headless digital storefronts',
    description: 'Lightning-fast shopping experiences with instant search, frictionless one-click checkout, customer accounts, and global payment gateways.',
    features: ['Sub-second Checkout', 'Global Currencies', 'Inventory Sync', 'Custom Discounts'],
    icon: 'ShoppingBag',
    category: 'Growth'
  },
  {
    id: 'saas-applications',
    title: 'SaaS Applications',
    tagline: 'Multi-tenant commercial software engines',
    description: 'Cloud software platforms engineered for recurring subscriptions, team management, automated provisioning, and metered usage analytics.',
    features: ['Tenant Isolation', 'Stripe Billing Engine', 'API Gateway', 'Customer Portals'],
    icon: 'Layers',
    category: 'Enterprise'
  },
  {
    id: 'analytics-dashboards',
    title: 'Analytics Dashboards',
    tagline: 'Executive telemetry and live data visualization',
    description: 'Transform complex business data into intuitive real-time visualizations, KPI alerts, and predictive business intelligence for executive decision-makers.',
    features: ['Live Event Streaming', 'Custom Metric Builders', 'Automated PDF Reports', 'Role Filtering'],
    icon: 'BarChart3',
    category: 'Enterprise'
  },
  {
    id: 'custom-enterprise',
    title: 'Custom Enterprise Software',
    tagline: 'Bespoke high-security enterprise solutions',
    description: 'Mission-critical enterprise software tailored to exact compliance requirements, existing legacy system bridges, and high-load performance demands.',
    features: ['SOC2/GDPR Ready', 'SSO & SAML Integration', 'High Availability SLA', 'Legacy API Adapters'],
    icon: 'Shield',
    category: 'Enterprise'
  }
];
