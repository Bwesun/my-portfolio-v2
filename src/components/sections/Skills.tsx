import React from 'react';
import { motion } from 'framer-motion';
import { Code2Icon, ServerIcon, SmartphoneIcon, SparklesIcon, WrenchIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { skillCategories } from '../../data/skills';
import type { Skill, SkillIconKey } from '../../types/portfolio';

const iconMap: Record<SkillIconKey, React.ComponentType<{className?: string;}>> = {
  code: Code2Icon,
  server: ServerIcon,
  smartphone: SmartphoneIcon,
  sparkles: SparklesIcon,
  wrench: WrenchIcon
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Technologies"
          description="A full-stack toolkit spanning web, mobile, backend systems, and AI-powered products." />
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon];
            return (
              <RevealOnScroll key={category.id} delay={catIndex * 0.08}>
                <GlassCard className="h-full p-6">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold text-text">{category.title}</h3>
                  </div>
                  <ul className="space-y-4">
                    {category.skills.map((skill) =>
                    <SkillBar key={skill.name} skill={skill} />
                    )}
                  </ul>
                </GlassCard>
              </RevealOnScroll>);

          })}
        </div>
      </div>
    </section>);

}

function SkillBar({ skill }: {skill: Skill;}) {
  return (
    <li>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-text/90">{skill.name}</span>
        <span className="text-xs text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-light to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }} />
        
      </div>
    </li>);

}