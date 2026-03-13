import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroEnterprise from './sections/HeroEnterprise';
import IndustriesSection from './sections/IndustriesSection';
import ProductsSection from './sections/ProductsSection';
import SupportServicesSection from './sections/SupportServicesSection';
import ContactSection from './sections/ContactSection';
import FinalCtaSection from './sections/FinalCtaSection';
import Footer from './components/Footer';
import usePrefersReducedMotion from './lib/usePrefersReducedMotion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smooth: true,
      lerp: 0.08
    });

    lenisRef.current = lenis;

    let frameId;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    const handleScroll = () => ScrollTrigger.update();
    lenis.on('scroll', handleScroll);

    return () => {
      lenis.off('scroll', handleScroll);
      lenis.destroy();
      lenisRef.current = null;
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-bg text-text">
      <Navbar />
      <main className="space-y-20 pb-0">
        <HeroEnterprise />
        <IndustriesSection />
        <ProductsSection />
        <SupportServicesSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
