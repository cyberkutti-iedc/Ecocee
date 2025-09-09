"use client";

import { useState } from "react";
import { setRole, removeRole } from "@/app/actions/role";
import { Loader2, User, ShieldCheck, Trash2 } from "lucide-react";
import type { SerializedUser } from "@/types/user";
import { motion } from "framer-motion";

interface UserRoleManagerProps {
  users: SerializedUser[];
}

const ROLE_LABELS: Record<string, string> = {
  admin: "Admin",
  moderator: "Moderator",
  intern: "Intern",
  user: "User",
};

const ROLE_COLORS: Record<string, string> = {
  admin: "bg-indigo-100 text-indigo-700 dark:bg-indigo-800 dark:text-indigo-100",
  moderator: "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-100",
  intern: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-100",
  user: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100",
};

export function UserRoleManager({ users }: UserRoleManagerProps) {
  const [loadingUserId, setLoadingUserId] = useState<string | null>(null);
  const [selectedRole, setSelectedRole] = useState<Record<string, string>>({});
  const [page, setPage] = useState(1);
  const USERS_PER_PAGE = 10;
  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
  const paginatedUsers = users.slice((page - 1) * USERS_PER_PAGE, page * USERS_PER_PAGE);

  const handleSetRole = async (formData: FormData) => {
    const userId = formData.get("id") as string;
    setLoadingUserId(userId);
    try {
      await setRole(formData);
    } catch (error) {
      console.error("Error setting role:", error);
    } finally {
      setLoadingUserId(null);
    }
  };

  const handleRemoveRole = async (formData: FormData) => {
    const userId = formData.get("id") as string;
    setLoadingUserId(userId);
    try {
      await removeRole(formData);
    } catch (error) {
      console.error("Error removing role:", error);
    } finally {
      setLoadingUserId(null);
    }
  };

  return (
    <div className="space-y-7">
      <div className="sticky top-0 z-10 bg-white dark:bg-gray-900 py-4 mb-4 shadow-sm rounded-xl flex items-center justify-between px-6">
        <span className="font-bold text-lg text-indigo-700 dark:text-indigo-300">User Role Manager</span>
        <div className="flex items-center gap-2">
          <button
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold disabled:opacity-50"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="font-medium text-sm mx-2">
            Page {page} / {totalPages}
          </span>
          <button
            className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-semibold disabled:opacity-50"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
      {paginatedUsers.length === 0 ? (
        <div className="text-center text-gray-500 py-10">No users found.</div>
      ) : (
        paginatedUsers.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 12px 24px rgba(0,0,0,0.12)" }}
            transition={{ type: "spring", stiffness: 280, damping: 25 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-7 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
          >
            {/* User Info */}
            <div className="flex items-center gap-5 flex-1 min-w-0">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden border-2 border-indigo-400 dark:border-indigo-600 shadow-sm shrink-0">
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={`${user.firstName} ${user.lastName}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <User className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                )}
              </div>
              <div className="flex flex-col truncate">
                <span className="font-semibold text-lg truncate flex items-center gap-2">
                  {user.firstName} {user.lastName}
                  {user.role && (
                    <>
                      <ShieldCheck className="w-4 h-4 text-indigo-500" />
                      <span className="sr-only">Has role</span>
                    </>
                  )}
                </span>
                <span className="text-sm lowercase truncate text-gray-500 dark:text-gray-400 select-all">
                  {user.email}
                </span>
                <span className="mt-1 text-xs flex items-center gap-2">
                  <span className="text-gray-400 dark:text-gray-500">Current Role:</span>
                  <span
                    className={`font-semibold px-2 py-0.5 rounded-full text-xs transition-all ${
                      user.role
                        ? ROLE_COLORS[user.role] || "bg-gray-200 text-gray-700"
                        : "bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500"
                    }`}
                  >
                    {user.role ? ROLE_LABELS[user.role] || user.role : "None"}
                  </span>
                </span>
              </div>
            </div>

            {/* Role Forms */}
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
              {/* Set Role */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSetRole(new FormData(e.currentTarget));
                }}
                className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-inner"
              >
                <input type="hidden" name="id" value={user.id} />
                <select
                  name="status"
                  value={selectedRole[user.id] ?? user.role ?? ""}
                  onChange={(e) =>
                    setSelectedRole((prev) => ({
                      ...prev,
                      [user.id]: e.target.value,
                    }))
                  }
                  className="p-2 text-sm rounded-md bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option value="" className="text-gray-400">
                    Select Role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="moderator">Moderator</option>
                  <option value="intern">Intern</option>
                  <option value="user">User</option>
                </select>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed shadow"
                  disabled={loadingUserId === user.id || !selectedRole[user.id]}
                  title="Set selected role"
                >
                  {loadingUserId === user.id ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      <ShieldCheck className="w-4 h-4" />
                      Set Role
                    </>
                  )}
                </button>
              </form>

              {/* Remove Role */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleRemoveRole(new FormData(e.currentTarget));
                }}
                className="flex items-center"
              >
                <input type="hidden" name="id" value={user.id} />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md bg-red-600 text-white hover:bg-red-700 active:scale-95 transition disabled:opacity-60 disabled:cursor-not-allowed shadow"
                  disabled={loadingUserId === user.id || !user.role}
                  title="Remove current role"
                >
                  {loadingUserId === user.id ? (
                    <Loader2 className="animate-spin w-5 h-5" />
                  ) : (
                    <>
                      <Trash2 className="w-4 h-4" />
                      Remove Role
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
}
