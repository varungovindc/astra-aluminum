import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/astra-logo.png.asset.json";
import { companies } from "@/lib/astra-content";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src={logoAsset.url} alt="Astra Group" className="h-14 w-auto brightness-0 invert" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              Astra Group of Companies — building premium aluminium, glass and smart technical solutions across the UAE.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center border border-white/15 text-white/70 transition-colors hover:border-brand-orange hover:text-brand-orange"
                  aria-label="Social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {companies.map((c) => (
            <div key={c.name}>
              <h3 className="font-display text-sm font-black uppercase tracking-[0.2em] text-white">
                {c.name}
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  <span>{c.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
                  <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-brand-blue" />
                  <a href={`mailto:${c.email}`}>{c.email}</a>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            © {new Date().getFullYear()} Astra Group of Companies
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-[0.2em] text-white/50">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
