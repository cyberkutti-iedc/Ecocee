"use client";
import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Save, XCircle } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "react-hot-toast";

type InternshipCertificate = {
  id: number;
  full_name: string;
  batch: string;
  issued_on: string;
  unique_number: string;
  specification: string; // <-- new field
};

export default function InternshipCertificatesAdmin() {
  const [certificates, setCertificates] = useState<InternshipCertificate[]>([]);
  const [certificatesLoading, setCertificatesLoading] = useState(false);
  const [certError, setCertError] = useState<string | null>(null);
  const [showCertForm, setShowCertForm] = useState(false);
  const [editCert, setEditCert] = useState<InternshipCertificate | null>(null);
  const [formCert, setFormCert] = useState<Omit<InternshipCertificate, "id">>({
    full_name: "",
    batch: "",
    issued_on: "",
    unique_number: "",
    specification: "", // <-- new field
  });
  const [uniqueNumberMode, setUniqueNumberMode] = useState<"auto" | "manual">("auto");

  useEffect(() => {
    fetchCertificates();
  }, []);

  async function fetchCertificates() {
    setCertificatesLoading(true);
    setCertError(null);
    try {
      const res = await fetch("/api/internship-certificate", { method: "GET" });
      if (!res.ok) {
        const err = await res.json();
        setCertError(err.error || "Failed to fetch certificates");
        toast.error(err.error || "Failed to fetch certificates");
        setCertificatesLoading(false);
        return;
      }
      const data = await res.json();
      setCertificates(data.certificates || []);
    } catch (e: any) {
      setCertError(e.message || "Failed to fetch certificates");
      toast.error(e.message || "Failed to fetch certificates");
    }
    setCertificatesLoading(false);
  }

  async function handleCertDelete(id: number) {
    if (!window.confirm("Delete this certificate?")) return;
    try {
      const res = await fetch(`/api/internship-certificate?id=${id}`, { method: "DELETE" });
      if (!res.ok) {
        const err = await res.json();
        setCertError(err.error || "Delete failed");
        toast.error(err.error || "Delete failed");
        return;
      }
      fetchCertificates();
      toast.success("Certificate deleted successfully");
    } catch (e: any) {
      setCertError(e.message || "Delete failed");
      toast.error(e.message || "Delete failed");
    }
  }

  // Helper to generate a unique number not present in certificates
  function generateUniqueNumber(batch: string, existingNumbers: string[]) {
    let uniqueNumber = "";
    let tries = 0;
    do {
      const random = Math.floor(100000 + Math.random() * 900000); // 6 digits
      uniqueNumber = `ECOCEE-${batch || "BATCH"}-${random}`;
      tries++;
      // Avoid infinite loop in pathological cases
      if (tries > 20) break;
    } while (existingNumbers.includes(uniqueNumber));
    return uniqueNumber;
  }

  // When batch or mode changes, update unique number if in auto mode
  useEffect(() => {
    if (uniqueNumberMode === "auto") {
      setFormCert(f => ({
        ...f,
        unique_number: generateUniqueNumber(f.batch, certificates.map(c => c.unique_number)),
      }));
    }
    // eslint-disable-next-line
  }, [formCert.batch, uniqueNumberMode, certificates.map(c => c.unique_number).join(",")]);

  function handleCertAdd() {
    setEditCert(null);
    setFormCert({
      full_name: "",
      batch: "",
      issued_on: "",
      unique_number: uniqueNumberMode === "auto"
        ? generateUniqueNumber("", certificates.map(c => c.unique_number))
        : "",
      specification: "", // <-- new field
    });
    setShowCertForm(true);
  }

  function handleCertEdit(cert: InternshipCertificate) {
    setEditCert(cert);
    setFormCert({
      full_name: cert.full_name,
      batch: cert.batch,
      issued_on: cert.issued_on,
      unique_number: cert.unique_number,
      specification: cert.specification, // <-- new field
    });
    // If the unique number matches the auto pattern, set mode to auto, else manual
    if (cert.unique_number.startsWith("ECOCEE-")) {
      setUniqueNumberMode("auto");
    } else {
      setUniqueNumberMode("manual");
    }
    setShowCertForm(true);
  }

  async function handleCertFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCertError(null);
    try {
      let res;
      if (editCert) {
        res = await fetch(`/api/internship-certificate?id=${editCert.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formCert),
        });
      } else {
        res = await fetch("/api/internship-certificate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formCert),
        });
      }
      if (!res.ok) {
        const err = await res.json();
        setCertError(err.error || "Save failed");
        toast.error(err.error || "Save failed");
        return;
      }
      toast.success(editCert ? "Certificate updated successfully" : "Certificate added successfully");
      setShowCertForm(false);
      setEditCert(null);
      fetchCertificates();
    } catch (e: any) {
      setCertError(e.message || "Save failed");
      toast.error(e.message || "Save failed");
    }
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <Button
          onClick={handleCertAdd}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
        >
          <Plus className="w-5 h-5" /> Add Certificate
        </Button>
      </div>
      {certError && (
        <div className="mb-4 px-4 py-2 rounded-lg bg-red-100 text-red-700 border border-red-200">
          {certError}
        </div>
      )}
      {showCertForm && (
        <form
          onSubmit={handleCertFormSubmit}
          className="mb-8 bg-white dark:bg-slate-800/80 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl space-y-6 animate-fade-in"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Full Name
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="Full Name"
                value={formCert.full_name}
                onChange={e => setFormCert(f => ({ ...f, full_name: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Batch
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="Batch"
                value={formCert.batch}
                onChange={e => setFormCert(f => ({ ...f, batch: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Date of Issue
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-400 outline-none transition"
                type="date"
                placeholder="Issued On"
                value={formCert.issued_on}
                onChange={e => setFormCert(f => ({ ...f, issued_on: e.target.value }))}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Unique Number
              </label>
              <div className="flex items-center gap-3">
                <select
                  className="px-2 py-1 rounded border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100"
                  value={uniqueNumberMode}
                  onChange={e => setUniqueNumberMode(e.target.value as "auto" | "manual")}
                >
                  <option value="auto">Auto</option>
                  <option value="manual">Manual</option>
                </select>
                <input
                  className={`w-full min-w-0 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-400 outline-none transition font-mono tracking-wider ${uniqueNumberMode === "auto" ? "bg-gray-100 dark:bg-gray-800" : ""}`}
                  style={{ fontSize: "0.95rem" }}
                  placeholder="Unique Number"
                  value={formCert.unique_number}
                  onChange={e => setFormCert(f => ({ ...f, unique_number: e.target.value }))}
                  required
                  disabled={uniqueNumberMode === "auto"}
                  readOnly={uniqueNumberMode === "auto"}
                />
                {uniqueNumberMode === "auto" && (
                  <button
                    type="button"
                    className="ml-2 px-2 py-1 rounded bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 text-xs"
                    onClick={() =>
                      setFormCert(f => ({
                        ...f,
                        unique_number: generateUniqueNumber(formCert.batch, certificates.map(c => c.unique_number)),
                      }))
                    }
                    title="Regenerate"
                  >
                    Regenerate
                  </button>
                )}
              </div>
              {uniqueNumberMode === "auto" && (
                <div className="text-xs text-slate-500 mt-1 break-all">
                  Format: ECOCEE-&#123;batch&#125;-&#123;random&#125;<br />
                  Example: <span className="font-mono">{formCert.unique_number}</span>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Specification / Course Title
              </label>
              <input
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-blue-400 outline-none transition"
                placeholder="Specification or Course Title"
                value={formCert.specification}
                onChange={e => setFormCert(f => ({ ...f, specification: e.target.value }))}
                required
              />
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold shadow hover:from-green-700 hover:to-emerald-700 transition"
            >
              <Save className="w-5 h-5" /> {editCert ? "Update" : "Add"}
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 font-semibold transition"
              onClick={() => { setShowCertForm(false); setEditCert(null); }}
            >
              <XCircle className="w-5 h-5" /> Cancel
            </button>
          </div>
        </form>
      )}
      <div className="overflow-x-auto rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
        <table className="min-w-full divide-y divide-slate-100 dark:divide-slate-800">
          <thead>
            <tr className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40">
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Full Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Batch</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Issued On</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Unique Number</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Specification</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificatesLoading ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-lg text-blue-600">Loading...</td>
              </tr>
            ) : certificates.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center py-10 text-slate-400">No certificates found.</td>
              </tr>
            ) : (
              certificates.map(cert => (
                <tr key={cert.id} className="border-t border-slate-100 dark:border-slate-800 hover:bg-blue-50/40 dark:hover:bg-blue-900/20 transition">
                  <td className="px-6 py-3 font-medium text-slate-900 dark:text-slate-100">{cert.full_name}</td>
                  <td className="px-6 py-3 text-slate-700 dark:text-slate-300">{cert.batch}</td>
                  <td className="px-6 py-3 text-slate-700 dark:text-slate-300">
                    {cert.issued_on && new Date(cert.issued_on).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-3 font-mono text-blue-700 dark:text-blue-300">{cert.unique_number}</td>
                  <td className="px-6 py-3 text-slate-700 dark:text-slate-300">{cert.specification}</td>
                  <td className="px-6 py-3 flex gap-2">
                    <button
                      onClick={() => handleCertEdit(cert)}
                      className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-600 shadow transition"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleCertDelete(cert.id)}
                      className="p-2 rounded-lg bg-red-100 dark:bg-red-700 text-red-800 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-600 shadow transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
