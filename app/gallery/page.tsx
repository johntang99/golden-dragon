import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Golden Dragon Restaurant',
  description: 'Browse photos of our authentic Chinese dishes, restaurant interior, and dining atmosphere.',
};

export default function GalleryPage() {
  // All 20 gallery photos from homepage
  const photos = [
    { src: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80', alt: 'Dumplings in bamboo steamer' },
    { src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', alt: 'Dim sum selection' },
    { src: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80', alt: 'Spring rolls' },
    { src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80', alt: 'Noodles' },
    { src: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80', alt: 'Chinese feast' },
    { src: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800&q=80', alt: 'Fried rice' },
    { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80', alt: 'Restaurant interior' },
    { src: 'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=800&q=80', alt: 'Chinese dishes' },
    { src: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=800&q=80', alt: 'Soup' },
    { src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80', alt: 'Stir fry vegetables' },
    { src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80', alt: 'Chinese cuisine' },
    { src: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=800&q=80', alt: 'Asian food' },
    { src: 'https://images.unsplash.com/photo-1596040033229-a0b3b1fea2b8?w=800&q=80', alt: 'Stir fry dish' },
    { src: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=800&q=80', alt: 'Mapo tofu' },
    { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80', alt: 'Vegetable dish' },
    { src: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&q=80', alt: 'Chinese appetizer' },
    { src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80', alt: 'Pot stickers' },
    { src: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80', alt: 'Egg drop soup' },
    { src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', alt: 'Dessert' },
    { src: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=800&q=80', alt: 'Chinese tea' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-display mb-6">Photo Gallery</h1>
          <p className="text-subheading text-gray-600">
            A visual feast of our authentic Chinese cuisine
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="aspect-square relative rounded-xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
