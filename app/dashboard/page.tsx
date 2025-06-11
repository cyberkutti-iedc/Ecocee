// app/dashboard/page.tsx

import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';

export default async function DashboardPage() {
  const { sessionClaims } = await auth();

  // Get role from Clerk public metadata (e.g., "admin", "moderator", "intern")
  const role = sessionClaims?.metadata?.status as string;

  if (role === 'admin') {
    redirect('/admin'); // or '/dashboard/admin' if your admin page is under dashboard
  } else if (role === 'moderator') {
    redirect('/dashboard/moderator');
  } else if (role === 'intern') {
    redirect('/dashboard/intern');
  } else {
    redirect('/'); // fallback to home or unauthorized
  }

  return null;
}
