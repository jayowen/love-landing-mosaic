import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ryan Kwon",
    role: "Pastor",
    image: "/lovable-uploads/3dd9417c-0c99-4e5b-ab65-475c66cc8cf4.png",
    quote: "Living Your Love Story meets you where you are and leads you to the redemptive hope we all need for our own love stories.",
  },
  {
    name: "Pastor Joby Martin",
    role: "Pastor",
    image: "/lovable-uploads/df3ce96a-cc7b-4de1-b3ce-09afaed08c3e.png",
    quote: "This book will help you navigate the complexities of relationships, sex, and marriage if you will lean in.",
    link: "https://jobymartin.com"
  },
  {
    name: "Heidi St. John",
    role: "Author",
    image: "/lovable-uploads/29bc5aa2-e2ad-483c-8dac-2466effb654b.png",
    quote: "This book will encourage you as you navigate a sexually confused culture through the eyes of a disciple of Jesus.",
  },
  {
    name: "Léonce B. Crump Jr.",
    role: "Pastor",
    image: "/lovable-uploads/2794af1c-ca66-42fe-bf18-1f7cfab476c7.png",
    quote: "Phil offers us a welcome addition to the volumes written on Song of Solomon, which will greatly help the Church.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-12 scroll-animate animate-[fadeIn_0.8s_ease-out]">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="scroll-animate hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
              onClick={() => testimonial.link && window.open(testimonial.link, '_blank')}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24 border-4 border-white shadow-lg">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  </Avatar>
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h3 className="font-serif text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};