import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { CTASections } from "@/components/sections/CTASections";
import { PreOrderBonusSection } from "@/components/sections/PreOrderBonusSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ForewordSection } from "@/components/sections/ForewordSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ForewordSection />
      <PreOrderBonusSection />
      <TestimonialsSection />
      <AuthorSection />
      <CTASections />
      <Footer />
    </main>
  );
};

export default Index;