import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import EffectsToggle from './EffectsToggle';

// Mock useLanguage hook for demo
const useLanguage = () => ({
  t: (key: string) => {
    const translations: Record<string, string> = {
      'about': 'À Propos',
      'experience': 'Expérience',
      'projects': 'Projets',
      'skills': 'Compétences',
      'contact': 'Contact'
    };
    return translations[key] || key;
  }
});

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { key: 'about', id: 'about' },
    { key: 'experience', id: 'experience' },
    { key: 'projects', id: 'projects' },
    { key: 'skills', id: 'skills' },
    { key: 'contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-[rgba(8,8,10,0.6)] backdrop-blur-md shadow-lg border-b border-[rgba(255,255,255,0.04)] glass-card' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer">
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-white">WALID </span>
            
                <span className="text-white">
                  HBABOU
                </span>
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--neon-primary-hex)] to-[var(--neon-secondary-hex)] transition-all duration-300 group-hover:w-full"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="relative px-5 py-2 text-gray-300 hover:text-white transition-all duration-300 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10 font-medium text-sm tracking-wide uppercase">
                  {t(item.key)}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--neon-primary-hex)]/10 to-[var(--neon-secondary-hex)]/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[var(--neon-primary-hex)] to-[var(--neon-secondary-hex)] transition-all duration-300 group-hover:w-3/4"></div>
              </button>
            ))}
            
            {/* Contact Button */}
          
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-[rgba(255,255,255,0.02)] transition-all duration-300 rounded-lg font-medium text-sm tracking-wide uppercase"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {t(item.key)}
              </button>
            ))}
          
          </div>
        </div>
            <EffectsToggle />
      </div>
    </nav>
  );
};

export default Navigation;