import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'indigo' | 'emerald' | 'amber' | 'neutral' | 'glow';
  className?: string;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className = '',
  dot = false,
}) => {
  const variantStyles = {
    cyan: 'bg-amber-500/10 text-amber-300 border-amber-500/30 border',
    indigo: 'bg-amber-500/10 text-amber-300 border-amber-500/25 border',
    emerald: 'bg-amber-500/10 text-amber-300 border-amber-500/20 border',
    amber: 'bg-amber-500/15 text-amber-200 border-amber-400/40 border shadow-[0_0_12px_rgba(245,158,11,0.15)]',
    neutral: 'bg-amber-500/8 text-amber-400/80 border-amber-500/20 border',
    glow: 'bg-amber-500/15 text-amber-200 border-amber-400/50 border shadow-[0_0_20px_rgba(245,158,11,0.25)]',
  };

  const dotColors = {
    cyan: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)]',
    indigo: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]',
    emerald: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]',
    amber: 'bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.9)]',
    neutral: 'bg-amber-500/60',
    glow: 'bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.95)]',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wide transition-colors ${variantStyles[variant]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant]}`} />}
      {children}
    </span>
  );
};
