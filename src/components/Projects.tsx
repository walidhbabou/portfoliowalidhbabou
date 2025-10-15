import React from 'react';
import { ExternalLink, Github, Code2, Database, Cloud, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Duel Arena (Gaming)",
      description: "Jeu en ligne multijoueur de duel en temps réel avec interface moderne et animations dynamiques.",
      technologies: ["React", "Node.js", "Socket.io", "Vercel"],
      icon: <Cloud className="text-indigo-400" size={24} />,
      category: "Gaming",
      demoLink: "https://duel-arena-n9k8.vercel.app/"
    },
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t('projectsTitle')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass bg-gradient-to-br from-gray-900/60 to-gray-800/60 p-5 sm:p-7 rounded-2xl border border-blue-900/30 hover:border-blue-500/60 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group animate-fade-in-up hover:scale-[1.04] relative overflow-hidden"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                {project.icon}
                <span className="text-xs font-semibold text-white bg-gradient-to-r from-blue-500/70 to-purple-500/70 px-3 py-1 rounded-full shadow-md border border-blue-400/30 animate-glow-bar">
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2 drop-shadow-lg">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-200 rounded-full text-xs border border-blue-500/20 font-medium shadow-sm hover:bg-blue-500/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 flex-wrap mt-2">
                {project.githubLinks ? (
                  project.githubLinks.map((link, linkIndex) => (
                    <button
                      key={linkIndex}
                      onClick={() => handleGithubClick(link)}
                      className="flex items-center gap-2 text-blue-300 hover:text-blue-500 bg-blue-900/20 hover:bg-blue-700/20 border border-blue-500/20 rounded-lg px-3 py-1.5 font-medium transition-all duration-200 text-xs sm:text-sm shadow-sm"
                    >
                      <Github size={16} />
                      <span className="hidden sm:inline">
                        {project.githubLinks.length > 1 ? (linkIndex === 0 ? 'Backend' : 'Frontend') : 'Code'}
                      </span>
                    </button>
                  ))
                ) : null}
                {project.demoLink ? (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-300 hover:text-white bg-gradient-to-r from-purple-600/60 to-blue-500/60 border border-purple-400/30 rounded-lg px-3 py-1.5 font-medium transition-all duration-200 text-xs sm:text-sm shadow-md animate-glow-bar"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">Demo</span>
                  </a>
                ) : null}
              </div>

              {/* Effet lumineux décoratif en fond */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
