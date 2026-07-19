import { motion, useScroll, useTransform, useReducedMotion, useMotionTemplate } from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * Scroll-scrubbing text fill. Base layer is an outlined/faint version; the
 * overlay layer is the solid brand color revealed by an animated clip-path
 * tied to scroll progress. Both layers share the same layout so multi-line
 * text wraps identically.
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
  const rightInset = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${rightInset}% 0 0)`;

  const fillColor =
    fill === "orange"
      ? "#E85D2C"
      : fill === "blue"
        ? "#3BB4E5"
        : fill === "white"
          ? "#ffffff"
          : "#111214";

  return (
    <span ref={ref} className={`relative block ${className ?? ""}`}>
      {/* Outlined / faint base — establishes layout */}
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
      {/* Solid fill overlay, positioned identically, clipped by scroll */}
      <motion.span
        aria-hidden
        className="absolute inset-0 block"
        style={{
          color: fillColor,
          clipPath: reduce ? "inset(0 0 0 0)" : clip,
          WebkitClipPath: reduce ? "inset(0 0 0 0)" : (clip as never),
        }}
      >
        {children}
      </motion.span>
      <span className="sr-only">{children}</span>
    </span>
  );
}
