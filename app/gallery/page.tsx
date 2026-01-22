import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Golden Dragon Restaurant',
  description: 'Browse photos of our authentic Chinese dishes, restaurant interior, and dining atmosphere.',
};

export default function GalleryPage() {
  const photos = [
    { src: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80', alt: 'Chinese food spread' },
    { src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80', alt: 'Dim sum' },
    { src: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80', alt: 'Dumplings' },
    { src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80', alt: 'Noodles' },
    { src: 'https://images.unsplash.com/photo-1596040033229-a0b3b1fea2b8?w=800&q=80', alt: 'Stir fry' },
    { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800&q=80', alt: 'Chinese restaurant' },
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
