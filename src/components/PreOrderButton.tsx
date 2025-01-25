import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const PreOrderButton = () => {
  const { toast } = useToast();

  const handlePreOrder = () => {
    // Find the section with "BUY THE BOOK NOW" text
    const sections = document.querySelectorAll('h2');
    const buySection = Array.from(sections).find(section => 
      section.textContent?.includes('BUY THE BOOK NOW')
    );
    
    if (buySection) {
      buySection.scrollIntoView({ behavior: 'smooth' });
      toast({
        title: "Ready to order!",
        description: "Choose your preferred retailer below.",
      });
    }
  };

  return (
    <Button
      onClick={handlePreOrder}
      className="bg-book-gold hover:bg-book-gold/90 text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Order Now
    </Button>
  );
};