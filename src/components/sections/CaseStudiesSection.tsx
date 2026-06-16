import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
              <article className="group h-full overflow-hidden rounded-lg border border-forest-900/10 bg-ivory shadow-soft transition hover:-translate-y-1 hover:border-gold-500/45">
                <div className="relative aspect-[4/3]">
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
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-forest-900/15 px-4 py-2 text-sm font-bold text-forest-900 transition group-hover:border-gold-500 group-hover:text-gold-500">
                    Ver caso <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
