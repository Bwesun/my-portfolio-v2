import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { projectCategories, projects } from '../../data/projects';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = useMemo(
    () => activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="relative bg-bg py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          description="A cross-section of production products spanning mobile, web, fintech, and AI." />
        

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {projectCategories.map((category) =>
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-[background-color,color,border-color] duration-200 ${
            activeCategory === category ?
            'bg-accent text-white shadow-glow-sm' :
            'glass-panel text-muted hover:text-text'}`
            }>
            
              {category}
            </button>
          )}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) =>
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}>
              
                <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy" />
                  
                    <span className="absolute left-3 top-3 rounded-full bg-bg/70 px-3 py-1 text-xs font-medium text-accent-light backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold text-text">{project.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) =>
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted">
                      
                          {tag}
                        </span>
                    )}
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <a
                      href={project.githubUrl}
                      className="glass-panel inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-text transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/50">
                      
                        <GithubIcon className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                      <a
                      href={project.demoUrl}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-2.5 text-xs font-semibold text-white shadow-glow-sm transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent-dark">
                      
                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>);

}