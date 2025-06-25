
import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const education = [
    {
      degree: t('masterDegree'),
      school: "Faculté des Sciences et Techniques, Settat",
      period: "2024 - Présent",
      icon: "🎓"
    },
    {
      degree: t('licence'),
      school: "Faculté des Sciences et Techniques, Settat", 
      period: "2023 - 2024",
      icon: "💻"
    },
    {
      degree: t('diploma'),
      school: "Faculté des Sciences et Techniques, Settat",
      period: "2020 - 2023",
      icon: "📚"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('aboutTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('aboutDescription')}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Avec une solide formation en informatique et une passion pour les technologies émergentes, 
              je développe des solutions innovantes en combinant développement web moderne et pratiques DevOps. 
              Mon objectif est de contribuer à des projets ambitieux qui repoussent les limites technologiques.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-blue-400">15+</div>
                <div className="text-gray-400 text-sm">Projets Réalisés</div>
              </div>
              <div className="text-center p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-gray-400 text-sm">Technologies Maîtrisées</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-400" size={24} />
              <h3 className="text-2xl font-semibold text-white">{t('education')}</h3>
            </div>
            
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{edu.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm mb-2">{edu.school}</p>
                    <div className="flex items-center gap-2 text-blue-400 text-sm">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
