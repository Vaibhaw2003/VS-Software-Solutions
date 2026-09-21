import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Sparkles, Clock } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  subtext: string;
  icon: React.ReactNode;
}

const stats: StatItem[] = [
  {
    value: '10+',
    label: 'Projects Delivered',
    subtext: 'High-performance web, mobile & AI platforms',
    icon: <CheckCircle2 className="w-5 h-5 text-white" />,
  },
  {
    value: '5+',
    label: 'Technology Solutions',
    subtext: 'Custom architectures & production systems',
    icon: <Sparkles className="w-5 h-5 text-zinc-300" />,
  },
  {
    value: '99%',
    label: 'Client Satisfaction',
    subtext: 'Obsession with delivery velocity and code quality',
    icon: <ShieldCheck className="w-5 h-5 text-zinc-300" />,
  },
  {
    value: '24/7',
    label: 'Technical Support',
    subtext: 'Uninterrupted systems monitoring & availability',
    icon: <Clock className="w-5 h-5 text-zinc-400" />,
  },
];

export const Stats: React.FC = () => {
  return (
    <section className="relative py-12 border-y border-white/[0.08] bg-[#09090d]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Transparent Milestone Notice */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.05]">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Company Benchmarks &amp; Milestones
          </span>
          <span className="text-[10px] font-mono text-zinc-300 bg-white/[0.05] border border-white/10 px-2.5 py-0.5 rounded-md">
            Verified Targets &bull; Ready for Growth
          </span>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="flex items-center gap-2 mb-2">
                {stat.icon}
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-mono tracking-tight group-hover:text-zinc-300 transition-colors">
                  {stat.value}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-semibold text-zinc-200">
                {stat.label}
              </h4>
              <p className="mt-1 text-xs text-zinc-400 leading-normal">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
