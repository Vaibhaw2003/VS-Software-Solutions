import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detection
      const sections = ['home', 'services', 'solutions', 'about', 'projects', 'contact'];
      const currentScroll = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= currentScroll) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060911]/88 backdrop-blur-xl border-b border-amber-500/[0.12] shadow-[0_10px_30px_rgba(0,0,0,0.7)] py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="VS Software Solutions Home"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 via-amber-500 to-amber-700 p-[1px] shadow-[0_0_20px_rgba(245,158,11,0.45)] group-hover:shadow-[0_0_28px_rgba(245,158,11,0.65)] transition-all">
                <div className="w-full h-full bg-[#08090f] rounded-[11px] flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-amber-600 font-extrabold text-sm font-mono">
                      VS
                    </span>
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
                  VS
                  <span className="text-amber-400 font-mono text-sm">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-amber-500/70 font-mono -mt-1 hidden sm:block">
                  Software Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-amber-500/[0.04] border border-amber-500/[0.12] backdrop-blur-md px-3 py-1.5 rounded-full shadow-inner">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-4 py-1.5 text-xs lg:text-sm font-medium transition-colors rounded-full ${
                      isActive
                        ? 'text-amber-200'
                        : 'text-slate-400 hover:text-amber-300 hover:bg-amber-500/[0.06]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-amber-500/[0.10] border border-amber-500/30 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.15)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                as="a"
                href="#contact"
                onClick={(e: any) => handleNavClick(e, '#contact')}
                rightIcon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />}
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex items-center md:hidden gap-2">
              <Button
                variant="primary"
                size="sm"
                as="a"
                href="#contact"
                onClick={(e: any) => handleNavClick(e, '#contact')}
                className="text-xs px-3 py-1.5"
              >
                Start
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-amber-500/[0.07] border border-amber-500/20 text-amber-400 hover:text-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 p-4 md:hidden"
          >
            <div className="border border-amber-500/20 rounded-2xl p-6 shadow-2xl backdrop-blur-2xl bg-[#0a0f1d]/98 space-y-4">
              <div className="text-xs font-mono text-amber-500/70 uppercase tracking-wider pb-2 border-b border-amber-500/10 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>VS Software Solutions Navigation</span>
              </div>
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-amber-500/10 text-amber-200 border border-amber-500/30'
                          : 'text-slate-400 hover:bg-amber-500/6 hover:text-amber-300'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-amber-400" />}
                    </a>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-amber-500/10">
                <Button
                  variant="primary"
                  size="md"
                  as="a"
                  href="#contact"
                  onClick={(e: any) => handleNavClick(e, '#contact')}
                  className="w-full justify-center"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
