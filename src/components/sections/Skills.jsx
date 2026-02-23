import { motion } from 'framer-motion';
import { SkillCard } from '../ui/SkillCard.jsx';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Skills({ portfolio }) {
  return (
    <section id="skills" className="relative">
      <div className="section-wrapper">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          <div className="max-w-2xl space-y-3">
            <span className="section-label">Skills</span>
            <h2 className="section-title">Where I&apos;m strongest today.</h2>
            <p className="section-subtitle">{portfolio.skillsIntro}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {portfolio.skills.map((group, index) => (
              <SkillCard
                key={group.category}
                category={group.category}
                items={group.items}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

