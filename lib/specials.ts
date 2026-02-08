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

import enMenu from '@/content/golden-dragon/en/pages/menu.json';
import zhMenu from '@/content/golden-dragon/zh/pages/menu.json';
import type { Locale } from '@/lib/locale';

const specialsMap = {
  'golden-dragon': {
    en: enMenu,
    zh: zhMenu,
  },
};

export const getWeeklySpecials = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const specials = specialsMap[siteId as keyof typeof specialsMap] ?? specialsMap['golden-dragon'];
  return (specials[locale] ?? specials.en).weeklySpecials as DailySpecial[];
};

export const weeklySpecials: DailySpecial[] = getWeeklySpecials();

export const getTodaysSpecial = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const today = new Date().getDay();
  const specials = getWeeklySpecials(siteId, locale);
  return specials.find((special) => special.dayNumber === today) || specials[1];
};

export default weeklySpecials;
