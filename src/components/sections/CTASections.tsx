import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const CTASections = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstname: "",
    lastname: ""
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const portalId = "45592170";
    const formId = "1b36054b-938b-4d83-9046-95ba2cea2f38";
    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fields: [
            {
              name: 'email',
              value: formData.email
            },
            {
              name: 'firstname',
              value: formData.firstname
            },
            {
              name: 'lastname',
              value: formData.lastname
            }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your free chapter is on its way to your inbox.",
        });
        setFormData({ email: "", firstname: "", lastname: "" });
        // Open the redirect URL in a new window
        window.open("https://hubs.ly/Q034C0R-0", "_blank");
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Retailer Links Section */}
      <section className="py-12 bg-book-red">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 text-center">
            BUY THE BOOK NOW
          </h2>
          <div className="flex flex-nowrap justify-center items-center gap-6 md:gap-8 overflow-x-auto px-4">
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
                  className="h-10 md:h-12 w-auto object-contain"
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
              <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0 space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstname: e.target.value }))}
                    required
                    className="border-book-red focus-visible:ring-book-red"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastname: e.target.value }))}
                    required
                    className="border-book-red focus-visible:ring-book-red"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="border-book-red focus-visible:ring-book-red"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-book-red hover:bg-book-gold text-white font-semibold py-6 rounded-full transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Get Free Chapter"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};