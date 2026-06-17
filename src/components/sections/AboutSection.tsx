import Image from "next/image";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { aboutHighlights, profile, referenceImages } from "@/data/portfolio.data";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="bg-ivory px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-[0_28px_90px_rgba(14,90,71,0.24),0_16px_55px_rgba(27,77,138,0.16)]">
            <Image
              src={referenceImages.about}
              alt="Perfil profesional de Milagros Castro Ruiz"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-6 rounded-lg bg-forest-950 p-5 text-white shadow-glow">
            <p className="text-xs uppercase tracking-[0.24em] text-gold-500">
              Marca
            </p>
            <p className="mt-2 font-serifDisplay text-4xl text-gold-500">
              {profile.initials}
            </p>
          </div>
        </Reveal>

        <div>
          <SectionTitle
            align="left"
            eyebrow="Sobre mí"
            title="Estratega legal, contable y tributaria"
          />
          <Reveal delay={0.12} className="mt-8 grid gap-5 text-base leading-8 text-graphite">
            <p>
              Soy Abogada y Contadora Pública, con formación especializada en Tributación y Derecho Administrativo. Mi enfoque combina el rigor jurídico con el análisis financiero y contable para brindar soluciones claras, responsables y estratégicas.
            </p>
            <p>
              Mi propósito es acompañar a personas, emprendedores y empresas en la toma de decisiones importantes, ofreciendo una visión integral que permite prevenir riesgos, organizar obligaciones y construir soluciones sostenibles.
            </p>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item, index) => (
              <Reveal key={item.title} delay={0.16 + index * 0.06}>
                <article className="h-full rounded-lg border border-gold-500/25 bg-[linear-gradient(135deg,#0E5A47_0%,#1B4D8A_56%,#0B6B57_100%)] p-5 shadow-[0_24px_70px_rgba(14,90,71,0.18)] transition duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_28px_80px_rgba(27,77,138,0.24)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/10 text-gold-500">
                    <item.icon size={25} strokeWidth={1.7} />
                  </div>
                  <h3 className="mt-4 font-serifDisplay text-xl font-semibold text-gold-500">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gold-400">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
