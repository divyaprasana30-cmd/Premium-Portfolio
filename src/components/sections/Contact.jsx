import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Contact({ portfolio }) {
  return (
    <section id="contact" className="relative">
      <div className="section-wrapper">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="glass-surface flex flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10 md:py-12"
        >
          <div className="max-w-xl space-y-3">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let&apos;s talk about growth, not just buzzwords.</h2>
            <p className="section-subtitle">
              If you&apos;re looking for someone who enjoys living in the details of the data and still speaks human,
              I&apos;d love to chat.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:text-base">
            <a
              href={`mailto:${portfolio.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-background shadow-lg shadow-accent/30 transition-transform duration-200 hover:scale-[1.03] hover:shadow-glow active:scale-[0.97]"
            >
              <span>Email</span>
              <span className="text-xs uppercase tracking-[0.28em]">
                {portfolio.email}
              </span>
            </a>
            <a
              href={portfolio.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-5 py-2 text-muted transition-colors duration-200 hover:border-accent hover:text-primary"
            >
              <span>LinkedIn</span>
              <span className="text-xs uppercase tracking-[0.28em]">
                Open profile
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

