import { Clock, DollarSign } from 'lucide-react';
import styles from '@/styles/CabalgatasSection.module.css';

interface CabalgataProps {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'; 
  image: string;
  pdfUrl: string;
}

// EDITABLE: Datos principales de las cabalgatas
const cabalgatasData: CabalgataProps[] = [
  {
    id: 'Cruce de los Andes',
    title: 'CRUCE DE LOS ANDES', 
    description: 'La travesía más auténtica de los Andes',
    price: '$1.440.000',
    duration: '7 DIAS 6 NOCHES',
    difficulty: 'Intermedio',
    image: '/cruceDeLosAndesInicio.png',
    pdfUrl: '/pdfs/cruce-de-los-andes.pdf',
  },
  {
    id: 'cabalgata-avion-uruguayos',
    title: 'CABALGATA AVION DE LOS URUGUAYOS',
    description: 'Expedición por el escenario de "La tragedia de Los Andes"',
    price: '$1.080.000',
    duration: '5 DIAS 4 NOCHES',
    difficulty: 'Intermedio',
    image: 'avion.png',
    pdfUrl: '/pdfs/cabalgata-avion-uruguayos.pdf',
  },
  {
    id: 'cabalgata-los-molles',
    title: 'CABALGATA LOS MOLLES',
    description: 'Vivir la montaña en dos días únicos',
    price: '$390.000',
    duration: '2 DIAS 1 NOCHE',
    difficulty: 'Principiante',
    image: 'cabalgataLosMolles.png',
    pdfUrl: '/pdfs/cabalgataLosMolles.pdf',
  },
  {
    id: 'cabalgata-3-valles',
    title: 'CABALGATA 3 VALLES',
    description: 'En esta experiencia de tres días vas a poder disfrutar de la magia de los atardeceres.',
    price: '$890.000',
    duration: '3 DIAS 2 NOCHES',
    difficulty: 'Avanzado',
    image: 'cabalgata3valles.png',
    pdfUrl: '/pdfs/cabalgata3valles.pdf',
  },
  {
    id: 'cabalgata-expertos',
    title: 'CABALGATA EXPERTOS',
    description: 'Una experiencia desafiante para jinetes experimentados en terreno montañoso.',
    price: '$1.420.000',
    duration: '5 DIAS 4 NOCHES',
    difficulty: 'Avanzado',
    image: 'expertosinicio.png',
    pdfUrl: '/pdfs/cabalgataexpertos.pdf',
  },
  {
    id: 'Semana Santa',
    title: 'CABALGATA DE SEMANA SANTA', 
    description: 'Expedición especial de Semana Santa con actividades culturales y paisajes únicos',
    price: 'PROXIMAMENTE',
    duration: '4 DIAS 3 NOCHES',
    difficulty: 'Intermedio',
    image: '/cabalgatasemanasanta.png',
    pdfUrl: '/pdfs/cabalgatasemanaSanta.pdf',
  },
];

function CabalgataCard({ cabalgata }: { cabalgata: CabalgataProps }) {
  return (
    <div className={styles.cabalgataCard}>
      <div className={styles.cardImage}>
        <img src={cabalgata.image} alt={cabalgata.title} />
        
        {/* Badge de dificultad */}
        <div className={styles.difficultyBadge}>
          {cabalgata.difficulty}
        </div>
      </div>
      
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{cabalgata.title}</h3>
        <p className={styles.cardDescription}>{cabalgata.description}</p>
        
        <div className={styles.cardDetails}>
          <div className={styles.detail}>
            <Clock size={16} />
            <span>{cabalgata.duration}</span>
          </div>
        </div>

        {/* Sección de precio y botón */}
        <div className={styles.actionSection}>
          <div className={styles.priceDisplay}>
            <span className={styles.priceLabel}>Precio:</span>
            <span className={styles.currentPrice}>{cabalgata.price}</span>
          </div>
          {cabalgata.pdfUrl && (
            <a 
              href={cabalgata.pdfUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.moreInfoButton}
            >
              Más Información
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function CabalgatasSection() {
  return (
    <section id="cabalgatas" className={styles.cabalgatasSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Nuestras Cabalgatas </h2> {/* EDITABLE: Título de la sección */}
          <p className={styles.sectionDescription}>
            Elegí tu aventura perfecta. Desde cabalgatas de un día hasta expediciones de varios días con acampada bajo las estrellas.
          </p> {/* EDITABLE: Descripción de la sección */}
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