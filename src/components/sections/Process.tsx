import React from 'react';
import { motion } from 'framer-motion';
import { processData } from '../../data/processData';
import { Badge } from '../ui/Badge';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 cyber-grid">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="cyan" dot className="mb-4">
            Our Proven Methodology
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Idea to <span className="text-gradient-silver">Impact.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            A battle-tested 5-step agile engineering framework that minimizes risk, speeds up time-to-market, and guarantees enterprise-grade quality.
          </p>
        </div>

        {/* 5-Step Animated Timeline */}
        <div className="relative">
          {/* Glowing horizontal connector on desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {processData.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group flex flex-col"
              >
                {/* Step Circle & Number Badge */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#09090d] border border-white/20 text-white font-mono font-bold text-lg flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.06)] group-hover:scale-110 group-hover:border-white/40 transition-all duration-300">
                    {step.number}
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 lg:mt-2">
                    Phase {step.number}
                  </span>
                </div>

                {/* Card Body */}
                <div className="glass-panel p-6 rounded-2xl border border-white/10 group-hover:border-white/30 transition-all duration-300 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-white/5">
                      {step.activities.map((act, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white flex-shrink-0" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono text-zinc-400 block">
                      Deliverable:
                    </span>
                    <span className="text-xs text-zinc-200 font-medium">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
