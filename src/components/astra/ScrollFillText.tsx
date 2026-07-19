import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Scroll-scrubbing text fill. Renders an outlined/faint base layer and an
 * overlay layer of the solid brand color clipped by scroll progress.
 */
export function ScrollFillText({
  children,
  fill = "orange",
  className,
  strokeColor = "rgba(255,255,255,0.22)",
  offset = ["start 85%", "end 40%"],
}: {
  children: ReactNode;
  fill?: "orange" | "blue" | "ink" | "white";
  className?: string;
  strokeColor?: string;
  offset?: [string, string];
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    offset: offset as any,
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fillColor =
    fill === "orange"
      ? "#E85D2C"
      : fill === "blue"
        ? "#3BB4E5"
        : fill === "white"
          ? "#ffffff"
          : "#111214";

  return (
    <span
      ref={ref}
      className={`relative inline-block align-baseline ${className ?? ""}`}
      style={{ lineHeight: "0.9" }}
    >
      {/* Outlined / faint base */}
      <span
        aria-hidden
        className="block"
        style={{
          color: "transparent",
          WebkitTextStroke: `1.5px ${strokeColor}`,
        }}
      >
        {children}
      </span>
      {/* Solid fill overlay clipped by scroll */}
      <motion.span
        aria-hidden
        className="absolute inset-0 block overflow-hidden"
        style={{
          width: reduce ? "100%" : width,
          color: fillColor,
        }}
      >
        <span className="block whitespace-nowrap">{children}</span>
      </motion.span>
      <span className="sr-only">{children}</span>
    </span>
  );
}
