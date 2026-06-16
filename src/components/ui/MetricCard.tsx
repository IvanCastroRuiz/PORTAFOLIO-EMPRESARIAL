import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/ui/Reveal";

type MetricCardProps = {
  value: string;
  label: string;
  icon: LucideIcon;
  index: number;
};

export function MetricCard({ value, label, icon: Icon, index }: MetricCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="h-full rounded-lg border border-white/12 bg-white/8 p-6 text-center shadow-glow backdrop-blur transition hover:-translate-y-1 hover:border-gold-500/45">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/10 text-gold-500">
          <Icon size={24} strokeWidth={1.75} />
        </div>
        <strong className="block font-serifDisplay text-4xl font-semibold text-gold-500 md:text-5xl">
          {value}
        </strong>
        <span className="mt-3 block text-sm uppercase tracking-[0.18em] text-white/86">
          {label}
        </span>
      </div>
    </Reveal>
  );
}
