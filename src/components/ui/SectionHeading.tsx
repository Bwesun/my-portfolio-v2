import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'center' }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-14`}>
      
      {eyebrow &&
      <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-light">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      }
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </motion.div>);

}