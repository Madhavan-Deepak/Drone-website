import { useEffect, useState } from 'react';
import MegaMenu from './MegaMenu';
import { cn } from '../lib/cn';

const navItems = [
  'Industries',
  'Products',
  'Payloads',
  'Software',
  'Training',
  'Support',
  'Company'
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  const handleMouseLeave = () => setIsMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40" onMouseLeave={handleMouseLeave}>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/60 to-transparent" aria-hidden />

      <div
        className={cn(
          'mx-auto mt-2 w-full max-w-6xl px-4 transition-all duration-500 ease-out',
          scrolled ? 'translate-y-1' : 'translate-y-0'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between gap-6 rounded-2xl border border-transparent px-4 py-3 transition-all duration-500',
            scrolled ? 'nav-blur shadow-soft border-border' : 'bg-transparent'
          )}
        >
          <img src="/brand/skyforge-logo-dark.svg" alt="Skyforge Drones" className="h-11 w-auto" />

          <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isProduct = item === 'Products';
              return (
                <button
                  key={item}
                  type="button"
                  onMouseEnter={() => setIsMenuOpen(isProduct)}
                  onFocus={() => setIsMenuOpen(isProduct)}
                  className="group/navitem relative px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:text-text focus:outline-none"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-accent transition-all duration-200 group-hover/navitem:w-full" />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-full border border-border px-3 py-2 text-sm font-medium text-muted transition hover:border-accent/60 hover:text-text md:inline-flex">
              Contact
            </button>
            <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-md">
              Request Demo
            </button>
          </div>
        </div>
      </div>

      <MegaMenu isOpen={isMenuOpen} closeMenu={() => setIsMenuOpen(false)} />
    </header>
  );
}

export default Navbar;
