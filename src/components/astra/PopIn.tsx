import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const popContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export function PopContainer({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8%" }}
      variants={popContainer}
    >
      {children}
    </motion.div>
  );
}

export function PopIn({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.92, y: 12 },
        show: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { type: "spring", stiffness: 220, damping: 20 },
        },
      };
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
