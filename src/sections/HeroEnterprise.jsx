import { motion } from 'framer-motion';
import { cn } from '../lib/cn';

const trustItems = [
  { title: 'Certified Partners', desc: 'Global support within 48h' },
  { title: 'Rapid Support', desc: 'Ops desk 24/7 for crews' },
  { title: 'Training Academy', desc: 'Pilot + payload certification' }
];

function HeroEnterprise({ prefersReducedMotion }) {
  const motionBase = prefersReducedMotion
    ? {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 }
      }
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: 'easeOut' }
      };

  return (
    <section className="relative pt-28" aria-labelledby="hero-heading">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div {...motionBase} className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Enterprise Solutions</p>
            <h1
              id="hero-heading"
              className="font-display text-4xl font-semibold leading-tight text-text md:text-5xl"
            >
              Industrial Drone Solutions for Inspection, Safety &amp; Mapping
            </h1>
            <p className="max-w-xl text-lg text-muted">
              Deploy resilient airframes, modular payloads, and autonomous workflows designed for refineries, utilities, and critical infrastructure.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <motion.button
                {...motionBase}
                transition={prefersReducedMotion ? motionBase.transition : { duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Request a Quote
              </motion.button>
              <motion.button
                {...motionBase}
                transition={prefersReducedMotion ? motionBase.transition : { duration: 0.7, delay: 0.16, ease: 'easeOut' }}
                className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-text transition hover:border-accent/60"
              >
                Explore Industries
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            {...motionBase}
            transition={prefersReducedMotion ? motionBase.transition : { duration: 0.8, delay: 0.12, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-3 shadow-soft">
              <div className="hero-media relative h-[320px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-[210px] w-full max-w-lg items-center justify-center rounded-2xl border border-dashed border-border bg-surface2 text-muted">
                    <div className="space-y-2 text-center">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted">Media Frame</p>
                      <p className="text-base text-muted">Future cinematic inspection footage</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-surface shadow-soft sm:grid-cols-3">
          {trustItems.map((item, idx) => (
            <div
              key={item.title}
              className={cn(
                'flex items-start gap-3 px-5 py-4',
                idx > 0 && 'border-t border-border sm:border-t-0 sm:border-l'
              )}
            >
              <div className="mt-1 h-2 w-2 rounded-full bg-accent" />
              <div>
                <p className="text-sm font-semibold text-text">{item.title}</p>
                <p className="text-sm text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroEnterprise;
