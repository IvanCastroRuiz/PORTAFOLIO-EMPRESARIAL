import { AboutSection } from "@/components/sections/AboutSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceTimeline } from "@/components/sections/ExperienceTimeline";
import { HeroSection } from "@/components/sections/HeroSection";
import { InnovationSection } from "@/components/sections/InnovationSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { MovingWordsSection } from "@/components/sections/MovingWordsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InnovationSection />
      <MovingWordsSection />
      <ExperienceTimeline />
      <MetricsSection />
      <CaseStudiesSection />
      <ResourcesSection />
      <ContactSection />
    </main>
  );
}
