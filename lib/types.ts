export type Locale = 'en' | 'zh';

export interface SiteConfig {
  id: string;
  name: string;
  domain?: string;
  enabled: boolean;
  defaultLocale: Locale;
  supportedLocales: Locale[];
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  sites: string[];
  avatar?: string;
  createdAt: string;
  lastLoginAt?: string;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: string;
}
