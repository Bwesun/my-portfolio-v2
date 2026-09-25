import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, MoonIcon, SunIcon, XIcon } from 'lucide-react';
import { navItems } from '../../data/navigation';
import { useTheme } from '../../contexts/ThemeContext';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.
    map((item) => document.querySelector(item.href)).
    filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
      scrolled ? 'glass-panel border-b' : 'border-b border-transparent'}`
      }>
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="text-lg font-bold tracking-tight text-text">
            {/* Add a small thumbnail image */}
            <div className="flex items-center gap-2">
              <img src="/public/maturinnocent.png" alt="MIJ" className="h-8 w-8 rounded-full" />
              <span className="text-accent-light">MIJ</span>
            </div>
          </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) =>
          <li key={item.href}>
              <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={`relative text-sm font-medium transition-colors duration-200 ${
              activeHref === item.href ? 'text-text' : 'text-muted hover:text-text'}`
              }>
              
                {item.label}
                {activeHref === item.href &&
              <motion.span
                layoutId="nav-underline"
                className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-accent" />

              }
              </a>
            </li>
          )}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="glass-panel flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-accent-light">
            
            {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white shadow-glow-sm transition-[background-color,box-shadow] duration-200 hover:bg-accent-dark hover:shadow-glow sm:inline-flex">
            
            Hire Me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="glass-panel flex h-9 w-9 items-center justify-center rounded-full text-text lg:hidden">
            
            {mobileOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="glass-panel overflow-hidden border-t lg:hidden">
          
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) =>
            <li key={item.href}>
                  <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
                activeHref === item.href ? 'bg-accent/10 text-accent-light' : 'text-muted hover:text-text'}`
                }>
                
                    {item.label}
                  </a>
                </li>
            )}
            </ul>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}