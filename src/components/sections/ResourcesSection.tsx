import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { resources } from "@/data/portfolio.data";

export function ResourcesSection() {
  return (
    <section className="bg-ivory px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Recursos"
          title="Recursos de valor"
          description="Materiales pensados para reforzar la toma de decisiones y promover una cultura de orden legal, contable y tributario."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-lg border border-gold-500/24 bg-[linear-gradient(135deg,#0E5A47_0%,#1B4D8A_54%,#0B6B57_100%)] p-7 shadow-[0_24px_80px_rgba(14,90,71,0.2)] transition duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-[0_28px_90px_rgba(27,77,138,0.24)]">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-gold-500/35 bg-gold-500/10 text-gold-500">
                  <item.icon size={30} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 font-serifDisplay text-2xl font-semibold text-gold-500">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-gold-400">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
