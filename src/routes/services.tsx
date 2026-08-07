import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/astra/PageHero";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer } from "@/components/astra/PopIn";
import { ServiceCard } from "@/components/astra/ServiceCard";
import { services, categories } from "@/lib/astra-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aluminium, Glass, Steel & Smart Technical | Astra Group" },
      {
        name: "description",
        content:
          "Aluminium, glass, steel and smart technical services — curtain walls, glazing, cladding, canopies, pergolas, handrails, MEP, gypsum and painting across the UAE.",
      },
      { property: "og:title", content: "Services — Astra Group" },
      {
        property: "og:description",
        content:
          "Aluminium, glass, steel and smart technical services delivered across Umm Al Quwain and the UAE.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const smart = services.filter((s) => s.category === "smart");
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Capabilities"
        title="Our Services."
        subline="Aluminium works, glass works, steel works and smart technical services — one accountable team, end-to-end."
      />

      {/* Category jump nav */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold uppercase tracking-[0.25em]">
          {categories.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="text-muted-foreground hover:text-brand-orange transition-colors">
              {c.title}
            </a>
          ))}
          <a href="#smart" className="text-muted-foreground hover:text-brand-blue transition-colors">
            Smart Technical
          </a>
        </div>
      </section>

      {/* Category sections */}
      {categories.map((cat) => {
        const catServices = services.filter((s) => s.category === cat.id);
        const isOrange = cat.accent === "orange";
        return (
          <section
            key={cat.id}
            id={cat.id}
            className={`scroll-mt-32 py-24 sm:py-32 ${
              cat.id === "glass" ? "bg-surface-alt" : "bg-background"
            }`}
          >
            <div className="mx-auto max-w-7xl px-6">
              <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-end">
                <Reveal>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`h-px w-10 ${isOrange ? "bg-brand-orange" : "bg-brand-blue"}`} />
                    <span className={`text-xs font-semibold tracking-[0.3em] uppercase ${isOrange ? "text-brand-orange" : "text-brand-blue"}`}>
                      {cat.eyebrow}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
                    {cat.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                    {cat.tagline}
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="relative overflow-hidden">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover"
                    />
                    <div className={`absolute left-0 top-0 h-full w-1 ${isOrange ? "bg-brand-orange" : "bg-brand-blue"}`} />
                  </div>
                </Reveal>
              </div>
              <PopContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {catServices.map((s, i) => (
                  <ServiceCard
                    key={s.slug}
                    index={i + 1}
                    title={s.title}
                    summary={s.summary}
                    Icon={s.icon}
                    accent={cat.accent}
                    slug={s.slug}
                  />
                ))}
              </PopContainer>
            </div>
          </section>
        );
      })}

      {/* Smart Technical Services */}
      <section id="smart" className="scroll-mt-32 bg-ink py-24 sm:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-blue" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-blue">
                04 — Smart Technical
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
              Smart Technical Services
            </h2>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
              MEP, plumbing, gypsum, painting, false ceiling and finishing — the full technical fit-out delivered under Astra Group, Umm Al Quwain.
            </p>
          </Reveal>
          <PopContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smart.map((s, i) => (
              <ServiceCard
                key={s.slug}
                index={i + 1}
                title={s.title}
                summary={s.summary}
                Icon={s.icon}
                accent={i % 2 === 0 ? "blue" : "orange"}
                slug={s.slug}
              />
            ))}
          </PopContainer>
        </div>
      </section>

      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight max-w-3xl">
                Ready to <span className="text-brand-orange">brief us</span>?
              </h2>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-ink px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white hover:-translate-y-0.5 transition-transform self-start"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
