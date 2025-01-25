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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex justify-center items-center animate-[fadeIn_1.2s_ease-out]">
            <img
              src="/lovable-uploads/f7de9346-c65d-43c6-b7fa-b50a163c02a8.png"
              alt="Conversation Categories"
              className="w-full max-w-sm rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex justify-center items-center animate-[fadeIn_1.4s_ease-out]">
            <img
              src="/lovable-uploads/17f7bce0-0d0d-4c93-b349-d2435c394c7c.png"
              alt="Conversation Question Example"
              className="w-full max-w-sm rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
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