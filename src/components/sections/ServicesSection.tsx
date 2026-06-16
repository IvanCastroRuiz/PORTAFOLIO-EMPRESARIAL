import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/portfolio.data";

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Servicios"
          title="Asesoría integral para cada necesidad"
          description="Soluciones legales, contables, tributarias y empresariales presentadas con criterio técnico y lenguaje claro."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
