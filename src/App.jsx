import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroEnterprise from './sections/HeroEnterprise';
import SectionPlaceholder from './sections/SectionPlaceholder';
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
      duration: 1.2,
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
    <div className="relative min-h-screen overflow-hidden bg-bg text-text">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-transparent"
        aria-hidden
      />

      <Navbar />

      <main className="relative z-10 space-y-20 pb-24">
        <HeroEnterprise prefersReducedMotion={prefersReducedMotion} />
        <SectionPlaceholder title="Industries" />
        <SectionPlaceholder title="Featured Products" />
        <SectionPlaceholder title="Support & Services" />
        <SectionPlaceholder title="Contact / CTA" />
      </main>
    </div>
  );
}

export default App;
