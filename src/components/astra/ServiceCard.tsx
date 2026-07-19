import type { LucideIcon } from "lucide-react";
import { PopIn } from "./PopIn";

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
  const isOrange = accent === "orange";
  const glow = isOrange
    ? "hover:shadow-[0_20px_60px_-20px_rgba(232,93,44,0.55)] hover:border-brand-orange/60"
    : "hover:shadow-[0_20px_60px_-20px_rgba(59,180,229,0.55)] hover:border-brand-blue/60";
  const bar = isOrange ? "bg-brand-orange" : "bg-brand-blue";
  const iconColor = isOrange ? "text-brand-orange" : "text-brand-blue";

  return (
    <PopIn>
      <div
        data-service-slug={slug}
        className={`group relative h-full overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 ${glow}`}
      >
        <span
          className={`absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 ${bar} transition-transform duration-500 group-hover:scale-y-100`}
        />
        <div className="flex items-start justify-between">
          <span className="font-display text-xs font-black tracking-widest text-muted-foreground">
            {String(index).padStart(2, "0")}
          </span>
          <Icon className={`h-6 w-6 ${iconColor}`} strokeWidth={1.6} />
        </div>
        <h3 className="mt-8 font-display text-lg font-black uppercase leading-tight tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{summary}</p>
      </div>
    </PopIn>
  );
}
