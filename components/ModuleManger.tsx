"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useUser } from "@clerk/nextjs";
import { Edit3, Trash2, Link as LinkIcon, PlusCircle, Save } from "lucide-react";

interface Module {
  id: number;
  title: string;
  description: string;
  link?: string;
  created_at: string;
}

interface ModuleRead {
  id: number;
  module_id: number;
  user_id: string;
  read: boolean;
  read_at: string | null;
}

interface ClerkUser {
  name: string;
  email: string;
}

interface ModuleManagerProps {
  role: "admin" | "moderator" | "intern";
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function ModuleManager({ role }: ModuleManagerProps) {
  const [modules, setModules] = useState<Module[]>([]);
  const [reads, setReads] = useState<ModuleRead[]>([]);
  const [users, setUsers] = useState<Record<string, ClerkUser>>({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const supabase = createClientComponentClient();
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-40">
        <span className="animate-pulse text-muted-foreground">Loading...</span>
      </div>
    );
  }

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      const res = await fetch("/api/modules");
      if (res.ok) {
        const data = await res.json();
        // For admin/moderator, API returns { modules, reads, users }
        if ((role === "admin" || role === "moderator") && data.modules && data.reads) {
          setModules(data.modules);
          setReads(data.reads);
          setUsers(data.users || {});
        } else if (Array.isArray(data)) {
          setModules(data);
          setReads([]);
          setUsers({});
        } else {
          setModules([]);
          setReads([]);
          setUsers({});
        }
      } else {
        setModules([]);
        setReads([]);
        setUsers({});
      }
      setLoading(false);
    };

    fetchModules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [role, user, isLoaded]);

  const handleAddOrEdit = async () => {
    setLoading(true);
    const method = editingId !== null ? "PUT" : "POST";
    const body = {
      title,
      description,
      link,
      ...(editingId !== null && { id: editingId }),
    };
    const res = await fetch("/api/modules", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      const updatedModule = await res.json();
      if (editingId !== null) {
        setModules((prev) =>
          prev.map((mod) => (mod.id === editingId ? updatedModule : mod))
        );
        setEditingId(null);
      } else {
        setModules((prev) => [updatedModule, ...prev]);
      }
      setTitle("");
      setDescription("");
      setLink("");
    }
    setLoading(false);
  };

  const handleEdit = (mod: Module) => {
    setTitle(mod.title);
    setDescription(mod.description);
    setLink(mod.link || "");
    setEditingId(mod.id);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this module?")) return;
    setLoading(true);
    try {
      // First, delete all module_reads for this module (to satisfy FK constraint)
      const readsRes = await fetch("/api/module_reads", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ module_id: id }),
      });
      // Try to parse JSON error if not ok, otherwise fallback to text
      if (!readsRes.ok) {
        let error = "";
        try {
          const data = await readsRes.json();
          error = data?.error || JSON.stringify(data);
        } catch {
          error = await readsRes.text();
        }
        alert("Failed to delete module reads: " + error);
        setLoading(false);
        return;
      }
      // Now delete the module
      const res = await fetch("/api/modules", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setModules((prev) => prev.filter((mod) => mod.id !== id));
      } else {
        const error = await res.text();
        alert("Failed to delete module: " + error);
      }
    } catch (err) {
      alert("An error occurred while deleting the module.");
    }
    setLoading(false);
  };

  // Admin/moderator: show read status table and summary
  if (role === "admin" || role === "moderator") {
    // Calculate summary: for each module, how many interns marked as read
    const moduleReadSummary = modules.map((mod) => {
      const readRows = reads.filter((r) => r.module_id === mod.id && r.read);
      return {
        moduleId: mod.id,
        title: mod.title,
        count: readRows.length,
        users: readRows.map((r) => users[r.user_id] || { name: r.user_id, email: "" }),
      };
    });

    return (
      <div className="max-w-5xl mx-auto py-8">
        <h2 className="text-3xl font-extrabold mb-2 text-center tracking-tight">
          📚 Module Manager
        </h2>
        <p className="text-center text-muted-foreground mb-8">
          Manage your modules, share materials, and view intern read status.
        </p>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 mb-8 border border-muted">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <PlusCircle className="w-5 h-5" />{" "}
            {editingId ? "Edit Module" : "Add New Module"}
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <Input
              placeholder="Module title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="sm:col-span-1"
            />
            <Input
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="sm:col-span-1"
            />
            <Input
              placeholder="Material link (optional)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="sm:col-span-1"
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button
              onClick={handleAddOrEdit}
              disabled={loading || !title || !description}
              className="flex items-center gap-2"
            >
              {editingId !== null ? (
                <>
                  <Save className="w-4 h-4" /> Update Module
                </>
              ) : (
                <>
                  <PlusCircle className="w-4 h-4" /> Add Module
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {modules.length === 0 && (
            <div className="text-center text-muted-foreground py-8">
              No modules found.
            </div>
          )}
          {modules.map((mod, idx) => (
            <div
              key={mod.id}
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 flex flex-col sm:flex-row sm:items-center justify-between border border-muted relative"
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-xl mb-1 truncate">{mod.title}</h3>
                <p className="text-sm text-muted-foreground mb-2 break-words">
                  {mod.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Created: {formatDate(mod.created_at)}</span>
                  {mod.link && (
                    <>
                      <span className="mx-1">|</span>
                      <a
                        href={mod.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <LinkIcon className="w-4 h-4" /> Material
                      </a>
                    </>
                  )}
                </div>
              </div>
              {/* Edit/Delete buttons for admin/moderator */}
              <div className="flex gap-2 mt-4 sm:mt-0 sm:ml-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleEdit(mod)}
                  title="Edit"
                  className="text-blue-600 border-blue-200 hover:bg-blue-50"
                >
                  <Edit3 className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDelete(mod.id)}
                  title="Delete"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <Trash2 className="w-5 h-5" />
                </Button>
              </div>
              {idx < modules.length - 1 && (
                <div className="absolute left-0 right-0 bottom-0 h-px bg-muted-foreground opacity-10" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Intern Read Summary</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-2 border">Module</th>
                  <th className="px-3 py-2 border"># Interns Read</th>
                  <th className="px-3 py-2 border">Interns (Name & Email)</th>
                </tr>
              </thead>
              <tbody>
                {moduleReadSummary.map((row) => (
                  <tr key={row.moduleId}>
                    <td className="px-3 py-2 border">{row.title}</td>
                    <td className="px-3 py-2 border text-center">{row.count}</td>
                    <td className="px-3 py-2 border">
                      {row.users.length === 0
                        ? <span className="text-muted-foreground">None</span>
                        : (
                          <ul className="list-disc ml-4">
                            {row.users.map((u, idx) => (
                              <li key={u.email + idx}>
                                <span className="font-medium">{u.name}</span>
                                {u.email && <span className="ml-2 text-xs text-muted-foreground">{u.email}</span>}
                              </li>
                            ))}
                          </ul>
                        )
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mb-4">Intern Read Status (Detailed)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm">
              <thead>
                <tr className="bg-muted">
                  <th className="px-3 py-2 border">Module</th>
                  <th className="px-3 py-2 border">Intern Name</th>
                  <th className="px-3 py-2 border">Intern Email</th>
                  <th className="px-3 py-2 border">Read</th>
                  <th className="px-3 py-2 border">Read At</th>
                </tr>
              </thead>
              <tbody>
                {reads.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-4 text-muted-foreground">
                      No read status found.
                    </td>
                  </tr>
                )}
                {reads.map((read) => {
                  const mod = modules.find((m) => m.id === read.module_id);
                  const user = users[read.user_id] || { name: read.user_id, email: "" };
                  return (
                    <tr key={read.id}>
                      <td className="px-3 py-2 border">{mod ? mod.title : "Unknown"}</td>
                      <td className="px-3 py-2 border">{user.name}</td>
                      <td className="px-3 py-2 border">{user.email}</td>
                      <td className="px-3 py-2 border">
                        {read.read ? (
                          <span className="text-green-600 font-semibold">Read</span>
                        ) : (
                          <span className="text-red-600 font-semibold">Not Read</span>
                        )}
                      </td>
                      <td className="px-3 py-2 border">
                        {read.read_at ? formatDate(read.read_at) : "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-extrabold mb-2 text-center tracking-tight">
        📚 Module Manager
      </h2>
      <p className="text-center text-muted-foreground mb-8">
        Manage your modules, share materials, and keep everything organized.
      </p>


      <div className="space-y-6">
        {modules.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            No modules found.
          </div>
        )}
        {modules.map((mod, idx) => (
          <div
            key={mod.id}
            className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 flex flex-col sm:flex-row sm:items-center justify-between border border-muted relative"
          >
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-xl mb-1 truncate">{mod.title}</h3>
              <p className="text-sm text-muted-foreground mb-2 break-words">
                {mod.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Created: {formatDate(mod.created_at)}</span>
                {mod.link && (
                  <>
                    <span className="mx-1">|</span>
                    <a
                      href={mod.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <LinkIcon className="w-4 h-4" /> Material
                    </a>
                  </>
                )}
              </div>
            </div>
            {/* Edit/Delete buttons are not shown for interns */}
            {idx < modules.length - 1 && (
              <div className="absolute left-0 right-0 bottom-0 h-px bg-muted-foreground opacity-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
