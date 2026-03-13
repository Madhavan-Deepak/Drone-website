import { useState } from "react";
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

const MailIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const PhoneIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M6.5 3.5h3l1.5 4-2 1.5a12.5 12.5 0 006 6l1.5-2 4 1.5v3a2 2 0 01-2 2C10.6 19.5 4.5 13.4 4.5 5.5a2 2 0 012-2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GlobeIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M3 12h18M12 3a16 16 0 010 18M12 3a16 16 0 000 18" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const CheckIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

function ContactSection() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (!formState.company.trim()) nextErrors.company = "Company name is required.";
    if (!formState.email.trim()) nextErrors.email = "Work email is required.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const inputBase =
    "w-full rounded-md border border-[rgba(11,15,23,0.12)] bg-white px-3 py-2.5 text-sm font-normal text-[#0B0F17] placeholder:text-[rgba(11,15,23,0.4)] focus:border-[#0B0F17] focus:outline-none";

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <motion.div
        variants={fadeDown}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.04}
        className="max-w-2xl"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D61F26]">Contact</p>
        <h2 className="mt-2 text-3xl font-semibold text-[#0B0F17] md:text-4xl">Enterprise deployment inquiries.</h2>
        <p className="mt-3 text-base font-light text-[rgba(11,15,23,0.7)]">
          Tell us about your operational scope and compliance requirements.
        </p>
      </motion.div>

      <motion.div
        variants={fadeDown}
        initial={prefersReducedMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        custom={0.12}
        className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
      >
        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-[rgba(11,15,23,0.12)] bg-white p-6"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,15,23,0.6)]">
                Full Name
              </label>
              <input
                className={inputBase}
                name="name"
                value={formState.name}
                onChange={handleChange}
                type="text"
                placeholder="Jane Doe"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,15,23,0.6)]">
                Company Name
              </label>
              <input
                className={inputBase}
                name="company"
                value={formState.company}
                onChange={handleChange}
                type="text"
                placeholder="Company"
                required
              />
              {errors.company && <p className="mt-1 text-xs font-normal text-[#D61F26]">{errors.company}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,15,23,0.6)]">
                Work Email
              </label>
              <input
                className={inputBase}
                name="email"
                value={formState.email}
                onChange={handleChange}
                type="email"
                placeholder="name@company.com"
                required
              />
              {errors.email && <p className="mt-1 text-xs font-normal text-[#D61F26]">{errors.email}</p>}
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,15,23,0.6)]">
                Phone (optional)
              </label>
              <input
                className={inputBase}
                name="phone"
                value={formState.phone}
                onChange={handleChange}
                type="tel"
                placeholder="+1 555 0100"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,15,23,0.6)]">
                Industry
              </label>
              <select className={inputBase} name="industry" value={formState.industry} onChange={handleChange}>
                <option value="">Select an industry</option>
                <option value="Energy">Energy / Utilities</option>
                <option value="Construction">Construction</option>
                <option value="Mining">Mining</option>
                <option value="PublicSafety">Public Safety</option>
                <option value="Government">Government</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgba(11,15,23,0.6)]">
                Message
              </label>
              <textarea
                className={`${inputBase} min-h-[120px] resize-none`}
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Operational scope, sites, compliance needs."
              />
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <button
              type="submit"
              className="rounded-md bg-[#D61F26] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B31A21] disabled:cursor-not-allowed disabled:opacity-70"
              disabled={submitted}
            >
              {submitted ? "Request Received" : "Submit Request"}
            </button>
            <p className="text-xs font-normal text-[rgba(11,15,23,0.6)]">
              Enterprise inquiries only. Our team responds within 1 business day.
            </p>
            {submitted && (
              <p className="text-xs font-normal text-[rgba(11,15,23,0.7)]">
                Request logged. We will follow up with a deployment plan.
              </p>
            )}
          </div>
        </form>

        <div className="rounded-lg border border-[rgba(11,15,23,0.12)] bg-white p-6">
          <p className="text-2xl font-semibold text-[#0B0F17]">Enterprise Contact</p>

          <div className="mt-6 space-y-4 text-sm font-normal text-[rgba(11,15,23,0.7)]">
            <div className="flex items-center gap-3">
              <MailIcon className="text-[#0B0F17]" />
              <span>sales@company.com</span>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="text-[#0B0F17]" />
              <span>+XXX XXX XXXX</span>
            </div>
            <div className="flex items-center gap-3">
              <GlobeIcon className="text-[#0B0F17]" />
              <span>Middle East | Europe | Asia</span>
            </div>
          </div>

          <div className="mt-8 space-y-3 text-sm font-normal text-[rgba(11,15,23,0.7)]">
            <div className="flex items-center gap-3">
              <CheckIcon className="text-[#D61F26]" />
              <span>Certified enterprise partners</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="text-[#D61F26]" />
              <span>SLA-backed support</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckIcon className="text-[#D61F26]" />
              <span>Compliance-ready deployments</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
