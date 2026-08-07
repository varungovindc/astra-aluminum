import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, HardHat, Sparkles, Zap } from "lucide-react";
import { PageHero } from "@/components/astra/PageHero";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer, PopIn } from "@/components/astra/PopIn";
import { ScrollColorHeading } from "@/components/astra/ScrollColorHeading";
import { mission, vision, welcomeParagraphs, whoAreWeParagraphs, managingDirector } from "@/lib/astra-content";
import featWorkshop from "@/assets/feat-workshop.jpg";
import featPergola from "@/assets/feat-pergola.jpg";
import catGlass from "@/assets/cat-glass.jpg";

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

      {/* Welcome message from MD */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-orange" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">
                Welcome
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              Welcome to <span className="text-brand-orange">Astra</span>.
            </h2>
            <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {welcomeParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-foreground">
              {managingDirector.name} — {managingDirector.title}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:sticky lg:top-28">
            <div className="border-l-4 border-brand-orange bg-surface-alt p-10">
              <p className="font-display text-2xl sm:text-3xl font-black uppercase leading-[1.1] tracking-tight text-ink">
                "We believe that every project — regardless of its size — deserves the highest standards of craftsmanship, safety and professionalism."
              </p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {managingDirector.name} — {managingDirector.title}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who are we */}
      <section className="bg-surface-alt py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="relative overflow-hidden">
              <img
                src={catGlass}
                alt="Astra glass works interior"
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-blue" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-ink/90 to-transparent">
                <div className="flex flex-wrap gap-2">
                  {["Est. 2023", "UAQ Factory", "UAE"].map((chip) => (
                    <span
                      key={chip}
                      className="border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-brand-blue" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-blue">
                Who Are We
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
              A UAE group <span className="text-brand-blue">built to last</span>.
            </h2>
            <div className="mt-8 space-y-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
              {whoAreWeParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Imagery band */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-4 md:grid-cols-2">
          <Reveal>
            <img src={featWorkshop} alt="Astra fabrication workshop" loading="lazy" className="w-full aspect-[4/3] object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <img src={featPergola} alt="Astra pergola project" loading="lazy" className="w-full aspect-[4/3] object-cover" />
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
