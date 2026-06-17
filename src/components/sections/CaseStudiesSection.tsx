import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies } from "@/data/portfolio.data";

export function CaseStudiesSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Escenarios"
          title="Escenarios donde puedo ayudarte"
          description="Situaciones frecuentes en las que una visión legal, contable y tributaria puede aportar claridad. No representan clientes ni resultados reales."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {caseStudies.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="group h-full overflow-hidden rounded-lg border border-forest-900/10 bg-ivory shadow-[0_24px_80px_rgba(14,90,71,0.18)] transition hover:-translate-y-1 hover:border-gold-500/45 hover:shadow-[0_30px_90px_rgba(27,77,138,0.2)]">
                <div className="relative aspect-[4/3] shadow-[0_24px_70px_rgba(14,90,71,0.18)]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/72 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-500">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-serifDisplay text-2xl font-semibold text-forest-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-graphite">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
