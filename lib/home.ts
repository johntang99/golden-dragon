import enHome from '@/content/golden-dragon/en/pages/home.json';
import zhHome from '@/content/golden-dragon/zh/pages/home.json';
import type { Locale } from '@/lib/locale';

const homeMap = {
  'golden-dragon': {
    en: enHome,
    zh: zhHome,
  },
};

export const getHomeData = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const home = homeMap[siteId as keyof typeof homeMap] ?? homeMap['golden-dragon'];
  return home[locale] ?? home.en;
};
