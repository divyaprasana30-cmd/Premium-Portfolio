import { motion } from 'framer-motion';

export function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 0.05 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
        boxShadow: '0 0 40px rgba(34, 211, 238, 0.25)',
        borderColor: 'rgba(34, 211, 238, 0.7)',
      }}
      className="glass-surface flex h-full flex-col justify-between border border-border/80 bg-surface/80 p-5 transition-colors"
    >
      <header className="mb-3">
        <p className="mb-1 text-[11px] uppercase tracking-[0.2em] text-muted">
          {project.context}
        </p>
        <h3 className="font-display text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
      </header>

      <dl className="space-y-3 text-sm text-muted">
        <div>
          <dt className="mb-1 text-[11px] uppercase tracking-[0.2em] text-muted">Problem</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt className="mb-1 text-[11px] uppercase tracking-[0.2em] text-muted">Solution</dt>
          <dd>{project.solution}</dd>
        </div>
        <div>
          <dt className="mb-1 text-[11px] uppercase tracking-[0.2em] text-muted">Result</dt>
          <dd className="text-primary">{project.result}</dd>
        </div>
      </dl>

      {project.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/70 bg-surface/80 px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </motion.article>
  );
}

