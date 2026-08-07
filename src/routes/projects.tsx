import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer } from "@/components/astra/PopIn";

// Import all project images from the assets folder
const projectAssets = import.meta.glob("@/assets/projects/*.asset.json", {
  eager: true,
  import: "default",
}) as Record<string, { url: string }>;

const projectImages = Object.values(projectAssets).map((asset) => asset.url);

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Portfolio — Astra Group of Companies" },
      {
        name: "description",
        content: "Explore our portfolio of premium aluminium, glass, and steel works across the UAE.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-blue">
              Our Portfolio
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
              Astra <span className="text-brand-blue">Gallery</span>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
              Precision-engineered facades, architectural glazing, and structural steel works delivered with excellence across the UAE.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid Display */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <PopContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {projectImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  zIndex: 10,
                  transition: { duration: 0.3 } 
                }}
                className="group relative aspect-square overflow-hidden bg-surface-alt shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Astra Project ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                {/* Minimal Overlay on hover */}
                <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Corner detail */}
                <div className="absolute top-0 right-0 h-10 w-10 border-t border-r border-brand-blue/30 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 h-10 w-10 border-b border-l border-brand-orange/30 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </PopContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-24 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Ready to <span className="text-brand-orange">discuss</span> your project?
            </h2>
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-brand-orange px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1"
              >
                Contact Our Team
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
