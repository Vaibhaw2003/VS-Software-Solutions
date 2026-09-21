import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, ShieldCheck, Handshake, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { whyBytevantaData } from '../../data/whyBytevantaData';

export const WhyBytevanta: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#050508] border-t border-white/[0.08]">
      {/* Radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="glow" dot className="mb-4">
            The VS Software Solutions Edge
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Businesses Choose{' '}
            <span className="text-gradient-silver">VS Software Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            We don't build generic templates. We engineer high-performance software and AI systems designed for lasting competitive advantage.
          </p>
        </div>

        {/* Bento Visual Layout for 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* 1: Innovation (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-white/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                <Rocket className="w-6 h-6" />
              </div>
              <Badge variant="glow">🚀 Innovation</Badge>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
              Next-Gen Technology Architecture
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              We use modern technologies to create future-ready solutions. From containerized microservices to generative AI and LLM agents, our engineering stack prepares your business for the next decade of digital evolution.
            </p>

            {/* Interactive Visual Element: Tech Stack Nodes */}
            <div className="bg-[#09090d] rounded-xl p-4 border border-white/5 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-white font-semibold">Active Tech:</span>
              {['TypeScript', 'React 19', 'Next.js SSR', 'PyTorch LLMs', 'Docker Cloud', 'PostgreSQL'].map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-200 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 2: Performance (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-white/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <Badge variant="neutral">⚡ Performance</Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                Sub-Second Velocity
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Fast, scalable and reliable software engineered for real-world use. We optimize code, query patterns, and network payloads for ultra-low latency.
              </p>
            </div>

            {/* Visual Metric Widget */}
            <div className="bg-[#09090d] rounded-xl p-4 border border-white/5 space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-zinc-300">
                <span>Core Web Vitals</span>
                <span className="text-white font-bold">100 / 100</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '98%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-white to-zinc-400 rounded-full"
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-zinc-400 pt-1">
                <span>TTFB &lt; 80ms</span>
                <span>Uptime 99.99%</span>
              </div>
            </div>
          </motion.div>

          {/* 3: Security (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-white/30 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <Badge variant="neutral">🔐 Security</Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                Hardened Security by Design
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Security and data protection are considered throughout the entire development process. OWASP guidelines, encrypted data at rest, and strict RBAC are foundational.
              </p>
            </div>

            {/* Visual Security Checklist */}
            <div className="bg-[#09090d] rounded-xl p-3 border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>AES-256 Encryption &amp; TLS 1.3 Transmission</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Role-Based Access Control (RBAC) &amp; Token Auth</span>
              </div>
            </div>
          </motion.div>

          {/* 4: Partnership (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden group hover:border-white/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-white">
                <Handshake className="w-6 h-6" />
              </div>
              <Badge variant="neutral">🤝 Partnership</Badge>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
              Dedicated Engineering Collaboration
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
              We work closely with clients from idea to launch and beyond. You get direct access to seasoned architects, transparent milestone demos, continuous updates, and zero bureaucratic delays.
            </p>

            {/* Process Milestone Tracker */}
            <div className="bg-[#09090d] rounded-xl p-4 border border-white/5 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-white/[0.02] rounded-lg">
                <span className="block text-xs font-mono text-white font-semibold">Weekly</span>
                <span className="text-[11px] text-zinc-400">Live Demos</span>
              </div>
              <div className="p-2 bg-white/[0.02] rounded-lg">
                <span className="block text-xs font-mono text-zinc-300 font-semibold">Direct</span>
                <span className="text-[11px] text-zinc-400">Slack &amp; GitHub</span>
              </div>
              <div className="p-2 bg-white/[0.02] rounded-lg">
                <span className="block text-xs font-mono text-white font-semibold">Post-Launch</span>
                <span className="text-[11px] text-zinc-400">Scaling Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
