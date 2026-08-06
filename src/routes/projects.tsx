import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Calendar, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer } from "@/components/astra/PopIn";
import { SectionHeading } from "@/components/astra/SectionHeading";
import { projects } from "@/lib/astra-content";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Astra Group of Companies" },
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
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-blue">
              Our Portfolio
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
              Engineering <span className="text-brand-blue">landmarks</span> across the UAE.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
              From high-rise commercial towers to luxury residential villas, we deliver precision-engineered facades and technical solutions that define the modern skyline.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Project Grid */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Featured Work"
            title={<>Our <span className="text-brand-blue">Projects</span></>}
            accent="blue"
          >
            A showcase of our recent completions in aluminium, glass, and structural steel.
          </SectionHeading>

          <PopContainer className="mt-14 grid gap-10 md:grid-cols-2">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                className="group relative flex flex-col overflow-hidden bg-surface-alt"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                     <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-white/10 backdrop-blur-md px-3 py-1 mb-3">
                      <Calendar className="h-3 w-3" />
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8 sm:p-10">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="h-px w-6 bg-brand-blue" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight text-ink group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location}
                  </div>
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <button className="group/btn inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:text-brand-blue">
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </PopContainer>
        </div>
      </section>

      {/* Quality Policy Link */}
      <section className="bg-ink py-24 overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <Reveal>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight max-w-3xl">
                Committed to the highest <span className="text-brand-blue">standards</span> of quality.
              </h2>
              <p className="mt-8 max-w-2xl text-lg text-white/50 leading-relaxed mx-auto">
                Every project is executed under our strict Quality Policy, ensuring safety, durability, and architectural excellence.
              </p>
              <div className="mt-10">
                <button className="inline-flex items-center gap-2 bg-brand-blue px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1">
                  View Quality Standards
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px]" />
        </div>
      </section>
    </div>
  );
}
