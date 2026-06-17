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
      <div className="h-full rounded-lg border border-gold-500/35 bg-[linear-gradient(135deg,#0E5A47_0%,#1B4D8A_52%,#0B6B57_100%)] p-6 text-center shadow-[0_28px_90px_rgba(14,90,71,0.24)] transition duration-300 hover:-translate-y-1 hover:border-gold-500/60">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/10 text-gold-500 shadow-glow">
          <Icon size={24} strokeWidth={1.75} />
        </div>
        <strong className="block font-serifDisplay text-4xl font-semibold text-gold-500 md:text-5xl">
          {value}
        </strong>
        <span className="mt-3 block text-sm uppercase tracking-[0.18em] text-gold-400">
          {label}
        </span>
      </div>
    </Reveal>
  );
}
