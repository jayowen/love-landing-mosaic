import { PreOrderButton } from "@/components/PreOrderButton";
import { RequestChapterForm } from "@/components/RequestChapterForm";

/**
 * Combined CTA sections component containing both pre-order and free chapter CTAs
 */
export const CTASections = () => {
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
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Not Ready to Commit?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free chapter and discover how this book can transform your relationships.
          </p>
          <RequestChapterForm />
        </div>
      </section>
    </>
  );
};