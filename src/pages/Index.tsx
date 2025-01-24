import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { AuthorSection } from "@/components/sections/AuthorSection";
import { CTASections } from "@/components/sections/CTASections";
import { PreOrderBonusSection } from "@/components/sections/PreOrderBonusSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ForewordSection } from "@/components/sections/ForewordSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
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
      <section id="order" className="scroll-mt-16">
        {/* The scroll-mt-16 class adds margin to account for any fixed headers */}
      </section>
      <Footer />
    </main>
  );
};

export default Index;