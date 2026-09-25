import React from 'react';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { SectionHeading } from '../ui/SectionHeading';
import { stats } from '../../data/stats';

export function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden bg-bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Impact"
          title="Achievements in Numbers"
          description="Real outcomes delivered across enterprise platforms, fintech systems, and AI products." />
        
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) =>
          <RevealOnScroll key={stat.id} delay={index * 0.08}>
              <GlassCard className="flex h-full flex-col items-center gap-2 p-6 text-center" hover={false}>
                <span className="text-3xl font-extrabold text-text sm:text-4xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm leading-snug text-muted">{stat.label}</span>
              </GlassCard>
            </RevealOnScroll>
          )}
        </div>
      </div>
    </section>);

}