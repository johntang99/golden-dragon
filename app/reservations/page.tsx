import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations | Golden Dragon Restaurant',
  description: 'Reserve your table at Golden Dragon. Book online or call us for authentic Chinese dining.',
};

export default function ReservationsPage() {
  return (
    <main>
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Make a Reservation</h1>
          <p className="text-subheading text-gray-600">
            Reserve your table for an authentic Chinese dining experience
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-2xl p-8 md:p-12 border-2 border-gray-200 text-center">
            <div className="text-8xl mb-6">🥢</div>
            <h2 className="text-heading mb-4">Call to Reserve</h2>
            <p className="text-gray-700 mb-8">
              Please call us to make a reservation. We'll be happy to accommodate your party.
            </p>
            <a
              href="tel:5558888888"
              className="inline-block bg-[var(--primary)] text-white px-10 py-5 rounded-lg hover:bg-[var(--primary-dark)] font-bold text-subheading transition-all shadow-lg"
            >
              (555) 888-8888
            </a>
            <p className="text-gray-600 mt-6 text-small">
              Open Daily: 11:00 AM - 10:00 PM (Fri-Sat until 11:00 PM)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
