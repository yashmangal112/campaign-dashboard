import React, { useState } from 'react';
import i18n from '../i18n/i18n';

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const toggleLanguage = () => {
    const newLanguage = selectedLanguage === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
  };

  return (
    <div className="flex justify-end items-center mt-2">
      <div
        className="relative w-20 h-10 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center transition-colors duration-300 cursor-pointer"
        onClick={toggleLanguage}
      >
        <div
          className={`absolute w-8 h-8 bg-white dark:bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 ${
            selectedLanguage === 'en' ? 'translate-x-0' : 'translate-x-[121%]'
          }`}
        ></div>
        <span
          className={`absolute left-3 text-xs font-medium transition-opacity duration-300 ${
            selectedLanguage === 'en' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          EN
        </span>
        <span
          className={`absolute right-3.5 text-xs font-medium transition-opacity duration-300 ${
            selectedLanguage === 'es' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          ES
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
