import { PreOrderButton } from "@/components/PreOrderButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

/**
 * Combined CTA sections component containing both pre-order and free chapter CTAs
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

  return (
    <>
      {/* Pre-order CTA */}
      <section className="bg-book-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your approach to relationships with timeless wisdom and practical guidance.
          </p>
          <PreOrderButton />
        </div>
      </section>

      {/* Free Chapter CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
            <div className="w-full md:w-1/3">
              <img
                src="/lovable-uploads/83303342-0894-4c7d-ad7e-5028632482e2.png"
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