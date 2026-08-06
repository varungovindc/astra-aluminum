import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/astra-logo.png.asset.json";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-border shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logoAsset.url} alt="Astra Group" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-brand-orange" }}
              inactiveProps={{ className: "text-slate-900 hover:text-brand-orange" }}
              className="text-sm font-bold uppercase tracking-[0.25em] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center rounded-none bg-brand-orange px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-brand-orange" }}
                inactiveProps={{ className: "text-foreground" }}
                className="text-sm font-semibold uppercase tracking-[0.2em]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center bg-brand-orange px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
