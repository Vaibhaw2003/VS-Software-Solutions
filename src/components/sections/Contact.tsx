import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Send,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ContactFormData } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Web Development',
    budget: '$15,000 - $35,000',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handlePreselect = (e: any) => {
      if (e.detail) {
        setFormData((prev) => ({
          ...prev,
          service: e.detail,
        }));
      }
    };

    window.addEventListener('preselect-service', handlePreselect);
    return () => window.removeEventListener('preselect-service', handlePreselect);
  }, []);

  const serviceOptions = [
    'Web Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'SaaS Development',
    'Cloud & Backend',
    'Business Automation',
    'Custom Enterprise Software',
    'UI/UX & Product Design',
    'General Consultation',
  ];

  const budgetOptions = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Flexible / Milestone-Based',
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief description of your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Description should be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setToastMessage(
        `Thank you ${formData.name}! Your project inquiry has been received. A VS Software Solutions specialist will follow up within 4 hours.`
      );
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'Web Development',
        budget: '$15,000 - $35,000',
        message: '',
      });
      setErrors({});
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 cyber-grid">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="neutral" dot className="mb-4">
            Initiate Engagement
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let’s Build Something <span className="text-gradient-silver">Great.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Tell us about your project, timeline, and vision. We will review your goals and provide an architectural roadmap and estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Trust Badges */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#09090d]/80 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/15 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-zinc-200" />
                <span>Direct Contact Information</span>
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Connect directly with our engineering and leadership team. We are based in India and work with ambitious companies globally.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email */}
                <a
                  href="mailto:hello@bytevanta.com"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/40 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-zinc-500 block">
                      Email Us
                    </span>
                    <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                      hello@bytevanta.com
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 text-zinc-300 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-zinc-500 block">
                      Direct Line (Placeholder)
                    </span>
                    <span className="text-sm font-semibold text-zinc-200 font-mono">
                      +91 XXXXX XXXXX
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/15 text-zinc-300 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-zinc-500 block">
                      Headquarters
                    </span>
                    <span className="text-sm font-semibold text-zinc-200">
                      India <span className="text-xs text-zinc-500 font-mono">(Global Deployments)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                  <CheckCircle2 className="w-4 h-4 text-zinc-300 flex-shrink-0" />
                  <span>Prompt reply within 4 business hours</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-zinc-300 flex-shrink-0" />
                  <span>Standard Non-Disclosure Agreement (NDA) supported</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#09090d]/90 backdrop-blur-xl p-6 sm:p-10 rounded-2xl border border-white/15 relative">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Your Name <span className="text-zinc-300">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-3 rounded-xl bg-[#060608] border text-white placeholder-zinc-600 text-sm focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-400 ring-1 ring-rose-500/50'
                          : 'border-white/10 focus:border-white/50 focus:ring-1 focus:ring-white/30'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Work Email <span className="text-zinc-300">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#060608] border text-white placeholder-zinc-600 text-sm focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400 ring-1 ring-rose-500/50'
                          : 'border-white/10 focus:border-white/50 focus:ring-1 focus:ring-white/30'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Labs Inc."
                      className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/10 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30"
                    />
                  </div>
                </div>

                {/* Service Required & Budget Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/10 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 cursor-pointer"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#09090d] text-zinc-200">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#060608] border border-white/10 text-white text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/30 cursor-pointer"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b} className="bg-[#09090d] text-zinc-200">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                    Project Description <span className="text-zinc-300">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Describe what you want to build, your current timeline, and key technical or commercial goals..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#060608] border text-white placeholder-zinc-600 text-sm focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400 ring-1 ring-rose-500/50'
                        : 'border-white/10 focus:border-white/50 focus:ring-1 focus:ring-white/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full justify-center"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Send Project Inquiry →
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Toast */}
      <Toast
        isVisible={!!toastMessage}
        message={toastMessage || ''}
        type="success"
        onClose={() => setToastMessage(null)}
      />
    </section>
  );
};
