import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { CTASections } from "@/components/sections/CTASections";
import { PreOrderBonusSection } from "@/components/sections/PreOrderBonusSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ForewordSection } from "@/components/sections/ForewordSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Footer } from "@/components/sections/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load HubSpot form
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        region: "na1",
        portalId: "45592170",
        formId: "f795d320-1093-4392-a191-426739288561",
        target: "#hubspot-form-container"
      });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuoteSection />
      <BenefitsSection />
      <PreOrderBonusSection />
      <TestimonialsSection />
      <AuthorSection />
      <ForewordSection />
      <CTASections />
      <Footer />
    </main>
  );
};

export default Index;