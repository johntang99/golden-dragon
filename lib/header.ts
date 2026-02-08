import enHeader from '@/content/golden-dragon/en/header.json';
import zhHeader from '@/content/golden-dragon/zh/header.json';
import type { Locale } from '@/lib/locale';

const headerMap = {
  'golden-dragon': {
    en: enHeader,
    zh: zhHeader,
  },
};

export const getHeaderData = (
  siteId = 'golden-dragon',
  locale: Locale = 'en'
) => {
  const header =
    headerMap[siteId as keyof typeof headerMap] ?? headerMap['golden-dragon'];
  return header[locale] ?? header.en;
};
