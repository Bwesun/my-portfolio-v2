import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDownIcon, DownloadIcon, GithubIcon, GlobeIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { ParticleBackground } from '../layout/ParticleBackground';
import { socialLinks } from '../../data/social';
import { useTypedText } from '../../hooks/useTypedText';
import type { SocialIconKey } from '../../types/portfolio';

const iconMap: Record<SocialIconKey, React.ComponentType<{className?: string;}>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  portfolio: GlobeIcon
};

const specialties = ['React & Next.js', 'Node.js & Laravel', 'Ionic Mobile Apps', 'AI-Powered Products'];

export function Hero() {
  const typed = useTypedText(specialties);

  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative flex min-h-screen w-full items-center overflow-hidden bg-bg pt-24">
      <ParticleBackground />
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-accent/20 blur-[100px] animate-floatSlow" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-[120px] animate-floatSlower" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
          
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-glass px-4 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-light">
            Matur Innocent Joshua — Full Stack Web & Mobile Developer
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Building Powerful Digital Products That <span className="text-gradient-accent">Scale.</span>
          </h1>

          <div className="mt-5 flex h-6 items-center text-base font-medium text-accent-light sm:text-lg">
            <span>{typed}</span>
            <span className="ml-0.5 inline-block h-5 w-[2px] animate-blink bg-accent-light" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I am a Full Stack Web & Mobile Developer specializing in React, Next.js, Node.js, Ionic, PHP and
            AI-powered applications. I build scalable enterprise software, payment platforms, mobile apps, healthcare
            systems and intelligent digital solutions.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow-sm transition-[background-color,box-shadow,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-glow active:scale-[0.97]">
              
              Hire Me
            </a>
            <a
              href="/Matur-Innocent-Joshua-CV.pdf"
              download
              className="glass-panel inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-text transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/50 active:scale-[0.97]">
              
              <ArrowRight className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="text-sm font-semibold text-muted transition-colors duration-200 hover:text-accent-light">
              
              Contact Me →
            </a>
          </div>

          {/* <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
            
            <a
              href="#contact"
              onClick={scrollTo('#contact')}
              className="text-sm font-semibold text-muted transition-colors duration-200 hover:text-accent-light">
              
              Contact Me →
            </a>
          </div> */}

          <div className="mt-10 flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-muted transition-[color,transform,border-color] duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-light">
                  
                  <Icon className="h-4 w-4" />
                </a>);

            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none hidden lg:block">
          
          <div className="glass-panel relative overflow-hidden rounded-3xl p-3 shadow-glow">
            <img
              src="/cbc5f013-3c60-4b55-b515-2f9fc1c9a7c9.jpg"
              alt="Illustration of a modern developer workspace with a laptop and floating app interfaces"
              className="aspect-square w-full rounded-2xl object-cover" />
            
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="glass-panel absolute -left-6 bottom-8 hidden rounded-2xl px-5 py-4 shadow-glow-sm sm:block">
            
            <p className="text-2xl font-bold text-text">30k+</p>
            <p className="text-xs text-muted">Concurrent users supported</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75, ease: [0.23, 1, 0.32, 1] }}
            className="glass-panel absolute -right-4 top-6 hidden rounded-2xl px-5 py-4 shadow-glow-sm sm:block">
            
            <p className="text-2xl font-bold text-text">7</p>
            <p className="text-xs text-muted">Developers led</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={scrollTo('#about')}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors duration-200 hover:text-accent-light"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
        
        <ChevronDownIcon className="h-6 w-6" />
      </motion.a>
    </section>);

}