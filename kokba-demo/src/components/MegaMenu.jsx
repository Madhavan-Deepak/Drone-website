import { useEffect, useState } from 'react';

const productItems = [
  {
    id: 'dock-3',
    name: 'DJI Dock 3',
    desc: 'Autonomous operations hub.',
    href: '/products#dock-3',
    thumbSrc: '/images/products/dock-3.png',
    thumbAlt: 'DJI Dock 3',
    group: 'operations'
  },
  {
    id: 'matrice-400',
    name: 'DJI Matrice 400',
    desc: 'Heavy-lift enterprise platform.',
    href: '/products#matrice-400',
    thumbSrc: '/images/products/DJI_Matrice_400.png',
    thumbAlt: 'DJI Matrice 400',
    group: 'flight'
  },
  {
    id: 'matrice-4-series',
    name: 'DJI Matrice 4 Series',
    desc: 'Multi-mission aerial system.',
    href: '/products#matrice-4-series',
    thumbSrc: '/images/products/matrice-4-series.png',
    thumbAlt: 'DJI Matrice 4 Series',
    group: 'flight'
  },
  {
    id: 'matrice-350-rtk',
    name: 'DJI Matrice 350 RTK',
    desc: 'Flagship industrial workhorse.',
    href: '/products#matrice-350-rtk',
    thumbSrc: '/images/products/matrice-350-rtk.png',
    thumbAlt: 'DJI Matrice 350 RTK',
    group: 'flight'
  },
  {
    id: 'mavic-3-series',
    name: 'DJI Mavic 3 Series',
    desc: 'Compact, rapid-deploy imaging.',
    href: '/products#mavic-3-series',
    thumbSrc: '/images/products/DJI_Mavic_3_Pro.png',
    thumbAlt: 'DJI Mavic 3 Series',
    group: 'flight'
  },
  {
    id: 'elios-3',
    name: 'Flyability Elios 3',
    desc: 'Confined-space inspection.',
    href: '/products#elios-3',
    thumbSrc: '/images/products/Elios3.png',
    thumbAlt: 'Flyability Elios 3',
    group: 'operations'
  }
];

const payloadItems = [
  {
    id: 'zenmuse-p1',
    name: 'Zenmuse P1',
    desc: 'Full-frame photogrammetry.',
    href: '/products#zenmuse-p1',
    imageSrc: '/images/products/zenmuse-p1.png',
    imageAlt: 'Zenmuse P1',
    vendor: 'dji'
  },
  {
    id: 'zenmuse-l2',
    name: 'Zenmuse L2',
    desc: 'Terrain capture suite.',
    href: '/products#zenmuse-l2',
    imageSrc: '/images/products/zenmuse-l2.png',
    imageAlt: 'Zenmuse L2',
    vendor: 'dji'
  },
  {
    id: 'zenmuse-h30',
    name: 'Zenmuse H30',
    desc: 'Multi-sensor inspection.',
    href: '/products#zenmuse-h30',
    imageSrc: '/images/products/zenmuse-h30.png',
    imageAlt: 'Zenmuse H30',
    vendor: 'dji'
  },
  {
    id: 'zenmuse-h20n',
    name: 'Zenmuse H20N',
    desc: 'Night operations suite.',
    href: '/products#zenmuse-h20n',
    imageSrc: '/images/products/zenmuse-h20n.png',
    imageAlt: 'Zenmuse H20N',
    vendor: 'dji'
  },
  {
    id: 'ut-payload',
    name: 'UT Payload',
    desc: 'Confined inspection kit.',
    href: '/products#ut-payload',
    imageSrc: '/images/products/payloads.jpg',
    imageAlt: 'UT Payload',
    vendor: 'flyability'
  },
  {
    id: 'rad-payload',
    name: 'RAD Payload',
    desc: 'Radiation analytics.',
    href: '/products#rad-payload',
    imageSrc: '/images/products/payloads.jpg',
    imageAlt: 'RAD Payload',
    vendor: 'flyability'
  },
  {
    id: 'surveying-payload',
    name: 'Surveying Payload',
    desc: 'Mapping-ready package.',
    href: '/products#surveying-payload',
    imageSrc: '/images/products/payloads.jpg',
    imageAlt: 'Surveying Payload',
    vendor: 'flyability'
  },
  {
    id: 'gas-sensor',
    name: 'Gas Sensor',
    desc: 'Remote gas sampling.',
    href: '/products#gas-sensor',
    imageSrc: '/images/products/payloads.jpg',
    imageAlt: 'Gas Sensor',
    vendor: 'flyability'
  }
];

const industries = [
  {
    label: 'Surveying & Mapping',
    desc: 'Corridor, terrain, and LiDAR-ready capture.',
    image: '/images/industries/surveying.jpg',
    icon: 'survey'
  },
  {
    label: 'Energy, Oil & Gas',
    desc: 'Inspection, flare monitoring, and integrity checks across assets.',
    image: '/images/industries/energy.jpg',
    icon: 'energy'
  },
  {
    label: 'Solar Plant Thermography',
    desc: 'String-level hotspot detection and IV-curve readiness.',
    image: '/images/industries/solar.jpg',
    icon: 'solar'
  },
  {
    label: 'Construction & Infrastructure',
    desc: 'Progress verification and as-built alignment.',
    image: '/images/industries/construction.jpg',
    icon: 'construction'
  },
  {
    label: 'Mining',
    desc: 'Stockpile audits, haul-road checks, blast readiness.',
    image: '/images/industries/mining.jpg',
    icon: 'mining'
  },
  {
    label: 'Powerline & Substation Inspection',
    desc: 'Thermal, corona, and visual fault detection.',
    image: '/images/industries/powerline.jpg',
    icon: 'power'
  }
];

const menuConfig = {
  products: {
    featured: {
      label: 'Featured',
      title: 'Enterprise Drone Ecosystem',
      desc: 'Unified airframes, payloads, and autonomy software designed for operational uptime in critical infrastructure.',
      cta: 'Discover Platform'
    }
  },
  industries: {
    featured: {
      label: 'Featured',
      title: 'Industry Missions',
      desc: 'Mission-specific enterprise drone operations tailored for regulated, high-consequence environments.',
      cta: 'Explore Industries'
    }
  },
  payloads: {
    featured: {
      label: 'Featured',
      title: 'Mission Payloads',
      desc: 'Precision payloads engineered for survey-grade accuracy, thermal analytics, and complex inspection workflows.',
      cta: 'Explore Payloads'
    }
  }
};

function MegaMenu({ activeMenu, onRequestClose, onRequestOpen, prefersReducedMotion, menuRef }) {
  const panelVisible = Boolean(activeMenu);
  const config = activeMenu ? menuConfig[activeMenu] : null;
  const productsActive = activeMenu === 'products';
  const payloadsActive = activeMenu === 'payloads';
  const industriesActive = activeMenu === 'industries';
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);
  const [activeProductId, setActiveProductId] = useState('matrice-400');
  const [activePayloadId, setActivePayloadId] = useState('zenmuse-p1');
  const activeIndustry = industries[activeIndustryIndex] || industries[0];
  const activeProduct = productItems.find((item) => item.id === activeProductId) || productItems[0];
  const activePayload = payloadItems.find((item) => item.id === activePayloadId) || payloadItems[0];

  useEffect(() => {
    if (!industriesActive) return;
    setActiveIndustryIndex(0);
  }, [industriesActive]);

  useEffect(() => {
    if (!productsActive) return;
    setActiveProductId('matrice-400');
  }, [productsActive]);

  useEffect(() => {
    if (!payloadsActive) return;
    setActivePayloadId('zenmuse-p1');
  }, [payloadsActive]);

  return (
    <div
      role="menu"
      className={panelVisible ? 'pointer-events-auto' : 'pointer-events-none'}
      onMouseEnter={onRequestOpen}
      onMouseLeave={onRequestClose}
      aria-hidden={!panelVisible}
    >
      <div
        ref={menuRef}
        className={`px-8 ${panelVisible ? 'border-t border-white/10 pb-7 pt-3' : 'pb-0 pt-0'}`}
        style={{
          opacity: panelVisible ? 1 : 0,
          transition: prefersReducedMotion
            ? 'none'
            : 'opacity 240ms cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {panelVisible && industriesActive && (
          <div className="grid gap-6 md:grid-cols-[1.05fr_1.45fr]">
            <div className="relative overflow-hidden rounded-xl bg-[rgba(255,255,255,0.06)] p-5">
              <img
                src={activeIndustry?.image}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgba(11,15,23,0.06)] via-[rgba(11,15,23,0.35)] to-[rgba(11,15,23,0.55)]"
                aria-hidden
              />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">FEATURED</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">Industry Missions</h3>
                <p className="mt-2 text-sm text-white/70">
                  Mission-specific enterprise drone operations tailored for regulated, high-consequence environments.
                </p>
                <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accentHover)] hover:shadow-md">
                  {menuConfig.industries.featured.cta}
                  <ArrowIcon />
                </button>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {industries.map((item, idx) => (
                <a
                  key={item.label}
                  href="#industries"
                  role="menuitem"
                  onMouseEnter={() => setActiveIndustryIndex(idx)}
                  onFocus={() => setActiveIndustryIndex(idx)}
                  className="group flex gap-3 rounded-xl border border-transparent px-3 py-3 transition hover:bg-[rgba(255,255,255,0.06)]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/70">
                    <IndustryIcon type={item.icon} />
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.label}</p>
                    <p className="text-sm text-white/70">{item.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {panelVisible && productsActive && (
          <div className="grid gap-6 md:grid-cols-[1.05fr_1.45fr]">
            <div className="rounded-xl bg-[rgba(255,255,255,0.06)] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{menuConfig.products.featured.label.toUpperCase()}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{menuConfig.products.featured.title}</h3>
              <p className="mt-2 text-sm text-white/70">{menuConfig.products.featured.desc}</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)]">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={activeProduct?.thumbSrc}
                    alt={activeProduct?.thumbAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accentHover)] hover:shadow-md">
                {menuConfig.products.featured.cta}
                <ArrowIcon />
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Flight Systems</p>
                <div className="space-y-2">
                  {productItems
                    .filter((item) => item.group === 'flight')
                    .map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        role="menuitem"
                        className="group block rounded-xl border border-transparent px-3 py-3 transition-colors hover:bg-[rgba(255,255,255,0.06)]"
                        onMouseEnter={() => setActiveProductId(item.id)}
                        onFocus={() => setActiveProductId(item.id)}
                      >
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </a>
                    ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Autonomous / Operations</p>
                <div className="space-y-2">
                  {productItems
                    .filter((item) => item.group === 'operations')
                    .map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        role="menuitem"
                        className="group block rounded-xl border border-transparent px-3 py-3 transition-colors hover:bg-[rgba(255,255,255,0.06)]"
                        onMouseEnter={() => setActiveProductId(item.id)}
                        onFocus={() => setActiveProductId(item.id)}
                      >
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-white/70">{item.desc}</p>
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {panelVisible && payloadsActive && (
          <div className="grid gap-6 md:grid-cols-[1.05fr_1.45fr]">
            <div className="rounded-xl bg-[rgba(255,255,255,0.06)] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">{config?.featured.label?.toUpperCase()}</p>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{config?.featured.title}</h3>
              <p className="mt-2 text-sm text-white/70">{config?.featured.desc}</p>
              <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[rgba(255,255,255,0.04)]">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={activePayload?.imageSrc}
                    alt={activePayload?.label}
                    className={`h-full w-full object-contain p-3 ${
                      activePayload?.id === 'zenmuse-h30' ? 'scale-110' : ''
                    }`}
                  />
                </div>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[var(--accentHover)] hover:shadow-md">
                {config?.featured.cta}
                <ArrowIcon />
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">DJI Payloads</p>
                  <p className="mt-1 text-xs text-white/50">Compatible with DJI Matrice 350 RTK</p>
                </div>
                <div className="space-y-2">
                  {payloadItems
                    .filter((item) => item.vendor === 'dji')
                    .map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        role="menuitem"
                        className="group block rounded-lg px-2 py-2 transition-colors hover:text-white/90"
                        onMouseEnter={() => setActivePayloadId(item.id)}
                        onFocus={() => setActivePayloadId(item.id)}
                      >
                        <p className="font-medium text-white">{item.name}</p>
                        {item.desc && <p className="text-sm text-white/70">{item.desc}</p>}
                        <span className="mt-2 block h-0.5 w-8 bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      </a>
                    ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Flyability Payloads</p>
                <div className="space-y-2">
                  {payloadItems
                    .filter((item) => item.vendor === 'flyability')
                    .map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        role="menuitem"
                        className="group block rounded-lg px-2 py-2 transition-colors hover:text-white/90"
                        onMouseEnter={() => setActivePayloadId(item.id)}
                        onFocus={() => setActivePayloadId(item.id)}
                      >
                        <p className="font-medium text-white">{item.name}</p>
                        {item.desc && <p className="text-sm text-white/70">{item.desc}</p>}
                        <span className="mt-2 block h-0.5 w-8 bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IndustryIcon({ type }) {
  if (type === 'survey') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 18h16M6 16l4-6 4 4 4-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'energy') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M13 2L6 14h5l-1 8 7-12h-5l1-8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'construction') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M4 20h16M6 20V8l6-4 6 4v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 20v-6h4v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'mining') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 16l5-6 4 4 4-6 5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'power') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v18M7 7l5-4 5 4M7 17l5 4 5-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2.2 2.2M16.3 16.3l2.2 2.2M5.5 18.5l2.2-2.2M16.3 7.7l2.2-2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default MegaMenu;
