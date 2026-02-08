import { NextRequest, NextResponse } from 'next/server';
import { getSessionFromRequest, setPassword } from '@/lib/admin/auth';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
}

export async function POST(request: NextRequest, { params }: RouteParams) {
  const session = await getSessionFromRequest(request);
  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  const { id } = await params;
  const payload = await request.json();
  const newPassword = payload.newPassword as string | undefined;
  if (!newPassword) {
    return NextResponse.json({ message: 'newPassword is required' }, { status: 400 });
  }

  try {
    await setPassword(id, newPassword);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
