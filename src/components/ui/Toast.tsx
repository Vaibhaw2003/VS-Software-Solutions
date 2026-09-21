import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastProps {
  isVisible: boolean;
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  isVisible,
  message,
  type = 'success',
  onClose,
}) => {
  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-zinc-200 flex-shrink-0" />,
  };

  const borders = {
    success: 'border-emerald-500/30 bg-[#090e0b]/95 text-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    error: 'border-rose-500/30 bg-[#14080a]/95 text-rose-200 shadow-[0_0_30px_rgba(244,63,94,0.15)]',
    info: 'border-white/20 bg-[#0e0e12]/95 text-zinc-100 shadow-[0_0_30px_rgba(255,255,255,0.1)]',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full pointer-events-auto"
        >
          <div
            className={`flex items-center gap-3 p-4 rounded-xl border backdrop-blur-md ${borders[type]}`}
          >
            {icons[type]}
            <p className="text-sm font-medium flex-1 text-zinc-100">{message}</p>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/10 rounded-md transition-colors text-zinc-400 hover:text-white"
              aria-label="Dismiss toast"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
