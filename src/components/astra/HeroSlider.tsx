import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { TypingText } from "./TypingText";
import { ScrollFillText } from "./ScrollFillText";
import { heroSlides } from "@/lib/astra-content";
import heroFacade from "@/assets/hero-facade.jpg";
import catAluminium from "@/assets/cat-aluminium.jpg";
import catGlass from "@/assets/cat-glass.jpg";
import astraBadge from "@/assets/astra-badge-3d.png.asset.json";

const heroImages = [heroFacade, catGlass, catAluminium];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % heroSlides.length), 8000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[i];
  const accentClass = slide.accent === "orange" ? "text-brand-orange" : "text-brand-blue";
  const isPrimary = i === 0;

  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-white">
      {/* Background image with crossfade */}
      <AnimatePresence>
        <motion.img
          key={`bg-${i}`}
          src={heroImages[i % heroImages.length]}
          alt=""
          aria-hidden
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.35, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/85 to-ink/70" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{ opacity: [0.45, 0.6, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          backgroundImage:
            "radial-gradient(45% 55% at 12% 25%, rgba(232,93,44,0.35), transparent 60%), radial-gradient(40% 50% at 90% 75%, rgba(59,180,229,0.32), transparent 60%)",
        }}
      />

      {/* Floating 3D badge (right side) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="pointer-events-none absolute right-[-4%] top-1/2 z-[1] hidden -translate-y-1/2 lg:block xl:right-[-2%]"
      >
        <motion.img
          src={astraBadge.url}
          alt=""
          animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="w-[min(34vw,460px)]"
          style={{ filter: "drop-shadow(0 30px 60px rgba(232,93,44,0.35)) drop-shadow(0 10px 40px rgba(59,180,229,0.25))" }}
        />
        {/* Glow ring behind badge */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(232,93,44,0.35), transparent 70%), radial-gradient(closest-side, rgba(59,180,229,0.35), transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-32 pb-16">
        <div className="flex-1 grid grid-cols-1 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`h-px w-10 ${slide.accent === "orange" ? "bg-brand-orange" : "bg-brand-blue"}`} />
                <span className={`text-xs font-semibold tracking-[0.3em] uppercase ${accentClass}`}>
                  {slide.eyebrow}
                </span>
              </div>

              {isPrimary ? (
                <h1 className="font-display font-black uppercase tracking-tight text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7.5rem] leading-[0.85] max-w-[62%]">
                  <ScrollFillText
                    fill="white"
                    strokeColor="rgba(255,255,255,0.28)"
                    className="block"
                    offset={["start start", "end start"]}
                  >
                    Aluminium.
                  </ScrollFillText>
                  <ScrollFillText
                    fill="white"
                    strokeColor="rgba(255,255,255,0.28)"
                    className="block"
                    offset={["start start", "end start"]}
                  >
                    Glass.
                  </ScrollFillText>
                  <ScrollFillText
                    fill="orange"
                    strokeColor="rgba(232,93,44,0.35)"
                    className="block"
                    offset={["start start", "end start"]}
                  >
                    Steel.
                  </ScrollFillText>
                </h1>
              ) : (
                <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] max-w-4xl">
                  <span className="text-white/85">{slide.headlineBefore}</span>
                  <br className="hidden sm:block" />
                  <span className={accentClass}>
                    <TypingText text={slide.headlineTyped} restartKey={i} />
                  </span>
                </h1>
              )}

              <p className="mt-8 max-w-xl text-base sm:text-lg text-white/70">
                {slide.subline}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to={slide.ctaPrimary.to}
                  className="group inline-flex items-center gap-2 bg-brand-orange px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-transform hover:-translate-y-0.5"
                >
                  {slide.ctaPrimary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={slide.ctaSecondary.to}
                  className="inline-flex items-center gap-2 border border-white/25 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  {slide.ctaSecondary.label}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="relative z-10 flex items-center justify-between gap-6 pt-10 border-t border-white/10">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Slide ${idx + 1}`}
                className="group flex items-center gap-2"
              >
                <span
                  className={`font-display text-xs font-black tracking-widest transition-colors ${
                    idx === i ? "text-white" : "text-white/40"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span
                  className={`h-px transition-all ${
                    idx === i ? "w-12 bg-brand-orange" : "w-6 bg-white/25"
                  }`}
                />
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setI((n) => (n - 1 + heroSlides.length) % heroSlides.length)}
              className="grid h-11 w-11 place-items-center border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setI((n) => (n + 1) % heroSlides.length)}
              className="grid h-11 w-11 place-items-center border border-white/20 text-white/80 transition-colors hover:border-white hover:text-white"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
