export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  icon: string;
  tags: string[];
  fullDescription: string;
  deliverables: string[];
  technologies: string[];
}

export interface AdvantageItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
  badge: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  icon: string;
  category: 'Enterprise' | 'AI' | 'Operations' | 'Growth';
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  accentColor: string;
}

export interface TechStackCategory {
  category: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    description: string;
    level: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}
