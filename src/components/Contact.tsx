import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useLanguage();


  return (
  <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50 reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('contactTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            {t('contactDescription')}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 animate-fade-in">
          <div className="w-full max-w-md space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-900/60 rounded-xl border border-blue-700/30 shadow-md">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full flex-shrink-0">
                <Mail size={22} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-base">{t('contactEmail') || 'Email'}</h3>
                <p className="text-blue-300 text-sm break-all font-mono">walid.hbabou1999@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-900/60 rounded-xl border border-blue-700/30 shadow-md">
              <div className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-full flex-shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-base">{t('contactPhone') || 'Téléphone'}</h3>
                <p className="text-blue-300 text-sm font-mono">+212 607040821</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-900/60 rounded-xl border border-blue-700/30 shadow-md">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-3 rounded-full flex-shrink-0">
                <MapPin size={22} className="text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-white font-semibold text-base">{t('contactLocation') || 'Localisation'}</h3>
                <p className="text-blue-300 text-sm">Annajah GH 28 MM 188 Appt 2, Tamessna</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 mt-6">
            <h3 className="text-white font-semibold mb-2 text-base">{t('contactFollowMe') || 'Suivez-moi'}</h3>
            <div className="flex gap-4">
              <a 
                href="https://github.com/walidhbabou"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Github size={22} className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/in/walid-hbabou-41a8a4201"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-md"
              >
                <Linkedin size={22} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
