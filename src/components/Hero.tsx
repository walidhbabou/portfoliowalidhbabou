import React from 'react';
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
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  WALID
                </span>
                <br />
                <span className="text-white">HBABOU</span>
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
                <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm">Tamessna, Maroc</span>
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
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 justify-center text-sm lg:text-base"
              >
                <Download size={18} lg:size={20} />
                {t('downloadCV')}
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 justify-center text-sm lg:text-base"
              >
                <Mail size={18} lg:size={20} />
                {t('contactMe')}
              </button>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="flex justify-center lg:justify-end animate-fade-in order-first lg:order-last" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700">
                <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                  <img 
                    src="/pfa.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 lg:-bottom-4 lg:-left-4 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
