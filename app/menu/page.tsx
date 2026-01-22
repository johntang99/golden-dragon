import Image from 'next/image';
import { menuItems, categories, getMenuByCategory, getChefSpecials } from '@/lib/menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu | Golden Dragon Restaurant',
  description: 'Explore our authentic Chinese menu featuring dim sum, noodles, chef specials, and more. Fresh ingredients and traditional recipes.',
};

// Photo mapping for menu items
const dishPhotos: { [key: string]: string } = {
  // Appetizers
  'spring-rolls': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
  'pot-stickers': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
  'scallion-pancakes': 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80',
  
  // Dim Sum
  'xiao-long-bao': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
  'har-gow': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
  'siu-mai': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80',
  'char-siu-bao': 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
  'turnip-cakes': 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80',
  
  // Soup
  'hot-sour-soup': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80',
  'egg-drop-soup': 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80',
  'wonton-soup': 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
  
  // Noodles
  'dan-dan-noodles': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
  'beef-chow-fun': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80',
  'lo-mein': 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
  'singapore-noodles': 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
  
  // Fried Rice
  'yangzhou-fried-rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
  'chicken-fried-rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
  'vegetable-fried-rice': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
  
  // Chef's Specials
  'peking-duck': 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
  'kung-pao-chicken': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
  'mapo-tofu': 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=600&q=80',
  'sweet-sour-pork': 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
  'general-tso-chicken': 'https://images.unsplash.com/photo-1596040033229-a0b3b1fea2b8?w=600&q=80',
  'mongolian-beef': 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
  'crispy-whole-fish': 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80',
  
  // Vegetarian
  'buddha-delight': 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
  'vegetable-dumplings': 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
  
  // Desserts
  'mango-pudding': 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
  'fried-sesame-balls': 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
  
  // Tea
  'jasmine-tea': 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&q=80',
  'oolong-tea': 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80',
  'pu-erh-tea': 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=600&q=80',
};

export default function MenuPage() {
  const chefSpecials = getChefSpecials();
  const regularCategories = categories.filter(cat => cat.name !== "Chef's Specials");

  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 px-4 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1525755662778-989d0524087e?w=1600&q=80"
          alt="Chinese cuisine"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 to-black/40"></div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center text-white">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white rounded-full text-small font-bold mb-8 shadow-2xl border-2 border-[var(--secondary-light)]">
            OUR MENU
          </span>
          <h1 className="text-display md:text-[5rem] mb-6 font-serif">Authentic Chinese Cuisine</h1>
          <p className="text-subheading text-white/95 mb-4">
            Fresh ingredients, traditional recipes, and authentic flavors
          </p>
          <p className="text-heading text-[var(--secondary)] text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
            正宗中国菜 • 新鲜食材 • 传统配方
          </p>
        </div>

        {/* Decorative curve divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full h-20" preserveAspectRatio="none">
            <path
              d="M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Chef's Specials - Featured Grid Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-black relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            <div className="text-8xl mb-6">⭐</div>
            <div className="inline-block mb-4">
              <span className="text-small text-[var(--secondary)] italic tracking-wide">
                Where Tradition Meets Excellence
              </span>
            </div>
            <h2 className="text-display mb-4 text-white font-serif">Chef's Specials</h2>
            <p className="text-heading text-[var(--secondary)] mb-6 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
              招牌菜
            </p>
            <p className="text-subheading text-white/90">
              Master Chef Chen Wei's signature creations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {chefSpecials.map((dish) => (
              <div
                key={dish.id}
                className="group bg-white rounded-3xl overflow-hidden border-4 border-[var(--secondary)]/40 shadow-2xl hover:shadow-[0_0_50px_rgba(245,158,11,0.4)] transition-all"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={dishPhotos[dish.slug] || 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80'}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white px-4 py-2 rounded-full font-bold shadow-xl">
                    ${dish.price.toFixed(2)}
                  </div>
                  
                  {dish.servingSize && (
                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-small backdrop-blur">
                      {dish.servingSize}
                    </div>
                  )}
                </div>
                
                <div className="p-6 bg-gradient-to-br from-white to-[var(--backdrop-secondary)]">
                  <h3 className="text-subheading font-bold text-gray-900 mb-1">{dish.name}</h3>
                  <p className="text-body text-[var(--secondary)] font-bold mb-3 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                    {dish.nameLocal}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">{dish.description}</p>
                  
                  <div className="flex flex-wrap gap-2 items-center">
                    {dish.spicyLevel && dish.spicyLevel > 0 && (
                      <span className="flex gap-1">
                        {Array.from({ length: dish.spicyLevel }).map((_, i) => (
                          <span key={i}>🌶️</span>
                        ))}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gradient-to-r from-[var(--secondary-50)] to-[var(--primary-50)] text-[var(--primary)] rounded-full text-small font-bold">
                      ⭐ Chef's Special
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Menu - List Layout */}
      {regularCategories.map((category) => {
        const items = getMenuByCategory(category.name);
        if (items.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="py-16 px-4 bg-white border-b border-gray-200">
            <div className="container mx-auto max-w-6xl">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className="text-[4rem] mb-4">{category.icon}</div>
                <h2 className="text-heading mb-2 font-serif">{category.name}</h2>
                <p className="text-subheading text-[var(--secondary)] font-bold text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                  {category.nameLocal}
                </p>
              </div>

              {/* Dishes in List Layout - Photo Left */}
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-gradient-to-r from-[var(--backdrop-primary)] to-white rounded-2xl overflow-hidden border-2 border-[var(--secondary)]/20 hover:border-[var(--primary)] hover:shadow-xl transition-all"
                  >
                    <div className="grid md:grid-cols-[280px_1fr] gap-0">
                      {/* Photo - Left */}
                      <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                        <Image
                          src={dishPhotos[item.slug] || 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80'}
                          alt={item.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="280px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                      </div>

                      {/* Content - Right */}
                      <div className="p-6 flex flex-col justify-center">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="text-subheading font-bold text-gray-900 mb-1 group-hover:text-[var(--primary)] transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-body text-[var(--secondary)] font-semibold text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                              {item.nameLocal}
                            </p>
                          </div>
                          <div className="text-heading font-bold text-[var(--primary)] ml-6">
                            ${item.price.toFixed(2)}
                          </div>
                        </div>

                        <p className="text-gray-700 mb-3 leading-relaxed">{item.description}</p>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 items-center">
                          {item.spicyLevel && item.spicyLevel > 0 && (
                            <span className="flex gap-0.5 items-center px-2 py-1 bg-red-50 rounded">
                              {Array.from({ length: item.spicyLevel }).map((_, i) => (
                                <span key={i} className="text-small">🌶️</span>
                              ))}
                            </span>
                          )}
                          {item.vegetarian && (
                            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-small font-medium">
                              🥬 Vegetarian
                            </span>
                          )}
                          {item.vegan && (
                            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-small font-medium">
                              🌱 Vegan
                            </span>
                          )}
                          {item.popular && (
                            <span className="px-3 py-1 bg-[var(--primary-50)] text-[var(--primary)] rounded-full text-small font-semibold">
                              🔥 Popular
                            </span>
                          )}
                        </div>
                      </div>
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
              className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white px-10 py-5 rounded-full hover:shadow-2xl font-bold text-subheading transition-all border-2 border-[var(--secondary-light)]"
            >
              Order Online
            </a>
            <a
              href="tel:5558888888"
              className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white/10 font-bold text-subheading transition-all"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
