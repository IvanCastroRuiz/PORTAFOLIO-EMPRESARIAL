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
              <article className="h-full rounded-lg border border-forest-900/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-gold-500/40">
                <item.icon className="text-gold-500" size={30} strokeWidth={1.7} />
                <h3 className="mt-6 font-serifDisplay text-2xl font-semibold text-forest-950">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-graphite">{item.description}</p>
                <span className="mt-6 inline-flex rounded-full bg-forest-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-500">
                  Próximamente
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
