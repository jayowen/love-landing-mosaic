import { Menu, Puzzle, X } from "lucide-react";
import { PreOrderButton } from "./PreOrderButton";
import { RequestChapterForm } from "./RequestChapterForm";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-book-red text-white py-4 px-6 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo and Title */}
        <div className="w-full md:w-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Puzzle className="h-6 w-6" />
            <span className="font-serif text-xl">Living Your Love Story</span>
          </div>
          
          {/* Hamburger Menu Button - Only visible on mobile */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-white/90 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-4",
          "w-full md:w-auto",
          "md:opacity-100 md:pointer-events-auto md:translate-y-0",
          isMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-4 md:translate-y-0 absolute md:relative",
          "transition-all duration-200"
        )}>
          <a
            href="https://lovestoryconvos.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/90 transition-colors hover:bg-white/10 px-4 py-2 rounded-md text-base w-full md:w-auto text-center"
          >
            Love Story Convos App
          </a>
          <RequestChapterForm 
            className="text-white hover:text-white/90 hover:bg-white/10 px-4 py-2 rounded-md text-base w-full md:w-auto text-center"
          />
          <PreOrderButton 
            variant="ghost" 
            size="sm"
            className="text-white hover:text-white/90 hover:bg-white/10 px-4 py-2 rounded-md text-base w-full md:w-auto text-center" 
          />
        </div>
      </div>
    </nav>
  );
};