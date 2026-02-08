import enLayout from '@/content/golden-dragon/en/pages/home.layout.json';
import zhLayout from '@/content/golden-dragon/zh/pages/home.layout.json';
import type { Locale } from '@/lib/locale';

const layoutMap = {
  'golden-dragon': {
    en: enLayout,
    zh: zhLayout,
  },
};

export const getHomeLayout = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const layout =
    layoutMap[siteId as keyof typeof layoutMap] ?? layoutMap['golden-dragon'];
  return layout[locale] ?? layout.en;
};
