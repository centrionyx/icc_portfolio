"use client";

import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  Search,
  SlidersHorizontal,
  Trash2,
  MoreVertical,
  Mail,
  Phone,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowUpDown
} from "lucide-react";

function getInitials(name) {
  if (!name) return "EN";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function getAvatarColor(name) {
  const colors = [
    "bg-purple-100 text-purple-700 border-purple-200",
    "bg-emerald-100 text-emerald-700 border-emerald-200",
    "bg-amber-100 text-amber-700 border-amber-200",
    "bg-blue-100 text-blue-700 border-blue-200",
    "bg-rose-100 text-rose-700 border-rose-200",
    "bg-sky-100 text-sky-700 border-sky-200",
  ];
  let charCode = 0;
  for (let i = 0; i < (name || "").length; i++) {
    charCode += name.charCodeAt(i);
  }
  return colors[charCode % colors.length];
}

function EnquiryTableRow({
  enq,
  isUpdatingEnquiry,
  handleUpdateEnquiryStatus,
  handleDeleteEnquiry,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = getInitials(enq.name);
  const avatarStyle = getAvatarColor(enq.name);
  const submittedDate = enq.createdAt
    ? new Date(enq.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "12 May 2024";

  return (
    <tr className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-b-0 group">
      {/* 1. CLIENT */}
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border shrink-0 ${avatarStyle}`}
          >
            {initials}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              {enq.name}
            </h4>
            <span className="inline-block bg-blue-50 text-[#005ea6] border border-blue-200/60 font-semibold px-2 py-0.5 rounded-md text-[10px] mt-0.5">
              {enq.projectType || "General Quote"}
            </span>
          </div>
        </div>
      </td>

      {/* 2. CONTACT INFO */}
      <td className="py-4 px-6">
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <Mail size={13} className="text-slate-400 shrink-0" />
            <span>{enq.email}</span>
          </div>
          {enq.phone && (
            <div className="flex items-center gap-1.5 text-slate-500 font-mono text-[11px]">
              <Phone size={13} className="text-slate-400 shrink-0" />
              <span>{enq.phone}</span>
            </div>
          )}
        </div>
      </td>

      {/* 3. MESSAGE / NOTES */}
      <td className="py-4 px-6 max-w-xs">
        <p className="line-clamp-2 text-xs text-slate-600 font-normal leading-relaxed">
          {enq.message || "No detailed message provided."}
        </p>
      </td>

      {/* 4. SUBMITTED DATE */}
      <td className="py-4 px-6 text-xs font-medium text-slate-600 whitespace-nowrap">
        {submittedDate}
      </td>

      {/* 5. STATUS */}
      <td className="py-4 px-6 whitespace-nowrap">
        <select
          disabled={isUpdatingEnquiry}
          value={enq.status || "New"}
          onChange={(e) => handleUpdateEnquiryStatus(enq._id, e.target.value)}
          className={`text-xs font-semibold px-3 py-1.5 rounded-xl border focus:outline-none cursor-pointer transition-all ${
            enq.status === "New"
              ? "bg-blue-50 text-blue-700 border-blue-200/60"
              : enq.status === "Contacted"
              ? "bg-amber-50 text-amber-700 border-amber-200/60"
              : enq.status === "In Progress"
              ? "bg-indigo-50 text-indigo-700 border-indigo-200/60"
              : "bg-emerald-50 text-emerald-700 border-emerald-200/60"
          }`}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </td>

      {/* 6. ACTION */}
      <td className="py-4 px-6 text-right relative">
        <div className="relative inline-block text-left" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Actions"
          >
            <MoreVertical size={16} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-1 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-fade-in text-left">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleDeleteEnquiry(enq._id);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
              >
                <Trash2 size={13} className="text-rose-500" /> Delete Request
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default function EnquiriesTab({
  enquiries = [],
  enquiryStats = { total: 0, new: 0, contacted: 0, inProgress: 0, closed: 0 },
  onRefresh,
}) {
  const [isUpdatingEnquiry, setIsUpdatingEnquiry] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortAsc, setSortAsc] = useState(false);

  const handleUpdateEnquiryStatus = async (id, newStatus) => {
    setIsUpdatingEnquiry(true);
    try {
      const res = await fetch("/api/admin/enquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        if (onRefresh) await onRefresh();
      } else {
        alert("Failed to update enquiry status.");
      }
    } catch (err) {
      console.error("Error updating enquiry:", err);
    } finally {
      setIsUpdatingEnquiry(false);
    }
  };

  const handleDeleteEnquiry = async (id) => {
    if (!confirm("Are you sure you want to delete this consultation enquiry?")) return;
    try {
      const res = await fetch(`/api/admin/enquiries?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        if (onRefresh) await onRefresh();
      } else {
        alert("Failed to delete enquiry.");
      }
    } catch (err) {
      console.error("Error deleting enquiry:", err);
    }
  };

  // Filter & Sort Logic
  const filteredEnquiries = enquiries
    .filter((enq) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = enq.name && enq.name.toLowerCase().includes(q);
        const matchEmail = enq.email && enq.email.toLowerCase().includes(q);
        const matchMessage = enq.message && enq.message.toLowerCase().includes(q);
        if (!matchName && !matchEmail && !matchMessage) return false;
      }
      if (statusFilter !== "All") {
        if (enq.status !== statusFilter) return false;
      }
      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || 0).getTime();
      const dateB = new Date(b.createdAt || 0).getTime();
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="space-y-6">
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-1">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <MessageSquare size={18} className="text-[#005ea6]" /> Consultation Enquiries
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Track and audit incoming quote requests and consultation forms submitted via the website.
          </p>
        </div>
      </div>

      {/* KPI Stats Cards Row (5 Cards) */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {/* Card 1: Total */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">
            Total Requests
          </p>
          <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-sans">
            {enquiryStats.total}
          </h3>
        </div>

        {/* Card 2: New */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600 font-mono">
            New / Unread
          </p>
          <h3 className="text-2xl font-extrabold text-blue-600 mt-1 font-sans">
            {enquiryStats.new}
          </h3>
        </div>

        {/* Card 3: Contacted */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600 font-mono">
            Contacted
          </p>
          <h3 className="text-2xl font-extrabold text-amber-600 mt-1 font-sans">
            {enquiryStats.contacted}
          </h3>
        </div>

        {/* Card 4: In Progress */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
          <p className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 font-mono">
            In Progress
          </p>
          <h3 className="text-2xl font-extrabold text-indigo-600 mt-1 font-sans">
            {enquiryStats.inProgress}
          </h3>
        </div>

        {/* Card 5: Closed */}
        <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs col-span-2 md:col-span-1">
          <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 font-mono">
            Closed / Won
          </p>
          <h3 className="text-2xl font-extrabold text-emerald-600 mt-1 font-sans">
            {enquiryStats.closed}
          </h3>
        </div>
      </div>

      {/* Filter Controls Row */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row items-center gap-3 flex-1">
          {/* Search Bar */}
          <div className="relative flex-1 w-full sm:max-w-xs">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by client name, email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>

          {/* Status Filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full sm:w-44 px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <button
          onClick={() => {
            setSearchQuery("");
            setStatusFilter("All");
          }}
          className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2 cursor-pointer shadow-2xs"
        >
          <SlidersHorizontal size={14} className="text-slate-500" /> Reset Filters
        </button>
      </div>

      {/* Main Enquiries Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[850px]">
          <thead>
            <tr className="border-b border-slate-200/80">
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                CLIENT
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                CONTACT INFO
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                MESSAGE / NOTES
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                <button
                  onClick={() => setSortAsc(!sortAsc)}
                  className="flex items-center gap-1.5 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  SUBMITTED ON <ArrowUpDown size={12} />
                </button>
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                STATUS
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono text-right">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60">
            {filteredEnquiries.map((enq) => (
              <EnquiryTableRow
                key={enq._id}
                enq={enq}
                isUpdatingEnquiry={isUpdatingEnquiry}
                handleUpdateEnquiryStatus={handleUpdateEnquiryStatus}
                handleDeleteEnquiry={handleDeleteEnquiry}
              />
            ))}

            {filteredEnquiries.length === 0 && (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400 text-xs font-medium">
                  No consultation enquiries matching your search filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
