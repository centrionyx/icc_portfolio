"use client";

import { useState, useRef, useEffect } from "react";
import {
  Users,
  Briefcase,
  Search,
  SlidersHorizontal,
  Download,
  MoreVertical,
  Pencil,
  Trash2,
  FileText,
  Plus,
  ArrowUpDown,
  TrendingUp,
  CheckCircle2,
  Clock,
  ChevronLeft,
  ChevronRight,
  UserCheck,
  UserX
} from "lucide-react";
import JobModal from "./JobModal";

function getInitials(name) {
  if (!name) return "AP";
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

function getStatusBadge(status) {
  const stat = (status || "Applied").toLowerCase();
  if (stat.includes("hired")) {
    return (
      <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
        Hired
      </span>
    );
  }
  if (stat.includes("interview") || stat.includes("shortlisted")) {
    return (
      <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
        Shortlisted
      </span>
    );
  }
  if (stat.includes("review") || stat.includes("under")) {
    return (
      <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200/60">
        In Review
      </span>
    );
  }
  if (stat.includes("declined") || stat.includes("rejected")) {
    return (
      <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200">
        Declined
      </span>
    );
  }
  return (
    <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60">
      New
    </span>
  );
}

function ApplicantRow({ app, handleDownloadResume, handleUpdateAppStatus, handleDeleteApp }) {
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

  const initials = getInitials(app.name);
  const avatarStyle = getAvatarColor(app.name);
  const appliedDate = app.createdAt
    ? new Date(app.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      })
    : "12 May 2024";

  return (
    <tr className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-b-0 group">
      {/* 1. APPLICANT */}
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <div
            className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs border shrink-0 ${avatarStyle}`}
          >
            {initials}
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              {app.name}
            </h4>
            <p className="text-xs text-slate-400 font-normal">
              {app.email}
            </p>
          </div>
        </div>
      </td>

      {/* 2. POSITION */}
      <td className="py-4 px-6">
        <div>
          <h5 className="text-xs font-bold text-slate-800">
            {app.roleTitle || app.role || "Senior Architect"}
          </h5>
          <p className="text-[11px] text-slate-400 font-medium mt-0.5">
            {app.department || "Design & Engineering"}
          </p>
        </div>
      </td>

      {/* 3. EXPERIENCE */}
      <td className="py-4 px-6 text-xs font-medium text-slate-600">
        {app.experience || "5+ Years"}
      </td>

      {/* 4. STATUS */}
      <td className="py-4 px-6">
        {getStatusBadge(app.status)}
      </td>

      {/* 5. APPLIED ON */}
      <td className="py-4 px-6 text-xs font-medium text-slate-600 whitespace-nowrap">
        {appliedDate}
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
            <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-fade-in text-left">
              {app.resumeContent && (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    handleDownloadResume(app);
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Download size={13} className="text-blue-500" /> Download Resume
                </button>
              )}
              <div className="border-t border-slate-100 my-1"></div>
              <p className="px-3.5 py-1 text-[9px] font-bold uppercase tracking-wider text-slate-400">
                Update Pipeline Status:
              </p>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleUpdateAppStatus(app._id, "Under Review");
                }}
                className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-amber-700 hover:bg-amber-50 flex items-center gap-2 cursor-pointer"
              >
                Set In Review
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleUpdateAppStatus(app._id, "Interviewing");
                }}
                className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-50 flex items-center gap-2 cursor-pointer"
              >
                Set Shortlisted
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleUpdateAppStatus(app._id, "Hired");
                }}
                className="w-full text-left px-3.5 py-1.5 text-xs font-medium text-purple-700 hover:bg-purple-50 flex items-center gap-2 cursor-pointer"
              >
                Set Hired
              </button>
              <div className="border-t border-slate-100 my-1"></div>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleDeleteApp(app._id);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
              >
                <Trash2 size={13} className="text-rose-500" /> Discard Applicant
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

function OpeningTableRow({ job, handleStartEditJob, handleDeleteJob }) {
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

  return (
    <tr className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-b-0 group">
      <td className="py-4 px-6">
        <h4 className="text-sm font-bold text-slate-900">{job.title}</h4>
        <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">{job.summary}</p>
      </td>
      <td className="py-4 px-6 text-xs font-medium text-slate-700">{job.department}</td>
      <td className="py-4 px-6 text-xs font-medium text-slate-600">{job.location}</td>
      <td className="py-4 px-6 text-xs font-medium text-slate-600">{job.experience}</td>
      <td className="py-4 px-6">
        {job.active ? (
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            Active
          </span>
        ) : (
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-500 border border-slate-200">
            Archived
          </span>
        )}
      </td>
      <td className="py-4 px-6 text-right relative">
        <div className="relative inline-block text-left" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <MoreVertical size={16} />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-fade-in text-left">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleStartEditJob(job);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
              >
                <Pencil size={13} className="text-slate-500" /> Edit Listing
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleDeleteJob(job._id || job.id);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
              >
                <Trash2 size={13} className="text-rose-500" /> Delete Listing
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default function CareersTab({
  applications = [],
  appStats = { total: 0, applied: 0, underReview: 0, interviewing: 0, hired: 0, declined: 0 },
  adminJobs = [],
  onRefresh,
}) {
  const [activeTab, setActiveTab] = useState("Applicants"); // "Applicants" | "Openings"
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOpeningFilter, setSelectedOpeningFilter] = useState("All");
  const [selectedStatusFilter, setSelectedStatusFilter] = useState("All");
  const [sortAsc, setSortAsc] = useState(false);

  const [isJobFormOpen, setIsJobFormOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [isSubmittingJob, setIsSubmittingJob] = useState(false);
  const [jobFormData, setJobFormData] = useState({
    title: "",
    location: "",
    type: "Full-Time",
    experience: "",
    department: "",
    summary: "",
    requirements: "",
    active: true,
  });

  const handleDownloadResume = (app) => {
    if (!app.resumeContent) return;
    const link = document.createElement("a");
    link.href = app.resumeContent;
    link.download = app.resumeName || `${app.name}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpdateAppStatus = async (appId, newStatus) => {
    try {
      const res = await fetch("/api/admin/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: appId, status: newStatus }),
      });
      if (res.ok && onRefresh) await onRefresh();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDeleteApp = async (appId) => {
    if (!confirm("Are you sure you want to discard this application?")) return;
    try {
      const res = await fetch(`/api/admin/applications?id=${appId}`, {
        method: "DELETE",
      });
      if (res.ok && onRefresh) await onRefresh();
    } catch (err) {
      console.error("Error deleting application:", err);
    }
  };

  const handleStartEditJob = (job) => {
    setEditingJob(job);
    setJobFormData({
      title: job.title || "",
      location: job.location || "",
      type: job.type || "Full-Time",
      experience: job.experience || "",
      department: job.department || "",
      summary: job.summary || "",
      requirements: job.requirements ? job.requirements.join("\n") : "",
      active: job.active !== undefined ? job.active : true,
    });
    setIsJobFormOpen(true);
  };

  const handleSaveJobSubmit = async (e) => {
    e.preventDefault();
    if (!jobFormData.title || !jobFormData.location) return;

    setIsSubmittingJob(true);
    const isEdit = !!editingJob;
    const url = "/api/admin/jobs";
    const method = isEdit ? "PATCH" : "POST";

    const reqsArray = typeof jobFormData.requirements === "string"
      ? jobFormData.requirements.split("\n").map((r) => r.trim()).filter(Boolean)
      : jobFormData.requirements;

    const payload = isEdit
      ? { ...jobFormData, requirements: reqsArray, id: editingJob._id }
      : { ...jobFormData, requirements: reqsArray };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setIsJobFormOpen(false);
        setEditingJob(null);
        if (onRefresh) await onRefresh();
      }
    } catch (err) {
      console.error("Error saving job:", err);
    } finally {
      setIsSubmittingJob(false);
    }
  };

  const handleDeleteJob = async (jobId) => {
    if (!confirm("Are you sure you want to delete this job posting?")) return;
    try {
      const res = await fetch(`/api/admin/jobs?id=${jobId}`, {
        method: "DELETE",
      });
      if (res.ok && onRefresh) await onRefresh();
    } catch (err) {
      console.error(err);
    }
  };

  // Filtered Applicants List
  const filteredApplicants = applications.filter((app) => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = app.name && app.name.toLowerCase().includes(q);
      const matchEmail = app.email && app.email.toLowerCase().includes(q);
      const matchRole = app.roleTitle && app.roleTitle.toLowerCase().includes(q);
      if (!matchName && !matchEmail && !matchRole) return false;
    }
    if (selectedOpeningFilter !== "All") {
      if (app.roleTitle !== selectedOpeningFilter && app.role !== selectedOpeningFilter) return false;
    }
    if (selectedStatusFilter !== "All") {
      if (app.status !== selectedStatusFilter) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header Title */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          Careers
        </h2>
        <p className="text-xs text-slate-500 mt-1 font-normal">
          Manage job openings and track applicants.
        </p>
      </div>

      {/* Sub-Tab Switcher */}
      <div className="inline-flex bg-slate-200/60 p-1 rounded-2xl border border-slate-200/80 gap-1">
        <button
          onClick={() => setActiveTab("Applicants")}
          className={`flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer ${
            activeTab === "Applicants"
              ? "bg-white text-slate-900 shadow-xs border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Users size={15} className={activeTab === "Applicants" ? "text-amber-600" : "text-slate-400"} />
          Applicants
        </button>
        <button
          onClick={() => setActiveTab("Openings")}
          className={`flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-xl transition-all cursor-pointer ${
            activeTab === "Openings"
              ? "bg-white text-slate-900 shadow-xs border border-slate-200/60"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <Briefcase size={15} className={activeTab === "Openings" ? "text-blue-600" : "text-slate-400"} />
          Openings
        </button>
      </div>

      {activeTab === "Applicants" && (
        <>
          {/* KPI Metrics Cards Row (5 Cards matching Reference Image) */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Card 1: Total Applicants */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Users size={16} />
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 font-mono">
                Total Applicants
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-sans">
                {appStats.total || applications.length}
              </h3>
              <p className="text-[10px] font-bold text-emerald-600 mt-1.5 flex items-center gap-0.5">
                <span>↑ 12%</span> <span className="text-slate-400 font-normal">this month</span>
              </p>
            </div>

            {/* Card 2: New Applicants */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <UserCheck size={16} />
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 font-mono">
                New Applicants
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-sans">
                {appStats.applied || 0}
              </h3>
              <p className="text-[10px] font-bold text-emerald-600 mt-1.5 flex items-center gap-0.5">
                <span>↑ 8%</span> <span className="text-slate-400 font-normal">this week</span>
              </p>
            </div>

            {/* Card 3: In Review */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Clock size={16} />
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 font-mono">
                In Review
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-sans">
                {appStats.underReview || 0}
              </h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1.5">
                –
              </p>
            </div>

            {/* Card 4: Shortlisted */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={16} />
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 font-mono">
                Shortlisted
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-sans">
                {appStats.interviewing || 0}
              </h3>
              <p className="text-[10px] font-bold text-emerald-600 mt-1.5 flex items-center gap-0.5">
                <span>↑ 5%</span> <span className="text-slate-400 font-normal">this week</span>
              </p>
            </div>

            {/* Card 5: Hired */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                  <UserCheck size={16} />
                </div>
              </div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-3 font-mono">
                Hired
              </p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1 font-sans">
                {appStats.hired || 0}
              </h3>
              <p className="text-[10px] font-bold text-emerald-600 mt-1.5 flex items-center gap-0.5">
                <span>↑ 3%</span> <span className="text-slate-400 font-normal">this month</span>
              </p>
            </div>
          </div>

          {/* Filter Controls Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex flex-col sm:flex-row items-center gap-3 flex-1">
              {/* Search Bar */}
              <div className="relative flex-1 w-full sm:max-w-xs">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by name, email or position..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
                />
              </div>

              {/* Filter 1: Openings */}
              <select
                value={selectedOpeningFilter}
                onChange={(e) => setSelectedOpeningFilter(e.target.value)}
                className="w-full sm:w-44 px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
              >
                <option value="All">All Openings</option>
                {adminJobs.map((j) => (
                  <option key={j._id} value={j.title}>{j.title}</option>
                ))}
              </select>

              {/* Filter 2: Statuses */}
              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                className="w-full sm:w-44 px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:border-blue-500 cursor-pointer shadow-2xs"
              >
                <option value="All">All Statuses</option>
                <option value="Applied">Applied / New</option>
                <option value="Under Review">Under Review</option>
                <option value="Interviewing">Interviewing / Shortlisted</option>
                <option value="Hired">Hired</option>
                <option value="Declined">Declined</option>
              </select>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedOpeningFilter("All");
                  setSelectedStatusFilter("All");
                }}
                className="px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <SlidersHorizontal size={14} className="text-slate-500" /> Filter
              </button>
            </div>
          </div>

          {/* Applicants Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200/80">
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    APPLICANT
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    POSITION
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    EXPERIENCE
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    STATUS
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    APPLIED ON
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono text-right">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60">
                {filteredApplicants.map((app) => (
                  <ApplicantRow
                    key={app._id || app.id}
                    app={app}
                    handleDownloadResume={handleDownloadResume}
                    handleUpdateAppStatus={handleUpdateAppStatus}
                    handleDeleteApp={handleDeleteApp}
                  />
                ))}

                {filteredApplicants.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 text-xs font-medium">
                      No candidate applications matching your search filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200/60 text-xs text-slate-500">
            <p className="font-medium">
              Showing 1 to {filteredApplicants.length} of {applications.length} applicants
            </p>
            <div className="flex items-center gap-1.5">
              <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 cursor-pointer">
                <ChevronLeft size={14} />
              </button>
              <button className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-300 text-amber-700 font-bold flex items-center justify-center">
                1
              </button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-100 cursor-pointer">
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === "Openings" && (
        <>
          {/* Top Control Bar for Openings */}
          <div className="flex items-center justify-between py-1">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Job Openings List
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Manage active career opportunities published on the company website.
              </p>
            </div>
            <button
              onClick={() => {
                setEditingJob(null);
                setJobFormData({
                  title: "",
                  location: "",
                  type: "Full-Time",
                  experience: "",
                  department: "",
                  summary: "",
                  requirements: "",
                  active: true,
                });
                setIsJobFormOpen(true);
              }}
              className="bg-[#005ea6] hover:bg-[#004b84] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-xs cursor-pointer"
            >
              <Plus size={15} /> Add New Opening
            </button>
          </div>

          <JobModal
            isOpen={isJobFormOpen}
            onClose={() => {
              setIsJobFormOpen(false);
              setEditingJob(null);
            }}
            editingJob={editingJob}
            jobFormData={jobFormData}
            setJobFormData={setJobFormData}
            onSave={handleSaveJobSubmit}
            isSubmitting={isSubmittingJob}
          />

          {/* Openings Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200/80">
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    JOB POSITION
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    DEPARTMENT
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    LOCATION
                  </th>
                  <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                    EXPERIENCE
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
                {adminJobs.map((job) => (
                  <OpeningTableRow
                    key={job._id || job.id}
                    job={job}
                    handleStartEditJob={handleStartEditJob}
                    handleDeleteJob={handleDeleteJob}
                  />
                ))}

                {adminJobs.length === 0 && (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 text-xs font-medium">
                      No job openings published.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
