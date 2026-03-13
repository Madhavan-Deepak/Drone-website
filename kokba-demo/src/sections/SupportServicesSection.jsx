import { motion } from "framer-motion";
import usePrefersReducedMotion from "../lib/usePrefersReducedMotion";

const pillars = [
  {
    title: "Deployment & Commissioning",
    description: "Site readiness, integration, and handover with documented validation.",
    bullets: ["Network and data pathways verified", "Commissioning checklist signed"]
  },
  {
    title: "Operational Support",
    description: "SLA-based support with remote diagnostics and defined incident response.",
    bullets: ["Tiered response windows", "Root-cause documentation"]
  },
  {
    title: "Maintenance & Lifecycle",
    description: "Preventive maintenance, updates, and replacement cycles with traceable history.",
    bullets: ["Scheduled service plans", "Parts availability windows"]
  },
  {
    title: "Training & Certification",
    description: "Operator training and payload readiness for regulated environments.",
    bullets: ["Flight ops SOPs", "Scenario-based certification"]
  },
  {
    title: "Managed Services",
    description: "24/7 monitoring and managed ops aligned to outcomes.",
    bullets: ["Continuous fleet health", "Mission execution oversight"]
  }
];

const easing = [0.22, 1, 0.36, 1];

const fadeDown = {
  hidden: { opacity: 0, y: 12 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: d }
  })
};

function SupportServicesSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <section id="support-services" className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <motion.div
        variants={fadeDown}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.04}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D61F26]">Support & Services</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#0B0F17] md:text-4xl">
          Operational support across the full lifecycle.
        </h2>
        <p className="mt-3 text-base font-light text-[rgba(11,15,23,0.7)]">
          Predictable response, documented processes, and clear accountability at every stage.
        </p>
      </motion.div>

      <motion.div
        variants={fadeDown}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.1}
        className="mt-10"
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`group relative flex h-full flex-col gap-4 rounded-lg border border-[rgba(11,15,23,0.08)] bg-white p-6 ${
                idx >= 3 ? "xl:col-span-3" : "xl:col-span-2"
              }`}
            >
              <span
                className="absolute left-6 top-0 h-[2px] w-10 bg-[#D61F26] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                aria-hidden="true"
              />
              <p className="text-base font-semibold text-[#0B0F17]">{pillar.title}</p>
              <p className="text-sm font-light text-[rgba(11,15,23,0.7)]">{pillar.description}</p>
              <div className="mt-auto space-y-2 text-xs font-medium text-[rgba(11,15,23,0.7)]">
                {pillar.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-2 text-[rgba(11,15,23,0.7)]">
                    <span className="h-1.5 w-1.5 bg-[#D61F26]" aria-hidden="true" />
                    <span className="text-xs font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeDown}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.16}
        className="mt-10 flex flex-wrap gap-3"
      >
        <button className="rounded-md bg-[#D61F26] px-6 py-2.5 text-sm font-semibold text-white">
          Request Support Plan
        </button>
        <button className="rounded-md border border-[rgba(11,15,23,0.2)] px-6 py-2.5 text-sm font-semibold text-[#0B0F17]">
          Talk to an Engineer
        </button>
      </motion.div>
    </section>
  );
}

export default SupportServicesSection;
