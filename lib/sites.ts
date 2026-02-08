import sitesData from '@/content/_sites.json';
import type { SiteConfig } from '@/lib/types';

type SiteDefinition = SiteConfig & {
  locales?: string[];
  domains?: string[];
};

const STATIC_SITES = (sitesData as { sites: SiteDefinition[] }).sites;

export const getSiteIdFromHost = (host?: string | null): string => {
  const fallback = STATIC_SITES[0]?.id ?? 'golden-dragon';
  if (!host) return fallback;
  const normalized = host.replace(/^www\./i, '');
  const match = STATIC_SITES.find((site) =>
    (site.domains || []).some((domain) => {
      const normalizedDomain = domain.replace(/^www\./i, '');
      return normalizedDomain === normalized || domain === host;
    })
  );
  return match?.id ?? fallback;
};
