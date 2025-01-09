import { Heart, Book, Sparkles, Users } from "lucide-react";
import { PreOrderButton } from "@/components/PreOrderButton";
import { BenefitCard } from "@/components/BenefitCard";
import { RequestChapterForm } from "@/components/RequestChapterForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 animate-fadeIn">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-book-red mb-6">
              Living Your Love Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Timeless Wisdom for Dating, Marriage, and Intimacy
            </p>
            <PreOrderButton />
          </div>
          <div className="flex-1 flex justify-center animate-fadeIn">
            <img
              src="/lovable-uploads/d57ec37b-0ecf-455c-83ba-4d79fd3744b7.png"
              alt="Living Your Love Story Book Cover"
              className="w-full max-w-md shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            What You'll Discover
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={Heart}
              title="Find True Connection"
              description="Learn how to build and maintain healthy relationships with timeless wisdom"
            />
            <BenefitCard
              icon={Book}
              title="Biblical Wisdom"
              description="Gain insights from King Solomon's timeless principles for modern relationships"
            />
            <BenefitCard
              icon={Sparkles}
              title="Rekindle Romance"
              description="Discover practical ways to maintain passion and deep connection"
            />
            <BenefitCard
              icon={Users}
              title="For Every Stage"
              description="Whether single, engaged, or married, find guidance for your journey"
            />
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img
                  src="/lovable-uploads/bd9702cd-7742-4f34-814f-7dcb36576b30.png"
                  alt="Author Phil Hopper speaking"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="font-serif text-3xl md:text-4xl mb-6">About the Author</h2>
                <p className="text-gray-600 mb-8">
                  Phil Hopper brings over 25 years of experience as the senior pastor of Abundant Life Church. As a best-selling author, he combines biblical wisdom with practical insights to help people build thriving relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-order CTA */}
      <section className="bg-book-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your approach to relationships with timeless wisdom and practical guidance.
          </p>
          <PreOrderButton />
        </div>
      </section>

      {/* Free Chapter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Not Ready to Commit?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free chapter and discover how this book can transform your relationships.
          </p>
          <RequestChapterForm />
        </div>
      </section>
    </div>
  );
};

export default Index;
