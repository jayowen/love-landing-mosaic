export const QuoteSection = () => {
  return (
    <section className="py-16 md:py-24 bg-book-red/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <blockquote className="relative">
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-book-red text-center leading-relaxed mb-4">
                "Satan, sin, and society have all hijacked the discussion around the subject of sex because it is sacred to God."
              </p>
              <footer className="text-center">
                <cite className="text-xl md:text-2xl font-serif text-book-red/80 not-italic">
                  — Phil Hopper
                </cite>
              </footer>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};