import React, { useEffect } from 'react';
import { initReveal, attachParallax, typeWrite } from '../lib/dynamics';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t, language } = useLanguage();

  const handleDownloadCV = () => {
    const cvFile = language === 'fr' ? '/cv_walid_fr.pdf' : '/cv_walid_an.pdf';
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = language === 'fr' ? 'cv_walid_fr.pdf' : 'cv_walid_an.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  useEffect(() => {
    // Initialize scroll reveal and parallax
    initReveal();
    attachParallax();
    // run typewriter after a small delay so it shows up nicely
    const nameEl = document.getElementById('type-name');
    setTimeout(() => typeWrite(nameEl), 400);
    // Cursor magnet for titles/CTAs (subtle)
    const hero = document.getElementById('hero');
    if (hero && !document.documentElement.classList.contains('effects-disabled')) {
      const magnetTargets = Array.from(hero.querySelectorAll<HTMLElement>('.cursor-magnet'));
      function onMove(e: MouseEvent) {
        const x = e.clientX;
        const y = e.clientY;
        for (const el of magnetTargets) {
          const r = el.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          const dx = (x - cx);
          const dy = (y - cy);
          // distance
          const dist = Math.sqrt(dx*dx + dy*dy);
          const maxDist = 220; // effect radius
          if (dist > maxDist) {
            el.style.transform = '';
            continue;
          }
          const strength = (1 - (dist / maxDist)) * 8; // px
          const tx = (dx / dist) * strength || 0;
          const ty = (dy / dist) * strength || 0;
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        }
      }
      function onLeave() {
        for (const el of magnetTargets) el.style.transform = '';
      }
      hero.addEventListener('mousemove', onMove);
      hero.addEventListener('mouseleave', onLeave);
      // cleanup
      return () => {
        hero.removeEventListener('mousemove', onMove);
        hero.removeEventListener('mouseleave', onLeave);
      };
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden reveal" id="hero">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div data-parallax="0.06" className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl" style={{ background: 'rgba(var(--neon-primary),0.08)' }}></div>
          <div data-parallax="0.03" className="absolute top-3/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(var(--neon-secondary),0.06)', animationDelay: '2s' }}></div>
          <div data-parallax="0.05" className="absolute bottom-1/4 left-1/2 w-80 h-80 rounded-full blur-3xl" style={{ background: 'rgba(var(--neon-primary),0.06)', animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_480px] gap-8 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="neon-accent typewriter cursor-magnet" data-text="WALID" id="type-name">WALID</span>
                <br />
                <span className="text-white cursor-magnet">HBABOU</span>
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light">
                {t('heroTitle')}
              </h2>
              <h3 className="text-base lg:text-lg text-blue-400 font-medium">
                {t('heroSubtitle')}
              </h3>
            </div>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('heroDescription')}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 lg:gap-4 text-sm text-gray-400 justify-center lg:justify-start">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin size={16} className="text-[rgb(var(--neon-primary))] flex-shrink-0" />
                <span className="text-xs sm:text-sm">Rabat, Maroc</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Phone size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">+212 607040821</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Mail size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm break-all">walid.hbabou1999@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleDownloadCV}
                className="download-cta px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center text-sm lg:text-base neon-glow cursor-magnet"
              >
                <Download size={18} className="lg:w-5 lg:h-5" />
                {t('downloadCV')}
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-700 hover:border-[var(--neon-primary-hex)] text-gray-300 hover:text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center text-sm lg:text-base"
              >
                <Mail size={18} className="lg:w-5 lg:h-5" />
                {t('contactMe')}
              </button>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-first lg:order-last" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="profile-frame neon-profile w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-[rgba(var(--neon-primary),0.08)] to-[rgba(var(--neon-secondary),0.08)] rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700 neon-blob">
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[360px] lg:h-[360px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/pfa.png" 
                    alt="Profile" 
                    className="profile-img"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 rounded-full blur-xl opacity-60" style={{ background: 'linear-gradient(90deg, rgba(var(--neon-primary),0.18), rgba(var(--neon-secondary),0.14))' }}></div>
              <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-20 h-20 lg:w-32 lg:h-32 rounded-full blur-xl opacity-40" style={{ background: 'linear-gradient(90deg, rgba(var(--neon-secondary),0.12), rgba(var(--neon-primary),0.08))', animationDelay: '1s' }}></div>

              {/* Badge */}
              <div className="absolute bottom-6 left-6 lg:left-8">
                <div className="badge-available px-3 py-1.5 rounded-full text-xs font-semibold">Disponible pour missions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


