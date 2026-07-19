import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function ScrollColorHeading({
  children,
  to = "orange",
  className,
  from = "rgba(160,160,170,0.35)",
}: {
  children: ReactNode;
  to?: "orange" | "blue" | "white";
  className?: string;
  from?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 30%"],
  });
  const toColor =
    to === "orange" ? "#E85D2C" : to === "blue" ? "#3BB4E5" : "#ffffff";
  const color = useTransform(scrollYProgress, [0, 1], [from, toColor]);

  return (
    <motion.h2
      ref={ref}
      style={{ color }}
      className={`font-display font-black leading-[0.9] tracking-tight ${className ?? ""}`}
    >
      {children}
    </motion.h2>
  );
}
