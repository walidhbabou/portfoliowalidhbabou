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
    heroDescription: "Développeur fullstack passionné, avec une forte appétence pour les pratiques DevOps, je conçois des applications web modernes tout en maîtrisant le déploiement, l’automatisation et la gestion d’infrastructures cloud. Curieux, rigoureux et autonome, je cherche à relever des défis techniques à travers des projets innovants et collaboratifs.",
    downloadCV: "Télécharger CV",
    contactMe: "Me Contacter",
    
    // About
    aboutTitle: "À Propos de Moi",
    aboutDescription: "Passionné par les technologies émergentes, je combine développement web et expertise DevOps pour créer des solutions robustes et scalables.",
    
    // Experience
    experienceTitle: "Expérience Professionnelle",
    devFullStack: "Développeur Full Stack",
    ministry: "Ministère de l'Éducation Nationale, Rabat",
    expDescription: "Conception et développement d'une application de gestion de projets avec Laravel, Bootstrap et MySQL.",
    
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
    heroDescription: "Fullstack developer with a strong interest in DevOps practices, I build modern web applications while managing deployment, automation, and cloud infrastructure. Curious, detail-oriented, and autonomous, I'm eager to take on technical challenges through innovative and collaborative projects.",
    downloadCV: "Download CV",
    contactMe: "Contact Me",
    
    // About
    aboutTitle: "About Me",
    aboutDescription: "Passionate about emerging technologies, I combine web development and DevOps expertise to create robust and scalable solutions.",
    
    // Experience
    experienceTitle: "Professional Experience",
    devFullStack: "Full Stack Developer",
    ministry: "Ministry of National Education, Rabat",
    expDescription: "Design and development of a project management application using Laravel, Bootstrap, and MySQL.",
    
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
