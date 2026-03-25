import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import NortBot from '@/components/NortBot';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Navbar />

      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <NortBot />
        <Pricing />
      </main>

      <Footer />
    </>
  );
}
