import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../lib/usePrefersReducedMotion";

const dockedImg = "/images/products/docked.jpg";
const platformsImg = "/images/products/platforms.jpg";
const payloadsImg = "/images/products/payloads.jpg";
const rtkImg = "/images/products/rtk.jpg";

const heroImage = "/images/products-hero.jpg";

const groups = [
  {
    id: "docked",
    title: "Autonomous Operations (Docked)",
    tagline: "Remote dispatch and automated missions for persistent coverage.",
    image: dockedImg,
    specs: ["All-weather enclosure", "Remote dispatch", "24/7 readiness"],
    items: [
      { name: "DJI Dock 3", desc: "Persistent operations for remote sites.", image: "/images/products/dock-3.png" },
      { name: "DJI Dock 2", desc: "Compact docked deployment system.", image: "/images/products/dock-2.png" }
    ]
  },
  {
    id: "platforms",
    title: "Enterprise Aerial Platforms",
    tagline: "Rugged airframes built for industrial inspection and mapping.",
    image: platformsImg,
    specs: ["High payload capacity", "Extended endurance", "Weather-sealed"],
    items: [
      { name: "Matrice 350 RTK", desc: "Flagship platform for critical ops.", image: "/images/products/matrice-350-rtk.jpg" },
      { name: "Matrice 400", desc: "Heavy-lift platform for advanced payloads.", image: "/images/products/matrice-400.jpg" },
      { name: "Matrice 4 Series", desc: "Flexible systems for multi-mission use.", image: "/images/products/matrice-4-series.jpg" }
    ]
  },
  {
    id: "payloads",
    title: "Mission Payloads",
    tagline: "Precision sensors for photogrammetry, LiDAR, and thermal.",
    image: payloadsImg,
    specs: ["Survey-grade accuracy", "Multi-sensor", "Rapid swap"],
    items: [
      { name: "Zenmuse P1", desc: "Full-frame photogrammetry sensor.", image: "/images/products/zenmuse-p1.jpg" },
      { name: "Zenmuse L2", desc: "LiDAR + RGB for terrain capture.", image: "/images/products/zenmuse-l2.jpg" },
      { name: "Zenmuse H30 Series", desc: "Multi-sensor for inspection.", image: "/images/products/zenmuse-h30.jpg" }
    ]
  },
  {
    id: "rtk",
    title: "Precision & RTK",
    tagline: "High-precision positioning for repeatable results.",
    image: rtkImg,
    specs: ["Centimeter-grade", "Multi-constellation", "Mobile station"],
    items: [
      { name: "D-RTK 2 GNSS", desc: "High-precision mobile station.", image: "/images/products/d-rtk-2.jpg" }
    ]
  }
];

const easing = [0.22, 1, 0.36, 1];

const fadeDown = {
  hidden: { opacity: 0, y: 14 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: d }
  })
};

function ProductsSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeId, setActiveId] = useState(groups[0].id);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isSwitching, setIsSwitching] = useState(false);

  const activeGroup = useMemo(() => groups.find((g) => g.id === activeId), [activeId]);
  const activeItem = activeGroup.items[activeItemIndex] || activeGroup.items[0];

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    setIsSwitching(true);
    const timeout = setTimeout(() => setIsSwitching(false), 220);
    return () => clearTimeout(timeout);
  }, [activeId, prefersReducedMotion]);

  return (
    <section id="products" className="relative">
      <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
        <div className="relative min-h-[70vh]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: "120%",
              backgroundPosition: "100% center",
              transform: "scaleX(-1)"
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.28) 45%, rgba(0,0,0,0.08) 100%)"
            }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-6 py-20">
            <motion.div
              variants={fadeDown}
              initial={prefersReducedMotion ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              custom={0.04}
              className="max-w-2xl space-y-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Products</p>
              <h2 className="text-4xl font-semibold text-white md:text-5xl">Enterprise systems, deployed at scale.</h2>
              <p className="text-base font-light text-white/80">
                Configurable aerial solutions built for industrial uptime, compliance, and rapid deployment.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#D61F26] px-6 py-2.5 text-sm font-semibold text-white">
                  Request Demo
                </button>
                <button className="rounded-full border border-white/60 px-6 py-2.5 text-sm font-semibold text-white">
                  Talk to Sales
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <motion.div
          variants={fadeDown}
          initial={prefersReducedMotion ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          custom={0.08}
          className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            {groups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => {
                  setActiveId(group.id);
                  setActiveItemIndex(0);
                }}
                className={`w-full text-left text-sm font-semibold transition ${
                  activeId === group.id
                    ? "text-[#0B0F17]"
                    : "text-[rgba(11,15,23,0.55)] hover:text-[#0B0F17]"
                }`}
              >
                <span className={`block border-l-2 pl-3 ${activeId === group.id ? "border-[#D61F26]" : "border-transparent"}`}>
                  {group.title}
                </span>
              </button>
            ))}
          </div>

          <div className="space-y-8">
            <div
              className="relative overflow-hidden rounded-2xl border border-[rgba(11,15,23,0.12)] bg-white"
              style={{
                transition: prefersReducedMotion ? "none" : "opacity 220ms ease, transform 220ms ease",
                opacity: prefersReducedMotion ? 1 : isSwitching ? 0.92 : 1,
                transform: prefersReducedMotion ? "none" : isSwitching ? "translateY(6px)" : "translateY(0)"
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#0B0F17",
                  transition: prefersReducedMotion ? "none" : "opacity 240ms ease"
                }}
                aria-hidden
              />
              <img
                src={activeItem.image || activeGroup.image}
                alt={activeItem.name}
                className="absolute bottom-2 right-[-2%] h-auto max-h-[88%] w-[64%] object-contain"
              />
              <div className="relative z-10 flex min-h-[360px] flex-col justify-between px-8 py-10 text-white">
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-white/80">{activeGroup.title}</p>
                  <h3 className="text-2xl font-semibold">{activeItem ? activeItem.name : activeGroup.title}</h3>
                  <p className="text-base font-light text-white/80">
                    {activeItem ? activeItem.desc : activeGroup.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-white/80">
                  {activeGroup.specs.map((spec, idx) => (
                    <span key={spec} className="flex items-center gap-3">
                      <span>{spec}</span>
                      {idx < activeGroup.specs.length - 1 && (
                        <span className="h-4 w-px bg-white/30" aria-hidden />
                      )}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#D61F26] px-5 py-2 text-sm font-semibold text-white">
                    View Details
                  </button>
                  <button
                    className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold text-white"
                    disabled
                  >
                    Download Datasheet
                  </button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-[rgba(11,15,23,0.12)] rounded-2xl border border-[rgba(11,15,23,0.12)]">
              {activeGroup.items.map((item, idx) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveItemIndex(idx)}
                  className={`flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm transition ${
                    activeItemIndex === idx
                      ? "text-[#0B0F17]"
                      : "text-[rgba(11,15,23,0.65)] hover:text-[#0B0F17]"
                  }`}
                >
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs font-light text-[rgba(11,15,23,0.65)]">{item.desc}</p>
                  </div>
                  <span className="text-sm font-semibold">→</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductsSection;
