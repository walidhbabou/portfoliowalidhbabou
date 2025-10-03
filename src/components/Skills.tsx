import React, { useState, useEffect } from 'react';
import { Code, Server, Database, Cloud, Award, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: t('skillsLanguages'),
      icon: <Code className="text-cyan-400" size={28} />,
      color: 'cyan',
      skills: [
        { name: 'JavaScript/TypeScript', level: 90, icon: '🟨' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'PHP', level: 85, icon: '🐘' },
        { name: 'C/C++', level: 75, icon: '⚡' }
      ]
    },
    {
      title: t('skillsFrameworks'),
      icon: <Server className="text-emerald-400" size={28} />,
      color: 'emerald',
      skills: [
        { name: 'React.js', level: 88, icon: '⚛️' },
        { name: 'Laravel', level: 85, icon: '🎯' },
        { name: 'Spring Boot', level: 82, icon: '🍃' },
        { name: 'Flutter', level: 75, icon: '🦋' },
        { name: 'Express.js', level: 80, icon: '🚀' }
      ]
    },
    {
      title: t('skillsDevOpsCloud'),
      icon: <Cloud className="text-violet-400" size={28} />,
      color: 'violet',
      skills: [
        { name: 'Docker', level: 85, icon: '🐳' },
        { name: 'Kubernetes', level: 75, icon: '⎈' },
        { name: 'Jenkins', level: 85, icon: '🔧' },
        { name: 'AWS', level: 78, icon: '☁️' },
        { name: 'Terraform', level: 70, icon: '🏗️' }
      ]
    },
    {
      title: t('skillsDatabases'),
      icon: <Database className="text-amber-400" size={28} />,
      color: 'amber',
      skills: [
        { name: 'MySQL', level: 85, icon: '🗄️' },
        { name: 'MongoDB', level: 80, icon: '🍃' },
        { name: 'Firebase', level: 75, icon: '🔥' },
        { name: 'PostgreSQL', level: 70, icon: '🐘' }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-400',
      emerald: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30 hover:border-emerald-400',
      violet: 'from-violet-500/20 to-purple-500/20 border-violet-500/30 hover:border-violet-400',
      amber: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 hover:border-amber-400'
    };
    return colors[color] || colors.cyan;
  };

  const getProgressColor = (color) => {
    const colors = {
      cyan: 'from-cyan-400 to-blue-500',
      emerald: 'from-emerald-400 to-green-500',
      violet: 'from-violet-400 to-purple-500',
      amber: 'from-amber-400 to-orange-500'
    };
    return colors[color] || colors.cyan;
  };

  const getSkillLevel = (level) => {
    if (level >= 85) return t('skillsExpert');
    if (level >= 75) return t('skillsAdvanced');
    return t('skillsProficient');
  };

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-2 bg-white/5 rounded-full border border-white/10">
            <Star className="text-yellow-400" size={18} sm:size={20} />
            <span className="text-gray-300 font-medium text-sm sm:text-base">{t('skillsTechnicalExpertise')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            {t('skillsTitle')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            {t('skillsDescription')}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === index
                  ? 'bg-white/10 text-white border border-white/20 shadow-lg'
                  : 'bg-white/5 text-gray-400 border border-transparent hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} p-4 sm:p-6 lg:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                activeCategory === categoryIndex 
                  ? 'scale-105 shadow-2xl opacity-100' 
                  : activeCategory !== null 
                    ? 'opacity-50 scale-95' 
                    : 'opacity-100 scale-100'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 lg:mb-8">
                <div className="p-2 sm:p-3 bg-white/10 rounded-xl">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{t('skillsProfessionalLevel')}</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group p-3 sm:p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20">
                    <div className="group-hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                          <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg backdrop-blur-sm flex-shrink-0">
                            <span className="text-base sm:text-lg lg:text-xl">{skill.icon}</span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <span className="text-white font-semibold text-sm sm:text-base lg:text-lg block truncate">{skill.name}</span>
                            <span className="text-gray-400 text-xs sm:text-sm">
                              {getSkillLevel(skill.level)}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-1.5 sm:w-2 h-4 sm:h-6 rounded-full transition-all duration-500 ${
                                i < Math.floor(skill.level / 25) 
                                  ? `bg-gradient-to-t ${getProgressColor(category.color)} shadow-lg` 
                                  : 'bg-white/20'
                              }`}
                              style={{
                                transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + (i * 0.05)}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(category.color)} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                        <div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${getProgressColor(category.color)} rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30">
            <Award className="text-blue-400" size={20} />
            <span className="text-gray-300 font-medium text-sm sm:text-base">{t('skillsCertifiedProfessional')}</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'OCP Java SE 8', level: t('skillsProfessional'), icon: '☕' },
              { name: 'OCA Java SE 8', level: t('skillsAssociate'), icon: '🎓' },
              { name: 'Oracle Foundations Java SE 17', level: t('skillsFoundation'), icon: '🏆' },
              { name: 'OCI DevOps Professional', level: t('skillsProfessional'), icon: '☁️' }
            ].map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/5 to-white/10 p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.icon}
                </div>
                <h4 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-2">{cert.name}</h4>
                <p className="text-blue-400 font-medium text-xs sm:text-sm">{cert.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
