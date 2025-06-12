"use client";

import { useState, useEffect } from "react";
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
  Palette,
  Bell,
  Search,
  Filter,
  MoreVertical,
  Activity,
  TrendingUp,
  Shield,
  Calendar
} from "lucide-react";
import { UserRoleManager } from "../UserRoleManager";
import CareersRequestView from "../CareersRequestView";
import type { SerializedUser } from "@/types/user";
import type { CareerApplication } from "@/types/careers";
import ModuleManager from "../ModuleManger";
import Games from "../Games";
import { useUser } from "@clerk/nextjs"; // Add this import




interface AdminLayoutProps {
  users: SerializedUser[];
  applications: CareerApplication[];
  adminName?: string;
}

// Predefined color themes
const colorThemes = [
  { name: "Ocean", primary: "#0ea5e9", secondary: "#0284c7", gradient: "from-sky-500 to-blue-600" },
  { name: "Forest", primary: "#059669", secondary: "#047857", gradient: "from-emerald-500 to-green-600" },
  { name: "Sunset", primary: "#ea580c", secondary: "#dc2626", gradient: "from-orange-500 to-red-600" },
  { name: "Purple", primary: "#9333ea", secondary: "#7c3aed", gradient: "from-purple-500 to-violet-600" },
  { name: "Rose", primary: "#e11d48", secondary: "#be185d", gradient: "from-rose-500 to-pink-600" },
  { name: "Indigo", primary: "#6366f1", secondary: "#4f46e5", gradient: "from-indigo-500 to-blue-600" },
];

type AdminTab = "roles" | "careers" | "modules" | "Calendar" | "Games";

export default function AdminLayout({ users, applications, adminName = "Admin" }: AdminLayoutProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>("roles");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(colorThemes[0]);
  const [showSettings, setShowSettings] = useState(false);

  const { user } = useUser(); // Get Clerk user
  const displayName = user?.fullName || adminName || "Unknown Admin";


// Load theme from localStorage on mount
useEffect(() => {
  if (typeof window !== "undefined") {
    const savedThemeName = localStorage.getItem("admin-theme");
    if (savedThemeName) {
      const found = colorThemes.find(t => t.name === savedThemeName);
      if (found) {
        setCurrentTheme(found);
        document.documentElement.style.setProperty('--primary-color', found.primary);
        document.documentElement.style.setProperty('--secondary-color', found.secondary);
      }
    } else {
      // Set default theme CSS vars
      document.documentElement.style.setProperty('--primary-color', colorThemes[0].primary);
      document.documentElement.style.setProperty('--secondary-color', colorThemes[0].secondary);
    }
  }
}, []);

const handleThemeChange = (theme: typeof colorThemes[0]) => {
  setCurrentTheme(theme);
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    localStorage.setItem("admin-theme", theme.name);
  }
};


  // Initialize dark mode from system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", !darkMode);
    }
  };

  // const handleThemeChange = (theme: typeof colorThemes[0]) => {
  //   setCurrentTheme(theme);
  //   // Update CSS custom properties for dynamic theming
  //   if (typeof window !== "undefined") {
  //     document.documentElement.style.setProperty('--primary-color', theme.primary);
  //     document.documentElement.style.setProperty('--secondary-color', theme.secondary);
  //   }
  // };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const tabItems = [
    {
      id: "roles" as const,
      icon: <Users className="w-5 h-5" />,
      label: "User Management",
      count: users.length,
      description: "Manage user roles and permissions"
    },
    {
      id: "careers" as const,
      icon: <Briefcase className="w-5 h-5" />,
      label: "Career Applications",
      count: applications.length,
      description: "Review and manage applications"
    },
    {
      id: "modules" as const,
      icon: <FileText className="w-5 h-5" />,
      label: "Module Manager",
      count: 0,
      description: "Manage system modules and features"
    },
    {
      id: "Calendar" as const,
      icon: <Calendar className="w-5 h-5" />,
      label: "Calendar",
      count: 0,
      description: "View and manage events"
    },
    {
      id: "Games" as const,
      icon: <Users className="w-5 h-5" />,
      label: "Games",
      count: 0,
      description: "Manage games and activities"
    }
  ];

  return (
    <div className="flex h-full bg-transparent">
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 left-4 z-50 md:hidden w-12 h-12 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 flex items-center justify-center"
      >
        {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: typeof window !== "undefined" && window.innerWidth < 768 
            ? (sidebarOpen ? 0 : -320) 
            : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed md:static top-0 left-0 z-50 h-full w-80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-white/20 dark:border-slate-700/50 flex flex-col"
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/10 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 mb-4">
            <div 
              className={`w-12 h-12 bg-gradient-to-br ${currentTheme.gradient} rounded-xl flex items-center justify-center shadow-lg`}
            >
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">EcoAdmin</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Control Center</p>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium text-blue-600">Active</span>
              </div>
              <p className="text-lg font-bold text-slate-800 dark:text-white mt-1">{users.length}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium text-green-600">Growth</span>
              </div>
              <p className="text-lg font-bold text-slate-800 dark:text-white mt-1">+12%</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {tabItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              description={item.description}
              count={item.count}
              active={activeTab === item.id}
              onClick={() => setActiveTab(item.id)}
              theme={currentTheme}
            />
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10 dark:border-slate-700/50 space-y-3">
          {/* Settings Panel Toggle */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowSettings(!showSettings)}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
              showSettings 
                ? `text-white shadow-lg` 
                : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50'
            }`}
            style={{ backgroundColor: showSettings ? currentTheme.primary : undefined }}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </motion.button>

          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-3 overflow-hidden"
              >
                {/* Theme Selector */}
                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    <Palette className="w-4 h-4" />
                    <span>Color Theme</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {colorThemes.map((theme) => (
                      <motion.button
                        key={theme.name}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleThemeChange(theme)}
                        className={`w-8 h-8 rounded-lg border-2 transition-all ${
                          currentTheme.name === theme.name 
                            ? 'border-white dark:border-slate-700 ring-2 ring-offset-2 ring-slate-400' 
                            : 'border-white/50 dark:border-slate-600'
                        }`}
                        style={{ backgroundColor: theme.primary }}
                        title={theme.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Dark Mode Toggle */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={toggleTheme}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    <span className="font-medium">{darkMode ? "Light Mode" : "Dark Mode"}</span>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-colors ${darkMode ? currentTheme.primary : 'bg-slate-300'} relative`}>
                    <motion.div
                      animate={{ x: darkMode ? 24 : 2 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                    />
                  </div>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Admin Info */}
          <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                {displayName}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
            </div>
            <Bell className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
                  {tabItems.find(item => item.id === activeTab)?.label}
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {tabItems.find(item => item.id === activeTab)?.description}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors"
              >
                <Filter className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-colors"
              >
                <MoreVertical className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {activeTab === "roles" && <UserRoleManager users={users} />}
              {activeTab === "careers" && <CareersRequestView applications={applications} />}
              {activeTab === "modules" && <ModuleManager role={"admin"} />} 
              {activeTab === "Calendar" && <div>Calendar Content</div>}
              {activeTab === "Games" && <Games/>}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ 
  icon, 
  label, 
  description, 
  count, 
  active, 
  onClick, 
  theme 
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
  count: number;
  active: boolean;
  onClick: () => void;
  theme: typeof colorThemes[0];
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-left transition-all duration-200 group ${
        active 
          ? 'text-white shadow-lg' 
          : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50'
      }`}
      style={{ backgroundColor: active ? theme.primary : undefined }}
    >
      <div className={`p-2 rounded-lg transition-colors ${
        active 
          ? 'bg-white/20' 
          : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-white/80 dark:group-hover:bg-slate-700'
      }`}>
        {icon}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-sm truncate">{label}</p>
          {count > 0 && (
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              active 
                ? 'bg-white/20 text-white' 
                : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }`}>
              {count}
            </span>
          )}
        </div>
        <p className={`text-xs truncate mt-1 ${
          active ? 'text-white/80' : 'text-slate-400'
        }`}>
          {description}
        </p>
      </div>
      
      {active && (
        <motion.div
          layoutId="sidebarActiveIndicator"
          className="absolute left-0 top-3 bottom-3 w-1 bg-white rounded-r-full"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </motion.button>
  );
}