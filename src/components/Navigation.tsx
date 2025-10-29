import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll progress bar
  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      setScrollProgress(Number(pct.toFixed(2)));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section (scroll spy)
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main [id]'));
    if (sections.length === 0) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.55 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
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
        ? 'bg-[rgba(8,8,10,0.72)] backdrop-blur-md shadow-xl border-b border-[rgba(255,255,255,0.06)] glass-card/backdrop' 
        : 'bg-transparent'
    }`}>
      {/* thin scroll progress indicator */}
      <div aria-hidden className="nav-progress-container">
        <div className="nav-progress" style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group cursor-pointer nav-logo" role="button" aria-label="Accueil" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="flex items-center gap-3">
                <svg className="nav-logo-mark" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0" stopColor="var(--neon-primary-hex)" />
                      <stop offset="1" stopColor="var(--neon-secondary-hex)" />
                    </linearGradient>
                  </defs>
                  <circle cx="18" cy="18" r="16" fill="url(#g1)" opacity="0.14" />
                  <path d="M12 22 L24 14" stroke="url(#g1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="text-2xl font-bold tracking-tight leading-none">
                  <span className="text-white nav-logo-primary">WALID</span>
                  <div className="text-sm text-gray-300 nav-logo-sub">HBABOU</div>
                </div>
              </div>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--neon-primary-hex)] to-[var(--neon-secondary-hex)] transition-all duration-300 group-hover:w-full" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => {
              const active = activeSection === item.id;
              return (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm uppercase font-medium transition-all duration-300 nav-item group ${active ? 'text-white' : 'text-gray-300'}`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-current={active ? 'true' : undefined}
                >
                  <span className="relative z-10 tracking-wide">{t(item.key)}</span>
                  <span className={`nav-underline ${active ? 'active' : ''}`} aria-hidden />
                </button>
              );
            })}
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
      </div>
    </nav>
  );
};

export default Navigation;