import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const PreOrderButton = () => {
  const { toast } = useToast();

  const handlePreOrder = () => {
    toast({
      title: "Pre-order initiated!",
      description: "You'll be redirected to complete your purchase.",
    });
    // Add actual pre-order logic here
  };

  return (
    <Button
      onClick={handlePreOrder}
      className="bg-book-gold hover:bg-book-gold/90 text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      Pre-Order Now
    </Button>
  );
};