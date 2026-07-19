import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  subline,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  subline?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 15% 20%, rgba(232,93,44,0.25), transparent 60%), radial-gradient(50% 50% at 85% 80%, rgba(59,180,229,0.22), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <Reveal>
          <nav className="text-xs tracking-[0.25em] uppercase text-white/60 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{crumb}</span>
          </nav>
        </Reveal>
        {eyebrow ? (
          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-orange" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">
                {eyebrow}
              </span>
            </div>
          </Reveal>
        ) : null}
        <Reveal delay={0.1}>
          <h1 className="font-display font-black leading-[0.9] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
        </Reveal>
        {subline ? (
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70">{subline}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
