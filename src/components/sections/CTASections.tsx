import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

/**
 * Combined CTA sections component containing retailer links and free chapter CTAs
 */
export const CTASections = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Chapter request received!",
      description: "Check your email for the free chapter.",
    });
    setEmail("");
  };

  const retailers = [
    {
      name: "Amazon",
      image: "/lovable-uploads/3d778331-9f37-47e4-8434-f481b2438325.png",
      url: "https://www.amazon.com"
    },
    {
      name: "Barnes & Noble",
      image: "/lovable-uploads/12aa9831-54d3-476f-b933-2e9e647439bd.png",
      url: "https://www.barnesandnoble.com"
    },
    {
      name: "Books A Million",
      image: "/lovable-uploads/0ac8953e-56bc-4a44-9cc6-2b34abadeb92.png",
      url: "https://www.booksamillion.com"
    },
    {
      name: "Bookshop",
      image: "/lovable-uploads/360284a8-a8fc-4d65-a9b4-eb363f029c80.png",
      url: "https://bookshop.org"
    },
    {
      name: "IndieBound",
      image: "/lovable-uploads/2e3e8098-8b5b-4db9-9c82-ccfd175dede0.png",
      url: "https://www.indiebound.org"
    }
  ];

  return (
    <>
      {/* Retailer Links Section */}
      <section className="py-16 bg-book-red">
        <div className="container mx-auto px-4">
          <div className="flex flex-nowrap justify-center items-center gap-8 md:gap-12 overflow-x-auto">
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
        </div>
      </section>

      {/* Free Chapter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/3">
              <img
                src="/lovable-uploads/e14845c2-6129-4913-8c1a-b172f196a2cd.png"
                alt="Living Your Love Story Book Cover"
                className="w-full max-w-[300px] mx-auto shadow-xl rounded-lg"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Get A Free Chapter Now
              </h2>
              <p className="text-xl mb-8 max-w-2xl">
                Get a free chapter and discover how this book can transform your relationships.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow text-base"
                />
                <Button 
                  type="submit"
                  className="bg-book-red hover:bg-book-red/90 text-white px-8"
                >
                  Get Chapter
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};