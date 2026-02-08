import { NextRequest, NextResponse } from 'next/server';
import { getSiteById, updateSite } from '@/lib/sites.server';
import { getSessionFromRequest } from '@/lib/admin/auth';
import type { SiteConfig } from '@/lib/types';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  const { id } = await params;
  const site = await getSiteById(id);
  if (!site) {
    return NextResponse.json({ message: 'Site not found' }, { status: 404 });
  }

  return NextResponse.json(site);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  const { id } = await params;
  const payload = (await request.json()) as Partial<SiteConfig>;
  const allowed: Partial<SiteConfig> = {
    name: payload.name,
    domain: payload.domain,
    enabled: payload.enabled,
    defaultLocale: payload.defaultLocale,
    supportedLocales: payload.supportedLocales,
  };

  const updated = await updateSite(id, allowed);
  if (!updated) {
    return NextResponse.json({ message: 'Site not found' }, { status: 404 });
  }

  return NextResponse.json(updated);
}
