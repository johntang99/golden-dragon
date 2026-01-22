// Menu for Golden Dragon Restaurant
// Complete Chinese menu with dual language support

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  nameLocal: string;          // Chinese name
  category: string;
  description: string;
  price: number;
  image?: string;
  spicyLevel?: number;        // 0-3 (mild to very spicy)
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  chefSpecial?: boolean;
  popular?: boolean;
  servingSize?: string;       // e.g., "Serves 2-3"
}

export const menuItems: MenuItem[] = [
  // ========================================
  // APPETIZERS (开胃菜)
  // ========================================
  {
    id: '1',
    slug: 'spring-rolls',
    name: 'Spring Rolls',
    nameLocal: '春卷',
    category: 'Appetizers',
    description: 'Crispy vegetable spring rolls served with sweet and sour sauce',
    price: 6.95,
    vegetarian: true,
    popular: true,
  },
  {
    id: '2',
    slug: 'pot-stickers',
    name: 'Pork Pot Stickers',
    nameLocal: '锅贴',
    category: 'Appetizers',
    description: 'Pan-fried dumplings filled with pork and vegetables',
    price: 8.95,
    popular: true,
  },
  {
    id: '3',
    slug: 'scallion-pancakes',
    name: 'Scallion Pancakes',
    nameLocal: '葱油饼',
    category: 'Appetizers',
    description: 'Flaky, crispy pancakes with fresh scallions',
    price: 7.95,
    vegetarian: true,
  },

  // ========================================
  // DIM SUM (点心)
  // ========================================
  {
    id: '10',
    slug: 'xiao-long-bao',
    name: 'Soup Dumplings (Xiao Long Bao)',
    nameLocal: '小笼包',
    category: 'Dim Sum',
    description: 'Steamed dumplings filled with pork and flavorful soup',
    price: 9.95,
    chefSpecial: true,
    popular: true,
  },
  {
    id: '11',
    slug: 'har-gow',
    name: 'Shrimp Dumplings (Har Gow)',
    nameLocal: '虾饺',
    category: 'Dim Sum',
    description: 'Translucent steamed dumplings with whole shrimp',
    price: 8.95,
    popular: true,
  },
  {
    id: '12',
    slug: 'siu-mai',
    name: 'Pork Siu Mai',
    nameLocal: '烧卖',
    category: 'Dim Sum',
    description: 'Open-topped steamed dumplings with pork and shrimp',
    price: 8.95,
  },
  {
    id: '13',
    slug: 'char-siu-bao',
    name: 'BBQ Pork Buns',
    nameLocal: '叉烧包',
    category: 'Dim Sum',
    description: 'Fluffy steamed buns filled with sweet BBQ pork',
    price: 7.95,
    popular: true,
  },
  {
    id: '14',
    slug: 'turnip-cakes',
    name: 'Pan-Fried Turnip Cakes',
    nameLocal: '萝卜糕',
    category: 'Dim Sum',
    description: 'Crispy pan-fried radish cakes with XO sauce',
    price: 7.95,
  },

  // ========================================
  // SOUP (汤)
  // ========================================
  {
    id: '20',
    slug: 'hot-sour-soup',
    name: 'Hot & Sour Soup',
    nameLocal: '酸辣汤',
    category: 'Soup',
    description: 'Spicy and tangy soup with tofu, mushrooms, and bamboo shoots',
    price: 5.95,
    spicyLevel: 2,
    vegetarian: true,
  },
  {
    id: '21',
    slug: 'egg-drop-soup',
    name: 'Egg Drop Soup',
    nameLocal: '蛋花汤',
    category: 'Soup',
    description: 'Silky chicken broth with ribbons of egg',
    price: 4.95,
  },
  {
    id: '22',
    slug: 'wonton-soup',
    name: 'Wonton Soup',
    nameLocal: '馄饨汤',
    category: 'Soup',
    description: 'Pork and shrimp wontons in savory broth',
    price: 6.95,
  },

  // ========================================
  // NOODLES (面条)
  // ========================================
  {
    id: '30',
    slug: 'dan-dan-noodles',
    name: 'Dan Dan Noodles',
    nameLocal: '担担面',
    category: 'Noodles',
    description: 'Spicy Sichuan noodles with minced pork and peanut sauce',
    price: 12.95,
    spicyLevel: 3,
    chefSpecial: true,
  },
  {
    id: '31',
    slug: 'beef-chow-fun',
    name: 'Beef Chow Fun',
    nameLocal: '干炒牛河',
    category: 'Noodles',
    description: 'Stir-fried wide rice noodles with tender beef',
    price: 14.95,
    popular: true,
  },
  {
    id: '32',
    slug: 'lo-mein',
    name: 'Chicken Lo Mein',
    nameLocal: '捞面',
    category: 'Noodles',
    description: 'Soft noodles stir-fried with chicken and vegetables',
    price: 11.95,
  },
  {
    id: '33',
    slug: 'singapore-noodles',
    name: 'Singapore Noodles',
    nameLocal: '星洲炒米',
    category: 'Noodles',
    description: 'Curry-flavored rice noodles with shrimp and BBQ pork',
    price: 13.95,
    spicyLevel: 1,
  },

  // ========================================
  // FRIED RICE (炒饭)
  // ========================================
  {
    id: '40',
    slug: 'yangzhou-fried-rice',
    name: 'Yangzhou Fried Rice',
    nameLocal: '扬州炒饭',
    category: 'Fried Rice',
    description: 'Classic fried rice with shrimp, BBQ pork, and vegetables',
    price: 12.95,
    popular: true,
  },
  {
    id: '41',
    slug: 'chicken-fried-rice',
    name: 'Chicken Fried Rice',
    nameLocal: '鸡炒饭',
    category: 'Fried Rice',
    description: 'Wok-fried rice with chicken, egg, and vegetables',
    price: 10.95,
  },
  {
    id: '42',
    slug: 'vegetable-fried-rice',
    name: 'Vegetable Fried Rice',
    nameLocal: '菜炒饭',
    category: 'Fried Rice',
    description: 'Healthy fried rice with mixed vegetables',
    price: 9.95,
    vegetarian: true,
  },

  // ========================================
  // CHEF'S SPECIALS (招牌菜)
  // ========================================
  {
    id: '50',
    slug: 'peking-duck',
    name: 'Peking Duck',
    nameLocal: '北京烤鸭',
    category: "Chef's Specials",
    description: 'Crispy roasted duck served with pancakes, scallions, and hoisin sauce. Order 24 hours in advance.',
    price: 58.00,
    servingSize: 'Whole duck, serves 4-6',
    chefSpecial: true,
    popular: true,
  },
  {
    id: '51',
    slug: 'kung-pao-chicken',
    name: 'Kung Pao Chicken',
    nameLocal: '宫保鸡丁',
    category: "Chef's Specials",
    description: 'Spicy stir-fried chicken with peanuts, vegetables, and chili peppers',
    price: 15.95,
    spicyLevel: 2,
    popular: true,
  },
  {
    id: '52',
    slug: 'mapo-tofu',
    name: 'Mapo Tofu',
    nameLocal: '麻婆豆腐',
    category: "Chef's Specials",
    description: 'Spicy Sichuan tofu in chili bean sauce with minced pork',
    price: 13.95,
    spicyLevel: 3,
    chefSpecial: true,
  },
  {
    id: '53',
    slug: 'sweet-sour-pork',
    name: 'Sweet & Sour Pork',
    nameLocal: '咕噜肉',
    category: "Chef's Specials",
    description: 'Crispy pork in tangy sweet and sour sauce with pineapple',
    price: 14.95,
  },
  {
    id: '54',
    slug: 'general-tso-chicken',
    name: "General Tso's Chicken",
    nameLocal: '左宗棠鸡',
    category: "Chef's Specials",
    description: 'Crispy chicken in sweet and spicy sauce',
    price: 15.95,
    spicyLevel: 2,
    popular: true,
  },
  {
    id: '55',
    slug: 'mongolian-beef',
    name: 'Mongolian Beef',
    nameLocal: '蒙古牛肉',
    category: "Chef's Specials",
    description: 'Tender beef with scallions in savory brown sauce',
    price: 16.95,
  },
  {
    id: '56',
    slug: 'crispy-whole-fish',
    name: 'Crispy Whole Fish',
    nameLocal: '干烧鱼',
    category: "Chef's Specials",
    description: 'Whole fish deep-fried and topped with ginger-scallion sauce',
    price: 28.95,
    chefSpecial: true,
    servingSize: 'Serves 3-4',
  },

  // ========================================
  // VEGETARIAN (素食)
  // ========================================
  {
    id: '60',
    slug: 'buddha-delight',
    name: "Buddha's Delight",
    nameLocal: '罗汉斋',
    category: 'Vegetarian',
    description: 'Mixed vegetables and tofu in light sauce',
    price: 11.95,
    vegetarian: true,
    vegan: true,
  },
  {
    id: '61',
    slug: 'vegetable-dumplings',
    name: 'Vegetable Dumplings',
    nameLocal: '素饺子',
    category: 'Vegetarian',
    description: 'Steamed or pan-fried dumplings with mixed vegetables',
    price: 8.95,
    vegetarian: true,
    vegan: true,
  },

  // ========================================
  // DESSERTS (甜点)
  // ========================================
  {
    id: '70',
    slug: 'mango-pudding',
    name: 'Mango Pudding',
    nameLocal: '芒果布丁',
    category: 'Desserts',
    description: 'Smooth and creamy mango pudding',
    price: 5.95,
  },
  {
    id: '71',
    slug: 'fried-sesame-balls',
    name: 'Fried Sesame Balls',
    nameLocal: '煎堆',
    category: 'Desserts',
    description: 'Crispy sesame balls filled with sweet red bean paste',
    price: 6.95,
  },

  // ========================================
  // TEA SELECTION (茶)
  // ========================================
  {
    id: '80',
    slug: 'jasmine-tea',
    name: 'Jasmine Green Tea',
    nameLocal: '茉莉花茶',
    category: 'Tea',
    description: 'Fragrant green tea with jasmine flowers',
    price: 3.00,
  },
  {
    id: '81',
    slug: 'oolong-tea',
    name: 'Oolong Tea',
    nameLocal: '乌龙茶',
    category: 'Tea',
    description: 'Traditional semi-oxidized Chinese tea',
    price: 3.50,
  },
  {
    id: '82',
    slug: 'pu-erh-tea',
    name: 'Pu-erh Tea',
    nameLocal: '普洱茶',
    category: 'Tea',
    description: 'Aged fermented tea with earthy flavor',
    price: 4.00,
  },
];

// Helper functions
export const getMenuByCategory = (category: string) => {
  return menuItems.filter(item => item.category === category);
};

export const getAllCategories = () => {
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  return categories;
};

export const getChefSpecials = () => {
  return menuItems.filter(item => item.chefSpecial);
};

export const getPopularItems = () => {
  return menuItems.filter(item => item.popular);
};

export const getVegetarianItems = () => {
  return menuItems.filter(item => item.vegetarian);
};

// Category information with Chinese names
export const categories = [
  { id: 'appetizers', name: 'Appetizers', nameLocal: '开胃菜', icon: '🥟' },
  { id: 'dim-sum', name: 'Dim Sum', nameLocal: '点心', icon: '🥢' },
  { id: 'soup', name: 'Soup', nameLocal: '汤', icon: '🍜' },
  { id: 'noodles', name: 'Noodles', nameLocal: '面条', icon: '🍝' },
  { id: 'fried-rice', name: 'Fried Rice', nameLocal: '炒饭', icon: '🍚' },
  { id: 'chef-specials', name: "Chef's Specials", nameLocal: '招牌菜', icon: '⭐' },
  { id: 'vegetarian', name: 'Vegetarian', nameLocal: '素食', icon: '🥬' },
  { id: 'desserts', name: 'Desserts', nameLocal: '甜点', icon: '🍮' },
  { id: 'tea', name: 'Tea Selection', nameLocal: '茶', icon: '🍵' },
];

export default menuItems;
