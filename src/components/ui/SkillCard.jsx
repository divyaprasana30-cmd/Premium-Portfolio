import { motion } from 'framer-motion';

export function SkillCard({ category, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: 0.05 * index,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 0 40px rgba(34, 211, 238, 0.20)',
        borderColor: 'rgba(34, 211, 238, 0.7)',
      }}
      className="glass-surface flex h-full flex-col justify-between border border-border/80 bg-surface/80 p-5 transition-colors"
    >
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">{category}</p>
        <ul className="space-y-1.5 text-sm text-muted">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

