export const ForewordSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-book-red opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] scroll-animate">
            With a foreword from
          </h2>
          <div 
            className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards] [animation-play-state:paused] scroll-animate cursor-pointer"
            onClick={() => window.open('https://www.claytonking.com', '_blank')}
          >
            <div className="w-48 h-48 mx-auto mb-6">
              <img
                src="/lovable-uploads/c8608317-da38-4828-94c1-5ccd9ae18c28.png"
                alt="A person sitting on steps"
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2">Dr. Clayton King</h3>
          </div>
          <blockquote className="text-gray-600 text-lg md:text-xl italic leading-relaxed opacity-0 animate-[fadeIn_1.2s_ease-out_forwards] [animation-play-state:paused] scroll-animate">
            "I cannot possibly oversell how helpful and practical this book felt on every page. I was constantly learning new insights and connecting words and meanings that I had totally missed for decades. I know your own relationship with God will be strengthened."
          </blockquote>
        </div>
      </div>
    </section>
  );
};