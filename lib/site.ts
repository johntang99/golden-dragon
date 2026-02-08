import enSite from '@/content/golden-dragon/en/site.json';
import zhSite from '@/content/golden-dragon/zh/site.json';
import type { Locale } from '@/lib/locale';

const siteMap = {
  'golden-dragon': {
    en: enSite,
    zh: zhSite,
  },
};

export const getSiteConfig = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const site = siteMap[siteId as keyof typeof siteMap] ?? siteMap['golden-dragon'];
  return site[locale] ?? site.en;
};

export const siteConfig = getSiteConfig();

export const brand = siteConfig.brand;
export const contact = siteConfig.contact;
export const navigation = siteConfig.navigation;
export const seo = siteConfig.seo;
export const cta = siteConfig.cta;
export const settings = siteConfig.settings;
export const schema = siteConfig.schema;

export default siteConfig;
