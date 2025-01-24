import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const PreOrderButton = () => {
  const { toast } = useToast();

  const handlePreOrder = () => {
    // Smooth scroll to order section
    const orderSection = document.getElementById('order');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    toast({
      title: "Order initiated!",
      description: "You'll be redirected to complete your purchase.",
    });
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