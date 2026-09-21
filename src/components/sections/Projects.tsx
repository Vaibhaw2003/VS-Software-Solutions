import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Activity,
  Layers,
  Bot,
  ShoppingBag,
  ExternalLink,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { projectsData } from '../../data/projectsData';
import { ProjectItem } from '../../types';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Custom visual illustration for each project mockup without stock photos
  const renderProjectVisual = (projectId: string) => {
    switch (projectId) {
      case 'tradeboot-ai':
        return (
          <div className="h-48 w-full bg-[#08080b] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-200">
              <span className="flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-white animate-pulse" />
                TRADEBOOT/TICKER-AI
              </span>
              <span className="text-white font-bold">+18.4% (Live)</span>
            </div>
            {/* Simulated Candle/Wave Chart */}
            <div className="flex items-end gap-1.5 h-24 pt-2">
              {[40, 65, 30, 80, 55, 90, 75, 95, 60, 85, 100, 110, 95, 120].map((val, idx) => (
                <div
                  key={idx}
                  style={{ height: `${val * 0.7}%` }}
                  className="flex-1 bg-gradient-to-t from-zinc-600/40 to-white rounded-t-sm"
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-400 pt-1">
              <span>Sentiment: Bullish</span>
              <span>Predictive Signal: BUY #492</span>
            </div>
          </div>
        );

      case 'business-management-platform':
        return (
          <div className="h-48 w-full bg-[#09090d] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-white" />
                ENTERPRISE ERP &bull; SYNC
              </span>
              <span className="text-zinc-200">Active Node</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-auto">
              <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">
                <span className="text-[10px] text-zinc-400 block">Orders</span>
                <span className="font-mono text-xs font-bold text-white">1,840</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">
                <span className="text-[10px] text-zinc-400 block">Ledger</span>
                <span className="font-mono text-xs font-bold text-white">Synced</span>
              </div>
              <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">
                <span className="text-[10px] text-zinc-400 block">Warehouses</span>
                <span className="font-mono text-xs font-bold text-zinc-200">4 Active</span>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>Invoices Gen: 100% Tax Compliant</span>
              <span>Uptime: 99.99%</span>
            </div>
          </div>
        );

      case 'ai-customer-assistant':
        return (
          <div className="h-48 w-full bg-[#08080b] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1">
                <Bot className="w-3.5 h-3.5 text-white" />
                CONVERSATIONAL COPILOT
              </span>
              <span className="text-zinc-300 text-[10px] font-mono">● Online</span>
            </div>
            <div className="space-y-2 my-auto">
              <div className="bg-white/[0.04] p-2 rounded-lg text-xs text-zinc-300 max-w-[85%]">
                “Hi, how can I configure custom API rate limits for our team?”
              </div>
              <div className="bg-white/[0.08] border border-white/15 p-2 rounded-lg text-xs text-white max-w-[88%] ml-auto">
                “You can configure token bucket quotas in Settings &gt; Rate Limiting or via our REST endpoint.”
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>RAG Response: 0.9s</span>
              <span>Lead Qualified</span>
            </div>
          </div>
        );

      case 'ecommerce-platform':
      default:
        return (
          <div className="h-48 w-full bg-[#0a0a0e] p-4 flex flex-col justify-between relative overflow-hidden border-b border-white/5">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-300">
              <span className="flex items-center gap-1">
                <ShoppingBag className="w-3.5 h-3.5 text-white" />
                HEADLESS STORE ENGINE
              </span>
              <span className="text-zinc-300">Global Edge</span>
            </div>
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="bg-white/[0.04] p-2.5 rounded-lg border border-white/5">
                <span className="text-[10px] text-zinc-400 block font-mono">Cart Checkout</span>
                <span className="text-xs font-bold text-white">0.4s Instant</span>
              </div>
              <div className="bg-white/[0.04] p-2.5 rounded-lg border border-white/5">
                <span className="text-[10px] text-zinc-400 block font-mono">Mobile Score</span>
                <span className="text-xs font-bold text-white">100/100 Core</span>
              </div>
            </div>
            <div className="flex justify-between text-[10px] font-mono text-zinc-400">
              <span>Dynamic Edge Caching</span>
              <span>Stripe Elements</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#050508] border-t border-white/[0.08]">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot className="mb-4">
            Selected Work &amp; Case Studies
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What We <span className="text-gradient-silver">Build</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            A portfolio of high-impact software, AI systems, and scalable digital architectures designed for modern digital organizations.
          </p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel-interactive rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                {renderProjectVisual(project.id)}

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-zinc-300 font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/5">
                      Case Study Available
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 font-mono mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Impact Metrics strip */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#09090d] border border-white/5 mb-6">
                    {project.impactMetrics.map((m, i) => (
                      <div key={i} className="text-center">
                        <span className="block font-mono text-sm sm:text-base font-bold text-white">
                          {m.value}
                        </span>
                        <span className="text-[10px] text-zinc-400">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-zinc-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* View Case Study Button */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold bg-white/[0.04] text-zinc-200 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/25 transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        subtitle={`${selectedProject?.category} • Architecture Breakdown`}
        maxWidth="xl"
      >
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold mb-2">
                Executive Overview
              </h4>
              <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5">
                <h5 className="text-xs font-mono uppercase text-rose-400 font-semibold mb-2">
                  The Challenge
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/5">
                <h5 className="text-xs font-mono uppercase text-zinc-200 font-semibold mb-2">
                  The Engineering Solution
                </h5>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold mb-3">
                Measurable Impact &amp; Metrics
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {selectedProject.impactMetrics.map((metric, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#101015] border border-white/10 text-center"
                  >
                    <span className="text-lg sm:text-2xl font-bold font-mono text-white block">
                      {metric.value}
                    </span>
                    <span className="text-xs text-zinc-300 font-medium">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold mb-2">
                Implemented Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => {
                  setSelectedProject(null);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) {
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                    window.dispatchEvent(
                      new CustomEvent('preselect-service', {
                        detail: `Custom project inspired by ${selectedProject.title}`,
                      })
                    );
                  }
                }}
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Build Similar Architecture
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto"
              >
                Close Case Study
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
