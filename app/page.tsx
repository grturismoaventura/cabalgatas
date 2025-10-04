'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CabalgatasSection from '@/components/CabalgatasSection';
import TransferSection from '@/components/TransferSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import '../lib/i18n'; // Inicializar i18n

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CabalgatasSection />
      <TransferSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}