import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Typography } from './Typography';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'info';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  variant = 'info',
}) => {
  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const variants = {
    success: 'border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.1)]',
    error: 'border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.1)]',
    info: 'border-primary/30 shadow-[0_0_30px_rgba(13,148,136,0.1)]',
  };

  const icons = {
    success: (
      <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>
    ),
    error: (
      <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
    ),
    info: null,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              'relative w-full max-w-md bg-surface border rounded-2xl p-8 text-center overflow-hidden',
              variants[variant]
            )}
          >
            {/* Ambient Background Effect */}
            <div className={cn(
              "absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-20",
              variant === 'success' ? "bg-emerald-500" : variant === 'error' ? "bg-red-500" : "bg-primary"
            )} />

            {icons[variant]}
            
            <Typography variant="heading3" className="mb-2">
              {title}
            </Typography>
            
            <div className="text-text-muted mb-8">
              {children}
            </div>

            <button
              onClick={onClose}
              className={cn(
                "w-full py-3 px-6 rounded-xl font-bold transition-all duration-200",
                variant === 'success' 
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]" 
                  : variant === 'error'
                  ? "bg-red-600 hover:bg-red-500 text-white"
                  : "bg-primary hover:bg-primary-light text-white"
              )}
            >
              Entendido
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
