import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PreOrderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {}

export const PreOrderButton = ({ className, variant, size, ...props }: PreOrderButtonProps) => {
  const { toast } = useToast();

  const handlePreOrder = () => {
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
      variant={variant || "default"}
      className={cn(
        variant !== "ghost" && "bg-book-gold hover:bg-book-gold/90 text-white",
        "font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl",
        className
      )}
      {...props}
    >
      Order Now
    </Button>
  );
};