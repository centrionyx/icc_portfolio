"use client";

import { useState, useRef, useEffect } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  Star,
  MapPin,
  MoreVertical,
  ArrowUpDown,
  Search,
  CheckCircle2,
  Clock
} from "lucide-react";
import ProjectModal from "./ProjectModal";

function getCategoryBadge(category) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("commercial") || cat.includes("corporate")) {
    return {
      label: "Commercial",
      style: "bg-amber-50/80 text-amber-700 border-amber-200/60 font-semibold"
    };
  }
  if (cat.includes("hospitality")) {
    return {
      label: "Hospitality",
      style: "bg-orange-50/80 text-orange-700 border-orange-200/60 font-semibold"
    };
  }
  if (cat.includes("residential")) {
    return {
      label: "Residential",
      style: "bg-purple-50/80 text-purple-700 border-purple-200/60 font-semibold"
    };
  }
  if (cat.includes("industrial")) {
    return {
      label: "Industrial",
      style: "bg-sky-50/80 text-sky-700 border-sky-200/60 font-semibold"
    };
  }
  if (cat.includes("retail")) {
    return {
      label: "Retail",
      style: "bg-rose-50/80 text-rose-700 border-rose-200/60 font-semibold"
    };
  }
  return {
    label: category ? category.charAt(0).toUpperCase() + category.slice(1) : "General",
    style: "bg-slate-50 text-slate-700 border-slate-200/60 font-semibold"
  };
}

function getFeaturedBadge(featured) {
  if (featured) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
        Featured
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-2xs">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
      Standard
    </span>
  );
}

function FormatLocation({ location }) {
  if (!location) return <span className="text-slate-400 text-xs">N/A</span>;
  const parts = location.split(",").map((s) => s.trim());
  if (parts.length > 1) {
    return (
      <div className="flex items-start gap-1.5">
        <MapPin size={15} className="text-slate-400 shrink-0 mt-0.5" />
        <div className="text-xs font-medium text-slate-700 leading-snug">
          <div>{parts[0]},</div>
          <div className="text-slate-500">{parts.slice(1).join(", ")}</div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      <MapPin size={15} className="text-slate-400 shrink-0" />
      <span className="text-xs font-medium text-slate-700">{location}</span>
    </div>
  );
}

function ProjectTableRow({ p, handleStartEditProject, handleDeleteProject }) {
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

  const images =
    p.images && p.images.length > 0
      ? p.images
      : p.image
      ? [p.image]
      : ["/office_building_dusk.png"];

  const catBadge = getCategoryBadge(p.category);
  const updatedDate = p.updatedAt || p.createdAt
    ? new Date(p.updatedAt || p.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      })
    : "12 May 2024";

  return (
    <tr className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-b-0 group">
      {/* 1. PROJECT COLUMN */}
      <td className="py-4 px-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80 shadow-2xs">
            <img
              src={images[0]}
              alt={p.client}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 tracking-tight">
              {p.client}
            </h4>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {p.size || "32,000 Sq. Ft."}
            </p>
          </div>
        </div>
      </td>

      {/* 2. CATEGORY COLUMN */}
      <td className="py-4 px-6">
        <span
          className={`inline-block px-3 py-1 rounded-lg text-xs border ${catBadge.style}`}
        >
          {catBadge.label}
        </span>
      </td>

      {/* 3. LOCATION COLUMN */}
      <td className="py-4 px-6">
        <FormatLocation location={p.location} />
      </td>

      {/* 4. FEATURED COLUMN */}
      <td className="py-4 px-6">
        {getFeaturedBadge(p.featured)}
      </td>

      {/* 5. UPDATED ON COLUMN */}
      <td className="py-4 px-6 text-xs font-medium text-slate-600 whitespace-nowrap">
        {updatedDate}
      </td>

      {/* 6. ACTION COLUMN */}
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
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-fade-in text-left">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleStartEditProject(p);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Pencil size={13} className="text-slate-500" /> Edit Details
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleDeleteProject(p._id || p.id);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Trash2 size={13} className="text-rose-500" /> Delete Project
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default function ProjectsTab({ projects = [], onRefresh }) {
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isSubmittingProject, setIsSubmittingProject] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(false);

  const [projectFormData, setProjectFormData] = useState({
    client: "",
    category: "corporate",
    location: "",
    size: "",
    scope: "",
    duration: "36 Weeks",
    outcomes: "",
    images: [],
    status: "Completed",
    completion: 100,
    featured: false,
  });

  const handleStartEditProject = (p) => {
    const initialImages =
      p.images && p.images.length > 0
        ? p.images
        : p.image
        ? [p.image]
        : [];

    setEditingProject(p);
    setProjectFormData({
      client: p.client || "",
      category: p.category || "corporate",
      location: p.location || "",
      size: p.size || "",
      scope: p.scope || "",
      duration: p.duration || "36 Weeks",
      outcomes: p.outcomes || "",
      images: initialImages,
      status: p.status || (p.completion === 100 ? "Completed" : "Ongoing"),
      completion: p.completion !== undefined ? p.completion : 100,
      featured: !!p.featured,
    });
    setIsProjectFormOpen(true);
  };

  const handleSaveProjectSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingProject(true);
    const isEdit = !!editingProject;
    const url = "/api/admin/projects";
    const method = isEdit ? "PATCH" : "POST";
    const payload = isEdit
      ? { ...projectFormData, id: editingProject._id }
      : projectFormData;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save project.");
      setIsProjectFormOpen(false);
      setEditingProject(null);
      if (onRefresh) await onRefresh();
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmittingProject(false);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    try {
      const res = await fetch(`/api/admin/projects?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok && onRefresh) {
        await onRefresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Filter & Sort Logic
  const filteredProjects = projects
    .filter((p) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        (p.client && p.client.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.location && p.location.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.createdAt || 0).getTime();
      const dateB = new Date(b.updatedAt || b.createdAt || 0).getTime();
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="space-y-6">
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-1">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Projects Portfolio
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage, publish, and audit site executions across commercial & residential categories.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>

          <button
            onClick={() => {
              setEditingProject(null);
              setProjectFormData({
                client: "",
                category: "corporate",
                location: "",
                size: "",
                scope: "",
                duration: "36 Weeks",
                outcomes: "",
                images: [],
                status: "Completed",
                completion: 100,
                featured: false,
              });
              setIsProjectFormOpen(true);
            }}
            className="bg-[#005ea6] hover:bg-[#004b84] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <Plus size={15} /> Add New Project
          </button>
        </div>
      </div>

      <ProjectModal
        isOpen={isProjectFormOpen}
        onClose={() => {
          setIsProjectFormOpen(false);
          setEditingProject(null);
        }}
        editingProject={editingProject}
        projectFormData={projectFormData}
        setProjectFormData={setProjectFormData}
        onSave={handleSaveProjectSubmit}
        isSubmitting={isSubmittingProject}
      />

      {/* Main Table Container directly on page bg */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[850px]">
          <thead>
            <tr className="border-b border-slate-200/80">
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                PROJECT
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                CATEGORY
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                LOCATION
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                FEATURED
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                <button
                  onClick={() => setSortAsc(!sortAsc)}
                  className="flex items-center gap-1.5 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  UPDATED ON <ArrowUpDown size={12} />
                </button>
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono text-right">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60">
            {filteredProjects.map((p) => (
              <ProjectTableRow
                key={p._id || p.id || p.client}
                p={p}
                handleStartEditProject={handleStartEditProject}
                handleDeleteProject={handleDeleteProject}
              />
            ))}

            {filteredProjects.length === 0 && (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400 text-xs font-medium">
                  No projects matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
