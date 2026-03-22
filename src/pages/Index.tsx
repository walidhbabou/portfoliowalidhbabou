
import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import LanguageSwitcher from '../components/LanguageSwitcher';
import MiniRobot from '../components/MiniRobot';
import { LanguageProvider } from '../contexts/LanguageContext';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <LanguageProvider>
      <div className={`portfolio-shell min-h-screen text-white transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="portfolio-noise" aria-hidden="true"></div>
        <div className="portfolio-grid-glow" aria-hidden="true"></div>
        <Navigation />
        <LanguageSwitcher />
        <main className="pt-16 sm:pt-20 relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        {/* Global Mini Robot assistant */}
        <MiniRobot />
      </div>
    </LanguageProvider>
  );
};

export default Index;
