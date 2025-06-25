import React from 'react';
import { ExternalLink, Github, Code2, Database, Cloud, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Application Web de Gestion de Médias",
      description: "Application web pour la gestion de contenu média avec design responsive et interface moderne.",
      technologies: ["Bootstrap", "Ajax", "Spring Boot", "Java"],
      icon: <Code2 className="text-blue-400" size={24} />,
      category: "Web Development",
      githubLinks: [
        "https://github.com/walidhbabou/mediathique.git",
        "https://github.com/walidhbabou/frontendMediatheque.git"
      ]
    },
    {
      title: "Application de Chat en Temps Réel", 
      description: "Application de chat en temps réel avec WebSocket pour une communication instantanée.",
      technologies: ["Socket.io", "Express.js", "MongoDB", "JavaScript"],
      icon: <Database className="text-green-400" size={24} />,
      category: "Real-time App"
    },
    {
      title: "People Detection System",
      description: "Système de détection de personnes avec traitement d'images et intégration cloud Azure.",
      technologies: ["Python", "OpenCV", "Matplotlib", "Azure"],
      icon: <Cloud className="text-purple-400" size={24} />,
      category: "AI/ML"
    },
    {
      title: "Simulation Microprocesseur",
      description: "Simulation complète du microprocesseur Motorola 6809 avec interface graphique.",
      technologies: ["Java", "JavaFX", "Assembleur"],
      icon: <Code2 className="text-orange-400" size={24} />,
      category: "System Programming"
    },
    {
      title: "App Mobile Coffee Shop",
      description: "Application mobile complète pour la gestion d'un coffee shop avec interface utilisateur moderne.",
      technologies: ["Flutter", "Firebase", "Dart"],
      icon: <Smartphone className="text-cyan-400" size={24} />,
      category: "Mobile Development",
      githubLinks: [
        "https://github.com/walidhbabou/coffe-shop.git"
      ]
    },
    {
      title: "Blog App Full Stack",
      description: "Application de blog complète avec API Laravel backend et interface React moderne pour la gestion des articles.",
      technologies: ["Laravel", "React.js", "MySQL", "API REST", "Tailwind CSS"],
      icon: <Code2 className="text-red-400" size={24} />,
      category: "Full Stack",
      githubLinks: [
        "https://github.com/walidhbabou/Blog-App.git"
      ]
    },
    {
      title: "Chatbot Intelligent",
      description: "Chatbot conversationnel avec compréhension du langage naturel et interface React/TypeScript.",
      technologies: ["React.js", "TypeScript", "Python Flask", "RASA", "NLP"],
      icon: <Database className="text-pink-400" size={24} />,
      category: "AI/NLP",
      githubLinks: [
        "https://github.com/walidhbabou/projet-pfa.git"
      ]
    },
    {
      title: "Projet DevOps Complet",
      description: "Infrastructure automatisée avec pipeline CI/CD complet et déploiement sur AWS.",
      technologies: ["Docker", "GitHub Actions", "NGINX", "Jenkins", "AWS EC2"],
      icon: <Cloud className="text-yellow-400" size={24} />,
      category: "DevOps",
      githubLinks: [
        "https://github.com/walidhbabou/projet-pfa.git"
      ]
    }
  ];

  const handleGithubClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('projectsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                {project.icon}
                <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded text-xs border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                {project.githubLinks ? (
                  project.githubLinks.map((link, linkIndex) => (
                    <button 
                      key={linkIndex}
                      onClick={() => handleGithubClick(link)}
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                    >
                      <Github size={16} />
                      {project.githubLinks.length > 1 ? (linkIndex === 0 ? 'Backend' : 'Frontend') : 'Code'}
                    </button>
                  ))
                ) : (
                  <button className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm">
                    <Github size={16} />
                    Code
                  </button>
                )}
                <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm">
                  <ExternalLink size={16} />
                  Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
