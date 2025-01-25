import { Puzzle } from "lucide-react";
import { PreOrderButton } from "./PreOrderButton";
import { RequestChapterForm } from "./RequestChapterForm";

export const Navigation = () => {
  return (
    <nav className="bg-book-red text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <Puzzle className="h-6 w-6" />
          <span className="font-serif text-xl">Living Your Love Story</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <PreOrderButton 
            variant="ghost" 
            size="sm"
            className="text-white hover:text-white/90 hover:bg-white/10 px-4 py-2 rounded-md text-base" 
          />
          <RequestChapterForm 
            className="text-white hover:text-white/90 hover:bg-white/10 px-4 py-2 rounded-md text-base"
          />
          <a
            href="https://lovestoryconvos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/90 transition-colors hover:bg-white/10 px-4 py-2 rounded-md text-base"
          >
            Love Story Convos App →
          </a>
        </div>
      </div>
    </nav>
  );
};