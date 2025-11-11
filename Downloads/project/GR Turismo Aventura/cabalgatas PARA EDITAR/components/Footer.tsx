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
          {/* Footer simple como el original */}
        </div>
      </div>
    </footer>
  );
}