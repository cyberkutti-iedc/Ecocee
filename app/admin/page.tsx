import { clerkClient } from "@clerk/nextjs/server";
import AdminLayout from "@/components/layout/AdminLayout";
import type { SerializedUser } from "@/types/user";
import { Shield, Sparkles } from "lucide-react";

export default async function AdminPage() {
  const usersList = await (await clerkClient()).users.getUserList();
  
  const serializedUsers: SerializedUser[] = usersList.data.map(user => ({
    id: user.id,
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email:
      user.emailAddresses.find(email => email.id === user.primaryEmailAddressId)
        ?.emailAddress || "",
    role: (user.publicMetadata.status as string) || "",
    imageUrl: user.imageUrl || "",
  }));
  
  const adminUser = serializedUsers[0];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        {/* Main Content */}
        <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-xl overflow-hidden">
            <AdminLayout 
              users={serializedUsers} 
              applications={[]} 
              adminName={adminUser?.firstName || "Admin"} 
            />
          </div>
        </main>
      </div>
    </div>
  );
}