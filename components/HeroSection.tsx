import { ArrowDown, Play, Star } from 'lucide-react';
import styles from '@/styles/HeroSection.module.css';

export default function HeroSection() {
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
              
              <br />GR Turismo Aventura
              </h1>

              <p className={styles.heroSubtitle}>
                Descubre paisajes únicos en cabalgatas inolvidables por los Andes. 
                
              </p> {/* EDITABLE: Descripción principal */}

            

              <div className={styles.heroButtons}>
                <a href="#cabalgatas" className={styles.primaryButton}>
                  <span>Nuestras cabalgatas</span>
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