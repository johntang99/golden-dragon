import Image from 'next/image';
import { menuItems, categories, getMenuByCategory } from '@/lib/menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Golden Dragon Restaurant',
  description: 'Explore our authentic Chinese menu featuring dim sum, noodles, chef specials, and more. Fresh ingredients and traditional recipes.',
};

export default function MenuPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="inline-block px-4 py-2 bg-[var(--primary-100)] text-[var(--primary)] rounded-full text-small font-semibold mb-6">
            OUR MENU
          </span>
          <h1 className="text-display mb-6">Authentic Chinese Cuisine</h1>
          <p className="text-subheading text-gray-600">
            Fresh ingredients, traditional recipes, and authentic flavors
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      {categories.map((category) => {
        const items = getMenuByCategory(category.name);
        if (items.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="py-16 px-4 bg-white border-b">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-10">
                <div className="text-display mb-3">{category.icon}</div>
                <h2 className="text-heading mb-2">{category.name}</h2>
                <p className="text-subheading text-[var(--secondary)] font-medium text-chinese">
                  {category.nameLocal}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-xl border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-lg transition-all p-6"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-subheading font-bold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        <p className="text-body text-[var(--secondary)] font-medium text-chinese">
                          {item.nameLocal}
                        </p>
                      </div>
                      <div className="text-heading font-bold text-[var(--primary)] ml-4">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>

                    <div className="flex flex-wrap gap-2 items-center">
                      {item.spicyLevel && (
                        <span className="flex items-center gap-1 text-small">
                          {Array.from({ length: item.spicyLevel }).map((_, i) => (
                            <span key={i}>🌶️</span>
                          ))}
                        </span>
                      )}
                      {item.vegetarian && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-small">
                          🥬 Vegetarian
                        </span>
                      )}
                      {item.chefSpecial && (
                        <span className="px-2 py-1 bg-[var(--secondary-50)] text-[var(--secondary-dark)] rounded text-small font-semibold">
                          ⭐ Chef's Special
                        </span>
                      )}
                      {item.popular && (
                        <span className="px-2 py-1 bg-[var(--primary-50)] text-[var(--primary)] rounded text-small">
                          🔥 Popular
                        </span>
                      )}
                      {item.servingSize && (
                        <span className="text-small text-gray-600 italic">
                          {item.servingSize}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)]">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-heading mb-4">Ready to Order?</h2>
          <p className="text-subheading mb-10 text-white/95">
            Dine-in, takeout, or delivery available
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/order"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg hover:bg-gray-50 font-semibold text-subheading transition-all"
            >
              Order Online
            </a>
            <a
              href="tel:5558888888"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 font-semibold text-subheading transition-all"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
