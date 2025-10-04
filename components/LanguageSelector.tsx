'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import styles from './LanguageSelector.module.css';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: '🇦🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    // Guardar preferencia en localStorage
    localStorage.setItem('selectedLanguage', languageCode);
  };

  const getCurrentLanguage = () => {
    return languages.find(lang => lang.code === i18n.language) || languages[0];
  };

  return (
    <div className={styles.languageSelector}>
      <button 
        className={styles.currentLanguage}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Seleccionar idioma"
      >
        <span className={styles.flag}>{getCurrentLanguage().flag}</span>
        <span className={styles.arrow}>▼</span>
      </button>
      
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((language) => (
            <button
              key={language.code}
              className={`${styles.languageOption} ${
                i18n.language === language.code ? styles.active : ''
              }`}
              onClick={() => changeLanguage(language.code)}
            >
              <span className={styles.flag}>{language.flag}</span>
              <span className={styles.name}>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}