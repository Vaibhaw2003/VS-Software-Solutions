import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layout,
  Server,
  Database,
  Brain,
  CloudRain,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import { techStackData } from '../../data/techStackData';
import { Badge } from '../ui/Badge';

export const Technologies: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Brain':
        return <Brain className="w-5 h-5" />;
      case 'CloudRain':
        return <CloudRain className="w-5 h-5" />;
      default:
        return <Code2 className="w-5 h-5" />;
    }
  };

  const currentCategory = techStackData[selectedCategory];

  return (
    <section className="relative py-24 sm:py-32 cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" dot className="mb-4">
            Our Architecture &amp; Stack
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Built With <span className="text-gradient-silver">Modern Technology</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            We engineer software on proven, resilient, and enterprise-grade stacks designed for high performance, fault tolerance, and developer velocity.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {techStackData.map((cat, idx) => {
            const isSelected = selectedCategory === idx;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedCategory(idx)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-white/[0.1] text-white border border-white/30 shadow-[0_0_20px_rgba(255,255,255,0.08)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/5'
                }`}
              >
                <span className={isSelected ? 'text-white' : 'text-zinc-500'}>
                  {getCategoryIcon(cat.icon)}
                </span>
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Card */}
        <motion.div
          key={currentCategory.category}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass-panel rounded-2xl p-6 sm:p-10 border border-white/10 max-w-5xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span className="p-2 rounded-lg bg-white/[0.08] text-white border border-white/20">
                  {getCategoryIcon(currentCategory.icon)}
                </span>
                {currentCategory.category} Stack
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                {currentCategory.description}
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-300 self-start sm:self-center px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
              Verified Production Ready
            </span>
          </div>

          {/* Technology Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/25 hover:bg-white/[0.05] transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/5">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* Category Summary Footnote */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Full compliance with OWASP, ISO, and modern Web Standards</span>
            </div>
            <span>Modular &bull; Scalable &bull; Maintainable</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
