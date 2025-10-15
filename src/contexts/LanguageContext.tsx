import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    about: "À Propos",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
    
    // Hero
    heroTitle: "Étudiant en Master Réseaux et Systèmes d'Information",
    heroSubtitle: "Développeur Full Stack & Passionné DevOps Cloud",
    heroDescription: "Curieux et autonome, je développe des solutions modernes et innovantes tout en relevant des défis techniques avec rigueur et créativité.",
    downloadCV: "Télécharger CV",
    contactMe: "Me Contacter",
    
    // About
    aboutTitle: "À Propos de Moi",
    aboutDescription: "Passionné par les technologies émergentes, je combine développement web et expertise DevOps pour créer des solutions robustes et scalables.",
    
  // Experience
  experienceTitle: "Expérience Professionnelle",
  // Valhko
  valhkoTitle: "Stagiaire Full Stack / Microservices",
  valhkoCompany: "Valhko Ltd",
  valhkoDate: "Juil 2025 - Sep 2025",
  valhkoLocation: "Rabat, Maroc",
  valhkoDescription: "Développement d’une application microservices avec intégration front-end et déploiement cloud.",
  valhkoDetail1: "Conception et développement du backend avec Spring Boot pour des APIs REST robustes et sécurisées.",
  valhkoDetail2: "Création et intégration d’interfaces utilisateur dynamiques avec React.",
  valhkoDetail3: "Développement de services additionnels en Python, intégrés via Eureka pour la découverte de services.",
  valhkoDetail4: "Déploiement et configuration des applications sur Azure afin d’assurer haute disponibilité et scalabilité.",
  valhkoDetail5: "Participation aux cérémonies Scrum/Agile et suivi des tâches via Jira.",
  valhkoDetail6: "Environnement technique : Java, Spring Boot, Python, React, Microservices, Eureka, Azure, Git, Docker, Scrum/Agile.",
  // VMS
  vmsTitle: "Développeur Full Stack",
  vmsCompany: "Projet VMS",
  vmsDate: "2025",
  vmsLocation: "Remote",
  vmsDescription: "Conception et développement d’une plateforme de gestion et de pilotage du processus de sourcing des prestations intellectuelles (VMS Cloud)",
  vmsDetail1: "Modélisation de la base de données et gestion du stockage de fichiers via AWS S3.",
  vmsDetail2: "Développement de l’interface utilisateur avec Angular, incluant formulaires et dashboards interactifs.",
  vmsDetail3: "Création d’APIs REST avec Spring Boot pour la communication front-end/back-end.",
  vmsDetail4: "Intégration et test des fonctionnalités pour garantir un workflow fluide.",
  // Ministère
  ministryTitle: "Développeur Full Stack (Stage)",
  ministryCompany: "Ministère de l’Éducation Nationale",
  ministryDate: "Juin 2024",
  ministryLocation: "Rabat, Maroc",
  ministryDescription: "Développement d’une application de gestion de projets pour le ministère.",
  ministryDetail1: "Conception et développement du backend avec Laravel pour la gestion complète des projets.",
  ministryDetail2: "Mise en place de la base de données MySQL pour stocker et gérer les informations de manière sécurisée.",
  ministryDetail3: "Développement d’une interface utilisateur responsive avec Bootstrap pour une expérience fluide sur tous les appareils.",
  ministryDetail4: "Tests unitaires et intégration pour garantir la fiabilité de l’application. Environnement technique : Laravel, MySQL, Bootstrap, PHP, Git, HTML5, CSS3.",
    
    // Projects
    projectsTitle: "Mes Projets",
    
    // Skills
    skillsTitle: "Compétences Techniques",
    skillsDescription: "Voici un aperçu de mes compétences techniques et des technologies que je maîtrise",
    skillsTechnicalExpertise: "Expertise Technique",
    skillsLanguages: "Langages de Programmation",
    skillsFrameworks: "Frameworks & Librairies",
    skillsDevOpsCloud: "DevOps & Cloud",
    skillsDatabases: "Bases de Données",
    skillsProfessionalLevel: "Niveau Professionnel",
    skillsCertifiedProfessional: "Certifications Professionnelles",
    skillsExpert: "Expert",
    skillsAdvanced: "Avancé",
    skillsProficient: "Compétent",
    skillsProfessional: "Professionnel",
    skillsAssociate: "Associé",
    skillsFoundation: "Fondation",
    
    // Contact
    contactTitle: "Contactez-Moi",
    contactDescription: "N'hésitez pas à me contacter pour discuter d'opportunités de collaboration ou de projets.",
    contactEmail: "Email",
    contactPhone: "Téléphone",
    contactLocation: "Localisation",
    contactFollowMe: "Suivez-moi",
    contactName: "Nom Complet",
    contactNamePlaceholder: "Votre nom complet",
    contactEmailPlaceholder: "votre.email@exemple.com",
    contactMessage: "Message",
    contactMessagePlaceholder: "Votre message...",
    contactSendButton: "Envoyer le Message",
    contactSending: "Envoi en cours...",
    contactSuccessMessage: "Message envoyé avec succès!",
    contactErrorMessage: "Erreur lors de l'envoi du message. Veuillez réessayer.",
    
    // Education
    education: "Formation",
    masterDegree: "Master en Réseaux et Systèmes d'Information",
    licence: "Licence en Génie Informatique",
    diploma: "Diplôme en Mathématiques, Informatique et Physique"
  },
  en: {
    // Navigation
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
    
    // Hero
    heroTitle: "Master's Student in Networks and Information Systems",
    heroSubtitle: "Full Stack Developer & DevOps Cloud Enthusiast",
    heroDescription: "Curious and autonomous, I create modern, innovative solutions while tackling technical challenges with rigor and creativity.",
    downloadCV: "Download CV",
    contactMe: "Contact Me",
    
    // About
    aboutTitle: "About Me",
    aboutDescription: "Passionate about emerging technologies, I combine web development and DevOps expertise to create robust and scalable solutions.",
    
  // Experience
  experienceTitle: "Professional Experience",
  // Valhko
  valhkoTitle: "Full Stack / Microservices Intern",
  valhkoCompany: "Valhko Ltd",
  valhkoDate: "Jul 2025 - Sep 2025",
  valhkoLocation: "Rabat, Morocco",
  valhkoDescription: "Development of a microservices application with front-end integration and cloud deployment.",
  valhkoDetail1: "Designed and developed backend with Spring Boot for robust and secure REST APIs.",
  valhkoDetail2: "Created and integrated dynamic user interfaces with React.",
  valhkoDetail3: "Developed additional services in Python, integrated via Eureka for service discovery.",
  valhkoDetail4: "Deployed and configured applications on Azure to ensure high availability and scalability.",
  valhkoDetail5: "Participated in Scrum/Agile ceremonies and tracked tasks using Jira.",
  valhkoDetail6: "Technical environment: Java, Spring Boot, Python, React, Microservices, Eureka, Azure, Git, Docker, Scrum/Agile.",
  // VMS
  vmsTitle: "Full Stack Developer",
  vmsCompany: "VMS Project",
  vmsDate: "2025",
  vmsLocation: "Remote",
  vmsDescription: "Design and development of a management and steering platform for the intellectual services sourcing process (VMS Cloud)",
  vmsDetail1: "Database modeling and file storage management via AWS S3.",
  vmsDetail2: "Developed the user interface with Angular, including interactive forms and dashboards.",
  vmsDetail3: "Created REST APIs with Spring Boot for front-end/back-end communication.",
  vmsDetail4: "Integrated and tested features to ensure a smooth workflow.",
  // Ministry
  ministryTitle: "Full Stack Developer (Internship)",
  ministryCompany: "Ministry of National Education",
  ministryDate: "June 2024",
  ministryLocation: "Rabat, Morocco",
  ministryDescription: "Development of a project management application for the ministry.",
  ministryDetail1: "Designed and developed backend with Laravel for complete project management.",
  ministryDetail2: "Set up MySQL database to securely store and manage information.",
  ministryDetail3: "Developed a responsive user interface with Bootstrap for a smooth experience on all devices.",
  ministryDetail4: "Unit and integration testing to ensure application reliability. Technical environment: Laravel, MySQL, Bootstrap, PHP, Git, HTML5, CSS3.",
    
    // Projects
    projectsTitle: "My Projects",
    
    // Skills
    skillsTitle: "Technical Skills",
    skillsDescription: "Here's an overview of my technical skills and technologies I master",
    skillsTechnicalExpertise: "Technical Expertise",
    skillsLanguages: "Programming Languages",
    skillsFrameworks: "Frameworks & Libraries",
    skillsDevOpsCloud: "DevOps & Cloud",
    skillsDatabases: "Databases",
    skillsProfessionalLevel: "Professional Level",
    skillsCertifiedProfessional: "Professional Certifications",
    skillsExpert: "Expert",
    skillsAdvanced: "Advanced",
    skillsProficient: "Proficient",
    skillsProfessional: "Professional",
    skillsAssociate: "Associate",
    skillsFoundation: "Foundation",
    
    // Contact
    contactTitle: "Get In Touch",
    contactDescription: "Feel free to reach out to discuss collaboration opportunities or projects.",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactLocation: "Location",
    contactFollowMe: "Follow Me",
    contactName: "Full Name",
    contactNamePlaceholder: "Your full name",
    contactEmailPlaceholder: "your.email@example.com",
    contactMessage: "Message",
    contactMessagePlaceholder: "Your message...",
    contactSendButton: "Send Message",
    contactSending: "Sending...",
    contactSuccessMessage: "Message sent successfully!",
    contactErrorMessage: "Error sending message. Please try again.",
    
    // Education
    education: "Education",
    masterDegree: "Master's in Networks and Information Systems",
    licence: "Bachelor's in Computer Engineering",
    diploma: "Diploma in Mathematics, Computer Science and Physics"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
