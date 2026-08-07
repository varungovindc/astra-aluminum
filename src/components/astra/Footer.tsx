import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logoAsset from "@/assets/astra-logo-horizontal.png.asset.json";
import { companies } from "@/lib/astra-content";

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={logoAsset.url}
              alt="Astra Group"
              className="h-16 w-auto brightness-0 invert opacity-80"
            />
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
                <li className="flex items-start gap-3 group/map">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  <div className="flex flex-col gap-3">
                    <span>{c.address}</span>
                    <a 
                      href="https://maps.app.goo.gl/A5W1xWH7CtiymM6J8?g_st=iwb" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-brand-orange"
                    >
                      <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-9-7-9zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                      </svg>
                      Navigate
                    </a>
                  </div>
                </li>
                <li className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-brand-blue" />
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone} (Landline)</a>
                  </div>
                  {c.mobile && (
                    <div className="flex items-center gap-3 pl-7">
                      <a href={`tel:${c.mobile.replace(/\s/g, "")}`}>{c.mobile} (Mob)</a>
                    </div>
                  )}
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
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.2em] text-white/50">
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/projects" className="hover:text-white">Projects</Link>
            <Link to="/careers" className="hover:text-white">Careers</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
