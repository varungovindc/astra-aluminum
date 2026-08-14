import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Facebook, Instagram, Linkedin } from "lucide-react";
import { PageHero } from "@/components/astra/PageHero";
import { Reveal } from "@/components/astra/Reveal";
import { PopContainer, PopIn } from "@/components/astra/PopIn";
import { companies } from "@/lib/astra-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Astra Group of Companies" },
      {
        name: "description",
        content:
          "Reach Astra Aluminium & Glass Works in Umm Al Quwain — get a quote or brief us on your project.",
      },
      { property: "og:title", content: "Contact — Astra Group" },
      {
        property: "og:description",
        content:
          "Get in touch with Astra Group in Umm Al Quwain.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Talk To Astra"
        title="Let's build."
        subline="Reach our team in Umm Al Quwain below or send us your brief."
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <PopContainer className="grid gap-6 md:grid-cols-2">
            {companies.map((c, i) => (
              <PopIn key={c.name}>
                <div className="h-full border border-border bg-card p-8 sm:p-10">
                  <span
                    className={`text-xs font-bold uppercase tracking-[0.25em] ${
                      i === 0 ? "text-brand-orange" : "text-brand-blue"
                    }`}
                  >
                    {c.city}
                  </span>
                  <h2 className="mt-4 font-display text-2xl sm:text-3xl font-black uppercase leading-tight tracking-tight text-foreground">
                    {c.name}
                  </h2>
                  <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3 group/map">
                      <MapPin className={`mt-0.5 h-4 w-4 shrink-0 ${i === 0 ? "text-brand-orange" : "text-brand-blue"}`} />
                      <div className="flex flex-col gap-3">
                        <span>{c.address}</span>
                        {c.city.includes("Umm Al Quwain") && (
                          <a 
                            href="https://maps.app.goo.gl/A5W1xWH7CtiymM6J8?g_st=iwb" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-brand-orange"
                          >
                            <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-9-7-9zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                            </svg>
                            Navigate
                          </a>
                        )}
                      </div>
                    </li>
                    <li className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Phone className={`h-4 w-4 shrink-0 ${i === 0 ? "text-brand-orange" : "text-brand-blue"}`} />
                        <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                          {c.phone}
                        </a>
                      </div>
                      {c.mobile && (
                        <div className="flex items-center gap-3 pl-7">
                          <a href={`tel:${c.mobile.replace(/\s/g, "")}`} className="hover:text-foreground">
                            {c.mobile}
                          </a>
                        </div>
                      )}
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className={`h-4 w-4 shrink-0 ${i === 0 ? "text-brand-orange" : "text-brand-blue"}`} />
                      <a href={`mailto:${c.email}`} className="hover:text-foreground">
                        {c.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </PopIn>
            ))}
          </PopContainer>

          <Reveal className="mt-12 flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">Follow</span>
            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-11 w-11 place-items-center border border-border text-foreground/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-surface-alt py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase leading-[0.95] tracking-tight">
              Brief <span className="text-brand-orange">us</span>.
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Tell us about your project — we'll come back with the right team and a plan.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="grid gap-5 sm:grid-cols-2"
            >
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">
                  Project brief
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-orange"
                />
              </div>
              <div className="sm:col-span-2 flex items-center gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 bg-brand-orange px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white hover:-translate-y-0.5 transition-transform"
                >
                  Send Brief
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                {sent ? (
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                    Thanks — we'll be in touch.
                  </span>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-[0.25em] text-foreground">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-3 w-full border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-brand-orange"
      />
    </div>
  );
}
