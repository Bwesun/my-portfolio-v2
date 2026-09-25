import React from 'react';
import { BriefcaseIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Path"
          title="Experience Timeline"
          description="Progressively greater ownership across development, leadership, and IT infrastructure." />
        
        <div className="relative pl-8">
          <div className="absolute bottom-1 left-[7px] top-1 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" />
          <ol className="space-y-10">
            {experience.map((item, index) =>
            <RevealOnScroll key={item.id} delay={index * 0.06}>
                <li className="relative">
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-bg">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <GlassCard className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-semibold text-text">{item.role}</h3>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-accent-light/90">
                      <BriefcaseIcon className="h-3.5 w-3.5" /> {item.company}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.points.map((point, i) =>
                    <li key={i} className="flex gap-2 text-sm leading-relaxed text-muted">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                          {point}
                        </li>
                    )}
                    </ul>
                  </GlassCard>
                </li>
              </RevealOnScroll>
            )}
          </ol>
        </div>
      </div>
    </section>);

}