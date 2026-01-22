import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catering | Golden Dragon Restaurant',
  description: 'Authentic Chinese catering for your events, parties, and celebrations. Custom menus available.',
};

export default function CateringPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Catering Services</h1>
          <p className="text-subheading text-gray-600">
            Authentic Chinese cuisine for your special events
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-heading mb-8">We Cater All Types of Events</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {['Corporate Events', 'Weddings', 'Family Gatherings', 'Birthday Parties', 'Holiday Celebrations', 'Office Lunches'].map((event) => (
              <div
                key={event}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-6 border-2 border-gray-200"
              >
                <p className="font-bold text-gray-900">{event}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
            Contact us to discuss custom menus for your event. We offer flexible packages to suit any occasion and budget.
          </p>
          <a
            href="tel:5558888888"
            className="inline-block bg-[var(--primary)] text-white px-10 py-5 rounded-lg hover:bg-[var(--primary-dark)] font-bold text-subheading transition-all"
          >
            Call for Catering Inquiry
          </a>
        </div>
      </section>
    </main>
  );
}
