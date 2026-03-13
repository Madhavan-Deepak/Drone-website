import { motion } from "framer-motion";
import usePrefersReducedMotion from "../lib/usePrefersReducedMotion";

const easing = [0.22, 1, 0.36, 1];

const fadeDown = {
  hidden: { opacity: 0, y: 12 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: d }
  })
};

function FinalCtaSection() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    el.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <section className="relative">
      <div className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(120deg, rgba(11,15,23,0.9) 0%, rgba(11,15,23,0.95) 55%, rgba(11,15,23,0.9) 100%)"
          }}
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-16 md:py-20">
            <motion.div
              variants={fadeDown}
              initial={prefersReducedMotion ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              custom={0.04}
              className="max-w-2xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D61F26]">Ready to Deploy</p>
              <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Let's plan your deployment.</h2>
              <p className="mt-3 text-base font-light text-white/70">
                Speak with an engineer to scope requirements, compliance, and timelines.
              </p>
            </motion.div>

            <motion.div
              variants={fadeDown}
              initial={prefersReducedMotion ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              custom={0.1}
              className="flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={scrollToContact}
                className="rounded-md bg-[#D61F26] px-6 py-2.5 text-sm font-semibold text-white"
              >
                Request Demo
              </button>
              <button
                type="button"
                onClick={scrollToContact}
                className="rounded-md border border-white/50 px-6 py-2.5 text-sm font-semibold text-white"
              >
                Talk to an Engineer
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCtaSection;
