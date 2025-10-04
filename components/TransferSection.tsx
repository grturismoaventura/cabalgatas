'use client';

import { Car, MapPin, Clock, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/TransferSection.module.css';
import '../lib/i18n';

export default function TransferSection() {
  const { t } = useTranslation();
  
  return (
    <section id="transfer" className={styles.transferSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('transfer.title')}</h2>
          <p className={styles.subtitle}>
            {t('transfer.description')}
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.imageContainer}>
            <img 
              src="/transfer.jpeg" 
              alt="Servicio de Transfer" 
              className={styles.transferImage}
              style={{ 
                width: '100%',
                height: '400px',
                objectFit: 'cover'
              }}
            />
          </div>
          
          <div className={styles.contentContainer}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{t('transfer.destinations')}</h3>
                <div className={styles.serviceDescription}>
                  <p>{t('transfer.comfort')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}