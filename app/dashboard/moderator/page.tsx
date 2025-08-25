import Seo from "@/components/seo/Seo";

export default async function ModeratorDashboardPage() {
  // Fetch all users (interns)

  return (
    <div>
      <Seo
        title="Moderator Dashboard – Ecocee"
        description="Moderator dashboard"
        canonical="https://ecocee.in/dashboard/moderator"
        noIndex
      />
      <h1 className="text-2xl font-bold mb-4">Moderator Dashboard</h1>
      <div className="mb-6">
        <h2>not implmented</h2>
      </div>
    </div>
  );
}

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};