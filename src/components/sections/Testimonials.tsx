import React from 'react';
import { QuoteIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { testimonials } from '../../data/testimonials';

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Client & Team Feedback"
          title="What People Say"
          description="Feedback from clients, colleagues, and teams I've collaborated with on shipped products." />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) =>
          <RevealOnScroll key={t.id} delay={index * 0.06}>
              <GlassCard className="flex h-full flex-col p-6">
                <QuoteIcon className="h-6 w-6 text-accent/50" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-text/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent-light">
                    {t.avatarInitials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">{t.name}</p>
                    <p className="text-xs text-muted">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>);

}