'use client';

import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/ContactSection.module.css';
import '../lib/i18n';

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contacto" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <p className={styles.description}>
            {t('contact.description')}
          </p>
        </div>

        <div className={styles.contactGrid}>
          {/* Información de contacto */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <Phone className={styles.icon} />
              <div>
                <h3>{t('contact.phone')}</h3>
                <p>+54 9 261 123-4567</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Mail className={styles.icon} />
              <div>
                <h3>{t('contact.email')}</h3>
                <p>info@grturismoaventura.com</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <MessageCircle className={styles.icon} />
              <div>
                <h3>{t('contact.whatsapp')}</h3>
                <p>+54 9 261 123-4567</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <Instagram className={styles.icon} />
              <div>
                <h3>{t('contact.instagram')}</h3>
                <p>@grturismoaventura</p>
              </div>
            </div>
          </div>

          {/* Mapa o información adicional */}
          <div className={styles.mapContainer}>
            <div className={styles.mapPlaceholder}>
              <MapPin size={48} />
              <h3>Mendoza, Argentina</h3>
              <p>Cordillera de los Andes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

