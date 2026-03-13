import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../lib/usePrefersReducedMotion";

const unifiedVariants = {
  hidden: { opacity: 0, y: -14, filter: "blur(4px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }
  })
};

function HeroEnterprise() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef(null);
  const [mediaReady, setMediaReady] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const loadVideo = () => setVideoSrc("/hero.mov#t=2");
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(loadVideo, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const timeout = setTimeout(loadVideo, 300);
    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const startAt = 2;

    const setStart = () => {
      try {
        vid.currentTime = startAt;
      } catch (_) {
        /* ignore */
      }
    };

    const handleLoaded = () => {
      setStart();
      vid.play().catch(() => {});
    };

    const handleEnded = () => {
      setStart();
      vid.play().catch(() => {});
    };

    const handleTimeUpdate = () => {
      if (vid.currentTime < startAt) {
        setStart();
      }
    };

    vid.addEventListener("loadedmetadata", handleLoaded);
    vid.addEventListener("ended", handleEnded);
    vid.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      vid.removeEventListener("loadedmetadata", handleLoaded);
      vid.removeEventListener("ended", handleEnded);
      vid.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videoSrc]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setMediaReady(true);
      return;
    }
    const fallback = setTimeout(() => setMediaReady(true), 1200);
    return () => clearTimeout(fallback);
  }, [prefersReducedMotion]);

  const mediaAnimate = mediaReady || prefersReducedMotion;

  const motionProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : { variants: unifiedVariants, initial: "hidden", animate: mediaAnimate ? "show" : "hidden", custom: delay };

  return (
    <section className="relative" aria-labelledby="hero-heading">
      <div
        className="relative w-[100vw] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
        style={{ minHeight: "75vh", height: "75vh" }}
      >
        <motion.div
          className="absolute inset-0"
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.02 }}
          animate={mediaAnimate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0">
            <video
              className="absolute inset-0 h-full w-full object-cover z-10"
              src={videoSrc || undefined}
              autoPlay
              muted
              playsInline
              preload="none"
              poster="/hero.jpg"
              onCanPlayThrough={() => setMediaReady(true)}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
              ref={videoRef}
            />
            <div
              className="absolute inset-0 z-20"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% 45%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.42) 35%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.05) 100%)"
              }}
              aria-hidden
            />
            <img
              src="/images/hero/hero.jpg"
              alt="Hero fallback"
              className="absolute inset-0 h-full w-full object-cover z-0"
              loading="eager"
              decoding="async"
              onLoad={() => setMediaReady(true)}
            />
          </div>

          <motion.div
            className="absolute inset-0"
            style={{ background: "#0b0f17" }}
            initial={prefersReducedMotion ? { opacity: 0 } : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            animate={
              mediaAnimate
                ? { clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }
                : { clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }
            }
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-20 hero-placeholder"
          initial={{ opacity: 1 }}
          animate={mediaAnimate ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          aria-hidden
        />

        <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center pt-24">
          <motion.div className="relative mx-auto w-full max-w-4xl space-y-5">
            <div className="relative space-y-3">
              <motion.p
                {...motionProps(0.15)}
                className="text-xs font-semibold uppercase tracking-[0.22em] text-white"
              >
                Enterprise Solutions
              </motion.p>
              <motion.h1
                id="hero-heading"
                {...motionProps(0.22)}
                className="font-semibold text-white text-4xl md:text-[4.1rem] leading-tight"
              >
                Industrial Drone Solutions
              </motion.h1>
              <motion.p {...motionProps(0.3)} className="text-base font-normal text-white/90">
                for Inspection, Safety &amp; Mapping
              </motion.p>
              <motion.p
                {...motionProps(0.38)}
                className="mx-auto max-w-3xl text-base font-light text-white leading-relaxed"
              >
                Purpose-built platforms with cinematic optics, ruggedized airframes, and compliance-ready software to keep operations in motion.
              </motion.p>
            </div>

            <div className="relative mt-8 grid w-full gap-3 sm:grid-cols-2">
              <motion.button
                {...motionProps(0.46)}
                className="w-full rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1"
                style={{
                  backgroundColor: "#D61F26",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(0,0,0,0.18)"
                }}
              >
                Request a Quote
              </motion.button>
              <motion.button
                {...motionProps(0.46)}
                className="w-full rounded-full border border-white bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-[rgba(255,255,255,0.12)] hover:border-[#D61F26]"
              >
                Explore Industries
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl overflow-hidden rounded-2xl border border-border bg-surface shadow-soft sm:grid-cols-3">
        {[
          { title: "Certified Partners", desc: "Global support within 48h" },
          { title: "Rapid Support", desc: "Ops desk 24/7 for crews" },
          { title: "Training Academy", desc: "Pilot & payload certification" }
        ].map((item, idx) => (
          <div
            key={item.title}
            className={`flex flex-col gap-1 px-5 py-4 ${idx > 0 ? "border-t border-border sm:border-l sm:border-t-0" : ""}`}
          >
            <p className="text-sm font-semibold text-text">{item.title}</p>
            <p className="text-sm text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroEnterprise;
