'use client';

import { useTranslation } from 'react-i18next';
import styles from '@/styles/Footer.module.css';
import '../lib/i18n';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>GR Turismo Aventura</h3>
            <p>{t('footer.description')}</p>
          </div>
          
          <div className={styles.footerSection}>
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="#inicio">{t('navigation.home')}</a></li>
              <li><a href="#cabalgatas">{t('navigation.tours')}</a></li>
              <li><a href="#galeria">{t('navigation.gallery')}</a></li>
              <li><a href="#contacto">{t('navigation.contact')}</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>{t('footer.followUs')}</h4>
            <p>@grturismoaventura</p>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 GR Turismo Aventura. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}