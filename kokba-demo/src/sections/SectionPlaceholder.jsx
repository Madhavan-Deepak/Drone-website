import { motion } from 'framer-motion';

function SectionPlaceholder({ title }) {
  return (
    <section className="container">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">Placeholder</p>
          <h2 className="font-display text-2xl font-semibold text-text">{title}</h2>
          <p className="text-muted">Replace with final content when ready.</p>
        </div>
        <a className="text-sm font-semibold text-accent hover:underline" href="#">
          View all →
        </a>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((idx) => (
          <div key={idx} className="surface-flat p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Label</p>
            <p className="mt-2 text-base font-semibold text-text">Card {idx}</p>
            <p className="text-sm text-muted">One-line description for this placeholder card.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SectionPlaceholder;
