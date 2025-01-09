import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { CTASections } from "@/components/sections/CTASections";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <AuthorSection />
      <CTASections />
      <Footer />
    </main>
  );
};

export default Index;