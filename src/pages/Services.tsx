
import { ServicesHero } from "@/components/ServicesHero";
import { FacialTreatments } from "@/components/FacialTreatments";
import { BodyTreatments } from "@/components/BodyTreatments";
import { TreatmentDifferential } from "@/components/TreatmentDifferential";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ServicesCTA } from "@/components/ServicesCTA";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <FacialTreatments />
      <BodyTreatments />
      <TreatmentDifferential />
      <TestimonialsSection />
      <ServicesCTA />
    </div>
  );
};

export default Services;
