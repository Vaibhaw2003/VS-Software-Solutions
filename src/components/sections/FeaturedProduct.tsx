import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Sparkles,
  TrendingUp,
  CreditCard,
  Package,
  FileText,
  Bot,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { Toast } from '../ui/Toast';

export const FeaturedProduct: React.FC = () => {
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const features = [
    'Sales Management',
    'Expense Tracking',
    'Customer Management',
    'Inventory Telemetry',
    'Smart Invoices',
    'Analytics Dashboard',
    'AI Business Assistant',
  ];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes('@')) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setWaitlistModalOpen(false);
      setToastMessage(
        `Thank you! ${waitlistEmail} has been added to the Bytevanta Business VIP early access queue.`
      );
      setWaitlistEmail('');
    }, 900);
  };

  return (
    <section className="relative py-24 sm:py-36 overflow-hidden">
      {/* Dynamic Background Mesh Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-[#09090e] to-[#050507] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Highlight Banner Container */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-white/30 via-zinc-400/20 to-zinc-600/30 shadow-[0_0_80px_rgba(255,255,255,0.06)]">
          <div className="rounded-[22px] bg-[#08080c]/98 backdrop-blur-2xl p-8 sm:p-12 lg:p-16 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="glow" dot className="font-mono">
                    Flagship SaaS Spotlight
                  </Badge>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/[0.08] text-white border border-white/20 animate-pulse">
                    Coming Soon &bull; Q3 2026
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Bytevanta{' '}
                  <span className="text-gradient-silver">Business</span>
                </h2>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                  “An intelligent business management platform designed to help small and growing businesses manage customers, sales, expenses, inventory and payments from one place.”
                </p>

                {/* Feature Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-2.5 text-sm font-medium text-zinc-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center text-white flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Early Access CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setWaitlistModalOpen(true)}
                    rightIcon={<Sparkles className="w-4 h-4 text-zinc-950" />}
                  >
                    Request Early Access
                  </Button>
                  <span className="text-xs text-zinc-400 font-mono self-center sm:self-auto">
                    Limited Beta Cohort &bull; Free Tier Included
                  </span>
                </div>
              </div>

              {/* Right Column: High-End Interactive SaaS Mockup */}
              <div className="lg:col-span-6 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative rounded-2xl bg-[#0a0a0e] border border-white/15 p-5 sm:p-6 shadow-2xl overflow-hidden"
                >
                  {/* Mock Window Titlebar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-600" />
                      <div className="w-3 h-3 rounded-full bg-zinc-700" />
                      <div className="w-3 h-3 rounded-full bg-zinc-800" />
                      <span className="ml-2 text-xs font-mono text-zinc-400">
                        app.bytevantabusiness.io/dashboard
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-200 bg-white/[0.06] border border-white/10 px-2 py-0.5 rounded">
                      Live Telemetry
                    </span>
                  </div>

                  {/* Dashboard Metrics Row */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-[#121218] p-3.5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between text-zinc-400 mb-1">
                        <span className="text-xs">Total Revenue</span>
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-white">
                        $48,920.00
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                        +23.4% this month
                      </div>
                    </div>

                    <div className="bg-[#121218] p-3.5 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between text-zinc-400 mb-1">
                        <span className="text-xs">Active Clients</span>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-lg sm:text-xl font-bold font-mono text-white">
                        1,420
                      </div>
                      <div className="text-[10px] text-zinc-400 font-mono mt-0.5">
                        99.2% retention
                      </div>
                    </div>
                  </div>

                  {/* Mini Interactive AI Assistant Notification Widget */}
                  <div className="bg-gradient-to-r from-white/[0.04] via-zinc-800/40 to-transparent p-4 rounded-xl border border-white/15 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white font-mono">
                      <Bot className="w-4 h-4 text-white animate-bounce" />
                      <span>Bytevanta AI Assistant:</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      “Low stock alert: 3 warehouse items require reorder. I have prepared automated purchase invoices for supplier approval.”
                    </p>
                    <div className="flex gap-2 pt-1">
                      <span className="text-[10px] px-2.5 py-1 rounded bg-white text-zinc-950 font-mono font-bold">
                        Approve &amp; Send
                      </span>
                      <span className="text-[10px] px-2.5 py-1 rounded bg-white/5 text-zinc-300 border border-white/10 font-mono">
                        Review Details
                      </span>
                    </div>
                  </div>

                  {/* Quick Modules Nav Strip */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5 text-zinc-200">
                      <FileText className="w-3.5 h-3.5 text-white" />
                      <span>Invoices (14)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-200">
                      <Package className="w-3.5 h-3.5 text-white" />
                      <span>Inventory (Live)</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-200">
                      <CreditCard className="w-3.5 h-3.5 text-white" />
                      <span>Stripe Active</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <Modal
        isOpen={waitlistModalOpen}
        onClose={() => setWaitlistModalOpen(false)}
        title="Join the Bytevanta Business Waitlist"
        subtitle="Exclusive Beta Access & Founder Perks"
      >
        <form onSubmit={handleWaitlistSubmit} className="space-y-4">
          <p className="text-sm text-slate-300">
            Be the first to experience our unified all-in-one business management platform. Get priority onboarding and lifetime discounted founder tier rates.
          </p>

          <div>
            <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
              Work Email Address
            </label>
            <input
              type="email"
              required
              value={waitlistEmail}
              onChange={(e) => setWaitlistEmail(e.target.value)}
              placeholder="founder@yourcompany.com"
              className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/15 text-white placeholder-zinc-500 focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 text-sm"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <Button
              variant="ghost"
              size="md"
              type="button"
              onClick={() => setWaitlistModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              size="md"
              type="submit"
              isLoading={isSubmitting}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Early Access
            </Button>
          </div>
        </form>
      </Modal>

      {/* Toast Feedback */}
      <Toast
        isVisible={!!toastMessage}
        message={toastMessage || ''}
        type="success"
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
