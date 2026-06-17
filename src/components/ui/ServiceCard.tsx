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
      <article className="group h-full rounded-lg border border-gold-500/24 bg-[linear-gradient(135deg,#0E5A47_0%,#1B4D8A_54%,#0B6B57_100%)] p-6 shadow-[0_24px_80px_rgba(14,90,71,0.18)] transition duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_28px_90px_rgba(27,77,138,0.24)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10 text-gold-500 transition group-hover:bg-gold-500 group-hover:text-forest-950">
          <Icon size={25} strokeWidth={1.75} aria-hidden="true" />
        </div>
        <h3 className="mt-7 font-serifDisplay text-2xl font-semibold text-gold-500">
          {title}
        </h3>
        <p className="mt-3 min-h-[112px] leading-7 text-gold-400">
          {description}
        </p>
      </article>
    </Reveal>
  );
}
