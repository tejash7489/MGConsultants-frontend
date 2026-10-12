import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const Heading = ({ lines, sub }) => (
  <div className="text-center">
    <Reveal>
      <h2 className="font-display text-3xl uppercase leading-[1.15] tracking-[0.08em] text-[var(--gold)] sm:text-4xl lg:text-5xl">
        {lines.map((l) => (
          <span key={l} className="block">{l}</span>
        ))}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.12}>
        <p className="mx-auto mt-6 max-w-xl text-base text-[var(--muted)]">{sub}</p>
      </Reveal>
    )}
  </div>
);
