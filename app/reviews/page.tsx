import { Star } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Golden Dragon Restaurant',
  description: 'See what our customers say about our authentic Chinese cuisine and dining experience.',
};

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: 'Dec 2024',
    text: 'Best dim sum in New York! The soup dumplings are absolutely amazing. Authentic flavors and great service.',
  },
  {
    name: 'Michael Chen',
    rating: 5,
    date: 'Dec 2024',
    text: 'Reminds me of home! Chef Chen\'s Peking Duck is perfection. This is real Chinese cooking, not Americanized.',
  },
  {
    name: 'Emily Rodriguez',
    rating: 5,
    date: 'Nov 2024',
    text: 'Family favorite for over 10 years. Consistently delicious food and welcoming atmosphere. Highly recommend!',
  },
];

export default function ReviewsPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Customer Reviews</h1>
          <p className="text-subheading text-gray-600">
            Hear what our guests have to say
          </p>
          <div className="mt-6">
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-5 h-5" fill="var(--secondary)" color="var(--secondary)" />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.8 / 5.0</span>
              <span className="text-gray-600">• 500+ reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-white rounded-2xl p-8 border-2 border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 text-subheading leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex justify-between items-center border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{review.name}</p>
                  <p className="text-small text-gray-600">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
