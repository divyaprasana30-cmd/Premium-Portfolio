import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headline = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const subcopy = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.6 },
  },
};

const cta = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.45, duration: 0.6 },
  },
};

export function Hero({ portfolio }) {
  return (
    <section id="hero" className="relative flex min-h-screen items-center">
      <div className="section-wrapper">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6"
        >
          <motion.div
            variants={headline}
            className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-surface/70 px-4 py-1 text-[11px] uppercase tracking-[0.28em] text-muted"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            <span>Marketing × Data × Product Sense</span>
          </motion.div>

          <motion.h1
            variants={headline}
            className="font-display text-4xl font-semibold tracking-tight md:text-6xl"
          >
            {portfolio.headline}
          </motion.h1>

          <motion.p
            variants={subcopy}
            className="max-w-lg text-sm leading-relaxed text-muted md:text-base"
          >
            {portfolio.subheadline}
          </motion.p>

          <motion.div
            variants={subcopy}
            className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.28em] text-muted"
          >
            <span className="rounded-full border border-border/70 bg-surface/60 px-3 py-1">
              Targeting roles in {portfolio.targetRoles.join(' • ')}
            </span>
          </motion.div>

          <motion.div
            variants={cta}
            className="flex flex-wrap items-center gap-4 pt-4 text-xs"
          >
            <a
              href="#projects"
              className="rounded-full bg-primary px-5 py-2 text-background shadow-lg shadow-accent/30 transition-transform duration-200 hover:scale-[1.03] hover:shadow-glow active:scale-[0.97]"
            >
              View projects
            </a>
            <a
              href="#about"
              className="rounded-full border border-border bg-surface/60 px-5 py-2 text-muted transition-colors duration-200 hover:border-accent hover:text-primary"
            >
              How I think about growth
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

