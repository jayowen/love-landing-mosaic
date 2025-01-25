import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PreOrderButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {}

export const PreOrderButton = ({ className, variant, size, ...props }: PreOrderButtonProps) => {
  const retailers = [
    {
      name: "Amazon",
      image: "/lovable-uploads/3d778331-9f37-47e4-8434-f481b2438325.png",
      url: "https://www.amazon.com/Living-Your-Love-Story-Timeless/dp/0768483522/ref=sr_1_1"
    },
    {
      name: "Barnes & Noble",
      image: "/lovable-uploads/12aa9831-54d3-476f-b933-2e9e647439bd.png",
      url: "https://www.barnesandnoble.com/w/living-your-love-story-phil-hopper/1146150250?ean=9780768483529"
    },
    {
      name: "Books A Million",
      image: "/lovable-uploads/0ac8953e-56bc-4a44-9cc6-2b34abadeb92.png",
      url: "https://www.booksamillion.com/p/Living-Your-Love-Story/Phil-Hopper/9780768483529?id=9377499569056"
    }
  ];

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
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
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-book-red text-white p-8 max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="font-serif text-3xl text-center mb-8">
            Choose Your Retailer
          </AlertDialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 p-2 hover:bg-white/10 text-white"
            onClick={(e) => {
              const dialog = (e.target as HTMLElement).closest('[data-state="open"]');
              const closeButton = dialog?.querySelector('[data-state="open"] button[type="button"]');
              if (closeButton instanceof HTMLElement) {
                closeButton.click();
              }
            }}
          >
            <X className="h-6 w-6" />
          </Button>
        </AlertDialogHeader>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-4">
          {retailers.map((retailer) => (
            <a
              key={retailer.name}
              href={retailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 flex-shrink-0"
            >
              <img
                src={retailer.image}
                alt={`Buy on ${retailer.name}`}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};