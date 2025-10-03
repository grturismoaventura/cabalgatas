import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CabalgatasSection from '@/components/CabalgatasSection';
import TransferSection from '@/components/TransferSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CabalgatasSection />
      <TransferSection />
      <Footer />
    </main>
  );
}