import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { TypingText } from "./TypingText";
import { heroSlides } from "@/lib/astra-content";
import heroFacade from "@/assets/hero-facade.jpg";
import catAluminium from "@/assets/cat-aluminium.jpg";
import catGlass from "@/assets/cat-glass.jpg";

const heroImages = [heroFacade, catGlass, catAluminium];

export function HeroSlider() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % heroSlides.length), 7000);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[i];
  const accentClass = slide.accent === "orange" ? "text-brand-orange" : "text-brand-blue";

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


      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-32 pb-16">
        <div className="flex-1 grid grid-cols-1 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`h-px w-10 ${slide.accent === "orange" ? "bg-brand-orange" : "bg-brand-blue"}`} />
                <span className={`text-xs font-semibold tracking-[0.3em] uppercase ${accentClass}`}>
                  {slide.eyebrow}
                </span>
              </div>
              <h1 className="font-display font-black uppercase leading-[0.88] tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] max-w-5xl">
                <span className="text-white/85">{slide.headlineBefore}</span>
                <br className="hidden sm:block" />
                <span className={accentClass}>
                  <TypingText text={slide.headlineTyped} restartKey={i} />
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-base sm:text-lg text-white/70">
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
        <div className="flex items-center justify-between gap-6 pt-10 border-t border-white/10">
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
