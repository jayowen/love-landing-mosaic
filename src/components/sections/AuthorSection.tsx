export const AuthorSection = () => {
  return (
    <section id="author" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] [animation-play-state:paused] scroll-animate hover:scale-105 transition-transform duration-500">
            <img
              src="/lovable-uploads/bd9702cd-7742-4f34-814f-7dcb36576b30.png"
              alt="Author Phil Hopper speaking"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h2 className="font-serif text-3xl md:text-4xl mb-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards] [animation-play-state:paused] scroll-animate">About the Author</h2>
            <p className="text-gray-600 mb-4 opacity-0 animate-[fadeIn_1.2s_ease-out_forwards] [animation-play-state:paused] scroll-animate">
              Phil Hopper brings over 25 years of experience as the senior pastor of Abundant Life Church. As a best-selling author, he combines biblical wisdom with practical insights to help people build thriving relationships.
            </p>
            <a 
              href="https://philhopper.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-book-red underline hover:text-book-gold transition-colors duration-300 inline-block opacity-0 animate-[fadeIn_1.4s_ease-out_forwards] [animation-play-state:paused] scroll-animate"
            >
              Visit Phil's Website →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};