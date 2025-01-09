import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Pastor David Kim",
    role: "Lead Pastor",
    image: "/lovable-uploads/3dd9417c-0c99-4e5b-ab65-475c66cc8cf4.png",
    quote: "This book transformed how I view relationships in the church community. A must-read for every Christian leader.",
  },
  {
    name: "Pastor Phil Thompson",
    role: "Senior Pastor",
    image: "/lovable-uploads/df3ce96a-cc7b-4de1-b3ce-09afaed08c3e.png",
    quote: "A powerful resource that bridges biblical wisdom with practical relationship advice. Truly transformative.",
  },
  {
    name: "Sarah Anderson",
    role: "Marriage Counselor",
    image: "/lovable-uploads/29bc5aa2-e2ad-483c-8dac-2466effb654b.png",
    quote: "I've recommended this book to countless couples. The principles inside are both timeless and practical.",
  },
  {
    name: "Dr. Marcus Johnson",
    role: "Family Therapist",
    image: "/lovable-uploads/2794af1c-ca66-42fe-bf18-1f7cfab476c7.png",
    quote: "An essential guide for anyone seeking to build stronger, more meaningful relationships based on biblical principles.",
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
              className="scroll-animate hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
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