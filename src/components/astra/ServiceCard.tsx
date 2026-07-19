import type { LucideIcon } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import type { PointerEvent } from "react";

// Unsplash photo backdrops per service slug (fallback by category keyword).
const IMG_MAP: Record<string, string> = {
  "aluminium-glass-doors-windows": "photo-1600585154340-be6161a56a0c",
  "sliding-casement-hinged-systems": "photo-1524230572899-a752b3835840",
  "aluminium-cladding": "photo-1487958449943-2429e8be8625",
  "ventilated-facade-systems": "photo-1486406146926-c627a92ad1ab",
  "thermal-break-profiles": "photo-1503387762-592deb58ef4e",
  "aluminium-pergolas": "photo-1600607687939-ce8a6c25118c",
  shopfronts: "photo-1441986300917-64674bd600d8",
  "curtain-wall-systems": "photo-1497366216548-37526070297c",
  "glass-works": "photo-1503424886308-3b0f1c1c5b0d",
  "frameless-glass-doors": "photo-1560448204-e02f11c3d0e2",
  "interior-glass-partitions": "photo-1497366754035-f200968a6e72",
  "glass-balustrades": "photo-1600585154526-990dced4db0d",
  "glass-ceramic-printing": "photo-1517245386807-bb43f82c33c4",
  "shower-cubicles": "photo-1552321554-5fefe8c9ef14",
  "skylights-structural-glazing": "photo-1517502884422-41eaead166d4",
  "steel-canopy": "photo-1504307651254-35680f356dfd",
  "stainless-steel-handrails": "photo-1600585154363-67eb9e2e2099",
  "steel-cladding": "photo-1519306305530-4d4a615fdd4b",
  "steel-pergolas": "photo-1600585154207-2dfe1f8b7f92",
  "steel-sheds": "photo-1487958449943-2429e8be8625",
  "steel-doors": "photo-1558618666-fcd25c85cd64",
  "architectural-finishing": "photo-1503387762-592deb58ef4e",
  "gypsum-works": "photo-1503387837-b154d5074bd2",
  "false-ceiling": "photo-1497366811353-6870744d04b2",
  "painting-works": "photo-1562259949-e8e7689d7828",
  electromechanical: "photo-1581092160607-ee22621dd758",
  "plumbing-sanitary-works": "photo-1585129777188-1e51e5f2e5c1",
  "retail-shopfronts": "photo-1441986300917-64674bd600d8",
};

function imageFor(slug: string) {
  const id = IMG_MAP[slug] ?? "photo-1487958449943-2429e8be8625";
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;
}

export function ServiceCard({
  index,
  title,
  summary,
  Icon,
  accent,
  slug,
}: {
  index: number;
  title: string;
  summary: string;
  Icon: LucideIcon;
  accent: "orange" | "blue";
  slug: string;
}) {
  const reduce = useReducedMotion();
  const isOrange = accent === "orange";
  const bar = isOrange ? "bg-brand-orange" : "bg-brand-blue";
  const iconColor = isOrange ? "text-brand-orange" : "text-brand-blue";
  const glow = isOrange
    ? "0 30px 60px -20px rgba(232,93,44,0.55)"
    : "0 30px 60px -20px rgba(59,180,229,0.55)";

  // 3D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 250, damping: 20 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 250, damping: 20 });

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.96 },
        show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 18 } },
      }}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      whileHover={reduce ? undefined : { boxShadow: glow }}
      style={{
        rotateX: reduce ? 0 : rotX,
        rotateY: reduce ? 0 : rotY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full min-h-[300px] overflow-hidden rounded-lg border border-white/10"
      data-service-slug={slug}
    >
      {/* Background image */}
      <img
        src={imageFor(slug)}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* Dark gradient overlay */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.2) 100%)",
        }}
      />
      {/* Accent bar */}
      <span
        aria-hidden
        className={`absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 ${bar} transition-transform duration-500 group-hover:scale-y-100`}
      />

      {/* Content (parallax Z lift) */}
      <div
        className="relative flex h-full flex-col p-6"
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        <div className="flex items-start justify-between">
          <span className="font-display text-xs font-black tracking-widest text-white/70">
            {String(index).padStart(2, "0")}
          </span>
          <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={1.6} />
        </div>
        <div className="mt-auto pt-24">
          <h3 className="font-display text-lg font-black uppercase leading-tight tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{summary}</p>
        </div>
      </div>
    </motion.div>
  );
}
