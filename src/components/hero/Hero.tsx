import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Cpu, Cloud, Layers } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { TechCanvasVisual } from './TechCanvasVisual';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden cyber-grid"
    >
      {/* Background Top Ambient Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] radial-spotlight pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Tagline / Positioning Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="glow" dot className="py-1.5 px-4 text-xs font-mono">
                Software &amp; AI Technology Company • Build. Innovate. Scale.
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              We Build Technology That Moves Your Business{' '}
              <span className="text-gradient-gold relative inline-block">
                Forward.
                <span className="absolute bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-amber-400 via-amber-300 to-transparent rounded-full opacity-60" />
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              VS Software Solutions builds powerful software, AI solutions, mobile applications, and digital products that help businesses innovate, automate, and scale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo('contact')}
                rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                className="w-full sm:w-auto"
              >
                Start a Project
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('services')}
                className="w-full sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Trust Statement */}
            <div className="pt-6 border-t border-amber-500/15 w-full">
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-400 font-mono">
                <span className="text-amber-600/80 uppercase tracking-widest text-[11px] font-semibold">
                  Core Focus:
                </span>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Code2 className="w-4 h-4 text-amber-400" />
                  <span>Software</span>
                </div>
                <span className="text-amber-700/40">•</span>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span>AI</span>
                </div>
                <span className="text-amber-700/40">•</span>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Cloud className="w-4 h-4 text-amber-400" />
                  <span>Cloud</span>
                </div>
                <span className="text-amber-700/40">•</span>
                <div className="flex items-center gap-1.5 text-slate-200">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>Automation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Futuristic Interactive Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-amber-400/30 via-amber-600/10 to-transparent shadow-[0_0_60px_rgba(245,158,11,0.12)]">
              <div className="relative rounded-[22px] bg-[#07090f]/95 overflow-hidden border border-amber-500/15">
                <TechCanvasVisual />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
