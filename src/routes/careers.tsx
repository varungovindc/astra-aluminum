import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, MapPin, Clock, ArrowRight, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer } from "@/components/astra/PopIn";
import { SectionHeading } from "@/components/astra/SectionHeading";
import { careers } from "@/lib/astra-content";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Astra Group of Companies" },
      {
        name: "description",
        content: "Join our team of experts in aluminium, glass, and technical services.",
      },
    ],
  }),
  component: Careers,
});

function Careers() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-ink py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-brand-orange">
              Join the Team
            </span>
            <h1 className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
              Build your <span className="text-brand-orange">future</span> with Astra.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-white/60 leading-relaxed">
              We are always looking for talented individuals to join our growing team in Umm Al Quwain. Explore our current openings and help us shape the future of UAE construction.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Openings */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Open Positions"
            title={<>Current <span className="text-brand-orange">Opportunities</span></>}
          >
            Find a role that matches your expertise and passion for excellence.
          </SectionHeading>

          <PopContainer className="mt-14 grid gap-6">
            {careers.map((job) => (
              <motion.div
                key={job.id}
                className="group relative overflow-hidden border border-border bg-white p-8 transition-all hover:border-brand-orange/30 hover:shadow-xl sm:p-10"
              >
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-orange bg-brand-orange/5 px-3 py-1">
                        <Briefcase className="h-3 w-3" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted-foreground bg-slate-100 px-3 py-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </div>
                    </div>
                    <h3 className="font-display text-2xl font-black uppercase tracking-tight text-ink">
                      {job.title}
                    </h3>
                    <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                    <div className="mt-6">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-3">Key Requirements:</h4>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {job.requirements.map((req, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-orange" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <a 
                      href={`mailto:hr@astragroup.ae?subject=Application for ${job.title}`}
                      className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-brand-orange group-hover:-translate-y-1"
                    >
                      Apply Now
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
                <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-brand-orange transition-transform duration-500 group-hover:scale-y-100" />
              </motion.div>
            ))}
          </PopContainer>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="bg-brand-blue p-8 sm:p-16 relative overflow-hidden">
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  Don't see a matching role?
                </h2>
                <p className="mt-4 text-white/80 leading-relaxed">
                  We are always looking for exceptional talent. Send us your CV and a brief introduction, and we'll keep you in mind for future openings.
                </p>
              </div>
              <a
                href="mailto:hr@astragroup.ae"
                className="inline-flex items-center gap-2 bg-white px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-blue transition-transform hover:-translate-y-1"
              >
                <Send className="h-4 w-4" />
                Send your CV
              </a>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 -mr-32 -mt-32 rounded-full blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
