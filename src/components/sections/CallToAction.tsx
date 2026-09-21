import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';

export const CallToAction: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-white/25 via-zinc-400/20 to-zinc-700/25 shadow-[0_0_80px_rgba(255,255,255,0.06)]"
        >
          <div className="relative rounded-[22px] bg-gradient-to-b from-[#09090d] to-[#050507] px-8 py-14 sm:px-14 sm:py-20 text-center overflow-hidden border border-white/15">
            {/* Ambient Background Circles */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/[0.04] rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-zinc-400/[0.05] rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-zinc-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5 text-zinc-200" />
                <span>Ready to Transform Your Digital Infrastructure?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Have an Idea? <span className="text-gradient-silver">Let’s Build It.</span>
              </h2>

              <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Whether you need a website, mobile application, AI solution or complete software platform, VS Software Solutions can help turn your idea into reality.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={scrollToContact}
                  rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                >
                  Start a Project
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={scrollToContact}
                  leftIcon={<MessageSquare className="w-4 h-4 text-zinc-300" />}
                >
                  Talk to Us
                </Button>
              </div>

              <div className="pt-6 text-xs font-mono text-zinc-500">
                Average reply time: &lt; 4 hours &bull; Strict NDA &amp; IP protection guaranteed
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
