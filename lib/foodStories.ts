// Food Stories - Educational content about Chinese cuisine

export interface FoodStory {
  id: string;
  slug: string;
  title: string;
  titleChinese: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  type: 'article' | 'video';
  videoUrl?: string;
  tags: string[];
}

import enStory1 from '@/content/golden-dragon/en/blog/history-of-peking-duck.json';
import enStory2 from '@/content/golden-dragon/en/blog/story-of-dim-sum.json';
import enStory3 from '@/content/golden-dragon/en/blog/origins-of-kung-pao.json';
import enStory4 from '@/content/golden-dragon/en/blog/perfect-fried-rice.json';
import enStory5 from '@/content/golden-dragon/en/blog/wok-mastery-video.json';
import enStory6 from '@/content/golden-dragon/en/blog/dumpling-folding-techniques.json';
import enStory7 from '@/content/golden-dragon/en/blog/health-benefits-chinese-tea.json';
import enStory8 from '@/content/golden-dragon/en/blog/nutritional-benefits-tofu.json';
import enStory9 from '@/content/golden-dragon/en/blog/balance-of-five-flavors.json';
import enStory10 from '@/content/golden-dragon/en/blog/chinese-new-year-dishes.json';
import enStory11 from '@/content/golden-dragon/en/blog/tea-ceremony-etiquette.json';
import enStory12 from '@/content/golden-dragon/en/blog/chopsticks-etiquette.json';
import enStory13 from '@/content/golden-dragon/en/blog/winter-warming-soups.json';
import enStory14 from '@/content/golden-dragon/en/blog/spring-vegetables.json';
import enStory15 from '@/content/golden-dragon/en/blog/summer-cold-dishes.json';
import enStory16 from '@/content/golden-dragon/en/blog/secret-to-crispy-skin.json';
import enStory17 from '@/content/golden-dragon/en/blog/secret-sauce-recipes.json';
import enStory18 from '@/content/golden-dragon/en/blog/making-xiao-long-bao-video.json';
import enStory19 from '@/content/golden-dragon/en/blog/ingredient-selection.json';
import enStory20 from '@/content/golden-dragon/en/blog/stir-fry-basics.json';
import zhStory1 from '@/content/golden-dragon/zh/blog/history-of-peking-duck.json';
import zhStory2 from '@/content/golden-dragon/zh/blog/story-of-dim-sum.json';
import zhStory3 from '@/content/golden-dragon/zh/blog/origins-of-kung-pao.json';
import zhStory4 from '@/content/golden-dragon/zh/blog/perfect-fried-rice.json';
import zhStory5 from '@/content/golden-dragon/zh/blog/wok-mastery-video.json';
import zhStory6 from '@/content/golden-dragon/zh/blog/dumpling-folding-techniques.json';
import zhStory7 from '@/content/golden-dragon/zh/blog/health-benefits-chinese-tea.json';
import zhStory8 from '@/content/golden-dragon/zh/blog/nutritional-benefits-tofu.json';
import zhStory9 from '@/content/golden-dragon/zh/blog/balance-of-five-flavors.json';
import zhStory10 from '@/content/golden-dragon/zh/blog/chinese-new-year-dishes.json';
import zhStory11 from '@/content/golden-dragon/zh/blog/tea-ceremony-etiquette.json';
import zhStory12 from '@/content/golden-dragon/zh/blog/chopsticks-etiquette.json';
import zhStory13 from '@/content/golden-dragon/zh/blog/winter-warming-soups.json';
import zhStory14 from '@/content/golden-dragon/zh/blog/spring-vegetables.json';
import zhStory15 from '@/content/golden-dragon/zh/blog/summer-cold-dishes.json';
import zhStory16 from '@/content/golden-dragon/zh/blog/secret-to-crispy-skin.json';
import zhStory17 from '@/content/golden-dragon/zh/blog/secret-sauce-recipes.json';
import zhStory18 from '@/content/golden-dragon/zh/blog/making-xiao-long-bao-video.json';
import zhStory19 from '@/content/golden-dragon/zh/blog/ingredient-selection.json';
import zhStory20 from '@/content/golden-dragon/zh/blog/stir-fry-basics.json';
import type { Locale } from '@/lib/locale';

const storyCategories = [
  'All',
  'Recipe History',
  'Cooking Tips',
  'Health & Nutrition',
  'Food Culture',
  'Seasonal Specials',
  "Chef's Secrets",
];

const storiesMap = {
  'golden-dragon': {
    en: {
      stories: [
        enStory1,
        enStory2,
        enStory3,
        enStory4,
        enStory5,
        enStory6,
        enStory7,
        enStory8,
        enStory9,
        enStory10,
        enStory11,
        enStory12,
        enStory13,
        enStory14,
        enStory15,
        enStory16,
        enStory17,
        enStory18,
        enStory19,
        enStory20,
      ],
      categories: storyCategories,
    },
    zh: {
      stories: [
        zhStory1,
        zhStory2,
        zhStory3,
        zhStory4,
        zhStory5,
        zhStory6,
        zhStory7,
        zhStory8,
        zhStory9,
        zhStory10,
        zhStory11,
        zhStory12,
        zhStory13,
        zhStory14,
        zhStory15,
        zhStory16,
        zhStory17,
        zhStory18,
        zhStory19,
        zhStory20,
      ],
      categories: storyCategories,
    },
  },
};

export const getFoodStories = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const stories = storiesMap[siteId as keyof typeof storiesMap] ?? storiesMap['golden-dragon'];
  return (stories[locale] ?? stories.en).stories as FoodStory[];
};

export const foodStories: FoodStory[] = getFoodStories();

export const getFoodStoryCategories = (siteId = 'golden-dragon', locale: Locale = 'en') => {
  const stories = storiesMap[siteId as keyof typeof storiesMap] ?? storiesMap['golden-dragon'];
  return (stories[locale] ?? stories.en).categories as string[];
};

export const categories = getFoodStoryCategories();

export const getStoriesByCategory = (category: string, siteId = 'golden-dragon', locale: Locale = 'en') => {
  const stories = getFoodStories(siteId, locale);
  if (category === 'All') return stories;
  return stories.filter(story => story.category === category);
};

export const getStoryBySlug = (slug: string, siteId = 'golden-dragon', locale: Locale = 'en') => {
  return getFoodStories(siteId, locale).find(story => story.slug === slug);
};

export default foodStories;
