import React from 'react';
import { ArrowUpIcon, GithubIcon, GlobeIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { socialLinks } from '../../data/social';
import type { SocialIconKey } from '../../types/portfolio';

const iconMap: Record<SocialIconKey, React.ComponentType<{className?: string;}>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  portfolio: GlobeIcon
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-soft">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#home" className="text-lg font-bold text-text">
              <div className="flex items-center gap-2">
              <img src="/public/maturinnocent.png" alt="MIJ" className="h-8 w-8 rounded-full" />
              <span className="text-accent-light">Matur Innocent Joshua</span>
            </div>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Full Stack Web & Mobile Developer building scalable, enterprise-grade digital products.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2 sm:gap-3">
              {navItems.map((item) =>
              <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted transition-colors duration-200 hover:text-accent-light">
                    {item.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text">Connect</h3>
            <div className="mt-4 flex items-center gap-3">
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
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">© {new Date().getFullYear()} Matur Innocent Joshua. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition-colors duration-200 hover:text-accent-light">
            
            Back to top <ArrowUpIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>);

}