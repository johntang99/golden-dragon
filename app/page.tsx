'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { siteConfig } from '@/lib/site';
import { menuItems, getChefSpecials, categories } from '@/lib/menu';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dishesVisible, setDishesVisible] = useState(false);
  const dishesRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !dishesVisible) {
            setDishesVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (dishesRef.current) {
      observer.observe(dishesRef.current);
    }

    return () => observer.disconnect();
  }, [dishesVisible]);
  
  // Hero images - rotating Chinese food photos
  const heroImages = [
    { src: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=1600&q=80', alt: 'Chinese feast' },
    { src: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1600&q=80', alt: 'Dim sum selection' },
    { src: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1600&q=80', alt: 'Dumplings' },
    { src: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=1600&q=80', alt: 'Noodle dish' },
    { src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1600&q=80', alt: 'Restaurant interior' },
  ];

  // Auto-rotate hero images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  const featuredCategories = categories.slice(0, 6);

  // Signature dishes with photos
  const signatureDishes = [
    {
      name: 'Xiao Long Bao',
      nameLocal: '小笼包',
      description: 'Soup dumplings with savory broth',
      price: 9.95,
      image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
    },
    {
      name: 'Peking Duck',
      nameLocal: '北京烤鸭',
      description: 'Crispy duck with pancakes and hoisin',
      price: 58.00,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
    },
    {
      name: 'Dan Dan Noodles',
      nameLocal: '担担面',
      description: 'Spicy Sichuan noodles with peanut sauce',
      price: 12.95,
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    },
    {
      name: 'Kung Pao Chicken',
      nameLocal: '宫保鸡丁',
      description: 'Spicy stir-fried chicken with peanuts',
      price: 15.95,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
    },
    {
      name: 'Mapo Tofu',
      nameLocal: '麻婆豆腐',
      description: 'Spicy tofu in chili bean sauce',
      price: 13.95,
      image: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=600&q=80',
    },
    {
      name: 'Char Siu',
      nameLocal: '叉烧',
      description: 'BBQ pork with honey glaze',
      price: 16.95,
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
    },
  ];

  // Gallery images - film strip style
  const galleryImages = [
    'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=800&q=80',
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=800&q=80',
    'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80',
    'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80',
    'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800&q=80',
    'https://images.unsplash.com/photo-1596040033229-a0b3b1fea2b8?w=800&q=80',
  ];

  // Customer reviews
  const reviews = [
    {
      name: 'Sarah Chen',
      rating: 5,
      text: 'Best dim sum in NYC! Authentic flavors that remind me of Hong Kong. The soup dumplings are perfection!',
    },
    {
      name: 'Michael Wong',
      rating: 5,
      text: 'Family has been coming here for 10 years. Consistent quality, generous portions, and friendly service.',
    },
    {
      name: 'Emily Rodriguez',
      rating: 5,
      text: 'The Peking Duck is incredible! Must order 24 hours ahead but totally worth it. Best I\'ve ever had.',
    },
    {
      name: 'David Kim',
      rating: 5,
      text: 'Authentic Chinese cuisine. Chef Chen Wei is a master. Everything is fresh and delicious!',
    },
  ];

  return (
    <main>
      {/* Hero Section - Rotating Photos with Elegant Overlay */}
      <section className="relative h-[90vh] overflow-hidden">
        {/* Image Carousel */}
        {heroImages.map((image, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={idx === 0}
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Elegant overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent"></div>
        
        {/* Decorative pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 0 40 0a20 20 0 1 0 -40 0' stroke='%23DC2626' fill='none'/%3E%3C/svg%3E")`,
        }}></div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <div className="inline-block mb-6 relative">
              <span className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white px-6 py-3 rounded-full text-small font-bold shadow-xl border-2 border-[var(--secondary-light)]">
                🏮 Since 1995 • Authentic Cantonese Cuisine
              </span>
            </div>
            
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-tight mb-6 font-serif">
              <span className="text-white drop-shadow-2xl">Golden </span>
              <span className="text-[var(--secondary)] drop-shadow-2xl">Dragon</span>
            </h1>
            
            {/* Brand Slogan - Primary Placement */}
            <div className="mb-6 relative">
              <div className="absolute -inset-4 bg-[var(--secondary)]/20 blur-xl"></div>
              <p className="relative text-subheading md:text-heading text-[var(--secondary)] font-serif italic tracking-wide drop-shadow-lg">
                "Where Tradition Meets Excellence"
              </p>
              <p className="text-body text-[var(--secondary)]/90 font-medium mt-2 text-chinese tracking-wider" style={{ fontFamily: 'Noto Sans SC' }}>
                传统与卓越的完美结合
              </p>
            </div>
            
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent mb-8 mx-auto lg:mx-0"></div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/menu"
                className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-12 py-5 rounded-lg font-bold text-subheading transition-all shadow-2xl hover:scale-105 text-center border-2 border-[var(--primary-light)]"
              >
                View Full Menu
              </Link>
              <Link
                href="/reservations"
                className="bg-[var(--secondary)] hover:bg-[var(--secondary-dark)] text-white px-12 py-5 rounded-lg font-bold text-subheading transition-all shadow-2xl hover:scale-105 text-center border-2 border-[var(--secondary-light)]"
              >
                Make Reservation
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 flex items-center justify-center transition-all z-20"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur hover:bg-white/30 flex items-center justify-center transition-all z-20"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide ? 'bg-[var(--secondary)] w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Decorative Dish-Shaped Curve Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-24" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dishGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FEF2F2" />
                <stop offset="50%" stopColor="#FFFBEB" />
                <stop offset="100%" stopColor="#FEF2F2" />
              </linearGradient>
            </defs>
            {/* Elegant dish-shaped curve */}
            <path
              d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z"
              fill="url(#dishGradient)"
            />
            {/* Decorative rim */}
            <path
              d="M0,60 Q360,0 720,60 T1440,60"
              stroke="#F59E0B"
              strokeWidth="2"
              fill="none"
              opacity="0.3"
            />
          </svg>
        </div>
      </section>

      {/* Trust Stats with Ornate Style */}
      <section className="py-12 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '30+', label: 'Years Experience', icon: '🏆' },
              { value: '200+', label: 'Authentic Dishes', icon: '🥢' },
              { value: '4.8★', label: 'Customer Rating', icon: '⭐' },
              { value: '10,000+', label: 'Happy Customers', icon: '❤️' },
            ].map((stat, idx) => (
              <div key={idx} className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white/80 backdrop-blur rounded-2xl p-6 border-2 border-[var(--secondary)]/30 shadow-lg">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-heading font-bold text-[var(--primary)] mb-1">{stat.value}</div>
                  <div className="text-small text-gray-700 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories - With Food Photos */}
      <section className="py-24 px-4 bg-white relative">
        {/* Decorative background elements */}
        <div className="absolute top-20 left-10 text-[10rem] opacity-5">🏮</div>
        <div className="absolute bottom-20 right-10 text-[10rem] opacity-5">🐉</div>
        
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/20 via-[var(--secondary)]/20 to-[var(--primary)]/20 blur-xl"></div>
              <span className="relative inline-block px-6 py-3 bg-white rounded-full text-small font-bold text-[var(--primary)] border-2 border-[var(--secondary)]/50 shadow-lg">
                OUR MENU
              </span>
            </div>
            <h2 className="text-display mb-4 font-serif">Explore Our Cuisine</h2>
            <p className="text-subheading text-gray-600">Authentic Chinese dishes prepared fresh daily</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { ...featuredCategories[0], photo: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80' },
              { ...featuredCategories[1], photo: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80' },
              { ...featuredCategories[2], photo: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80' },
              { ...featuredCategories[3], photo: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80' },
              { ...featuredCategories[4], photo: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80' },
              { ...featuredCategories[5], photo: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80' },
            ].map((category) => (
              <Link
                key={category.id}
                href={`/menu#${category.id}`}
                className="group relative"
              >
                {/* Ornate decorative frame */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)] rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                
                {/* Card with food photo */}
                <div className="relative bg-white rounded-2xl overflow-hidden border-4 border-double border-[var(--secondary)]/30 group-hover:border-[var(--primary)]/50 transition-all shadow-lg group-hover:shadow-2xl">
                  {/* Photo */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={category.photo}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                      <h3 className="text-subheading font-bold text-white mb-2 drop-shadow-lg group-hover:text-[var(--secondary)] transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-body text-[var(--secondary)] font-bold mb-3 text-chinese drop-shadow-lg" style={{ fontFamily: 'Noto Sans SC' }}>
                        {category.nameLocal}
                      </p>
                      <ArrowRight className="w-5 h-5 mx-auto text-white group-hover:text-[var(--secondary)] group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white px-10 py-5 rounded-full hover:shadow-2xl font-bold text-subheading transition-all hover:scale-105 border-2 border-[var(--primary-light)]"
            >
              <span>View Complete Menu</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Dishes - Elegant Showcase with Special Frame */}
      <section className="py-24 px-4 bg-gradient-to-br from-[var(--primary)] via-[var(--primary-dark)] to-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--secondary)]/10 rounded-full blur-3xl"></div>
        
        {/* Ornate borders for entire section */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--secondary)] to-transparent"></div>
        
        {/* Corner decorative elements for section */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-[var(--secondary)]/40"></div>
        <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-[var(--secondary)]/40"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-[var(--secondary)]/40"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-[var(--secondary)]/40"></div>
        
        {/* Traditional pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F59E0B' stroke-width='1'%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-16">
            {/* Slogan kicker - subtle repeat */}
            <div className="mb-6">
              <p className="text-small text-[var(--secondary)] italic tracking-wide">
                Where Tradition Meets Excellence
              </p>
            </div>
            
            <div className="inline-block relative mb-6">
              <div className="absolute -inset-6 bg-[var(--secondary)]/20 blur-2xl rounded-full"></div>
              <div className="relative">
                <div className="text-8xl mb-4">⭐</div>
                <div className="flex items-center gap-4 justify-center">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--secondary)]"></div>
                  <span className="text-small font-bold text-[var(--secondary)] tracking-widest uppercase">Chef's Selection</span>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--secondary)]"></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-display mb-4 text-white font-serif">Signature Dishes</h2>
            <p className="text-heading text-[var(--secondary)] mb-3 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
              招牌菜
            </p>
            <p className="text-subheading text-white/90 max-w-3xl mx-auto">
              Master Chef Chen Wei's masterpieces - Traditional recipes perfected over 30 years
            </p>
          </div>

          {/* Signature Dishes Grid - Scroll-Triggered Entrance */}
          <div ref={dishesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {signatureDishes.map((dish, idx) => {
              const animations = [
                'animate-slide-in-left',
                'animate-slide-in-top-right', 
                'animate-slide-in-bottom',
                'animate-slide-in-right',
                'animate-slide-in-bottom-left',
                'animate-slide-in-top',
              ];
              
              return (
                <div
                  key={idx}
                  className={`group ${dishesVisible ? animations[idx] : 'opacity-0'}`}
                >
                  {/* Elegant glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl overflow-hidden border-4 border-[var(--secondary)]/40 shadow-2xl group-hover:shadow-[0_0_50px_rgba(245,158,11,0.3)] transition-all h-full flex flex-col">
                    {/* Dish Photo */}
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Price badge */}
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white px-4 py-2 rounded-full font-bold text-small shadow-xl">
                        ${dish.price.toFixed(2)}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 bg-gradient-to-br from-white to-[var(--backdrop-secondary)] flex-1 flex flex-col">
                      <h3 className="text-subheading font-bold text-gray-900 mb-1">
                        {dish.name}
                      </h3>
                      <p className="text-body text-[var(--secondary)] font-bold mb-3 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                        {dish.nameLocal}
                      </p>
                      <p className="text-gray-700 mb-4 leading-relaxed flex-1">{dish.description}</p>
                      
                      {/* Order indicator */}
                      <div className="flex items-center justify-between pt-4 border-t-2 border-[var(--secondary)]/20">
                        <span className="text-small text-[var(--primary)] font-bold">⭐ Chef's Special</span>
                        <ArrowRight className="w-5 h-5 text-[var(--primary)] group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/menu#specials"
              className="inline-flex items-center gap-3 bg-white text-[var(--primary)] px-10 py-5 rounded-full hover:bg-gray-50 font-bold text-subheading transition-all shadow-2xl hover:scale-105 border-2 border-white/50"
            >
              Explore All Signature Dishes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Full-Width Auto-Scrolling */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="text-center mb-12 px-4">
          <span className="inline-block px-6 py-3 bg-[var(--secondary)] text-white rounded-full text-small font-bold mb-6 shadow-xl">
            GALLERY
          </span>
          <h2 className="text-heading mb-4 text-white font-serif">A Visual Feast</h2>
          <p className="text-subheading text-white/80">Authentic Chinese culinary artistry</p>
        </div>

        {/* Full-width scrolling container */}
        <div 
          className="gallery-scroll-container"
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
        >
          <div className="gallery-scroll-track">
            {/* First set of images - 20 Chinese dishes */}
            {[
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
              'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
              'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
              'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
              'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
              'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
              'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
              'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80',
              'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80',
              'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
              'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80',
              'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
              'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
              'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
              'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
              'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
              'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
              'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80',
              'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80',
            ].map((src, idx) => (
              <div
                key={idx}
                className="gallery-item"
              >
                <div className="relative w-80 aspect-[4/3] rounded-lg overflow-hidden border-4 border-[var(--secondary)]/40 shadow-2xl hover:scale-105 hover:border-[var(--secondary)] transition-all duration-500">
                  <Image
                    src={src}
                    alt={`Chinese dish ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
              'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
              'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
              'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
              'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
              'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
              'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
              'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80',
              'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80',
              'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
              'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80',
              'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&q=80',
              'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=600&q=80',
              'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80',
              'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
              'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80',
              'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
              'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
              'https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80',
              'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&q=80',
            ].map((src, idx) => (
              <div
                key={`dup-${idx}`}
                className="gallery-item"
              >
                <div className="relative w-80 aspect-[4/3] rounded-lg overflow-hidden border-4 border-[var(--secondary)]/40 shadow-2xl hover:scale-105 hover:border-[var(--secondary)] transition-all duration-500">
                  <Image
                    src={src}
                    alt={`Chinese dish ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 px-4">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-[var(--secondary)] hover:text-[var(--secondary-light)] font-semibold text-subheading"
          >
            View Full Gallery <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Customer Reviews - Rail/Carousel */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block relative mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-[var(--primary-50)] to-[var(--secondary-50)] rounded-full text-small font-bold text-[var(--primary)] border-2 border-[var(--secondary)]/30 shadow-lg">
                TESTIMONIALS
              </span>
            </div>
            <h2 className="text-display mb-4 font-serif">What Our Guests Say</h2>
            <p className="text-subheading text-gray-600">Authentic flavors, memorable experiences</p>
          </div>

          {/* Horizontal scrolling reviews */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-96 bg-gradient-to-br from-[var(--backdrop-primary)] to-white rounded-3xl p-8 border-2 border-[var(--secondary)]/30 shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5" fill="var(--secondary)" color="var(--secondary)" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed text-subheading">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t-2 border-[var(--secondary)]/20">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-subheading">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-small text-[var(--primary)]">Verified Customer</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef & Restaurant Environment - Combined Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-[var(--backdrop-primary)] to-[var(--backdrop-secondary)]">
        <div className="container mx-auto max-w-7xl">
          {/* Chef Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--primary)]/20 to-[var(--secondary)]/20 blur-2xl rounded-3xl"></div>
              <div className="relative h-[600px] rounded-3xl overflow-hidden border-4 border-[var(--secondary)]/50 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                  alt="Master Chef Chen Wei"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
            <div>
              <div className="inline-block mb-6">
                <span className="px-6 py-3 bg-white rounded-full text-small font-bold text-[var(--primary)] border-2 border-[var(--secondary)]/50 shadow-lg">
                  MASTER CHEF
                </span>
              </div>
              <h2 className="text-display mb-4 font-serif">Chef Chen Wei</h2>
              <p className="text-heading text-[var(--secondary)] font-bold mb-8 text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                陈伟大厨
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed text-subheading">
                With over 30 years of culinary excellence, Master Chef Chen Wei brings authentic flavors from Beijing to New York. His expertise in traditional Chinese cooking techniques creates dishes that honor generations of family recipes.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Every dish is prepared with meticulous attention to detail, balancing flavors and textures to create an unforgettable dining experience.
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-[var(--primary)] font-semibold">
                  <Award className="w-6 h-6" />
                  <span>30+ Years</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--primary)] font-semibold">
                  <span>🏆</span>
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Environment Preview */}
          <div className="text-center mb-12">
            <span className="inline-block px-6 py-3 bg-white rounded-full text-small font-bold text-[var(--primary)] border-2 border-[var(--secondary)]/50 shadow-lg mb-4">
              OUR RESTAURANT
            </span>
            <h2 className="text-heading mb-4 font-serif">Elegant Atmosphere</h2>
            <p className="text-subheading text-[var(--secondary)] text-chinese mb-4" style={{ fontFamily: 'Noto Sans SC' }}>
              优雅环境
            </p>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              A welcoming space where tradition meets modern comfort
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
                alt: 'Elegant dining room',
                title: 'Elegant Dining',
                titleLocal: '优雅用餐',
              },
              {
                src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80',
                alt: 'Private dining area',
                title: 'Private Rooms',
                titleLocal: '私人包厢',
              },
              {
                src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
                alt: 'Restaurant bar',
                title: 'Full Bar',
                titleLocal: '酒吧服务',
              },
            ].map((photo, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border-4 border-[var(--secondary)]/30 shadow-xl hover:shadow-2xl hover:border-[var(--primary)]/50 transition-all"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
                    <h3 className="text-subheading font-bold mb-1 drop-shadow-lg">
                      {photo.title}
                    </h3>
                    <p className="text-body text-[var(--secondary)] font-medium text-chinese" style={{ fontFamily: 'Noto Sans SC' }}>
                      {photo.titleLocal}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🏮', title: 'Traditional Decor', desc: 'Chinese elegance meets modern comfort' },
              { icon: '👨‍👩‍👧‍👦', title: 'Family Friendly', desc: 'Perfect for gatherings and celebrations' },
              { icon: '🍽️', title: 'Full Service', desc: 'Dine-in, takeout, delivery & catering' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur rounded-xl p-6 border-2 border-[var(--secondary)]/20 text-center hover:border-[var(--primary)] transition-all"
              >
                <div className="text-display mb-3">{item.icon}</div>
                <h4 className="text-body font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-small text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Elegant */}
      <section className="py-24 px-4 bg-gradient-to-br from-black via-[var(--primary-dark)] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50m-30 0a30 30 0 1 0 60 0a30 30 0 1 0 -60 0' stroke='%23F59E0B' fill='none'/%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="text-8xl mb-8">🏮</div>
          <h2 className="text-display text-white mb-6 font-serif">
            Experience Authentic Chinese Dining
          </h2>
          <p className="text-subheading text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Reserve your table today and discover why Golden Dragon has been New York's favorite Chinese restaurant for over 30 years.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/reservations"
              className="bg-gradient-to-r from-[var(--secondary)] to-[var(--secondary-light)] text-white px-12 py-6 rounded-full hover:shadow-2xl font-bold text-subheading transition-all hover:scale-105 border-2 border-[var(--secondary-light)]"
            >
              Make Reservation
            </Link>
            <a
              href={siteConfig.contact.phone.href}
              className="border-2 border-white text-white px-12 py-6 rounded-full hover:bg-white/10 font-bold text-subheading transition-all"
            >
              Call: {siteConfig.contact.phone.display}
            </a>
          </div>
          <p className="text-white/70 mt-10 text-small">
            📍 {siteConfig.contact.address.full}
          </p>
        </div>
      </section>

      {/* CSS for scrollbar hiding and auto-scroll gallery */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .gallery-scroll-container {
          width: 100vw;
          overflow: hidden;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }

        .gallery-scroll-track {
          display: flex;
          gap: 1.5rem;
          animation: scroll 30s linear infinite;
        }

        .gallery-scroll-track:hover {
          animation-play-state: paused;
        }

        .gallery-item {
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Collage entrance animations - flying in from different directions */
        @keyframes slideInLeft {
          0% {
            transform: translateX(-200%) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(200%) rotate(45deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slideInTop {
          0% {
            transform: translateY(-200%) rotate(45deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slideInBottom {
          0% {
            transform: translateY(200%) rotate(-45deg);
            opacity: 0;
          }
          100% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
        }

        @keyframes slideInTopRight {
          0% {
            transform: translate(150%, -150%) rotate(90deg) scale(0.5);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInBottomLeft {
          0% {
            transform: translate(-150%, 150%) rotate(-90deg) scale(0.5);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          100% {
            opacity: 0.1;
            transform: scale(1);
          }
        }

        .animate-slide-in-left {
          animation: slideInLeft 1s ease-out 0.2s both;
        }

        .animate-slide-in-right {
          animation: slideInRight 1s ease-out 0.8s both;
        }

        .animate-slide-in-top {
          animation: slideInTop 1s ease-out 1.2s both;
        }

        .animate-slide-in-bottom {
          animation: slideInBottom 1s ease-out 0.6s both;
        }

        .animate-slide-in-top-right {
          animation: slideInTopRight 1.2s ease-out 0.4s both;
        }

        .animate-slide-in-bottom-left {
          animation: slideInBottomLeft 1.2s ease-out 1s both;
        }

        .animate-fade-in {
          animation: fadeIn 1.5s ease-out 1.4s both;
        }
      `}</style>
    </main>
  );
}
