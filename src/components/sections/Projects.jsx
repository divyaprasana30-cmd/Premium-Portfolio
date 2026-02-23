import { motion } from 'framer-motion';
import { ProjectCard } from '../ui/ProjectCard.jsx';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Projects({ projects }) {
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  return (
    <section id="projects" className="relative">
      <div className="section-wrapper">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <div className="max-w-2xl space-y-3">
            <span className="section-label">Projects</span>
            <h2 className="section-title">How I&apos;ve used data to tell better stories.</h2>
            <p className="section-subtitle">
              Each project is framed like a case study — starting from the problem, through the decisions I made,
              to the measurable outcome.
            </p>
          </div>

          {hasProjects ? (
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="glass-surface border border-dashed border-border/70 p-8 text-sm text-muted">
              No projects added yet. When you&apos;re ready, describe each project as{' '}
              <span className="text-primary">problem → solution → result</span> in{' '}
              <code className="rounded bg-surface/80 px-1.5 py-0.5 text-xs text-accent">
                src/data/portfolio.js
              </code>
              .
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

