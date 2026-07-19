import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HardHat, Sparkles, Zap } from "lucide-react";
import { PageHero } from "@/components/astra/PageHero";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer, PopIn } from "@/components/astra/PopIn";
import { ScrollColorHeading } from "@/components/astra/ScrollColorHeading";
import { mission, vision } from "@/lib/astra-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Astra Group of Companies" },
      {
        name: "description",
        content:
          "Established in 2023, Astra Group operates in Dubai and Umm Al Quwain, delivering aluminium, glass and smart technical services with craftsmanship, safety and professionalism.",
      },
      { property: "og:title", content: "About — Astra Group of Companies" },
      {
        property: "og:description",
        content:
          "Who we are, our mission and our vision — Astra Group in Dubai and Umm Al Quwain.",
      },
    ],
  }),
  component: About,
});

const values = [
  { icon: HardHat, title: "Craftsmanship", copy: "Precision execution on every detail, at every scale." },
  { icon: ShieldCheck, title: "Safety", copy: "Non-negotiable standards on-site and in the workshop." },
  { icon: Sparkles, title: "Professionalism", copy: "Clear communication, dependable delivery." },
  { icon: Zap, title: "Agility", copy: "Lean processes that adapt to complex projects." },
];

function About() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Astra Group"
        title="Craft. Engineered."
        subline="A UAE group of companies delivering aluminium, glass and smart technical services with an obsession for detail."
      />

      {/* Welcome + facts */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Established 2023", "Dubai HQ", "UAQ Branch"].map((chip) => (
                <span
                  key={chip}
                  className="border border-border bg-surface-alt px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground"
                >
                  {chip}
                </span>
              ))}
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Who <span className="text-brand-orange">are we</span>.
            </h2>
            <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Astra Group of Companies brings together Astra Aluminium & Glass Works in Umm Al Quwain
                and Astra Smart Technical Services LLC in Dubai — a single team delivering premium
                envelopes, glazing, cladding and full technical fit-outs.
              </p>
              <p>
                From curtain walls and ventilated facades to gypsum works, MEP and plumbing, we bring
                specialist trades under one accountable roof. Every project is engineered, sequenced
                and finished to a standard we are proud to sign off on.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-l-4 border-brand-orange bg-surface-alt p-10">
              <p className="font-display text-2xl sm:text-3xl font-black uppercase leading-[1.1] tracking-tight text-ink">
                "We believe that every project deserves the highest standards of craftsmanship, safety and professionalism."
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Sankaranarayanan — Managing Director
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission */}
      <section className="relative bg-ink py-32 text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(45% 60% at 20% 30%, rgba(232,93,44,0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-brand-orange" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">Our Mission</span>
          </div>
          <ScrollColorHeading to="orange" className="text-4xl sm:text-6xl md:text-7xl max-w-6xl">
            {mission}
          </ScrollColorHeading>
        </div>
      </section>

      {/* Vision */}
      <section className="relative bg-surface-dark py-32 text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(45% 60% at 80% 70%, rgba(59,180,229,0.35), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-brand-blue" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-blue">Our Vision</span>
          </div>
          <ScrollColorHeading to="blue" className="text-4xl sm:text-6xl md:text-7xl max-w-6xl">
            {vision}
          </ScrollColorHeading>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight">
              What we <span className="text-brand-orange">stand for</span>.
            </h2>
          </Reveal>
          <PopContainer className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <PopIn key={v.title}>
                <div className="h-full border border-border bg-card p-8">
                  <v.icon className={`h-8 w-8 ${i % 2 === 0 ? "text-brand-orange" : "text-brand-blue"}`} strokeWidth={1.6} />
                  <h3 className="mt-8 font-display text-base font-black uppercase tracking-tight text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
                </div>
              </PopIn>
            ))}
          </PopContainer>

          <Reveal className="mt-16">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 bg-ink px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white hover:-translate-y-0.5 transition-transform"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
