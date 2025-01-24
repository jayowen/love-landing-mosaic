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
      <section id="order" className="scroll-mt-16 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">
            Order Your Copy Today
          </h2>
          <div id="hubspot-form-container" className="max-w-2xl mx-auto">
            {/* HubSpot form will be loaded here */}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Index;