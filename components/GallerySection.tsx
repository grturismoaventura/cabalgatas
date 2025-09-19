import styles from '@/styles/GallerySection.module.css';

// EDITABLE: Array de imágenes de la galería
const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    alt: 'Cabalgata en montañas',
    title: 'Vista panorámica'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/1629159/pexels-photo-1629159.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    alt: 'Jinetes en el bosque',
    title: 'Aventura en el bosque'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/1407938/pexels-photo-1407938.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    alt: 'Familia montando',
    title: 'Diversión familiar'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/1202274/pexels-photo-1202274.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    alt: 'Caballos pastando',
    title: 'Nuestros caballos'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    alt: 'Atardecer a caballo',
    title: 'Atardeceres únicos'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
    alt: 'Cascada natural',
    title: 'Paisajes naturales'
  }
];

export default function GallerySection() {
  return (
    <section id="galeria" className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Galería de Momentos</h2> {/* EDITABLE: Título de la galería */}
          <p className={styles.sectionDescription}>
            Revive las mejores experiencias de nuestros visitantes y descubre
            la belleza natural que te espera en cada cabalgata.
          </p> {/* EDITABLE: Descripción de la galería */}
        </div>

        <div className={styles.galleryGrid}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.galleryItem}>
              {/* EDITABLE: Cada imagen de la galería */}
              <img 
                src={image.src} 
                alt={image.alt} 
                className={styles.galleryImage}
              />
              <div className={styles.galleryOverlay}>
                <h3 className={styles.galleryTitle}>{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.galleryActions}>
          <button className={styles.viewMoreButton}>
            Ver Más Fotos
          </button>
        </div>
      </div>
    </section>
  );
}