import { MetricCard } from "@/components/ui/MetricCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { metrics } from "@/data/portfolio.data";

export function MetricsSection() {
  return (
    <section className="bg-white px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Confianza"
          title="Métricas de confianza"
          description="Indicadores editables que comunican experiencia, alcance y compromiso profesional."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} {...metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
