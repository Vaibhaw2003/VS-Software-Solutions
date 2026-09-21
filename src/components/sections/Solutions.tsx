import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Users,
  Bot,
  Receipt,
  ShoppingBag,
  Layers,
  BarChart3,
  Shield,
  Check,
  ArrowRight,
} from 'lucide-react';
import { solutionsData } from '../../data/solutionsData';
import { Badge } from '../ui/Badge';

export const Solutions: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Operations', 'AI', 'Growth', 'Enterprise'];

  const filteredSolutions =
    activeCategory === 'All'
      ? solutionsData
      : solutionsData.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Bot':
        return <Bot className="w-5 h-5" />;
      case 'Receipt':
        return <Receipt className="w-5 h-5" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const handleInquire = (solutionTitle: string) => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(
        new CustomEvent('preselect-service', { detail: solutionTitle })
      );
    }
  };

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#050508] border-t border-white/[0.08]">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="cyan" dot className="mb-4">
              Tailored Digital Deployments
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Solutions for <span className="text-gradient-silver">Modern Businesses</span>
            </h2>
            <p className="mt-4 text-base text-zinc-300">
              Purpose-engineered platforms designed to solve acute operational bottlenecks, automate workflows, and drive compound growth.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-zinc-950 font-bold shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSolutions.map((sol, index) => (
            <motion.div
              key={sol.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="glass-panel-interactive rounded-2xl p-6 flex flex-col justify-between border border-white/10 group"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 text-white flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/20 transition-all">
                    {getIcon(sol.icon)}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/5">
                    {sol.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-zinc-200 transition-colors">
                  {sol.title}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mb-3">
                  {sol.tagline}
                </p>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  {sol.description}
                </p>

                {/* Key feature tags */}
                <div className="space-y-1.5 pt-4 border-t border-white/5">
                  {sol.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => handleInquire(sol.title)}
                  className="w-full py-2 rounded-xl text-xs font-semibold bg-white/[0.03] text-zinc-300 group-hover:bg-white/[0.1] group-hover:text-white border border-white/5 group-hover:border-white/20 transition-all flex items-center justify-center gap-1.5 focus:outline-none cursor-pointer"
                >
                  <span>Build This Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
