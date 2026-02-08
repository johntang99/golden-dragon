import { getSites } from '@/lib/sites.server';
import { ContentEditor } from '@/components/admin/ContentEditor';

export default async function AdminContentPage({
  searchParams,
}: {
  searchParams?: Promise<{ siteId?: string; locale?: string; file?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const sites = await getSites();
  const defaultSite = sites[0];
  const selectedSiteId = resolvedSearchParams?.siteId || defaultSite?.id || '';
  const selectedSite = sites.find((site) => site.id === selectedSiteId) || defaultSite;
  const selectedLocale =
    resolvedSearchParams?.locale || selectedSite?.defaultLocale || 'en';
  const initialFilePath = resolvedSearchParams?.file;

  return (
    <ContentEditor
      sites={sites}
      selectedSiteId={selectedSiteId}
      selectedLocale={selectedLocale}
      initialFilePath={initialFilePath}
    />
  );
}
