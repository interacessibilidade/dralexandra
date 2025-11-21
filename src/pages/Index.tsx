
import { HeroSection } from "@/components/HeroSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesPreview } from "@/components/ServicesPreview";
import { SpecializedTreatments } from "@/components/SpecializedTreatments";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div>
      <HeroSection />
      <WelcomeSection />
      <ServicesPreview />
      <FeaturesSection />
      <SpecializedTreatments />
      <CTASection />
    </div>
  );
};

export default Index;
