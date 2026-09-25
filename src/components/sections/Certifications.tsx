import React from 'react';
import { AwardIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { certifications } from '../../data/certifications';

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Education"
          description="Formal education and specialized training underpinning a security-conscious, full-stack approach to engineering." />
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) =>
          <RevealOnScroll key={cert.id} delay={index * 0.05}>
              <GlassCard className="flex h-full items-start gap-4 p-6">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                  <AwardIcon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold leading-snug text-text">{cert.title}</h3>
                  <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
                </div>
              </GlassCard>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>);

}