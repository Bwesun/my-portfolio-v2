import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpIcon } from 'lucide-react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 480);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible &&
      <motion.button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="glass-panel fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full text-text shadow-glow-sm transition-colors duration-200 hover:border-accent/50 hover:text-accent-light"
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.9 }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ y: -2 }}>
        
          <ArrowUpIcon className="h-4 w-4" />
        </motion.button>
      }
    </AnimatePresence>);

}