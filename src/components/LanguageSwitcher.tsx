
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-full p-2 flex items-center space-x-2">
        <Globe size={16} className="text-gray-400" />
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
            language === 'fr' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
            language === 'en' 
              ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white' 
              : 'text-gray-400 hover:text-white'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
