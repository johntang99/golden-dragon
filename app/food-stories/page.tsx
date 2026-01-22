'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { foodStories, categories, getStoriesByCategory } from '@/lib/foodStories';
import { Clock, User, BookOpen, Play } from 'lucide-react';

export default function FoodStoriesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Featured story (first one)
  const featuredStory = foodStories[0];
  
  // Rest of stories (excluding featured)
  const allStories = getStoriesByCategory(activeCategory);
  const filteredStories = activeCategory === 'All' 
    ? allStories.slice(1) 
    : allStories.filter(s => s.id !== featuredStory.id);

  return (
    <main>
      {/* Featured Article Hero */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] rounded-3xl overflow-hidden border-4 border-[var(--secondary)]/30 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Featured Image */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
                <Image
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Featured badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-6 py-3 bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white rounded-full text-small font-bold shadow-xl flex items-center gap-2">
                    ⭐ FEATURED STORY
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="px-4 py-2 bg-white rounded-full text-small font-bold text-[var(--primary)] border-2 border-[var(--secondary)]/50">
                    {featuredStory.category}
                  </span>
                </div>
                
                <h1 className="text-heading md:text-display mb-4 font-serif leading-tight">
                  {featuredStory.title}
                </h1>
                <p className="text-subheading text-[var(--secondary)] font-bold mb-6 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                  {featuredStory.titleChinese}
                </p>
                
                <p className="text-body text-gray-700 mb-6 leading-relaxed">
                  {featuredStory.excerpt}
                </p>

                <div className="flex items-center gap-4 text-small text-gray-600 mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredStory.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredStory.readTime}
                  </span>
                </div>

                <div>
                  <span className="inline-flex items-center gap-2 bg-[var(--primary)] text-white px-8 py-4 rounded-lg hover:bg-[var(--primary-dark)] font-semibold transition-all shadow-lg cursor-pointer">
                    Read Full Story →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-heading mb-4 font-serif">All Food Stories</h2>
          <p className="text-body text-gray-600">
            Explore the rich history, culture, and secrets behind authentic Chinese cuisine
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-small whitespace-nowrap transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <article
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[var(--primary)] hover:shadow-xl transition-all group"
              >
                {/* Image/Video Thumbnail */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 brightness-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Video Play Button Overlay */}
                  {story.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] flex items-center justify-center shadow-2xl transition-all group-hover:scale-110">
                        <Play className="w-10 h-10 text-white ml-1" fill="white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Type badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-small font-bold shadow-xl ${
                      story.type === 'video'
                        ? 'bg-[var(--primary)] text-white'
                        : 'bg-[var(--secondary)] text-white'
                    }`}>
                      {story.type === 'video' ? (
                        <span className="flex items-center gap-1">
                          <Play className="w-3 h-3" fill="white" />
                          VIDEO
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          ARTICLE
                        </span>
                      )}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur text-gray-900 rounded-full text-small font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-subheading font-bold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                    {story.title}
                  </h2>
                  <p className="text-body text-[var(--secondary)] font-semibold mb-3 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                    {story.titleChinese}
                  </p>
                  <p className="text-gray-700 mb-4 line-clamp-3 leading-relaxed">
                    {story.excerpt}
                  </p>

                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-small text-gray-600 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {story.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gradient-to-r from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)] text-gray-700 rounded text-small"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read more link */}
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-[var(--primary)] hover:text-[var(--primary-dark)] font-semibold text-small inline-flex items-center gap-1 cursor-pointer">
                      {story.type === 'video' ? 'Watch Now' : 'Read Article'} →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-subheading">No stories in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* CSS */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}
