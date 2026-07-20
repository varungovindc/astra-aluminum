import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { Category, Service } from "@/lib/astra-content";

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, rotateX: -18, y: 40 },
  show: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 16, mass: 0.9 },
  },
};

export function CategoryCard({
  category,
  services,
}: {
  category: Category;
  services: Service[];
}) {
  const reduce = useReducedMotion();
  const isOrange = category.accent === "orange";
  const accentText = isOrange ? "text-brand-orange" : "text-brand-blue";
  const accentBar = isOrange ? "bg-brand-orange" : "bg-brand-blue";
  const hoverShadow = isOrange
    ? "0 30px 80px -20px rgba(232,93,44,0.55), 0 0 0 1px rgba(232,93,44,0.25)"
    : "0 30px 80px -20px rgba(59,180,229,0.55), 0 0 0 1px rgba(59,180,229,0.25)";

  return (
    <motion.div
      variants={reduce ? undefined : cardVariants}
      whileHover={reduce ? undefined : { y: -10, boxShadow: hoverShadow }}
      whileTap={reduce ? undefined : { y: -6, scale: 0.99, boxShadow: hoverShadow }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{ transformPerspective: 1000, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      <Link
        to="/services"
        hash={category.id}
        className="group relative flex h-full flex-col overflow-hidden border border-border bg-card"
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7">
            <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${accentText}`}>
              {category.eyebrow}
            </span>
            <h3 className="mt-3 font-display text-3xl sm:text-4xl font-black uppercase leading-[0.95] tracking-tight text-white">
              {category.title}
            </h3>
          </div>
          <span
            className={`absolute left-0 top-0 h-[3px] origin-left scale-x-0 ${accentBar} w-full transition-transform duration-700 group-hover:scale-x-100`}
          />
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-7">
          <p className="text-sm text-muted-foreground leading-relaxed">{category.tagline}</p>
          <ul className="mt-6 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug} className="flex items-start gap-2.5 text-sm text-foreground">
                <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accentBar}`} />
                <span>{s.title}</span>
              </li>
            ))}
          </ul>
          <div className={`mt-auto pt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] ${accentText}`}>
            View {category.title}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
