// Weekly Specials for Golden Dragon

export interface DailySpecial {
  day: string;
  dayShort: string;
  dayNumber: number; // 0=Sunday, 1=Monday, etc.
  name: string;
  nameLocal: string;
  description: string;
  price: number;
  image: string;
  includes: string[];
  badges?: string[];
}

export const weeklySpecials: DailySpecial[] = [
  {
    day: 'Monday',
    dayShort: 'MON',
    dayNumber: 1,
    name: 'Braised Beef Noodles',
    nameLocal: '红烧牛肉面',
    description: 'Slow-braised beef with hand-pulled noodles and rich broth.',
    price: 15.95,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80',
    includes: ['Hand-pulled noodles', 'Braised beef', 'Seasonal greens'],
    badges: ['Chef\'s Pick'],
  },
  {
    day: 'Tuesday',
    dayShort: 'TUE',
    dayNumber: 2,
    name: 'Cantonese Roast Duck',
    nameLocal: '广式烧鸭',
    description: 'Crispy-skinned roast duck with jasmine rice.',
    price: 18.95,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
    includes: ['Roast duck', 'Jasmine rice', 'House sauce'],
  },
  {
    day: 'Wednesday',
    dayShort: 'WED',
    dayNumber: 3,
    name: 'Mapo Tofu',
    nameLocal: '麻婆豆腐',
    description: 'Silky tofu with Sichuan chili and minced pork.',
    price: 14.95,
    image: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?w=600&q=80',
    includes: ['Sichuan chili', 'Minced pork', 'Steamed rice'],
  },
  {
    day: 'Thursday',
    dayShort: 'THU',
    dayNumber: 4,
    name: 'Peking Duck Feast',
    nameLocal: '北京烤鸭',
    description: 'Crispy duck with pancakes, scallions, and hoisin.',
    price: 58.00,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80',
    includes: ['Crispy duck', 'Mandarin pancakes', 'Hoisin sauce'],
    badges: ['Limited'],
  },
  {
    day: 'Friday',
    dayShort: 'FRI',
    dayNumber: 5,
    name: 'Kung Pao Chicken',
    nameLocal: '宫保鸡丁',
    description: 'Wok-tossed chicken with peanuts and chili.',
    price: 16.95,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80',
    includes: ['Roasted peanuts', 'Chili peppers', 'Steamed rice'],
    badges: ['Spicy'],
  },
  {
    day: 'Saturday',
    dayShort: 'SAT',
    dayNumber: 6,
    name: 'Dim Sum Platter',
    nameLocal: '点心拼盘',
    description: 'Chef’s selection of steamed and pan-fried dim sum.',
    price: 22.95,
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80',
    includes: ['Xiao long bao', 'Shrimp dumplings', 'Pork buns'],
    badges: ['Best Seller'],
  },
  {
    day: 'Sunday',
    dayShort: 'SUN',
    dayNumber: 0,
    name: 'Szechuan Hot Pot',
    nameLocal: '四川火锅',
    description: 'A warming pot of spices, meats, and fresh vegetables.',
    price: 26.95,
    image: 'https://images.unsplash.com/photo-1596040033229-a0b3b1fea2b8?w=600&q=80',
    includes: ['Sliced beef', 'Seasonal vegetables', 'House broth'],
    badges: ['Family Style'],
  },
];

export const getTodaysSpecial = () => {
  const today = new Date().getDay();
  return weeklySpecials.find((special) => special.dayNumber === today) || weeklySpecials[1];
};

export default weeklySpecials;
