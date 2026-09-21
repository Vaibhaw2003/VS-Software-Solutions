import { ProcessStep } from '../types';

export const processData: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, users, workflows, and core commercial objectives.',
    activities: [
      'Stakeholder & User Research',
      'Feasibility & Technical Assessment',
      'Competitive Landscape Analysis',
      'Key Metric & KPI Definition'
    ],
    deliverable: 'Discovery Report & Technical Architecture Brief'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Define the product strategy, technology stack selection, and milestone roadmap.',
    activities: [
      'Tech Stack & Cloud Architecture Spec',
      'Database Schema & Data Flow Mapping',
      'Sprint Breakdown & Milestones',
      'Risk Mitigation Strategy'
    ],
    deliverable: 'Product Specification & Sprint Blueprint'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create intuitive user experiences, interactive prototypes, and production UI design.',
    activities: [
      'User Journey & Wireframing',
      'Interactive Design System & Tokens',
      'High-Fidelity UI Mockups',
      'Usability Testing & Feedback Loops'
    ],
    deliverable: 'Production Design System & Interactive Prototypes'
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop, test, benchmark, and optimize the software with weekly transparent demos.',
    activities: [
      'Clean Modular TypeScript Coding',
      'Continuous Integration / Deployment (CI/CD)',
      'Automated Testing & Security Scans',
      'Performance Profiling & Optimization'
    ],
    deliverable: 'Production-Ready Software & Test Suites'
  },
  {
    number: '05',
    title: 'Launch & Scale',
    description: 'Deploy the product, configure continuous telemetry, and monitor ongoing scale.',
    activities: [
      'Zero-Downtime Production Deployment',
      'Observability, Logs & Telemetry Setup',
      'User Analytics & Feedback Tracking',
      'Ongoing Iteration & Scaling Support'
    ],
    deliverable: 'Live Deployment & Operational Playbook'
  }
];
