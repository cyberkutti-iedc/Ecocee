'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Home, Users, Settings, LogOut, Menu, X, Activity, FileText } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface SidebarProps {
  user: {
    name: string;
    email: string;
    role: string;
  };
  onLogout: () => Promise<void>;
}

export default function DashboardSidebar({ user, onLogout }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/dashboard/users', icon: Users, label: 'Users' },
    { path: '/dashboard/activity', icon: Activity, label: 'Activity' },
    { path: '/dashboard/reports', icon: FileText, label: 'Reports' },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await onLogout();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-5 left-5 z-50 p-3 bg-gray-800/50 text-white backdrop-blur-lg rounded-full shadow-md hover:bg-gray-700/70 transition-all"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ type: 'spring', bounce: 0.3 }}
            className="fixed left-0 top-0 h-screen w-72 bg-gray-900/80 text-white backdrop-blur-xl border-r border-gray-700 p-6 shadow-2xl flex flex-col justify-between"
          >
            {/* User Info */}
            <div className="text-center">
              <h2 className="text-xl font-bold">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.role}</p>
            </div>

            {/* Navigation Links */}
            <nav className="mt-6 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                    pathname === item.path
                      ? 'bg-gray-700 text-white'
                      : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <item.icon size={22} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-3 p-3 rounded-lg bg-red-600/80 hover:bg-red-700/80 text-white transition-all shadow-md"
            >
              <LogOut size={20} />
              <span>{isLoading ? 'Logging out...' : 'Logout'}</span>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
