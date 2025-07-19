"use client";

import { useState, useEffect } from "react";

type Booking = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  area: string;
  user_type: string;
  how_did_you_know: string;
  status: string;
  created_at?: string;
  updated_at?: string;
};

export default function BookingsAdminView() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [bulkStatus, setBulkStatus] = useState<string>("pending");

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    setLoading(true);
    try {
      const res = await fetch("/api/bookings/view");
      const data = await res.json();
      setBookings(data || []);
    } catch (error) {
      console.error("Failed to load bookings", error);
    }
    setLoading(false);
  }

  async function updateStatus(id: number, status: string) {
    await fetch(`/api/bookings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
  }

  async function deleteBooking(id: number) {
    await fetch(`/api/bookings/${id}`, { method: "DELETE" });
  }

  async function handleBulkStatusUpdate() {
    for (const id of selectedIds) {
      await updateStatus(id, bulkStatus);
    }
    fetchBookings();
  }

  async function handleBulkDelete() {
    if (!confirm("Are you sure you want to delete selected bookings?")) return;
    for (const id of selectedIds) {
      await deleteBooking(id);
    }
    setSelectedIds([]);
    fetchBookings();
  }

  function toggleSelectAll() {
    if (selectedIds.length === bookings.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(bookings.map(b => b.id));
    }
  }

  function toggleSelect(id: number) {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="font-bold text-2xl mb-4 text-gray-800">Bookings Dashboard</h2>

      {selectedIds.length > 0 && (
        <div className="mb-4 flex flex-wrap items-center gap-4 bg-gray-100 p-4 rounded-lg shadow">
          <span className="font-medium">Selected: {selectedIds.length}</span>
          <select
            value={bulkStatus}
            onChange={e => setBulkStatus(e.target.value)}
            className="border rounded p-1 text-sm"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
          <button
            onClick={handleBulkStatusUpdate}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
          >
            Apply Status to Selected
          </button>
          <button
            onClick={handleBulkDelete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
          >
            Delete Selected
          </button>
        </div>
      )}

      {loading ? (
        <p className="text-gray-600">Loading bookings...</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow bg-white">
          <table className="min-w-full text-sm text-left">
            <thead className="sticky top-0 bg-gray-200 text-gray-700 uppercase text-xs">
              <tr>
                <th className="p-3">
                  <input
                    type="checkbox"
                    checked={selectedIds.length === bookings.length && bookings.length > 0}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="p-3">ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Service</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map(b => (
                <tr
                  key={b.id}
                  className="border-b hover:bg-gray-50 odd:bg-white even:bg-gray-50"
                >
                  <td className="p-3">
                    <input
                      type="checkbox"
                      checked={selectedIds.includes(b.id)}
                      onChange={() => toggleSelect(b.id)}
                    />
                  </td>
                  <td className="p-3">{b.id}</td>
                  <td className="p-3">{b.name}</td>
                  <td className="p-3">{b.email}</td>
                  <td className="p-3">{b.phone}</td>
                  <td className="p-3">{b.service}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        b.status === "completed"
                          ? "bg-green-200 text-green-800"
                          : b.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="p-3 space-y-1 flex flex-col">
                    <button
                      onClick={() => {
                        updateStatus(b.id, "pending").then(fetchBookings);
                      }}
                      className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                    >
                      Set Pending
                    </button>
                    <button
                      onClick={() => {
                        updateStatus(b.id, "completed").then(fetchBookings);
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                    >
                      Set Completed
                    </button>
                    <button
                      onClick={() => {
                        updateStatus(b.id, "not completed").then(fetchBookings);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                    >
                      Set Not Completed
                    </button>
                    <button
                      onClick={() => {
                        deleteBooking(b.id).then(fetchBookings);
                      }}
                      className="bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded text-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
