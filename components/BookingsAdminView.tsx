"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Download, Trash2, Eye, EyeOff, Calendar, User, Mail, Phone, MapPin, Tag, Clock, UserCheck } from "lucide-react";

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
  created_at: string;
  updated_at: string;
  clerk_user_id: string;
};

export default function BookingsAdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [bulkStatus, setBulkStatus] = useState<string>("pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    completed: 0,
    notCompleted: 0
  });

  useEffect(() => {
    fetchBookings();
  }, []);

  useEffect(() => {
    filterBookings();
    calculateStats();
  }, [bookings, searchTerm, statusFilter, serviceFilter]);

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

  function filterBookings() {
    let filtered = bookings;

    if (searchTerm) {
      filtered = filtered.filter(booking =>
        booking.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.phone.includes(searchTerm) ||
        booking.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.area.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(booking => booking.status === statusFilter);
    }

    if (serviceFilter !== "all") {
      filtered = filtered.filter(booking => booking.service === serviceFilter);
    }

    setFilteredBookings(filtered);
  }

  function calculateStats() {
    const total = bookings.length;
    const pending = bookings.filter(b => b.status === "pending").length;
    const completed = bookings.filter(b => b.status === "completed").length;
    const notCompleted = bookings.filter(b => b.status === "not completed").length;
    
    setStats({ total, pending, completed, notCompleted });
  }

  async function updateStatus(id: number, status: string) {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status } : b)); // Optimistic UI
    try {
      await fetch(`/api/bookings/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      // Optionally refetch for accuracy
      fetchBookings();
    } catch (error) {
      console.error("Failed to update status", error);
    }
  }

  async function deleteBooking(id: number) {
    try {
      await fetch(`/api/bookings/${id}`, { method: "DELETE" });
      fetchBookings();
    } catch (error) {
      console.error("Failed to delete booking", error);
    }
  }

  async function handleBulkStatusUpdate() {
    for (const id of selectedIds) {
      await updateStatus(id, bulkStatus);
    }
    setSelectedIds([]);
  }

  async function handleBulkDelete() {
    if (!confirm("Are you sure you want to delete selected bookings?")) return;
    for (const id of selectedIds) {
      await deleteBooking(id);
    }
    setSelectedIds([]);
  }

  function toggleSelectAll() {
    if (selectedIds.length === filteredBookings.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredBookings.map(b => b.id));
    }
  }

  function toggleSelect(id: number) {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  const uniqueServices = [...new Set(bookings.map(b => b.service))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Bookings Dashboard</h1>
              <p className="text-slate-600 mt-1">Manage and track all your service bookings</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors shadow">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Tag className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Total Bookings</p>
                <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Pending</p>
                <p className="text-2xl font-bold text-slate-900">{stats.pending}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Completed</p>
                <p className="text-2xl font-bold text-slate-900">{stats.completed}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Not Completed</p>
                <p className="text-2xl font-bold text-slate-900">{stats.notCompleted}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Filters and Search */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6 sticky top-20 z-10">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search bookings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="not completed">Not Completed</option>
              </select>

              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Services</option>
                {uniqueServices.map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Bulk Actions */}
        {selectedIds.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-6 sticky top-36 z-10">
            <div className="flex items-center justify-between">
              <span className="text-slate-700 font-medium">
                {selectedIds.length} booking{selectedIds.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex items-center gap-4">
                <select
                  value={bulkStatus}
                  onChange={(e) => setBulkStatus(e.target.value)}
                  className="px-3 py-2 border border-slate-300 rounded-lg text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="not completed">Not Completed</option>
                </select>
                <button
                  onClick={handleBulkStatusUpdate}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Update Status
                </button>
                <button
                  onClick={handleBulkDelete}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Delete Selected
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Table */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-3 text-slate-600">Loading bookings...</span>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50 sticky top-0 z-10">
                <tr>
                  <th className="px-6 py-3 text-left bg-slate-50">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === filteredBookings.length && filteredBookings.length > 0}
                      onChange={toggleSelectAll}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(booking.id)}
                        onChange={() => toggleSelect(booking.id)}
                        className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow">
                            <span className="text-sm font-medium text-white">
                              {booking.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-slate-900">{booking.name}</div>
                          <div className="text-sm text-slate-500 flex items-center gap-1">
                            <Mail size={12} />
                            {booking.email}
                          </div>
                          <div className="text-sm text-slate-500 flex items-center gap-1">
                            <Phone size={12} />
                            {booking.phone}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-slate-900 font-medium">{booking.service}</div>
                      <div className="text-sm text-slate-500 flex items-center gap-1">
                        <MapPin size={12} />
                        {booking.area}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">Type: {booking.user_type}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {["pending", "completed", "not completed"].map(s => (
                          <span
                            key={s}
                            onClick={() => updateStatus(booking.id, s)}
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full shadow cursor-pointer transition-all duration-150 border ${{
                              completed: "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
                              pending: "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200",
                              "not completed": "bg-red-100 text-red-800 border-red-200 hover:bg-red-200"
                            }[s] || "bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200"} ${booking.status === s ? "ring-2 ring-blue-400" : "opacity-70"}`}
                            title={`Set status: ${s}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {formatDate(booking.created_at)}
                      </div>
                      {booking.updated_at !== booking.created_at && (
                        <div className="text-xs text-slate-400 mt-1">Updated: {formatDate(booking.updated_at)}</div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedBooking(booking);
                            setShowDetails(true);
                          }}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                          title="View Details"
                        >
                          <Eye size={16} />
                        </button>
                        <div className="flex gap-1">
                          <button
                            onClick={() => updateStatus(booking.id, "pending")}
                            className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition-colors shadow"
                            title="Set Pending"
                          >P</button>
                          <button
                            onClick={() => updateStatus(booking.id, "completed")}
                            className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded hover:bg-green-200 transition-colors shadow"
                            title="Set Completed"
                          >C</button>
                          <button
                            onClick={() => updateStatus(booking.id, "not completed")}
                            className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded hover:bg-red-200 transition-colors shadow"
                            title="Set Not Completed"
                          >NC</button>
                        </div>
                        <button
                          onClick={() => {
                            if (confirm("Are you sure you want to delete this booking?")) {
                              deleteBooking(booking.id);
                            }
                          }}
                          className="text-red-600 hover:text-red-900 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {/* Details Modal */}
      {showDetails && selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900">Booking Details</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <EyeOff size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Name</label>
                  <p className="text-slate-900 mt-1">{selectedBooking.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Email</label>
                  <p className="text-slate-900 mt-1">{selectedBooking.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Phone</label>
                  <p className="text-slate-900 mt-1">{selectedBooking.phone}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Service</label>
                  <p className="text-slate-900 mt-1">{selectedBooking.service}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Area</label>
                  <p className="text-slate-900 mt-1">{selectedBooking.area}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">User Type</label>
                  <p className="text-slate-900 mt-1">{selectedBooking.user_type}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">How did you know about us?</label>
                  <p className="text-slate-900 mt-1">{selectedBooking.how_did_you_know}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Status</label>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full mt-1 ${
                    selectedBooking.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : selectedBooking.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {selectedBooking.status}
                  </span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Description</label>
                <p className="text-slate-900 mt-1 bg-slate-50 p-3 rounded-lg shadow">{selectedBooking.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-600">Created At</label>
                  <p className="text-slate-900 mt-1">{formatDate(selectedBooking.created_at)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600">Updated At</label>
                  <p className="text-slate-900 mt-1">{formatDate(selectedBooking.updated_at)}</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-600">Clerk User ID</label>
                <p className="text-slate-900 mt-1 text-xs bg-slate-50 p-2 rounded font-mono shadow">{selectedBooking.clerk_user_id}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}