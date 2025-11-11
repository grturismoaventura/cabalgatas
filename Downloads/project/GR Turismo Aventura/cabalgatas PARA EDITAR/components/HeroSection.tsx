'use client';

import { ArrowDown, Play, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/HeroSection.module.css';
import '../lib/i18n';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="inicio" className={styles.hero}>
      {/* EDITABLE: Video de fondo o imagen - Cambiar URL por el contenido deseado */}
      <div 
        className={styles.heroBackground}
        style={{
          backgroundImage: 'url(/fondoinicio.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className={styles.heroOverlay}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              
          

              {/* EDITABLE: Contenido principal del hero */}
              <h1 className={styles.heroTitle}>
                {t('hero.title')}
                <br />GR Turismo Aventura
              </h1>

              <p className={styles.heroSubtitle}>
                {t('hero.subtitle')} 
                
              </p> {/* EDITABLE: Descripción principal */}

            

              <div className={styles.heroButtons}>
                <a href="#cabalgatas" className={styles.primaryButton}>
                  <span>{t('hero.cta')}</span>
                  <ArrowDown size={20} />
                </a>
            
              </div>

             
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
}