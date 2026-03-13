import { motion } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import MegaMenu from './MegaMenu';
import { cn } from '../lib/cn';
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion';

const unifiedVariants = {
  hidden: { opacity: 0, y: -14, filter: 'blur(4px)' },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }
  })
};

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
  const [activeMenu, setActiveMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const closeTimerRef = useRef(null);
  const pointerInsideRef = useRef(false);
  const shellRef = useRef(null);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveMenu(null);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKey);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKey);
      clearCloseTimer();
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      if (pointerInsideRef.current) return;
      setActiveMenu(null);
    }, 160);
  };

  const handleOpen = (menuKey) => {
    clearCloseTimer();
    setActiveMenu(menuKey);
  };

  const handleMouseLeave = () => scheduleClose();

  const handleKeyToggle = (menuKey, event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setActiveMenu((prev) => (prev === menuKey ? null : menuKey));
    }
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      handleOpen(menuKey);
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      setActiveMenu(null);
    }
  };

  const logoSrc = '/brand/skyforge-logo-light.svg';
  const shellHeight = prefersReducedMotion
    ? 'auto'
    : headerHeight
      ? `${headerHeight + (activeMenu ? menuHeight : 0)}px`
      : undefined;

  useLayoutEffect(() => {
    if (!headerRef.current) return;
    const updateHeaderHeight = () => {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    };
    updateHeaderHeight();
    const observer = new ResizeObserver(updateHeaderHeight);
    observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!menuRef.current) return;
    const updateMenuHeight = () => {
      setMenuHeight(menuRef.current.getBoundingClientRect().height);
    };
    updateMenuHeight();
    const observer = new ResizeObserver(updateMenuHeight);
    observer.observe(menuRef.current);
    return () => observer.disconnect();
  }, [activeMenu]);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40"
      onMouseEnter={() => {
        pointerInsideRef.current = true;
        clearCloseTimer();
      }}
      onMouseLeave={() => {
        pointerInsideRef.current = false;
        handleMouseLeave();
      }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden />

      <div
        className={cn(
          'w-full px-0 transition-all duration-500 ease-out',
          scrolled ? 'translate-y-1' : 'translate-y-0'
        )}
      >
        <motion.div
          ref={shellRef}
          className={cn(
            'mx-auto w-full max-w-[1240px] overflow-hidden rounded-2xl border border-transparent transition-all duration-500',
            scrolled || activeMenu ? 'nav-blur shadow-soft border-border' : 'bg-transparent'
          )}
          style={{
            height: prefersReducedMotion ? 'auto' : undefined,
            transition: prefersReducedMotion
              ? 'none'
              : 'background-color 500ms ease, border-color 500ms ease, box-shadow 500ms ease, backdrop-filter 500ms ease, -webkit-backdrop-filter 500ms ease'
          }}
          onBlurCapture={(event) => {
            const nextTarget = event.relatedTarget;
            if (!shellRef.current) return;
            if (nextTarget && shellRef.current.contains(nextTarget)) return;
            scheduleClose();
          }}
          {...(!prefersReducedMotion
            ? { variants: unifiedVariants, initial: 'hidden', animate: 'show', custom: 0.05 }
            : {})}
        >
          <div ref={headerRef} className="flex items-center justify-between gap-8 px-8 py-4">
            <img src={logoSrc} alt="Skyforge Drones" className="h-14 w-auto" />

            <nav aria-label="Primary" className="hidden items-center gap-2 md:flex">
              {navItems.map((item) => {
                const isIndustry = item === 'Industries';
                const isProduct = item === 'Products';
                const isPayloads = item === 'Payloads';
                const menuKey = isIndustry ? 'industries' : isProduct ? 'products' : isPayloads ? 'payloads' : null;
                const isTrigger = Boolean(menuKey);
                return (
                  <button
                    key={item}
                    type="button"
                    onMouseEnter={() => (isTrigger ? handleOpen(menuKey) : scheduleClose())}
                    onFocus={() => (isTrigger ? handleOpen(menuKey) : scheduleClose())}
                    onKeyDown={(event) => {
                      if (isTrigger) handleKeyToggle(menuKey, event);
                    }}
                    aria-haspopup={isTrigger ? 'menu' : undefined}
                    aria-expanded={isTrigger ? activeMenu === menuKey : undefined}
                    className={cn(
                      'group/navitem relative px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none',
                      'text-white/80 hover:text-white'
                    )}
                  >
                    <span>{item}</span>
                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-accent transition-all duration-200 group-hover/navitem:w-full" />
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <button
                className={cn(
                  'hidden rounded-full px-3 py-2 text-sm font-medium transition md:inline-flex',
                  'border border-white/60 text-white hover:border-[#D61F26] hover:bg-[rgba(255,255,255,0.12)] hover:text-white'
                )}
              >
                Contact
              </button>
              <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[var(--accentHover)] hover:shadow-md">
                Request Demo
              </button>
            </div>
          </div>

          <MegaMenu
            activeMenu={activeMenu}
            onRequestClose={scheduleClose}
            onRequestOpen={clearCloseTimer}
            prefersReducedMotion={prefersReducedMotion}
            menuRef={menuRef}
          />
        </motion.div>
      </div>
    </header>
  );
}

export default Navbar;
