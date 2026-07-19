import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HeroSlider } from "@/components/astra/HeroSlider";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer } from "@/components/astra/PopIn";
import { SectionHeading } from "@/components/astra/SectionHeading";
import { ScrollColorHeading } from "@/components/astra/ScrollColorHeading";
import { ServiceCard } from "@/components/astra/ServiceCard";
import { services, mission, vision } from "@/lib/astra-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astra Group of Companies — Aluminium, Glass & Smart Technical Services" },
      {
        name: "description",
        content:
          "Astra Group delivers premium aluminium, glass and smart technical services across Dubai and Umm Al Quwain.",
      },
      { property: "og:title", content: "Astra Group of Companies" },
      {
        property: "og:description",
        content:
          "Premium aluminium, glass and smart technical services across the UAE.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = services.slice(0, 6);
  return (
    <>
      <HeroSlider />

      {/* About teaser */}
      <section className="bg-surface-alt py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Who We Are" title={<>Built on <span className="text-brand-orange">craft</span>, delivered with precision.</>}>
            Established in 2023, Astra Group of Companies brings together Astra Aluminium & Glass Works
            in Umm Al Quwain and Astra Smart Technical Services LLC in Dubai — a single team engineering
            facades, glazing and full technical fit-outs across the UAE.
          </SectionHeading>
          <Reveal className="lg:pl-10">
            <div className="border-l-4 border-brand-orange bg-white p-8 shadow-sm">
              <p className="font-display text-xl sm:text-2xl font-black uppercase leading-tight tracking-tight text-ink">
                "We believe every project deserves the highest standards of craftsmanship, safety and professionalism."
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Sankaranarayanan — Managing Director
              </p>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange"
                >
                  About Astra Group
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured services */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading eyebrow="Capabilities" title={<>What we <span className="text-brand-blue">build</span>.</>} accent="blue" />
            <Reveal>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-foreground"
              >
                All Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
          <PopContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
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

      {/* Mission & Vision teaser */}
      <section className="relative bg-ink py-28 sm:py-36 text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 20% 30%, rgba(232,93,44,0.25), transparent 60%), radial-gradient(45% 55% at 85% 75%, rgba(59,180,229,0.22), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 grid gap-16 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">Our Mission</span>
            <ScrollColorHeading to="orange" className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              {mission}
            </ScrollColorHeading>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-blue">Our Vision</span>
            <ScrollColorHeading to="blue" className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              {vision}
            </ScrollColorHeading>
          </Reveal>
          <div className="lg:col-span-2">
            <Reveal>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white hover:border-white hover:bg-white/5"
              >
                Read About Us
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden bg-brand-orange px-8 py-16 sm:px-16 sm:py-24">
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white max-w-3xl">
                  Have a project in mind? Let's build it.
                </h2>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-ink px-8 py-5 text-xs font-bold uppercase tracking-[0.25em] text-white transition-transform hover:-translate-y-0.5 self-start lg:self-auto"
                >
                  Contact Astra
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
