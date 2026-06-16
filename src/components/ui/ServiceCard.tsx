import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
};

export function ServiceCard({
  title,
  description,
  icon: Icon,
  index
}: ServiceCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group h-full rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-[0_24px_80px_rgba(0,47,31,0.2)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/10 text-gold-500 transition group-hover:bg-gold-500 group-hover:text-forest-950">
          <Icon size={25} strokeWidth={1.75} aria-hidden="true" />
        </div>
        <h3 className="mt-7 font-serifDisplay text-2xl font-semibold text-forest-950">
          {title}
        </h3>
        <p className="mt-3 min-h-[112px] leading-7 text-graphite">
          {description}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-forest-900 transition group-hover:text-gold-500">
          Ver más <ArrowRight size={17} />
        </span>
      </article>
    </Reveal>
  );
}
