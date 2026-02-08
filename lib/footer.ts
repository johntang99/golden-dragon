import type { Locale } from './types';

export interface FooterSection {
  brand: {
    logoText?: string;
    name: string;
    description?: string;
  };
  quickLinks: { text: string; url: string }[];
  services: { text: string; url: string }[];
  contact: {
    addressLines: string[];
    phone?: string;
    phoneLink?: string;
    email?: string;
    emailLink?: string;
  };
  hours: string[];
  legalLinks: { text: string; url: string }[];
  copyright: string;
}

export function getDefaultFooter(locale: Locale): FooterSection {
  const isEnglish = locale === 'en';

  return {
    brand: {
      logoText: 'GD',
      name: 'Golden Dragon',
      description: isEnglish
        ? 'Authentic Chinese cuisine served with warmth and tradition.'
        : '以传统工艺与热情服务呈现正宗中式风味。',
    },
    quickLinks: [
      { text: isEnglish ? 'Menu' : '菜单', url: '/menu' },
      { text: isEnglish ? 'Reservations' : '预约订位', url: '/reservations' },
      { text: isEnglish ? 'Catering' : '宴会/外烩', url: '/catering' },
      { text: isEnglish ? 'Contact' : '联系我们', url: '/contact' },
    ],
    services: [
      { text: isEnglish ? 'Dim Sum' : '点心', url: '/menu#dim-sum' },
      { text: isEnglish ? 'Noodles' : '面条', url: '/menu#noodles' },
      { text: isEnglish ? "Chef's Specials" : '招牌菜', url: '/menu#specials' },
      { text: isEnglish ? 'Tea Selection' : '茶品', url: '/menu#tea' },
    ],
    contact: {
      addressLines: ['88 Dragon Street', 'New York, NY 10002'],
      phone: '(555) 888-8888',
      phoneLink: 'tel:+15558888888',
      email: 'info@goldendragon.com',
      emailLink: 'mailto:info@goldendragon.com',
    },
    hours: [
      isEnglish ? 'Mon-Thu: 11:00 AM - 10:00 PM' : '周一至周四：11:00 AM - 10:00 PM',
      isEnglish ? 'Fri-Sat: 11:00 AM - 11:00 PM' : '周五至周六：11:00 AM - 11:00 PM',
      isEnglish ? 'Sun: 11:00 AM - 10:00 PM' : '周日：11:00 AM - 10:00 PM',
    ],
    legalLinks: [
      { text: isEnglish ? 'Privacy Policy' : '隐私政策', url: '/privacy' },
      { text: isEnglish ? 'Terms of Service' : '服务条款', url: '/terms' },
    ],
    copyright: isEnglish
      ? '© {year} Golden Dragon. All rights reserved.'
      : '© {year} Golden Dragon. 版权所有。',
  };
}
