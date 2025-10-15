import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Experience = () => {
  const { t } = useLanguage();

  // Tableau des expériences (internationalisé)
  const experiences = [
    {
      title: t('valhkoTitle'),
      company: t('valhkoCompany'),
      date: t('valhkoDate'),
      location: t('valhkoLocation'),
      description: t('valhkoDescription'),
      details: [
        t('valhkoDetail1'),
        t('valhkoDetail2'),
        t('valhkoDetail3'),
        t('valhkoDetail4'),
        t('valhkoDetail5'),
        t('valhkoDetail6'),
      ],
      techs: ['Java', 'Spring Boot', 'Python', 'React', 'Microservices', 'Eureka', 'Azure', 'Git', 'Docker', 'Scrum/Agile'],
    },
    {
      title: t('vmsTitle'),
      company: t('vmsCompany'),
      date: t('vmsDate'),
      location: t('vmsLocation'),
      description: t('vmsDescription'),
      details: [
        t('vmsDetail1'),
        t('vmsDetail2'),
        t('vmsDetail3'),
        t('vmsDetail4'),
      ],
      techs: ['Angular', 'Java', 'Spring Boot', 'AWS S3', 'MySQL', 'Git', 'Docker'],
    },
    {
      title: t('ministryTitle'),
      company: t('ministryCompany'),
      date: t('ministryDate'),
      location: t('ministryLocation'),
      description: t('ministryDescription'),
      details: [
        t('ministryDetail1'),
        t('ministryDetail2'),
        t('ministryDetail3'),
        t('ministryDetail4'),
      ],
      techs: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'Git', 'HTML5', 'CSS3'],
    },
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('experienceTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 lg:space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-4 sm:p-6 lg:p-8 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 animate-fade-in"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 sm:gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 sm:p-4 rounded-full w-fit mx-auto md:mx-0">
                  <Briefcase size={32} className="text-white" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <h4 className="text-base sm:text-lg text-blue-400 mb-3">{exp.company}</h4>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-400 justify-center md:justify-start">
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Calendar size={16} className="text-blue-400 flex-shrink-0" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <MapPin size={16} className="text-blue-400 flex-shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                  </div>


                  <p className="text-gray-300 mb-2 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="list-disc pl-5 mb-4 text-gray-400 text-xs sm:text-sm space-y-1">
                    {exp.details && exp.details.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
