import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Compass } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { HeroSlider } from "@/components/astra/HeroSlider";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer } from "@/components/astra/PopIn";
import { SectionHeading } from "@/components/astra/SectionHeading";
import { ScrollFillText } from "@/components/astra/ScrollFillText";
import { TypingText } from "@/components/astra/TypingText";
import { CategoryCard } from "@/components/astra/CategoryCard";
import { ServiceCard } from "@/components/astra/ServiceCard";
import { services, categories, mission, vision } from "@/lib/astra-content";
import featWorkshop from "@/assets/feat-workshop.jpg";
import featPergola from "@/assets/feat-pergola.jpg";
import astraBadge from "@/assets/astra-badge-3d.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astra Group of Companies — Aluminium, Glass, Steel & Smart Technical Services" },
      {
        name: "description",
        content:
          "Astra Group delivers premium aluminium, glass, steel and smart technical services across Dubai and Umm Al Quwain.",
      },
      { property: "og:title", content: "Astra Group of Companies — Aluminium, Glass, Steel & Smart Technical Services" },
      {
        property: "og:description",
        content:
          "Astra Group delivers premium aluminium, glass, steel and smart technical services across Dubai and Umm Al Quwain.",
      },
    ],
  }),
  component: Home,
});

function WhoWeAre() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: quoteProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });
  const borderHeight = useTransform(quoteProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="bg-surface-alt py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left column — image + badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={featWorkshop}
              alt="Astra fabrication workshop"
              loading="lazy"
              width={1200}
              height={900}
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.6 }}
            className="absolute -bottom-4 left-6 bg-brand-orange px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-xl"
          >
            Since 2023
          </motion.div>
        </motion.div>

        {/* Right column — text */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-10 bg-brand-orange" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">
              — Who We Are
            </span>
          </motion.div>

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight">
            <ScrollFillText
              fill="ink"
              strokeColor="rgba(20,20,25,0.18)"
              className="block"
              offset={["start 90%", "center 55%"]}
            >
              Built on
            </ScrollFillText>{" "}
            <ScrollFillText
              fill="orange"
              strokeColor="rgba(232,93,44,0.35)"
              className="block"
              offset={["start 85%", "center 50%"]}
            >
              Craft.
            </ScrollFillText>
            <ScrollFillText
              fill="ink"
              strokeColor="rgba(20,20,25,0.18)"
              className="block"
              offset={["start 80%", "center 45%"]}
            >
              Delivered with precision.
            </ScrollFillText>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            Established in 2023, Astra Group of Companies brings together Astra Aluminium & Glass Works
            in Umm Al Quwain and Astra Smart Technical Services LLC in Dubai — a single team engineering
            facades, glazing and full technical fit-outs across the UAE.
          </motion.p>

          {/* Quote block */}
          <div className="relative mt-10 bg-white p-8 shadow-sm">
            <motion.span
              aria-hidden
              style={{ height: borderHeight }}
              className="absolute left-0 top-0 w-1 bg-brand-orange"
            />
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const smart = services.filter((s) => s.category === "smart");
  return (
    <>
      <HeroSlider />

      {/* 3-Grid Categories: Aluminium · Glass · Steel */}
      <section id="categories" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="What We Do"
              title={
                <>
                  <TypingText text="Aluminium. Glass. " speed={70} />
                  <span className="text-brand-orange">
                    <TypingText text="Steel." speed={90} restartKey="steel" />
                  </span>
                </>
              }
            >
              Three disciplines, one accountable team. From architectural facades to
              finishing details — Astra Group builds it.
            </SectionHeading>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
            }}
            style={{ perspective: 1200 }}
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((c) => (
              <CategoryCard
                key={c.id}
                category={c}
                services={services.filter((s) => s.category === c.id)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are — animated */}
      <WhoWeAre />

      {/* Smart Technical Services */}
      <section className="relative bg-background py-24 sm:py-32 overflow-hidden">
        <div
          aria-hidden
          className="absolute right-0 top-0 h-full w-1/2 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to left, rgba(0,0,0,0) 0%, hsl(var(--background)) 100%), url(${featPergola})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:flex sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Astra Smart Technical Services"
              title={<>Everything <span className="text-brand-blue">around the build</span>.</>}
              accent="blue"
            >
              MEP, plumbing, gypsum, painting, false ceiling and finishing — the full technical
              fit-out delivered by one accountable team.
            </SectionHeading>
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
            {smart.slice(0, 6).map((s, i) => (
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

      {/* Mission & Vision */}
      <section className="relative bg-ink py-24 sm:py-32 text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 20% 30%, rgba(232,93,44,0.22), transparent 60%), radial-gradient(45% 55% at 85% 75%, rgba(59,180,229,0.2), transparent 60%)",
          }}
        />
        {/* Floating rotating 3D badge as decorative icon */}
        <motion.img
          aria-hidden
          src={astraBadge.url}
          alt=""
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -right-24 top-1/2 w-[320px] -translate-y-1/2 opacity-[0.07] sm:opacity-[0.1] lg:w-[420px] lg:opacity-20"
          style={{ filter: "drop-shadow(0 20px 60px rgba(232,93,44,0.35))" }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-white/60">
              What Drives Us
            </span>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.95] tracking-tight text-white">
              Mission <span className="text-brand-orange">&</span> Vision
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Mission card */}
            <Reveal>
              <div className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-sm transition-colors hover:border-brand-orange/50">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="grid h-14 w-14 shrink-0 place-items-center border border-brand-orange/40 bg-brand-orange/10"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Target className="h-6 w-6 text-brand-orange" strokeWidth={1.8} />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-orange">
                      01 — Mission
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-black uppercase tracking-tight text-white">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-white/75">
                  {mission}
                </p>
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brand-orange transition-transform duration-500 group-hover:scale-y-100"
                />
              </div>
            </Reveal>

            {/* Vision card */}
            <Reveal delay={0.15}>
              <div className="group relative h-full overflow-hidden border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-sm transition-colors hover:border-brand-blue/50">
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="grid h-14 w-14 shrink-0 place-items-center border border-brand-blue/40 bg-brand-blue/10"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Compass className="h-6 w-6 text-brand-blue" strokeWidth={1.8} />
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-blue">
                      02 — Vision
                    </span>
                    <h3 className="mt-1 font-display text-2xl font-black uppercase tracking-tight text-white">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-white/75">
                  {vision}
                </p>
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brand-blue transition-transform duration-500 group-hover:scale-y-100"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-12">
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
