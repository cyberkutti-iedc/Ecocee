// app/dashboard/page.tsx

import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import Seo from '@/components/seo/Seo';

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

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

  return (
    <>
      <Seo
        title="Dashboard – Ecocee"
        description="User dashboard"
        canonical="https://ecocee.in/dashboard"
        noIndex
      />
    </>
  );
}
