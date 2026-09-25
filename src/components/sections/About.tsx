import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuitIcon, CreditCardIcon, HeartPulseIcon, LayersIcon, SmartphoneIcon, ZapIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { GlassCard } from '../ui/GlassCard';

const focusAreas = [
{ icon: LayersIcon, label: 'Enterprise Software' },
{ icon: CreditCardIcon, label: 'Payment Systems' },
{ icon: BrainCircuitIcon, label: 'AI Applications' },
{ icon: SmartphoneIcon, label: 'Mobile Apps' },
{ icon: ZapIcon, label: 'Web Platforms' },
{ icon: HeartPulseIcon, label: 'High-Performance Systems' }];


export function About() {
  return (
    <section id="about" className="relative bg-bg-soft py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <RevealOnScroll>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="glass-panel relative overflow-hidden rounded-3xl p-3 shadow-glow-sm">
                <img
                  src="/285b5f87-c2dc-4ea0-aa3e-a6b11aba684e.jpg"
                  alt="Portrait illustration of Matur Innocent Joshua"
                  className="aspect-[4/5] w-full rounded-2xl object-cover" />
                
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="glass-panel absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl px-6 py-3 text-center shadow-glow-sm">
                
                <p className="text-sm font-semibold text-text">7+ Years in Tech</p>
                <p className="text-xs text-muted">Development · Leadership · IT</p>
              </motion.div>
            </div>
          </RevealOnScroll>

          <div>
            <SectionHeading
              align="left"
              eyebrow="About Me"
              title="Engineering Real Business Outcomes" />
            
            <div className="-mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                I'm Matur Innocent Joshua, a Full Stack Web & Mobile Developer with hands-on experience building
                enterprise software, payment systems, AI applications, mobile apps, web platforms and high-performance
                systems for organizations that depend on their software to run reliably at scale.
              </p>
              <p>
                Over the past several years I've shipped products used by thousands of people weekly — from student
                mobile apps and school payment platforms processing high transaction volumes, to AI-powered chatbots and
                enterprise websites built to handle heavy concurrent traffic.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 italic text-text/90">
                I enjoy solving difficult business problems through technology — turning ambiguous operational
                challenges into systems that are fast, dependable, and genuinely easy to use.
              </blockquote>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {focusAreas.map((area, index) =>
              <RevealOnScroll key={area.label} delay={index * 0.05}>
                  <GlassCard className="flex items-center gap-2.5 px-4 py-3">
                    <area.icon className="h-4 w-4 flex-shrink-0 text-accent-light" />
                    <span className="text-xs font-medium leading-snug text-text">{area.label}</span>
                  </GlassCard>
                </RevealOnScroll>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}