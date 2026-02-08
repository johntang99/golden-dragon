export type Locale = 'en' | 'zh';

export const defaultLocale: Locale = 'en';

export const getLocaleFromPathname = (pathname?: string | null): Locale => {
  if (!pathname) return defaultLocale;
  const [first] = pathname.split('/').filter(Boolean);
  return first === 'zh' ? 'zh' : 'en';
};

export const getLocaleFromAcceptLanguage = (acceptLanguage?: string | null): Locale => {
  if (!acceptLanguage) return defaultLocale;
  return acceptLanguage.toLowerCase().includes('zh') ? 'zh' : 'en';
};
