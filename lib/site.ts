// Site-wide configuration for Golden Dragon Restaurant
// Chinese restaurant - Red & Gold theme

export const siteConfig = {
  // Brand Identity
  brand: {
    name: 'Golden Dragon',
    tagline: 'Authentic Chinese Cuisine',
    description: 'Experience authentic Chinese flavors with fresh ingredients and traditional recipes passed down through generations.',
  },

  // Contact Information
  contact: {
    phone: {
      display: '(555) 888-8888',
      raw: '+15558888888',
      href: 'tel:+15558888888',
    },
    email: {
      display: 'info@goldendragon.com',
      href: 'mailto:info@goldendragon.com',
    },
    address: {
      street: '88 Dragon Street',
      city: 'New York',
      state: 'NY',
      zip: '10002',
      country: 'United States',
      full: '88 Dragon Street, New York, NY 10002',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2690709187183!2d-73.99188!3d40.71455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
    },
    hours: {
      monday: { open: '11:00 AM', close: '10:00 PM' },
      tuesday: { open: '11:00 AM', close: '10:00 PM' },
      wednesday: { open: '11:00 AM', close: '10:00 PM' },
      thursday: { open: '11:00 AM', close: '10:00 PM' },
      friday: { open: '11:00 AM', close: '11:00 PM' },
      saturday: { open: '11:00 AM', close: '11:00 PM' },
      sunday: { open: '11:00 AM', close: '10:00 PM' },
    },
    hoursFormatted: [
      { days: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
      { days: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
      { days: 'Sunday', hours: '11:00 AM - 10:00 PM' },
    ],
  },

  // Schema.org / SEO Data
  schema: {
    businessType: 'Restaurant',
    url: 'https://goldendragon.com',
    servesCuisine: 'Chinese',
    priceRange: '$$',
  },

  // SEO Defaults
  seo: {
    defaultTitle: 'Golden Dragon | Authentic Chinese Restaurant | New York',
    titleTemplate: '%s | Golden Dragon',
    defaultDescription:
      'Experience authentic Chinese cuisine in the heart of New York. Fresh ingredients, traditional recipes, and warm hospitality. Dine-in, takeout, and catering available.',
    keywords: [
      'chinese restaurant NYC',
      'authentic chinese food',
      'dim sum',
      'chinese takeout',
      'peking duck',
      'szechuan cuisine',
      'chinese delivery',
      'family chinese restaurant',
    ],
  },

  // Navigation Structure
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Menu', href: '/menu' },
      { name: 'Specials', href: '/menu#weekly-specials' },
      { name: 'About', href: '/about' },
      { name: 'Food Stories', href: '/food-stories' },
      { name: 'Gallery', href: '/gallery' },
      { name: 'Catering', href: '/catering' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Contact', href: '/contact' },
    ],
    footer: {
      menu: [
        { name: 'Dim Sum', href: '/menu#dim-sum' },
        { name: 'Noodles', href: '/menu#noodles' },
        { name: 'Chef\'s Specials', href: '/menu#specials' },
        { name: 'Tea Selection', href: '/menu#tea' },
      ],
      quickLinks: [
        { name: 'Order Online', href: '/order' },
        { name: 'Reservations', href: '/reservations' },
        { name: 'Catering', href: '/catering' },
        { name: 'Gift Cards', href: '/gift-cards' },
      ],
    },
  },

  // Call-to-Action Buttons
  cta: {
    primary: {
      text: 'Order Online',
      href: '/order',
    },
    secondary: {
      text: 'Reservations',
      href: '/reservations',
    },
  },

  // Restaurant Settings
  settings: {
    acceptReservations: true,
    deliveryAvailable: true,
    takeoutAvailable: true,
    cateringAvailable: true,
    cuisineType: 'Chinese',
    specialties: [
      'Authentic Dim Sum',
      'Peking Duck',
      'Hand-Pulled Noodles',
      'Sichuan Specialties',
      'Cantonese Classics',
      'Family Recipes',
    ],
    amenities: [
      'Dine-in',
      'Takeout',
      'Delivery',
      'Catering',
      'Private Dining Room',
      'Free WiFi',
      'Full Bar',
      'Vegetarian Options',
    ],
  },

  // Social Media
  social: {
    yelp: 'https://yelp.com/golden-dragon',
    instagram: 'https://instagram.com/goldendragonnyc',
    facebook: 'https://facebook.com/goldendragonnyc',
  },
};

export const brand = siteConfig.brand;
export const contact = siteConfig.contact;
export const navigation = siteConfig.navigation;
export const seo = siteConfig.seo;
export const cta = siteConfig.cta;
export const settings = siteConfig.settings;
export const schema = siteConfig.schema;

export default siteConfig;
