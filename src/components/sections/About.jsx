import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function About({ portfolio }) {
  return (
    <section id="about" className="relative">
      <div className="section-wrapper">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="glass-surface relative overflow-hidden px-6 py-10 md:px-10 md:py-12"
        >
          <div className="pointer-events-none absolute -right-24 -top-20 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

          <span className="section-label">About</span>

          <div className="mt-3 space-y-4 md:space-y-5">
            <h2 className="section-title max-w-xl">
              I treat every growth problem like a story waiting to be proven with data.
            </h2>
            <p className="section-subtitle">
              {portfolio.background}
            </p>
            <p className="section-subtitle">
              I&apos;m happiest when I&apos;m instrumenting a funnel, asking annoying &quot;why&quot; questions,
              and turning raw numbers into decisions that actually move the business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

