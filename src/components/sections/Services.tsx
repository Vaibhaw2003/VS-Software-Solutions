import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Bot,
  Layers,
  Cloud,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Code2,
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { ServiceItem } from '../../types';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'Bot':
        return <Bot className="w-6 h-6" />;
      case 'Layers':
        return <Layers className="w-6 h-6" />;
      case 'Cloud':
        return <Cloud className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      default:
        return <Code2 className="w-6 h-6" />;
    }
  };

  const handleStartWithService = (serviceTitle: string) => {
    setSelectedService(null);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Preselect service in contact form if possible
      window.dispatchEvent(
        new CustomEvent('preselect-service', { detail: serviceTitle })
      );
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 cyber-grid">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-16">
          <Badge variant="cyan" dot className="mb-4">
            Services &amp; Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Technology Solutions Built Around{' '}
            <span className="text-gradient-silver">Your Goals.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            From rapid prototypes to enterprise-grade AI and multi-tenant architectures, we deliver engineered excellence at every stage of the software lifecycle.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl p-6 sm:p-8 glass-panel-interactive flex flex-col justify-between"
            >
              {/* Card top shine line on hover */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header: Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 text-white flex items-center justify-center group-hover:bg-white/[0.12] group-hover:border-white/25 transition-all duration-300">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-mono text-2xl font-bold text-zinc-600 group-hover:text-zinc-300 transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zinc-100 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Footer: Tags & Learn More CTA */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-zinc-300 transition-colors group/btn focus:outline-none cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Modal for Service Details */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        subtitle={`${selectedService?.number} — Service Blueprint & Scope`}
      >
        {selectedService && (
          <div className="space-y-6">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {selectedService.fullDescription}
            </p>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold mb-3">
                Key Deliverables &amp; Scope
              </h4>
              <ul className="space-y-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider text-zinc-300 font-semibold mb-3">
                Technologies &amp; Frameworks
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-zinc-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => handleStartWithService(selectedService.title)}
                className="w-full sm:w-auto"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Inquire About {selectedService.title}
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
