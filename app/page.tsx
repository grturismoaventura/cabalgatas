import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CabalgatasSection from '@/components/CabalgatasSection';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CabalgatasSection />
  
      <Footer />
    </main>
  );
}