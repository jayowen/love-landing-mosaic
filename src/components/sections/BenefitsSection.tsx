import { Heart, Book, Sparkles, Users } from "lucide-react";
import { BenefitCard } from "@/components/BenefitCard";

export const BenefitsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 animate-fade-in">
          What You'll Discover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in [animation-delay:100ms]">
            <BenefitCard
              icon={Heart}
              title="Find True Connection"
              description="Learn how to build and maintain healthy relationships with timeless wisdom"
            />
          </div>
          <div className="animate-fade-in [animation-delay:200ms]">
            <BenefitCard
              icon={Book}
              title="Biblical Wisdom"
              description="Gain insights from King Solomon's timeless principles for modern relationships"
            />
          </div>
          <div className="animate-fade-in [animation-delay:300ms]">
            <BenefitCard
              icon={Sparkles}
              title="Rekindle Romance"
              description="Discover practical ways to maintain passion and deep connection"
            />
          </div>
          <div className="animate-fade-in [animation-delay:400ms]">
            <BenefitCard
              icon={Users}
              title="For Every Stage"
              description="Whether single, engaged, or married, find guidance for your journey"
            />
          </div>
        </div>
      </div>
    </section>
  );
};