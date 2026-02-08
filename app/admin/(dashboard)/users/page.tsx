import { UsersManager } from '@/components/admin/UsersManager';
import { getSites } from '@/lib/sites.server';

export default async function AdminUsersPage() {
  const sites = await getSites();
  return <UsersManager sites={sites} />;
}
