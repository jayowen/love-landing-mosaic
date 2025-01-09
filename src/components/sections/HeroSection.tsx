import { PreOrderButton } from "@/components/PreOrderButton";
import { RequestChapterForm } from "@/components/RequestChapterForm";

export const HeroSection = () => {
  return (
    <section className="relative container mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('/lovable-uploads/ece6e66d-08ae-4528-8e63-02dae192e08a.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: '0.15',
          filter: 'brightness(0.9) contrast(1.1)'
        }}
      />
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 animate-[fadeIn_0.8s_ease-out]">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-book-red mb-2 animate-[fadeIn_1s_ease-out]">
            Living Your Love Story
          </h1>
          <a href="#author" className="no-underline">
            <p className="italic text-gray-600 mb-6 animate-[fadeIn_1.2s_ease-out]">by Phil Hopper</p>
          </a>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-[fadeIn_1.4s_ease-out]">
            Timeless Wisdom for Dating, Marriage, and Intimacy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start animate-[fadeIn_1.6s_ease-out]">
            <PreOrderButton />
            <RequestChapterForm />
          </div>
        </div>
        <div className="flex-1 flex justify-center animate-[fadeIn_1.8s_ease-out] hover:scale-105 transition-transform duration-500">
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