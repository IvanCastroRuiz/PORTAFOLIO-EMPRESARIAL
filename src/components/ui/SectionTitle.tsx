import { Reveal } from "@/components/ui/Reveal";

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark"
}: SectionTitleProps) {
  const titleColor = tone === "light" ? "text-gold-500" : "text-forest-950";
  const descriptionColor = tone === "light" ? "text-white/82" : "text-graphite";

  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-gold-500">
        {eyebrow}
      </p>
      <h2 className={`font-serifDisplay text-3xl font-semibold leading-tight md:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-8 md:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
