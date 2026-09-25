import React from 'react';
import { motion } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export function RevealOnScroll({ children, delay = 0, className = '', y = 24 }: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}>
      
      {children}
    </motion.div>);

}