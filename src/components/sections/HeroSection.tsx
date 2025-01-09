import { PreOrderButton } from "@/components/PreOrderButton";
import { RequestChapterForm } from "@/components/RequestChapterForm";

export const HeroSection = () => {
  return (
    <section className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2574&auto=format&fit=crop')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: '0.15',
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 animate-fadeIn">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-book-red mb-2">
            Living Your Love Story
          </h1>
          <a href="#author" className="no-underline">
            <p className="italic text-gray-600 mb-6">by Phil Hopper</p>
          </a>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Timeless Wisdom for Dating, Marriage, and Intimacy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
            <PreOrderButton />
            <RequestChapterForm />
          </div>
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
  );
};