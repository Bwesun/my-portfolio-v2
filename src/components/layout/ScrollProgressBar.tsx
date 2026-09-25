import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
      <motion.div
        className="h-full bg-gradient-to-r from-accent-light via-accent to-accent-dark"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }} />
      
    </div>);

}