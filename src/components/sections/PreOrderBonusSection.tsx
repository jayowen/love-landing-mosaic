import { FileText, Video } from "lucide-react";
import { PreOrderButton } from "@/components/PreOrderButton";

export const PreOrderBonusSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 animate-[fadeIn_0.8s_ease-out]">
          Pre-Order Exclusive Bonuses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-[fadeIn_1s_ease-out]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-book-red/10 p-3 rounded-full">
                <FileText className="w-6 h-6 text-book-red" />
              </div>
              <h3 className="font-serif text-2xl">Free Study Guide</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Get exclusive access to our comprehensive study guide, designed to help you apply the book's principles to your relationships.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                • Personal reflection questions
              </li>
              <li className="flex items-center gap-2">
                • Group discussion topics
              </li>
              <li className="flex items-center gap-2">
                • Practical exercises
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 animate-[fadeIn_1.2s_ease-out]">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-book-gold/10 p-3 rounded-full">
                <Video className="w-6 h-6 text-book-gold" />
              </div>
              <h3 className="font-serif text-2xl">Exclusive Video Message</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Receive a personal video message from Pastor Phil Hopper sharing insights about the book and his heart behind writing it.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                • Behind-the-scenes content
              </li>
              <li className="flex items-center gap-2">
                • Special teaching moments
              </li>
              <li className="flex items-center gap-2">
                • Personal stories
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-12 animate-[fadeIn_1.4s_ease-out]">
          <PreOrderButton />
        </div>
      </div>
    </section>
  );
};