import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { timeline } from "@/data/portfolio.data";

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="bg-ivory px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Experiencia"
          title="Trayectoria profesional"
          description="Una evolución profesional construida desde el Derecho, la Contaduría Pública, la Tributación y el Derecho Administrativo."
        />
        <div className="relative mt-16">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-gold-500 via-forest-800/45 to-transparent md:left-1/2 md:-translate-x-1/2" />
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className={`relative mb-6 pl-14 md:grid md:grid-cols-2 md:gap-12 md:pl-0 ${index % 2 === 0 ? "" : "md:text-right"}`}>
                <span className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500 bg-forest-950 text-xs font-bold text-gold-500 shadow-glow md:left-1/2 md:-translate-x-1/2">
                  {index + 1}
                </span>
                <div className={index % 2 === 0 ? "md:col-start-2" : "md:col-start-1"}>
                  <div className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold-500/40">
                    <span className="text-xs font-bold uppercase tracking-[0.24em] text-gold-500">
                      {item.stage}
                    </span>
                    <h3 className="mt-3 font-serifDisplay text-2xl font-semibold text-forest-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-graphite">{item.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
