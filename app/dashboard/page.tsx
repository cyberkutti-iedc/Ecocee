'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCurrentUser, logout } from '@/lib/appwrite';
import { Home, Users, Folder, Settings, LogOut, Menu, X, Activity } from 'lucide-react';
import Link from 'next/link';
import { Toaster, toast } from 'react-hot-toast';

interface User {
  name: string;
  role: string;
  email: string;
}

interface DashboardStat {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
}

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
          toast.error('Session expired, redirecting...');
          router.replace('/login');
          return;
        }
        setUser(currentUser);
      } catch (error) {
        console.error('Error fetching user:', error);
        toast.error('Error fetching user data');
        router.replace('/login');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      setLoading(true);
      const { success } = await logout();
      
      if (success) {
        toast.success('Logged out successfully');
        router.replace('/login');
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Failed to logout');
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/dashboard/users', icon: Users, label: 'Users' },
    { path: '/dashboard/projects', icon: Folder, label: 'Projects' },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings' }, // ✅ Added Settings
  ];

  const stats: DashboardStat[] = [
    { title: 'Total Revenue', value: '$0', change: '+1%', trend: 'down' },
    { title: 'Active Clients', value: '2', change: '+3%', trend: 'down' },
    { title: 'Projects Ongoing', value: '2', change: '30%', trend: 'up' },
  ];

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Toaster position="top-right" /> {/* ✅ Toast notifications */}

      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6 
          transition-transform duration-300 ease-in-out z-30
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800">{user?.name}</h2>
          <p className="text-sm text-gray-500">{user?.role}</p>
          <p className="text-xs text-gray-400 mt-1">{user?.email}</p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 p-3 rounded-lg text-gray-700 
                hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setSidebarOpen(false)} // ✅ Close sidebar on mobile when clicked
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          disabled={loading}
          className={`w-full mt-8 p-3 rounded-lg text-white bg-red-500 
            hover:bg-red-600 transition-colors duration-200 flex items-center justify-center gap-2
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <LogOut size={18} />
          {loading ? 'Logging out...' : 'Logout'}
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 p-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg bg-white shadow md:hidden"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <h1 className="text-2xl font-bold text-gray-800">Welcome back, {user?.name}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl shadow-sm bg-white border border-gray-100">
              <p className="text-gray-500 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold mt-2">{stat.value}</p>
              {stat.change && (
                <div className={`flex items-center mt-2 text-sm
                  ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
                >
                  <Activity size={16} className="mr-1" />
                  {stat.change}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
