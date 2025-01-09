import { Heart, Book, Sparkles, Users } from "lucide-react";
import { BenefitCard } from "@/components/BenefitCard";

export const BenefitsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [animation-delay:100ms] scroll-animate">
          What You'll Discover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [animation-delay:200ms] scroll-animate">
            <BenefitCard
              icon={Heart}
              title="Find True Connection"
              description="Learn how to build and maintain healthy relationships with timeless wisdom"
            />
          </div>
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [animation-delay:300ms] scroll-animate">
            <BenefitCard
              icon={Book}
              title="Biblical Wisdom"
              description="Gain insights from King Solomon's timeless principles for modern relationships"
            />
          </div>
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [animation-delay:400ms] scroll-animate">
            <BenefitCard
              icon={Sparkles}
              title="Rekindle Romance"
              description="Discover practical ways to maintain passion and deep connection"
            />
          </div>
          <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] [animation-delay:500ms] scroll-animate">
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