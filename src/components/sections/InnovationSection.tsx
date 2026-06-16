import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { innovationItems } from "@/data/portfolio.data";

export function InnovationSection() {
  return (
    <section id="diagnostico" className="bg-forest-950 px-5 py-24 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Diagnóstico 360°"
          title="Diagnóstico 360° legal, contable y tributario"
          description="Más que presentar servicios, este portafolio guía al cliente a identificar qué tipo de acompañamiento necesita según su situación legal, contable, fiscal o empresarial."
          tone="light"
        />
        <div className="relative mt-16">
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-gold-500 via-gold-500/55 to-transparent lg:left-0 lg:top-10 lg:h-px lg:w-full lg:bg-gradient-to-r" />
          <div className="grid gap-6 lg:grid-cols-5">
          {innovationItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="relative h-full rounded-lg border border-gold-500/24 bg-white/8 p-6 pl-20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/12 lg:pl-6 lg:pt-20">
                <div className="absolute left-0 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500 bg-forest-950 text-gold-500 shadow-glow lg:left-6 lg:top-0">
                  <item.icon size={24} strokeWidth={1.7} />
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
                  Paso {index + 1}
                </span>
                <h3 className="mt-3 font-serifDisplay text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/68">{item.description}</p>
              </article>
            </Reveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
