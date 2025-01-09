import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { CTASections } from "@/components/sections/CTASections";
import { Footer } from "@/components/sections/Footer";

/**
 * Main landing page component for the Living Your Love Story book
 * Composed of multiple sections organized in a logical flow
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <HeroSection />
      <BenefitsSection />
      <AuthorSection />
      <CTASections />
      <Footer />
    </div>
  );
};

export default Index;