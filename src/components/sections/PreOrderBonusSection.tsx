import { PreOrderButton } from "@/components/PreOrderButton";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const PreOrderBonusSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4 animate-[fadeIn_0.8s_ease-out]">
          Access the Conversation Starters App
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out]">
          Questions to help you go deeper in your relationship in an easy to use app.
        </p>
        
        <div className="flex justify-center items-center mb-12 animate-[fadeIn_1.4s_ease-out]">
          <img
            src="/lovable-uploads/b57c58d9-9a6f-4a70-b2ec-89eb49cc75f2.png"
            alt="Conversation Categories in App"
            className="w-full max-w-sm rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeIn_1.6s_ease-out]">
          <PreOrderButton />
          <Button
            variant="outline"
            className="bg-white hover:bg-gray-50 border-book-red text-book-red hover:text-book-red/90 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            onClick={() => window.open('https://lovestoryconvos.com', '_blank')}
          >
            Access the App
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};