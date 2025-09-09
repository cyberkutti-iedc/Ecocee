"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Sun,
  Moon,
  Menu,
  X,
  Shield,
  Bell,
  Palette,
  BookOpen,
  Calendar,
  MessageCircle,
  Award,
  Settings,
  LogOut,
  ChevronRight,
  TrendingUp,
  Clock,
  Star,
  Users,
  Target,
  Zap,
  CheckCircle,
  ExternalLink,
  BookOpenCheck,
  GraduationCap,
  Building,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useUser, useAuth } from "@clerk/nextjs";
import InternTabContent from "../InternTabContent";


const colorThemes = [
  { name: "Ocean", primary: "#0ea5e9", secondary: "#0284c7", gradient: "from-sky-400 via-blue-500 to-blue-600", light: "bg-sky-50", dark: "bg-sky-900" },
  { name: "Forest", primary: "#059669", secondary: "#047857", gradient: "from-emerald-400 via-green-500 to-green-600", light: "bg-emerald-50", dark: "bg-emerald-900" },
  { name: "Sunset", primary: "#ea580c", secondary: "#dc2626", gradient: "from-orange-400 via-red-500 to-red-600", light: "bg-orange-50", dark: "bg-orange-900" },
  { name: "Purple", primary: "#9333ea", secondary: "#7c3aed", gradient: "from-purple-400 via-purple-500 to-violet-600", light: "bg-purple-50", dark: "bg-purple-900" },
  { name: "Rose", primary: "#e11d48", secondary: "#be185d", gradient: "from-rose-400 via-pink-500 to-pink-600", light: "bg-rose-50", dark: "bg-rose-900" },
  { name: "Indigo", primary: "#6366f1", secondary: "#4f46e5", gradient: "from-indigo-400 via-indigo-500 to-blue-600", light: "bg-indigo-50", dark: "bg-indigo-900" },
  { name: "Amber", primary: "#f59e42", secondary: "#d97706", gradient: "from-amber-300 via-amber-400 to-amber-600", light: "bg-amber-50", dark: "bg-amber-900" },
  { name: "Teal", primary: "#14b8a6", secondary: "#0d9488", gradient: "from-teal-400 via-teal-500 to-teal-600", light: "bg-teal-50", dark: "bg-teal-900" },
];

interface InternLayoutProps {
  internName?: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  link?: string;
  created_at: string;
  read?: boolean;
  read_at?: string;
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  duration?: string;
  category?: string;
}

function ModuleViewer() {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [updatingId, setUpdatingId] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { user, isLoaded } = useUser();

  // Fetch modules and read status for this intern from API
  useEffect(() => {
    if (!isLoaded || !user) return;
    setLoading(true);
    Promise.all([
      fetch("/api/modules").then((res) => res.json()),
      fetch(`/api/module_reads?user_id=${user.id}`).then((res) => res.json())
    ])
      .then(([modulesData, readsData]) => {
        if (Array.isArray(modulesData) && Array.isArray(readsData)) {
          // Merge read status into modules
          const modulesWithRead = modulesData.map((mod: any) => {
            const readRow = readsData.find((r: any) => r.module_id === mod.id);
            return {
              ...mod,
              read: readRow ? !!readRow.read : false,
              read_at: readRow ? readRow.read_at : null,
              // Optionally add difficulty, duration, category if present in DB
              difficulty: mod.difficulty,
              duration: mod.duration,
              category: mod.category,
            };
          });
          setModules(modulesWithRead);
        } else {
          setModules([]);
        }
      })
      .catch((err) => {
        console.error("Failed to fetch modules or reads:", err);
        setModules([]);
      })
      .finally(() => setLoading(false));
  }, [isLoaded, user]);

  const markAsRead = async (id: number) => {
    if (!user) return;
    setUpdatingId(id);
    const res = await fetch("/api/modules", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read: true, read_at: new Date().toISOString() }),
    });
    if (res.ok) {
      setModules((prev) =>
        prev.map((mod) =>
          mod.id === id ? { ...mod, read: true, read_at: new Date().toISOString() } : mod
        )
      );
    }
    setUpdatingId(null);
  };

  const filteredModules = modules.filter(mod => {
    const matchesFilter = filter === 'all' ||
      (filter === 'completed' && mod.read) ||
      (filter === 'pending' && !mod.read);
    const matchesSearch = mod.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <BookOpenCheck className="w-8 h-8 text-blue-600" />
            Learning Modules
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Expand your knowledge with our curated learning materials
          </p>
        </div>
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">All Modules</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{modules.length}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Modules</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {modules.filter(m => m.read).length}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          whileHover={{ y: -2 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {modules.length > 0 ? Math.round((modules.filter(m => m.read).length / modules.length) * 100) : 0}%
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Progress</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Module Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
                {module.read && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-3 p-2 bg-green-100 dark:bg-green-900 rounded-full"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </motion.div>
                )}
              </div>

              {/* Module Meta */}
              <div className="flex flex-wrap gap-2 mb-4">
                {module.difficulty && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(module.difficulty)}`}>
                    {module.difficulty}
                  </span>
                )}
                {module.duration && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {module.duration}
                  </span>
                )}
                {module.category && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    {module.category}
                  </span>
                )}
              </div>

              {/* Module Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  {module.link && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={module.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Material
                    </motion.a>
                  )}
                  {module.read && module.read_at && (
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Completed {new Date(module.read_at).toLocaleDateString()}
                    </span>
                  )}
                </div>
                
                {!module.read && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => markAsRead(module.id)}
                    disabled={updatingId === module.id}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {updatingId === module.id ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Marking...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Mark Complete
                      </>
                    )}
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredModules.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <BookOpen className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            No modules found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {searchTerm || filter !== 'all' 
              ? 'Try adjusting your search or filter criteria.'
              : 'Check back later for new learning materials.'}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function DashboardSummary({ userId }: { userId: string }) {
  const [stats, setStats] = useState({
    totalModules: 0,
    completedModules: 0,
    totalHours: 0,
    rank: 0,
    streak: 0
  });
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  const quotes = [
    "Learning never exhausts the mind. – Leonardo da Vinci",
    "The beautiful thing about learning is nobody can take it away from you. – B.B. King",
    "Success is the sum of small efforts, repeated day in and day out. – Robert Collier",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "The expert in anything was once a beginner. – Helen Hayes",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "The future belongs to those who learn more skills and combine them in creative ways. – Robert Greene"
  ];

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    
    // Simulate API calls
    setTimeout(() => {
      setStats({
        totalModules: 12,
        completedModules: 4,
        totalHours: 18,
        rank: 3,
        streak: 5
      });
      setLoading(false);
    }, 1000);
  }, [userId]);

  const achievements = [
    { id: 1, title: "First Module", description: "Completed your first learning module", icon: GraduationCap, earned: true },
    { id: 2, title: "Quick Learner", description: "Completed 3 modules in a week", icon: Zap, earned: true },
    { id: 3, title: "Consistent", description: "5-day learning streak", icon: Target, earned: true },
    { id: 4, title: "Knowledge Seeker", description: "Completed 10 modules", icon: Star, earned: false },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 p-8 text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="p-3 bg-white/20 rounded-xl backdrop-blur-sm"
            >
              <Building className="w-8 h-8" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome to Ecocee!</h1>
              <p className="text-blue-100 text-lg">MSME Company for Embedded & AI Solutions</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-blue-100 mb-4 leading-relaxed">
                We're excited to have you onboard as an intern. Our comprehensive learning platform 
                will help you master embedded systems and AI technologies. For the best experience, 
                we recommend using a laptop or desktop computer.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
              >
                <p className="italic text-sm">"{quote}"</p>
              </motion.div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Need Help?
                </h3>
                <p className="text-sm text-blue-100 mb-2">
                  Contact our admin team for any questions or support:
                </p>
                <a
                  href="mailto:admin@ecocee.com"
                  className="text-yellow-300 hover:text-yellow-200 font-medium underline"
                >
                  admin@ecocee.com
                </a>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
    </div>
  );
}

function AchievementsTab({ startDate }: { startDate: string }) {
  const [daysLeft, setDaysLeft] = useState<number>(0);

  // Calculate days left for 15-day internship
  useEffect(() => {
    if (!startDate) return;
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(start);
    end.setDate(start.getDate() + 15);
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    setDaysLeft(diff > 0 ? diff : 0);
  }, [startDate]);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 shadow space-y-6">
      <div className="flex items-center gap-4">
        <Star className="w-8 h-8 text-yellow-500" />
        <h2 className="text-2xl font-bold text-green-900 dark:text-green-100">
          Internship Achievements & Progress
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            {daysLeft > 0
              ? `Only ${daysLeft} day${daysLeft > 1 ? "s" : ""} left to complete your 15-day internship!`
              : "Congratulations! You have completed your 15-day internship period."}
          </p>
          <p className="text-blue-800 dark:text-blue-200">
            Be a consistent intern – minimum <span className="font-bold">80% attendance</span> is mandatory.
            <br />
            <span className="font-semibold">Login:</span> 9:30 AM &nbsp; <span className="font-semibold">Logout:</span> 4:00 PM
            <br />
            All your time and attendance are tracked by the Ecocee website.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-5xl font-extrabold text-green-700 dark:text-green-300">
            {daysLeft > 0 ? daysLeft : 0}
          </span>
          <span className="text-sm text-green-900 dark:text-green-100">Days Left</span>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900 text-yellow-900 dark:text-yellow-100 text-center">
        <p>
          <span className="font-semibold">Note:</span> On the last day, if you have maintained at least 80% attendance,
          you will receive your <span className="font-bold">Internship Certificate</span> from Ecocee!
        </p>
      </div>
    </div>
  );
}

export default function InternLayout() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "learning" | "calendar" | "messages" | "achievements">("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(colorThemes[0]);
  const [showSettings, setShowSettings] = useState(false);
  const { user, isLoaded } = useUser();
  const { userId } = useAuth(); // Get the logged-in user's ID

  // Only show the name for the logged-in user
  const internName =
    isLoaded && user && userId === user.id
      ? [user.firstName, user.lastName].filter(Boolean).join(" ")
      : "Intern";

  const [internStartDate, setInternStartDate] = useState<string>("");

  // Fetch intern start date from your users table or Clerk metadata
  useEffect(() => {
    if (isLoaded && user) {
      // Example: get from Clerk publicMetadata or fallback to today
      const start = user.publicMetadata?.internshipStartDate as string | undefined;
      setInternStartDate(start || new Date().toISOString().split("T")[0]);
    }
  }, [isLoaded, user]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedThemeName = localStorage.getItem("intern-theme");
      if (savedThemeName) {
        const found = colorThemes.find(t => t.name === savedThemeName);
        if (found) {
          setCurrentTheme(found);
          document.documentElement.style.setProperty('--primary-color', found.primary);
          document.documentElement.style.setProperty('--secondary-color', found.secondary);
        }
      } else {
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
      localStorage.setItem("intern-theme", theme.name);
    }
  };

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
      id: "dashboard" as const,
      icon: <Shield className="w-5 h-5" />,
      label: "Dashboard",
      description: "Overview & quick stats"
    },
    {
      id: "learning" as const,
      icon: <BookOpen className="w-5 h-5" />,
      label: "Learning",
      description: "Your learning modules"
    },
    {
      id: "calendar" as const,
      icon: <Calendar className="w-5 h-5" />,
      label: "Calendar",
      description: "Schedule & events"
    },
    {
      id: "messages" as const,
      icon: <MessageCircle className="w-5 h-5" />,
      label: "Messages",
      description: "Mentor & peer chat"
    },
    {
      id: "achievements" as const,
      icon: <Award className="w-5 h-5" />,
      label: "Achievements",
      description: "Your milestones"
    },
   
  ];

  return (
    <div className="flex h-full bg-gradient-to-br from-slate-100 via-white to-slate-200 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors">
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
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
        className="fixed md:static top-0 left-0 z-50 h-full w-80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-white/20 dark:border-slate-700/50 flex flex-col shadow-xl"
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/10 dark:border-slate-700/50">
          <div className="flex items-center space-x-3 mb-4">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${currentTheme.gradient} rounded-xl flex items-center justify-center shadow-lg`}
            >
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Ecocee Intern</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Welcome, {internName}</p>
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
            <Palette className="w-5 h-5" />
            <span className="font-medium">Personalize</span>
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

          {/* Intern Info */}
          <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-xl">
            <div className="w-8 h-8 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-white truncate">
                {internName}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Intern</p>
            </div>
            <Bell className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/50 px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight drop-shadow-sm">
                {tabItems.find(item => item.id === activeTab)?.label}
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {tabItems.find(item => item.id === activeTab)?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-br from-white/80 to-slate-100/60 dark:from-slate-900/80 dark:to-slate-800/60 transition-colors">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {/* Dashboard summary */}
              {activeTab === "dashboard" && isLoaded && user && (
                <DashboardSummary userId={user.id} />
              )}
              {/* Show ModuleViewer only for interns and only in the Learning tab */}
              {activeTab === "learning" && (
                <ModuleViewer />
              )}
              {/* Achievements tab: show countdown and rules */}
              {activeTab === "achievements" && (
                <AchievementsTab startDate={internStartDate} />
              )}
              {/* ...existing content for each tab... */}
             
              <InternTabContent tab={activeTab} />
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
  active,
  onClick,
  theme
}: {
  icon: React.ReactNode;
  label: string;
  description: string;
  active: boolean;
  onClick: () => void;
  theme: typeof colorThemes[0];
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.04, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className={`relative w-full flex items-center space-x-3 px-4 py-4 rounded-xl text-left transition-all duration-200 group ${
        active
          ? 'text-white shadow-lg'
          : 'text-slate-600 dark:text-slate-300 hover:bg-white/60 dark:hover:bg-slate-800/60'
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




