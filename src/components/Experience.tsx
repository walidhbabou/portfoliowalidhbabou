
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('experienceTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full w-fit">
                <Briefcase size={32} className="text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {t('devFullStack')}
                </h3>
                <h4 className="text-lg text-blue-400 mb-3">
                  {t('ministry')}
                </h4>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-blue-400" />
                    <span>Juin 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span>Rabat, Maroc</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {t('expDescription')}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['Laravel', 'Bootstrap', 'MySQL', 'PHP', 'JavaScript'].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
