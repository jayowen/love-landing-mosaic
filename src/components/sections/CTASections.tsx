import { useEffect } from "react";

export const CTASections = () => {
  useEffect(() => {
    // Load HubSpot form
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        region: "na1",
        portalId: "45592170",
        formId: "1b36054b-938b-4d83-9046-95ba2cea2f38",
        target: "#hubspot-cta-form"
      });
    }
  }, []);

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
      <section className="py-12 bg-book-red">
        <div className="container mx-auto px-4">
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
              <div id="hubspot-cta-form" className="max-w-md mx-auto md:mx-0">
                {/* HubSpot form will be loaded here */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};