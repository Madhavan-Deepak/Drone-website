import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../lib/cn';

const linkColumns = [
  {
    title: 'Flight Systems',
    items: [
      { label: 'Skyforge Atlas S', desc: 'Long-range, high-wind resilience', icon: SparkIcon },
      { label: 'Skyforge Edge VTOL', desc: 'Hybrid lift for remote ops', icon: CompassIcon },
      { label: 'Skyforge Nova', desc: 'Agile quad for dense sites', icon: RadarIcon }
    ]
  },
  {
    title: 'Operations',
    items: [
      { label: 'Dock & Fleet', desc: 'Autonomous charging + dispatch', icon: DockIcon },
      { label: 'Thermal Suite', desc: 'Radiometric payload ready', icon: HeatIcon },
      { label: 'SkyOS Cloud', desc: 'Command, compliance, telemetry', icon: CloudIcon }
    ]
  }
];

const featuredPills = ['Dock', 'Matrice', 'Thermal'];

function MegaMenu({ isOpen, closeMenu }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.16, ease: 'easeOut' }}
          className="fixed left-0 right-0 top-16 z-30"
          onMouseLeave={closeMenu}
        >
          <div className="mx-auto w-full max-w-6xl px-4">
            <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-soft">
              <div className="grid gap-6 p-6 md:grid-cols-[1.1fr_1.4fr]">
                <div className="relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface2 via-surface to-white p-5">
                  <div className="relative space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">Featured</p>
                    <h3 className="font-display text-xl font-semibold leading-tight text-text">
                      Enterprise Drone Ecosystem
                    </h3>
                    <p className="text-sm text-muted">
                      Unified airframes, payloads, and autonomy software engineered for critical industrial uptime.
                    </p>
                    <button className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-md">
                      Discover Platform
                      <ArrowIcon />
                    </button>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {linkColumns.map((column) => (
                    <div key={column.title} className="space-y-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">{column.title}</p>
                      <div className="space-y-2">
                        {column.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.label}
                              href="#"
                              className="group flex items-start gap-3 rounded-xl border border-transparent px-3 py-3 transition hover:border-border hover:bg-surface2"
                            >
                              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface2 text-text">
                                <Icon />
                              </span>
                              <span>
                                <p className="font-medium text-text group-hover:text-accent">{item.label}</p>
                                <p className="text-sm text-muted">{item.desc}</p>
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 border-t border-border px-6 py-4 bg-surface2">
                <span className="text-xs uppercase tracking-[0.25em] text-muted">Featured</span>
                {featuredPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5L12 3Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="m15 9-2 6-4-2 6-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function RadarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 12 7 7m5 5h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

function DockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 10h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 15h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HeatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 5c0 2-2 3-2 6a4 4 0 1 0 8 0c0-2-1-3-1-4s1-2 1-3-1-3-3-3c-2 0-3 2-3 4Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 17a4 4 0 0 1 0-8h.5A5.5 5.5 0 0 1 18.9 9 3.6 3.6 0 0 1 19 16H7Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default MegaMenu;
