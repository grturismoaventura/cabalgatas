'use client';

import { Car, MapPin, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import styles from '@/styles/TransferSection.module.css';

export default function TransferSection() {
  return (
    <section id="transfer" className={styles.transferSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>TRANSFER</h2>
          <p className={styles.subtitle}>
            Servicio de traslados cómodos y seguros para completar tu experiencia
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.imageContainer}>
            <Image 
              src="/transfer.jpeg" 
              alt="Servicio de Transfer" 
              width={600}
              height={400}
              className={styles.transferImage}
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div className={styles.contentContainer}>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>DESTINOS PRINCIPALES</h3>
                <div className={styles.serviceDescription}>
                  <p>Traslados desde y hacia aeropuerto de Mendoza, San Rafael y Malargüe.</p>
                  <p>Consultar por más destinos dentro de la Provincia de Mendoza.</p>
                  <p>Consultar por excursión OFF ROAD 4X4.</p>
                  <p>Consultar por visitas a Bodegas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}