import { motion } from 'framer-motion';

function SectionPlaceholder({ title }) {
  return (
    <section className="container">
      <div className="rounded-2xl border border-border bg-surface px-6 py-8 shadow-soft">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Placeholder</p>
            <h2 className="font-display text-2xl font-semibold text-text">{title}</h2>
            <p className="max-w-2xl text-muted">
              Swap this block with the real {title.toLowerCase()} section. Spacing and grid mirrors the intended layout for quick replacement.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold text-text transition hover:border-accent hover:text-accent"
          >
            Edit Section
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 rounded-xl border border-border bg-surface2 p-4 shadow-[0_4px_18px_rgba(11,15,23,0.04)]"
            >
              <p className="text-sm font-semibold text-text">Placeholder card {idx}</p>
              <p className="text-sm text-muted">Use this slot for key content once the {title.toLowerCase()} section is designed.</p>
              <button className="inline-flex w-fit items-center gap-1 text-xs font-semibold text-accent transition hover:underline">
                Configure
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionPlaceholder;
