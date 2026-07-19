import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent = "orange",
  className,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  accent?: "orange" | "blue";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className={className}>
      {eyebrow ? (
        <div className="flex items-center gap-3 mb-4">
          <span
            className={`h-px w-8 ${accent === "orange" ? "bg-brand-orange" : "bg-brand-blue"}`}
          />
          <span
            className={`text-xs font-semibold tracking-[0.25em] uppercase ${
              accent === "orange" ? "text-brand-orange" : "text-brand-blue"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2 className="font-display font-black leading-[0.95] text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground">
        {title}
      </h2>
      {children ? <div className="mt-6 max-w-2xl text-muted-foreground text-base sm:text-lg">{children}</div> : null}
    </Reveal>
  );
}
