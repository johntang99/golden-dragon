import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Award, Users, Heart, Star, ChefHat } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Golden Dragon Restaurant',
  description: 'Learn about our 30-year history of serving authentic Chinese cuisine with family recipes and traditional cooking methods.',
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero with Motto */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80"
          alt="Chinese restaurant"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center text-white">
          <div className="text-8xl mb-8">🐉</div>
          <h1 className="text-display md:text-[5rem] mb-8 font-serif">Golden Dragon</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-heading mb-6 text-[var(--secondary)] leading-relaxed">
              "Where Tradition Meets Excellence"
            </p>
            <p className="text-subheading text-white/95 leading-relaxed mb-4">
              Experience authentic Chinese flavors crafted with passion, served with pride.
            </p>
            <p className="text-subheading text-[var(--secondary)] font-bold text-chinese mb-6" style={{ fontFamily: 'Noto Sans SC' }}>
              传统与卓越的完美结合
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-white rounded-full text-small font-bold text-[var(--primary)] border-2 border-[var(--secondary)]/50 shadow-lg mb-6">
              OUR STORY
            </span>
            <h2 className="text-display mb-6 font-serif">Three Generations of Excellence</h2>
            <p className="text-heading text-[var(--secondary)] mb-6 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
              三代传承 精益求精
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-3xl p-12 border-4 border-double border-[var(--secondary)]/30 shadow-2xl">
              <p className="text-subheading text-gray-700 leading-relaxed mb-6">
                The golden wave and jade liquid are full of fragrance. Gather classics with a long history.
              </p>
              <p className="text-body text-gray-700 leading-relaxed mb-6">
                Golden Dragon Restaurant inherits a century of Chinese culinary classics. For over 30 years, we have been bringing authentic flavors from Beijing to New York, creating an unforgettable dining experience that delights all senses.
              </p>
              <p className="text-body text-gray-700 leading-relaxed mb-6">
                Our cuisine emphasizes "fresh, tender, smooth, and fragrant" - pursuing the natural flavor of ingredients. From dim sum to entrees, every dish is prepared with meticulous care and traditional techniques passed down through generations.
              </p>
              <p className="text-subheading text-[var(--primary)] font-bold text-center mt-8">
                Golden Dragon - The pride of authentic Chinese cuisine! 🏆
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Chen Wei */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 blur-2xl rounded-3xl"></div>
              <div className="relative h-[600px] rounded-3xl overflow-hidden border-4 border-[var(--secondary)]/50 shadow-2xl">
                <Image
                  src="/chinese-chef-fine-dining.png"
                  alt="Master Chef Chen Wei"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Chef badge */}
                <div className="absolute top-6 left-6 bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white px-4 py-2 rounded-full font-bold text-small shadow-xl">
                  Master Chef
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-gradient-to-r from-[var(--primary-50)] to-[var(--secondary-50)] rounded-full text-small font-bold text-[var(--primary)] border-2 border-[var(--secondary)]/50 shadow-lg flex items-center gap-2">
                  <ChefHat className="w-4 h-4" />
                  MASTER CHEF
                </span>
              </div>
              <h2 className="text-display mb-4 font-serif">Chef Chen Wei</h2>
              <p className="text-heading text-[var(--secondary)] font-bold mb-8 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                陈伟大厨
              </p>
              
              <div className="space-y-4 mb-8">
                <p className="text-body text-gray-700 leading-relaxed">
                  With over 30 years of culinary excellence, Master Chef Chen Wei is a virtuoso in traditional Chinese cooking. Trained in Beijing's prestigious culinary institutes, he has mastered both Sichuan and Cantonese cuisines.
                </p>
                <p className="text-body text-gray-700 leading-relaxed">
                  Chef Chen's philosophy is simple yet profound: respect the ingredients, honor the traditions, and bring joy to every diner. His signature dishes have earned acclaim from food critics and loyal customers alike.
                </p>
                <p className="text-body text-gray-700 leading-relaxed">
                  Every dish that leaves his kitchen is a testament to his dedication to authentic flavors and culinary artistry. From delicate dim sum to bold Sichuan specialties, Chef Chen's creations transport diners to the heart of China.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: <Award className="w-6 h-6" />, label: '30+ Years', value: 'Experience' },
                  { icon: <ChefHat className="w-6 h-6" />, label: 'Beijing', value: 'Trained' },
                  { icon: <Star className="w-6 h-6" />, label: 'Award', value: 'Winning' },
                  { icon: <Heart className="w-6 h-6" />, label: 'Family', value: 'Recipes' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-xl p-4 border-2 border-[var(--secondary)]/30 text-center">
                    <div className="flex justify-center text-[var(--primary)] mb-2">
                      {item.icon}
                    </div>
                    <div className="text-small font-bold text-gray-900">{item.label}</div>
                    <div className="text-small text-[var(--secondary)]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dim Sum Section - With Photos */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="text-8xl mb-6">🥟</div>
            <h2 className="text-display mb-4 font-serif">The Art of Dim Sum</h2>
            <p className="text-heading text-[var(--secondary)] mb-6 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
              点心艺术
            </p>
            <p className="text-subheading text-gray-600 max-w-3xl mx-auto">
              Handcrafted with precision, steamed to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Handmade Daily',
                titleLocal: '每日手工制作',
                description: 'Our skilled chefs handcraft each dim sum piece with precision and care, using time-honored techniques.',
                image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
              },
              {
                title: 'Fresh & Hot',
                titleLocal: '新鲜热腾',
                description: 'We prepare each order fresh, ensuring you receive the highest quality and most flavorful dim sum.',
                image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
              },
              {
                title: 'Traditional Recipes',
                titleLocal: '传统配方',
                description: 'Authentic recipes perfected over generations, bringing you the true taste of Cantonese dim sum.',
                image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border-4 border-[var(--secondary)]/30 shadow-xl hover:shadow-2xl transition-all group"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-subheading font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-body text-[var(--secondary)] font-bold mb-4 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                    {item.titleLocal}
                  </p>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[var(--primary)]/10 via-[var(--secondary)]/10 to-[var(--primary)]/10 rounded-2xl p-8 border-2 border-[var(--secondary)]/30">
            <p className="text-center text-subheading text-gray-800 leading-relaxed italic">
              "At Golden Dragon, our bamboo steamers emerge from the kitchen filled with delectable dumplings and an array of mouthwatering Cantonese dishes. Join us to savor the most authentic Chinese cuisine in New York."
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Ambiance - Photos */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-3 bg-[var(--secondary-50)] text-[var(--secondary)] rounded-full text-small font-bold mb-6 shadow-lg">
              OUR RESTAURANT
            </span>
            <h2 className="text-display mb-4 font-serif">Elegant Atmosphere</h2>
            <p className="text-heading text-[var(--secondary)] mb-6 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
              优雅环境
            </p>
            <p className="text-subheading text-gray-600">
              A welcoming space where tradition meets modern comfort
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
                alt: 'Restaurant interior',
                title: 'Elegant Dining Room',
              },
              {
                src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
                alt: 'Restaurant seating',
                title: 'Private Dining',
              },
              {
                src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
                alt: 'Restaurant atmosphere',
                title: 'Comfortable Ambiance',
              },
              {
                src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
                alt: 'Restaurant bar',
                title: 'Full Bar',
              },
            ].map((photo, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden border-4 border-[var(--secondary)]/30 shadow-xl hover:shadow-2xl transition-all group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-subheading font-bold text-white">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏮',
                title: 'Traditional Atmosphere',
                description: 'Elegant decor with traditional Chinese elements creates a warm and inviting environment.',
              },
              {
                icon: '👨‍👩‍👧‍👦',
                title: 'Family Friendly',
                description: 'Perfect for family dinners, celebrations, and gathering with loved ones.',
              },
              {
                icon: '🍽️',
                title: 'Full Service',
                description: 'Dine-in, takeout, delivery, and private dining available for your convenience.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-2xl p-8 border-2 border-[var(--secondary)]/30 text-center hover:border-[var(--primary)] transition-all"
              >
                <div className="text-display mb-4">{item.icon}</div>
                <h3 className="text-subheading font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values/Why Choose Us */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4 font-serif">Why Golden Dragon</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🥢', title: 'Authentic Recipes', desc: 'Traditional family recipes' },
              { icon: '🌿', title: 'Fresh Ingredients', desc: 'Sourced daily' },
              { icon: '👨‍🍳', title: 'Expert Chefs', desc: '30+ years experience' },
              { icon: '❤️', title: 'Made with Love', desc: 'Every dish, every time' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-[var(--secondary)]/30 hover:border-[var(--primary)] hover:shadow-xl transition-all text-center"
              >
                <div className="text-display mb-3">{item.icon}</div>
                <h4 className="text-body font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-small text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-5xl text-center text-white">
          <h2 className="text-heading mb-6">Visit Us Today</h2>
          <p className="text-subheading mb-10 text-white/95">
            Experience authentic Chinese cuisine in a welcoming atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/reservations"
              className="bg-white text-[var(--primary)] px-10 py-5 rounded-lg hover:bg-gray-50 font-bold text-subheading transition-all shadow-xl"
            >
              Make Reservation
            </Link>
            <Link
              href="/menu"
              className="border-2 border-white text-white px-10 py-5 rounded-lg hover:bg-white/10 font-bold text-subheading transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
