'use client';

import { Clock, DollarSign } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import styles from '@/styles/CabalgatasSection.module.css';
import '../lib/i18n';
import '../lib/i18n';

interface CabalgataProps {
  id: string;
  titleKey: string;
  descriptionKey: string;
  durationKey: string;
  price: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'; 
  image: string;
  pdfUrl: string;
  available?: boolean;
}

// EDITABLE: Datos principales de las cabalgatas
const cabalgatasData: CabalgataProps[] = [
  {
    id: 'Cruce de los Andes',
    titleKey: 'cabalgatas.tours.cruce-andes.title',
    descriptionKey: 'cabalgatas.tours.cruce-andes.description',
    durationKey: 'cabalgatas.tours.cruce-andes.duration',
    price: '$1.440.000',
    difficulty: 'Intermedio',
    image: '/cruceDeLosAndesInicio.png',
    pdfUrl: '/pdfs/cruce-de-los-andes.html',
    available: true,
  },
  {
    id: 'cabalgata-avion-uruguayos',
    titleKey: 'cabalgatas.tours.avion-uruguayos.title',
    descriptionKey: 'cabalgatas.tours.avion-uruguayos.description',
    durationKey: 'cabalgatas.tours.avion-uruguayos.duration',
    price: '$1.080.000',
    difficulty: 'Intermedio',
    image: '/avion.png',
    pdfUrl: '/pdfs/cabalgata-avion-uruguayos.html',
    available: true,
  },
  {
    id: 'cabalgata-los-molles',
    titleKey: 'cabalgatas.tours.los-molles.title',
    descriptionKey: 'cabalgatas.tours.los-molles.description',
    durationKey: 'cabalgatas.tours.los-molles.duration',
    price: '$390.000',
    difficulty: 'Principiante',
    image: '/cabalgataLosMolles.jpg',
    pdfUrl: '/pdfs/cabalgataLosMolles.html',
    available: true,
  },
  {
    id: 'cabalgata-3-valles',
    titleKey: 'cabalgatas.tours.tres-valles.title',
    descriptionKey: 'cabalgatas.tours.tres-valles.description',
    durationKey: 'cabalgatas.tours.tres-valles.duration',
    price: '$890.000',
    difficulty: 'Principiante',
    image: '/cabalgata3valles.jpg',
    pdfUrl: '/pdfs/cabalgata3valles.html',
    available: true,
  },
  {
    id: 'cabalgata-expertos',
    titleKey: 'cabalgatas.tours.expertos.title',
    descriptionKey: 'cabalgatas.tours.expertos.description',
    durationKey: 'cabalgatas.tours.expertos.duration',
    price: '$1.520.000',
    difficulty: 'Avanzado',
    image: '/expertosinicio.png',
    pdfUrl: '/pdfs/cabalgataexpertos.html',
    available: true,
  },
  {
    id: 'Semana Santa',
    titleKey: 'cabalgatas.tours.semana-santa.title',
    descriptionKey: 'cabalgatas.tours.semana-santa.description',
    durationKey: 'cabalgatas.tours.semana-santa.duration',
    price: 'PROXIMAMENTE',
    difficulty: 'Principiante',
    image: '/cabalgatasemanasanta.png',
    pdfUrl: '/pdfs/cabalgatasemanaSanta.html',
    available: false,
  },
];

function CabalgataCard({ cabalgata }: { cabalgata: CabalgataProps }) {
  const { t, i18n } = useTranslation();
  
  // Función para generar la URL correcta según el idioma
  const getLocalizedPdfUrl = (pdfUrl: string, language: string) => {
    if (language === 'es') {
      return pdfUrl; // URL original para español
    }
    // Para otros idiomas, insertar el código de idioma en la ruta
    return pdfUrl.replace('/pdfs/', `/pdfs/${language}/`);
  };
  
  return (
    <div className={styles.cabalgataCard}>
      <div className={styles.cardImage}>
        <img 
          src={cabalgata.image} 
          alt={t(cabalgata.titleKey)}
        />
        {/* Badge de dificultad */}
        <div className={styles.difficultyBadge}>
          {t(`cabalgatas.difficulty.${cabalgata.difficulty.toLowerCase()}` as any)}
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{t(cabalgata.titleKey)}</h3>
        <p className={styles.cardDescription}>{t(cabalgata.descriptionKey)}</p>
        
        <div className={styles.cardDetails}>
          <div className={styles.detail}>
            <Clock size={16} />
            <span>{t(cabalgata.durationKey)}</span>
          </div>
        </div>

        {/* Sección de precio y botón */}
        <div className={styles.actionSection}>
          <div className={styles.priceDisplay}>
            {cabalgata.available !== false && (
              <span className={styles.priceLabel}>Precio:</span>
            )}
            <span className={styles.currentPrice}>{cabalgata.price}</span>
          </div>
          {cabalgata.available !== false ? (
            cabalgata.pdfUrl && (
              <a 
                href={getLocalizedPdfUrl(cabalgata.pdfUrl, i18n.language)} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.moreInfoButton}
              >
                {t('cabalgatas.viewDetails')}
              </a>
            )
          ) : (
            <button 
              className={`${styles.moreInfoButton} ${styles.disabledButton}`}
              disabled
              style={{ 
                opacity: 0.5, 
                cursor: 'not-allowed',
                backgroundColor: '#ccc',
                color: '#666'
              }}
            >
              {t('cabalgatas.comingSoon')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CabalgatasSection() {
  const { t } = useTranslation();
  
  return (
    <section id="cabalgatas" className={styles.cabalgatasSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{t('cabalgatas.title')}</h2>
          <p className={styles.sectionDescription}>
            {t('cabalgatas.description')}
          </p>
        </div>

        <div className={styles.cabalgatasGrid}>
          {cabalgatasData.map((cabalgata) => (
            <CabalgataCard key={cabalgata.id} cabalgata={cabalgata} />
          ))}
        </div>
      </div>
    </section>
  );
}