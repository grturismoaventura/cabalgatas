'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/Header.module.css';
import LanguageSelector from './LanguageSelector';
import '../lib/i18n'; // Importar configuración de i18n

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Restaurar idioma guardado al cargar el componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Main navigation */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navContent}>
            {/* Logo */}
            <div className={styles.logo}>
              <img 
                src="/logo-gr.png" 
                alt="GR Turismo"
                style={{ 
                  width: '120px',
                  height: '60px',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Desktop Navigation */}
            <ul className={styles.navLinks}>
              <li><a href="#inicio">{t('navigation.home')}</a></li>
              <li><a href="#cabalgatas">{t('navigation.tours')}</a></li>
              <li><a href="#transfer">{t('navigation.transfer')}</a></li>
              <li><a href="#galeria">{t('navigation.gallery')}</a></li>
              <li><a href="#contacto">{t('navigation.contact')}</a></li>
            </ul>

            {/* Language Selector */}
            <LanguageSelector />

            {/* Mobile menu button */}
            <button
              className={styles.mobileMenuButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <ul className={styles.mobileNavLinks}>
                <li><a href="#inicio" onClick={toggleMenu}>{t('navigation.home')}</a></li>
                <li><a href="#cabalgatas" onClick={toggleMenu}>{t('navigation.tours')}</a></li>
                <li><a href="#transfer" onClick={toggleMenu}>{t('navigation.transfer')}</a></li>
                <li><a href="#galeria" onClick={toggleMenu}>{t('navigation.gallery')}</a></li>
                <li><a href="#contacto" onClick={toggleMenu}>{t('navigation.contact')}</a></li>
              </ul>
              
              {/* Mobile Language Selector */}
              <div className={styles.mobileLanguageSelector}>
                <LanguageSelector />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}