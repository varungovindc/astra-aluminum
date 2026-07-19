import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/astra/PageHero";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer } from "@/components/astra/PopIn";
import { ServiceCard } from "@/components/astra/ServiceCard";
import { services } from "@/lib/astra-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Astra Group of Companies" },
      {
        name: "description",
        content:
          "Curtain walls, glazing, cladding, facades, doors and windows, MEP, gypsum, painting and more — Astra Group's full capability set across the UAE.",
      },
      { property: "og:title", content: "Services — Astra Group" },
      {
        property: "og:description",
        content:
          "Aluminium, glass and smart technical services delivered across Dubai and Umm Al Quwain.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Capabilities"
        title="Our Services."
        subline="From structural facades to fine finishing — one accountable team, end-to-end."
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <PopContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard
                key={s.slug}
                index={i + 1}
                title={s.title}
                summary={s.summary}
                Icon={s.icon}
                accent={i % 2 === 0 ? "orange" : "blue"}
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
