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

import enMenu from '@/content/golden-dragon/en/pages/menu.json';
import zhMenu from '@/content/golden-dragon/zh/pages/menu.json';
import type { Locale } from '@/lib/locale';

const menuMap = {
  'golden-dragon': {
    en: enMenu,
    zh: zhMenu,
  },
};

export const getMenuData = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const menu = menuMap[siteId as keyof typeof menuMap] ?? menuMap['golden-dragon'];
  return menu[locale] ?? menu.en;
};

export const getMenuItems = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  return getMenuData(siteId, locale).items as MenuItem[];
};

export const menuItems: MenuItem[] = getMenuItems();

// Helper functions
export const getMenuByCategory = (category: string, siteId = 'golden-dragon', locale: Locale = 'en') => {
  return getMenuItems(siteId, locale).filter(item => item.category === category);
};

export const getAllCategories = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const categories = Array.from(new Set(getMenuItems(siteId, locale).map(item => item.category)));
  return categories;
};

export const getChefSpecials = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  return getMenuItems(siteId, locale).filter(item => item.chefSpecial);
};

export const getPopularItems = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  return getMenuItems(siteId, locale).filter(item => item.popular);
};

export const getVegetarianItems = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  return getMenuItems(siteId, locale).filter(item => item.vegetarian);
};

// Category information with Chinese names
export const getMenuCategories = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  return getMenuData(siteId, locale).categories;
};

export const categories = getMenuCategories();

export default menuItems;
