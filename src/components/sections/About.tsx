import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Sparkles, Code2, Users2, Lightbulb } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 cyber-grid">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <Badge variant="cyan" dot>
              About VS Software Solutions
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Technology With{' '}
              <span className="text-gradient-silver">Purpose.</span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed">
              VS Software Solutions was created with a simple vision: make powerful technology accessible to businesses of every size.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We combine software engineering, artificial intelligence, design and business thinking to create digital products that solve real problems. We believe that technology should never be a cost center or a source of friction—it should be an unfair competitive advantage.
            </p>

            {/* Core Values Icons */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 text-white flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Engineering First</h4>
                <p className="text-[11px] text-zinc-400">Zero tech debt compromises</p>
              </div>

              <div className="space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 text-white flex items-center justify-center">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">AI-Native</h4>
                <p className="text-[11px] text-zinc-400">Intelligent automation</p>
              </div>

              <div className="space-y-1.5">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/10 text-white flex items-center justify-center">
                  <Users2 className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white">Human Centric</h4>
                <p className="text-[11px] text-zinc-400">Intuitive UX for real users</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Mission Card */}
            <div className="glass-panel-interactive rounded-2xl p-6 sm:p-8 border border-white/10 group hover:border-white/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block font-semibold">
                    Core Commitment
                  </span>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
              </div>
              <blockquote className="text-zinc-100 text-base sm:text-lg font-medium italic border-l-2 border-white pl-4 py-1">
                “To build technology that creates measurable value for businesses and their customers.”
              </blockquote>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                Every line of code we ship, every architectural decision we make, and every AI model we orchestrate is measured by the tangible ROI and workflow velocity it unlocks for your organization.
              </p>
            </div>

            {/* Vision Card */}
            <div className="glass-panel-interactive rounded-2xl p-6 sm:p-8 border border-white/10 group hover:border-white/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block font-semibold">
                    Strategic Horizon
                  </span>
                  <h3 className="text-xl font-bold text-white">Our Vision</h3>
                </div>
              </div>
              <blockquote className="text-zinc-100 text-base sm:text-lg font-medium italic border-l-2 border-zinc-400 pl-4 py-1">
                “To become a trusted technology partner for businesses building the future.”
              </blockquote>
              <p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                We empower forward-thinking teams with software and artificial intelligence capabilities previously reserved only for multi-billion-dollar tech giants.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
