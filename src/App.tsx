import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { ScrollProgressBar } from './components/layout/ScrollProgressBar';
import { CursorGlow } from './components/layout/CursorGlow';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/layout/BackToTop';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
// import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
// import { Certifications } from './components/sections/Certifications';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

export function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen bg-bg font-sans text-text antialiased">
        <LoadingScreen />
        <ScrollProgressBar />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          {/* <Experience /> */}
          <Projects />
          <Achievements />
          {/* <Certifications /> */}
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>);

}