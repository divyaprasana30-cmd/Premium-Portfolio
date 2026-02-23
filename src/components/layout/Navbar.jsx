import { useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar({ name }) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setScrolled(latest > 24);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4"
    >
      <motion.nav
        animate={{
          backgroundColor: scrolled ? 'rgba(10,10,10,0.90)' : 'rgba(10,10,10,0.40)',
          borderColor: scrolled ? 'rgba(38,38,38,1)' : 'rgba(38,38,38,0)',
        }}
        transition={{ duration: 0.25 }}
        className="glass-surface flex w-full max-w-5xl items-center justify-between gap-6 rounded-full border border-transparent bg-surface/70 px-5 py-3 backdrop-blur-xl"
      >
        <a href="#hero" className="flex items-baseline gap-2">
          <span className="h-2 w-2 rounded-full bg-accent shadow-glow" />
          <span className="font-display text-sm font-semibold tracking-[0.25em] uppercase text-muted">
            {name || 'Your Name'}
          </span>
        </a>

        <div className="hidden items-center gap-6 text-xs font-medium text-muted md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative overflow-hidden"
            >
              <span className="transition-colors group-hover:text-primary">{link.label}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-background shadow-md shadow-accent/30 transition-transform duration-200 hover:scale-[1.03] hover:shadow-glow active:scale-[0.97]"
        >
          Available for {new Date().getFullYear()} roles
        </a>
      </motion.nav>
    </motion.header>
  );
}

