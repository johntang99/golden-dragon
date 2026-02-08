import fs from 'fs';
import path from 'path';
import type { SiteConfig } from '@/lib/types';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const SITES_CONFIG_PATH = path.join(CONTENT_DIR, '_sites.json');

export async function getSites(): Promise<SiteConfig[]> {
  try {
    const data = await fs.promises.readFile(SITES_CONFIG_PATH, 'utf-8');
    const sites = JSON.parse(data);
    return sites.sites || [];
  } catch (error) {
    return [];
  }
}

async function saveSites(sites: SiteConfig[]): Promise<void> {
  await fs.promises.mkdir(CONTENT_DIR, { recursive: true });
  const payload = { sites };
  await fs.promises.writeFile(SITES_CONFIG_PATH, JSON.stringify(payload, null, 2));
}

export async function getSiteById(siteId: string): Promise<SiteConfig | null> {
  const sites = await getSites();
  return sites.find(site => site.id === siteId) || null;
}

export async function getDefaultSite(): Promise<SiteConfig | null> {
  const sites = await getSites();
  return sites.find(site => site.enabled) || sites[0] || null;
}

export function normalizeHost(host: string): string {
  return host.replace(/:\d+$/, '').replace(/^www\./, '').toLowerCase();
}

export async function getSiteByDomain(domain: string): Promise<SiteConfig | null> {
  const sites = await getSites();
  const normalized = normalizeHost(domain);
  return sites.find((site) => normalizeHost(site.domain || '') === normalized) || null;
}

export async function getSiteByHost(host?: string | null): Promise<SiteConfig | null> {
  if (!host) return null;
  return getSiteByDomain(host);
}

export async function siteExists(siteId: string): Promise<boolean> {
  const site = await getSiteById(siteId);
  return site !== null;
}

export async function updateSite(
  siteId: string,
  updates: Partial<SiteConfig>
): Promise<SiteConfig | null> {
  const sites = await getSites();
  const index = sites.findIndex((site) => site.id === siteId);
  if (index === -1) return null;

  const updated: SiteConfig = {
    ...sites[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  sites[index] = updated;
  await saveSites(sites);
  return updated;
}

export async function createSite(
  input: Omit<SiteConfig, 'createdAt' | 'updatedAt'>
): Promise<SiteConfig> {
  const sites = await getSites();
  if (sites.some((site) => site.id === input.id)) {
    throw new Error('Site ID already exists');
  }

  const now = new Date().toISOString();
  const newSite: SiteConfig = {
    ...input,
    createdAt: now,
    updatedAt: now,
  };

  sites.push(newSite);
  await saveSites(sites);
  return newSite;
}

export function getSiteContentPath(siteId: string): string {
  return path.join(CONTENT_DIR, siteId);
}

export function getSiteUploadPath(siteId: string): string {
  return path.join(process.cwd(), 'public', 'uploads', siteId);
}
