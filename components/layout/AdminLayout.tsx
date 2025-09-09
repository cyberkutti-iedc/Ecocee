"use client";

import { useState, useEffect, act } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Briefcase,
  Settings,
  Sun,
  Moon,
  Menu,
  X,
  Users,
  FileText,
  Bell,
  Search,
  Shield,
  LayoutDashboard,
  GroupIcon
} from "lucide-react";
import { UserRoleManager } from "../UserRoleManager";
import CareersRequestView from "../CareersRequestView";
import type { SerializedUser } from "@/types/user";
import type { CareerApplication } from "@/types/careers";
import ModuleManager from "../ModuleManger";
import { useUser } from "@clerk/nextjs";
import AdminRevenueDashboard from "../admin/AdminRevenueDashboard";
import InternshipCertificatesAdmin from "../admin/InternshipCertificatesAdmin";
import BookingsAdminView from "../BookingsAdminView";


interface AdminLayoutProps {
  users: SerializedUser[];
  applications: CareerApplication[];
  adminName?: string;
}

const colorThemes = [
  { name: "Blue", primary: "#3b82f6", secondary: "#2563eb" },
  { name: "Green", primary: "#10b981", secondary: "#059669" },
  { name: "Violet", primary: "#8b5cf6", secondary: "#7c3aed" },
];

type AdminTab = "dashboard" | "roles" | "careers" | "modules" | "certificates" | "revenue" | "bookings"  ;

export default function AdminLayout({ users, applications, adminName = "Admin" }: AdminLayoutProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(colorThemes[0]);
  const { user } = useUser();
  const displayName = user?.fullName || adminName;

  // Set theme on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedThemeName = localStorage.getItem("admin-theme");
      if (savedThemeName) {
        const found = colorThemes.find(t => t.name === savedThemeName);
        if (found) setCurrentTheme(found);
      }

      // Set dark mode based on system preference
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      document.documentElement.classList.toggle("dark", !prev);
      return !prev;
    });
  };

  const handleThemeChange = (theme: typeof colorThemes[0]) => {
    setCurrentTheme(theme);
    if (typeof window !== "undefined") {
      localStorage.setItem("admin-theme", theme.name);
    }
  };

  const tabItems = [
    { id: "dashboard" as const, icon: <LayoutDashboard size={18} />, label: "Dashboard" },
    { id: "roles" as const, icon: <Users size={18} />, label: "Users", count: users.length },
    { id: "careers" as const, icon: <Briefcase size={18} />, label: "Careers", count: applications.length },
    { id: "modules" as const, icon: <FileText size={18} />, label: "Modules" },
    { id: "certificates" as const, icon: <FileText size={18} />, label: "Certificates" },
    { id: "revenue" as const, icon: <Shield size={18} />, label: "Revenue" },
    { id: "bookings" as const, icon: <FileText size={18} />, label: "Bookings" },
   
   

  ];

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: typeof window !== "undefined" && window.innerWidth < 768
            ? (sidebarOpen ? 0 : -300)
            : 0
        }}
        className="fixed md:static top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col shadow-sm"
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="font-semibold text-gray-800 dark:text-white">Admin Panel</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">Control Center</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2 space-y-1 mt-4">
          {tabItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${activeTab === item.id
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              style={{ backgroundColor: activeTab === item.id ? currentTheme.primary : undefined }}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
              {(item.count ?? 0) > 0 && (
                <span
                  className={`ml-auto px-1.5 py-0.5 text-xs rounded-full ${activeTab === item.id
                      ? "bg-white/20"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                    }`}
                >
                  {item.count}
                </span>
              )}

            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 p-2">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-700 dark:text-gray-300" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                {displayName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
            </div>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 md:hidden"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              {tabItems.find(item => item.id === activeTab)?.label}
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <Search size={18} />
            </button>
            <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700">
              <Bell size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeTab === "dashboard" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-white">Users</h3>
                    <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{users.length}</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-white">Applications</h3>
                    <p className="text-2xl font-bold mt-2 text-gray-900 dark:text-white">{applications.length}</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                    <h3 className="font-medium text-gray-800 dark:text-white">System</h3>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">All systems operational</p>
                  </div>
                </div>
              )}
              {activeTab === "roles" && <UserRoleManager users={users} />}
              {activeTab === "careers" && <CareersRequestView applications={applications} />}
              {activeTab === "modules" && <ModuleManager role={"admin"} />}

         
              {activeTab === "certificates" && <InternshipCertificatesAdmin />}
              {activeTab === "revenue" && <AdminRevenueDashboard />}
              {activeTab === "bookings" && <BookingsAdminView />}
            

            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}