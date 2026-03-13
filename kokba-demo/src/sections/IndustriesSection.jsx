import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../lib/usePrefersReducedMotion";

const industries = [
  {
    title: "Surveying & Mapping",
    desc: "Corridor, terrain, and LiDAR-ready capture for accurate surfaces.",
    image: "/images/industries/surveying.jpg"
  },
  {
    title: "Energy, Oil & Gas",
    desc: "Upstream to downstream integrity, flare, and tank monitoring.",
    image: "/images/industries/energy.jpg"
  },
  {
    title: "Construction & Infrastructure",
    desc: "Progress verification, earthworks, and as-built alignment.",
    image: "/images/industries/construction.jpg"
  },
  {
    title: "Mining Exploration",
    desc: "Stockpile audits, haul-road checks, blast readiness.",
    image: "/images/industries/mining.jpg"
  },
  {
    title: "Powerline & Substation Inspection",
    desc: "Thermal, corona, and visual fault detection across grids.",
    image: "/images/industries/powerline.jpg"
  },
  {
    title: "Solar Plant Thermography",
    desc: "String-level hotspot detection and IV-curve readiness.",
    image: "/images/industries/solar.jpg"
  }
];

const entrance = {
  hidden: { opacity: 0, y: -14, filter: "blur(4px)" },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d }
  })
};

const ArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function IndustriesSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const update = () => setContainerWidth(node.clientWidth || 0);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const sizing = useMemo(
    () => ({
      gap: 12,
      duration: prefersReducedMotion ? "60ms" : "700ms",
      easing: "cubic-bezier(0.22, 1, 0.36, 1)"
    }),
    [prefersReducedMotion]
  );

  const widthsByIndex = useMemo(() => {
    const base = containerWidth || 1200;
    const hiddenWidth = 8;
    const ratios = { 0: 0.56, 1: 0.22, 2: 0.12, 3: 0.06 };
    const map = {};

    for (let i = 0; i < industries.length; i += 1) {
      const dist = Math.abs(i - activeIndex);
      map[i] = dist in ratios ? base * ratios[dist] : hiddenWidth;
    }

    return map;
  }, [activeIndex, containerWidth]);

  const trackOffset = useMemo(() => {
    if (!containerWidth) return 0;
    const activeWidth = widthsByIndex[activeIndex] || 0;

    let before = 0;
    for (let i = 0; i < activeIndex; i += 1) {
      before += widthsByIndex[i] || 0;
    }
    const beforeGap = activeIndex * sizing.gap;
    const centerOffset = before + beforeGap - (containerWidth - activeWidth) / 2;

    let total = 0;
    for (let i = 0; i < industries.length; i += 1) {
      total += widthsByIndex[i] || 0;
    }
    const totalGap = Math.max(0, industries.length - 1) * sizing.gap;
    const maxOffset = Math.max(0, total + totalGap - containerWidth);

    return -Math.min(Math.max(centerOffset, 0), maxOffset);
  }, [activeIndex, containerWidth, sizing.gap, widthsByIndex]);

  const next = () => setActiveIndex((i) => Math.min(industries.length - 1, i + 1));
  const prev = () => setActiveIndex((i) => Math.max(0, i - 1));

  return (
    <section id="industries" className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <motion.div
        variants={entrance}
        initial={prefersReducedMotion ? "show" : "hidden"}
        animate="show"
        custom={0.04}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#D61F26]">Industries</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#0B0F17] md:text-4xl">
          Mission-focused platforms for every critical domain.
        </h2>
      </motion.div>

      <motion.div
        variants={entrance}
        initial={prefersReducedMotion ? "show" : "hidden"}
        animate="show"
        custom={0.1}
        className="mt-6"
      >
        <div ref={containerRef} className="relative overflow-hidden rounded-xl">
          <div
            className="flex"
            style={{
              gap: `${sizing.gap}px`,
              transform: `translateX(${trackOffset}px)`,
              transition: prefersReducedMotion
                ? "none"
                : `transform ${sizing.duration} ${sizing.easing}`
            }}
          >
            {industries.map((item, idx) => {
              const isActive = idx === activeIndex;
              const widthValue = widthsByIndex[idx] || 0;
              const isHidden = widthValue <= 10;
              const basis = widthValue;

              return (
                <div
                  key={item.title}
                  className="group relative flex-shrink-0 overflow-hidden rounded-lg"
                  style={{
                    flexBasis: basis,
                    minWidth: basis,
                    height: "360px",
                    opacity: isHidden ? 0 : 1,
                    transition: prefersReducedMotion
                      ? "none"
                      : `flex-basis ${sizing.duration} ${sizing.easing}, min-width ${sizing.duration} ${sizing.easing}, opacity ${sizing.duration} ${sizing.easing}, transform 180ms ease`,
                    cursor: "pointer"
                  }}
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className="absolute inset-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.35)] to-[rgba(0,0,0,0.6)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 opacity-40">
                      <div className="absolute inset-0" style={{ border: "1px solid rgba(255,255,255,0.12)" }} />
                      <div className="absolute inset-x-0 top-1/3 h-px bg-white/12" />
                      <div className="absolute inset-x-0 bottom-1/3 h-px bg-white/12" />
                    </div>
                  </div>

                  <div className="absolute inset-y-0 left-0 w-[2px] bg-[#D61F26] opacity-0 transition duration-200 group-hover:opacity-100" />

                  <div className="relative flex h-full flex-col justify-between p-5 md:p-6">
                    <div className={`space-y-2 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}>
                      <p className="text-lg font-semibold text-white">{item.title}</p>
                      <p className="text-sm font-normal text-white/80">{item.desc}</p>
                    </div>

                    <div
                      className={`inline-flex items-center gap-2 text-sm font-semibold text-white/90 transition duration-200 ${
                        isActive ? "opacity-100" : "opacity-0"
                      } group-hover:translate-y-[-1px] group-hover:text-white`}
                    >
                      <span>Explore</span>
                      <ArrowIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between px-3 py-3 md:px-4">
            <div className="flex gap-2 text-sm font-semibold text-[#0B0F17]">
              <button
                type="button"
                onClick={prev}
                className="flex items-center gap-1 rounded-full border border-[rgba(11,15,23,0.08)] bg-white px-3 py-1.5 text-[#0B0F17] transition hover:-translate-y-[1px] hover:shadow-sm disabled:opacity-40 disabled:hover:translate-y-0"
                disabled={activeIndex === 0}
              >
                <ArrowIcon className="rotate-180 text-[#0B0F17]" />
                Prev
              </button>
              <button
                type="button"
                onClick={next}
                className="flex items-center gap-1 rounded-full border border-[rgba(11,15,23,0.08)] bg-white px-3 py-1.5 text-[#0B0F17] transition hover:-translate-y-[1px] hover:shadow-sm disabled:opacity-40 disabled:hover:translate-y-0"
                disabled={activeIndex === industries.length - 1}
              >
                Next
                <ArrowIcon className="text-[#0B0F17]" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              {industries.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full transition ${
                    i === activeIndex ? "bg-[#D61F26]" : "bg-[rgba(11,15,23,0.18)]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default IndustriesSection;
