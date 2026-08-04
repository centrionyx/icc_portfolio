"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Layout,
  Award,
  CheckCircle,
  ArrowRight,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
  Grid,
  List,
  X,
  Percent,
  SlidersHorizontal,
  Briefcase
} from "lucide-react";

// Subcomponent for each project card (Clean Minimalist Design with Glass Shine Hover)
function ProjectCard({ project, onClick }) {
  const images = project.images && project.images.length > 0
    ? project.images
    : (project.image ? [project.image] : ["/office_building_dusk.png"]);

  return (
    <div
      onClick={() => onClick(project)}
      className="group flex flex-col cursor-pointer transition-all duration-300"
    >
      {/* Clean Minimalist Image Frame with Zoom & Glass Shine Hover */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 mb-4 rounded-sm">
        <img
          src={images[0]}
          alt={project.client}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Glass Shine Light Beam Effect on Hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute -top-[100%] -left-[100%] w-[300%] h-[300%] bg-gradient-to-r from-transparent via-white/25 to-transparent transform -rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        </div>

        {/* Subtle overlay tint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Title and Location beneath image */}
      <div className="text-center">
        <h3 className="text-base sm:text-lg font-bold text-[#005ea6] tracking-tight mb-1 group-hover:opacity-85 transition-opacity">
          {project.client}
        </h3>
        <p className="text-xs text-slate-500 font-light tracking-wider uppercase">
          {project.location}
        </p>
      </div>
    </div>
  );
}

// Subcomponent for List View Card - CLEAN LIGHT THEME
function ProjectListCard({ project, onClick }) {
  const image = project.images && project.images.length > 0
    ? project.images[0]
    : (project.image ? project.image : "/office_building_dusk.png");

  return (
    <div
      onClick={() => onClick(project)}
      className="bg-white border border-slate-200/80 rounded-2xl flex flex-col md:flex-row group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 cursor-pointer"
    >
      <div className="relative h-[200px] md:h-auto md:w-[280px] shrink-0 bg-slate-100 overflow-hidden">
        <img
          src={image}
          alt={project.client}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {project.category}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {project.client}
            </h3>
            {(() => {
              const status = project.status || (project.completion === 100 ? "Completed" : "Ongoing");
              const dotColor = status === "Completed" ? "bg-emerald-500" : status === "Ongoing" ? "bg-blue-500" : "bg-amber-500";
              return (
                <div className="bg-slate-100 text-slate-800 text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
                  {status}
                </div>
              );
            })()}
          </div>
          <p className="text-xs text-slate-500 mb-4 font-semibold">{project.scope}</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-100 mb-4">
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
              <p className="text-xs font-semibold text-slate-700">{project.location}</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Area Size</p>
              <p className="text-xs font-semibold text-slate-700">{project.size}</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Duration</p>
              <p className="text-xs font-semibold text-slate-700">{project.duration}</p>
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Status</p>
              <p className="text-xs font-semibold text-slate-700">{project.status || (project.completion === 100 ? 'Completed' : 'Ongoing')}</p>
            </div>
          </div>

          <div className="flex items-start gap-2.5 text-xs text-slate-655 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider mb-0.5">Key Outcome</span>
              <p className="text-[11px] leading-relaxed text-slate-606">{project.outcomes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Stats Breakdown Component - RE-STYLED WITH CLEAN GLASSY WHITE THEME
function ProjectStatsDashboard({ projects }) {
  const totalAreaRaw = projects.reduce((acc, curr) => {
    const val = parseFloat(curr.size.replace(/,/g, '').match(/\d+(\.\d+)?/)?.[0] || 0);
    const isLakh = curr.size.toLowerCase().includes('lakh');
    return acc + (isLakh ? val * 100000 : val);
  }, 0);

  const formattedArea = totalAreaRaw > 100000
    ? `${(totalAreaRaw / 100000).toFixed(1)} Lakh Sq. Ft.`
    : `${totalAreaRaw.toLocaleString()} Sq. Ft.`;

  const completedCount = projects.filter(p => (p.status ? p.status === "Completed" : p.completion === 100)).length;
  const ongoingCount = projects.filter(p => (p.status ? p.status === "Ongoing" : p.completion < 100)).length;
  const pendingCount = projects.filter(p => p.status === "Pending").length;

  const categoryBreakdown = projects.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-6">
      {/* Dynamic Area Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
        <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform transition-transform duration-500 group-hover:scale-110" />
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#005ea6] block font-mono">Total Delivery Area</span>
          <h4 className="text-3xl sm:text-4xl font-extrabold mt-3 text-slate-900">{formattedArea}</h4>
        </div>
        <p className="text-xs text-slate-500 mt-5 leading-relaxed">Calculated gross square footage of successfully executed interior & fit-out projects.</p>
      </div>

      {/* Distribution Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
        <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl transform transition-transform duration-500 group-hover:scale-110" />
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#005ea6] block font-mono">Delivery Status Breakdown</span>
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center">
              <span className="text-xl font-extrabold text-emerald-600">{completedCount}</span>
              <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Completed</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center">
              <span className="text-xl font-extrabold text-blue-600">{ongoingCount}</span>
              <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Ongoing</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center">
              <span className="text-xl font-extrabold text-amber-600">{pendingCount}</span>
              <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Pending</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">Real-time status of construction execution & advisory assignments.</p>
      </div>

      {/* Categories Footprint Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
        <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl transform transition-transform duration-500 group-hover:scale-110" />
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#005ea6] block font-mono">Categories Footprint</span>
          <div className="flex flex-col gap-2 mt-3.5">
            {Object.entries(categoryBreakdown).map(([cat, count]) => (
              <div key={cat} className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-655 capitalize">{cat} Offices</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-cyan-500"
                      style={{ width: `${(count / projects.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-slate-900 font-bold w-4 text-right">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">Active portfolio share by primary workspace type categories.</p>
      </div>
    </div>
  );
}

// Project Details Dialog Modal - LUXURIOUS MODERN AESTHETIC
function ProjectDetailsModal({ project, onClose }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  if (!project) return null;

  const images = project.images && project.images.length > 0
    ? project.images
    : (project.image ? [project.image] : ["/office_building_dusk.png"]);

  return (
    <div 
      className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative flex flex-col lg:flex-row max-h-[90vh] md:max-h-[82vh] border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-900/70 hover:bg-slate-900 text-white p-2.5 rounded-full z-30 transition-all shadow-xl backdrop-blur-md border border-white/10"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Left Side: Images Showcase */}
        <div className="lg:w-1/2 bg-slate-950 flex flex-col justify-between relative min-h-[280px] lg:min-h-full">
          <img
            src={images[activeImgIdx]}
            alt={project.client}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-black/30 pointer-events-none" />

          {/* Category Badge Overlay */}
          <div className="p-6 relative z-10">
            <span className="bg-[#005ea6] text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
              {project.category}
            </span>
          </div>

          {/* Bottom Thumbnails */}
          {images.length > 1 && (
            <div className="p-5 relative z-10 flex gap-2.5 overflow-x-auto bg-slate-950/40 backdrop-blur-md border-t border-white/10">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    idx === activeImgIdx ? "border-cyan-400 scale-105 shadow-lg" : "border-white/20 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Information Content */}
        <div className="lg:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between bg-white text-slate-800">
          <div>
            {/* Client Title & Status */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#005ea6] block mb-1">
                  PROJECT SPECIFICATIONS
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{project.client}</h2>
              </div>
              
              {(() => {
                const status = project.status || (project.completion === 100 ? "Completed" : "Ongoing");
                const dotColor = status === "Completed" ? "bg-emerald-500" : status === "Ongoing" ? "bg-[#005ea6]" : "bg-amber-500";
                return (
                  <div className="bg-slate-100/80 border border-slate-200/60 text-slate-800 text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0">
                    <span className={`w-2 h-2 rounded-full ${dotColor} animate-pulse`}></span>
                    {status}
                  </div>
                );
              })()}
            </div>

            <p className="text-slate-600 text-xs font-light leading-relaxed mb-6">
              {project.scope}
            </p>

            {/* Grid of Key Specs */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/60 flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-[#005ea6] rounded-xl shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-xs font-bold text-slate-800">{project.location}</p>
                </div>
              </div>

              <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/60 flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-[#005ea6] rounded-xl shrink-0">
                  <Layout size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Area Size</p>
                  <p className="text-xs font-bold text-slate-800">{project.size}</p>
                </div>
              </div>

              <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/60 flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-[#005ea6] rounded-xl shrink-0">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Duration</p>
                  <p className="text-xs font-bold text-slate-800">{project.duration}</p>
                </div>
              </div>

              <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/60 flex items-center gap-3">
                <div className="p-2 bg-blue-50 text-[#005ea6] rounded-xl shrink-0">
                  <CheckCircle size={16} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Status</p>
                  <p className="text-xs font-bold text-slate-800">{project.status || "Completed"}</p>
                </div>
              </div>
            </div>

            {/* Outcome Highlight Box */}
            {project.outcomes && (
              <div className="border border-emerald-200/80 bg-emerald-50/40 p-4 rounded-2xl mb-4">
                <div className="flex items-center gap-2 mb-1 text-emerald-800">
                  <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wider font-mono">Key Delivery Outcome</span>
                </div>
                <p className="text-xs leading-relaxed text-slate-700 font-light">{project.outcomes}</p>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">ICC Project Showcase</span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-[#005ea6] hover:bg-[#004b84] text-white rounded-xl text-xs font-bold transition-colors shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [layoutMode, setLayoutMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "All Deliveries" },
    { id: "corporate", label: "Corporate Offices" },
    { id: "retail", label: "Retail Spaces" },
    { id: "hospitality", label: "Hospitality" },
    { id: "residential", label: "Residential" },
    { id: "turnkey", label: "Turnkey Works" }
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Filter, Search, and Sort Logic
  const processedProjects = projects
    .filter((project) => {
      if (activeFilter !== "all" && project.category !== activeFilter) return false;

      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        return (
          project.client.toLowerCase().includes(query) ||
          project.location.toLowerCase().includes(query) ||
          project.scope.toLowerCase().includes(query) ||
          project.outcomes.toLowerCase().includes(query)
        );
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "area") {
        const parseArea = (sizeStr) => {
          const val = parseFloat(sizeStr.replace(/,/g, '').match(/\d+(\.\d+)?/)?.[0] || 0);
          return sizeStr.toLowerCase().includes('lakh') ? val * 100000 : val;
        };
        return parseArea(b.size) - parseArea(a.size);
      }
      if (sortBy === "completion") {
        return (b.completion || 0) - (a.completion || 0);
      }
      if (sortBy === "duration") {
        const parseWeeks = (durStr) => parseFloat(durStr.match(/\d+/)?.[0] || 0);
        return parseWeeks(b.duration) - parseWeeks(a.duration);
      }
      return 0;
    });

  return (
    <div className="w-full bg-[#f8fafc] text-slate-800 pb-20 min-h-screen relative overflow-hidden">

      {/* HERO SECTION - Screen-Fit height with Scroll Down Indicator */}
      <section className="relative w-full h-screen min-h-[640px] flex flex-col justify-between bg-[#f8fafc] overflow-hidden pt-20 sm:pt-28 pb-6">
        {/* Full-width High-Quality Interior Photo with Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/workDay.jpeg"
            alt="Commercial Fit-Out Workspaces Portfolio"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
          {/* Soft vignette gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Tagline */}
              <p className="text-xs sm:text-sm font-sans font-extrabold uppercase tracking-[0.25em] text-cyan-300 drop-shadow-md">
                PORTFOLIO SHOWCASE
              </p>

              {/* Large Prominent Title */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.08] drop-shadow-lg">
                Our Featured Work <br />
                &amp; Deliveries
              </h1>

              {/* Sub-headline Description */}
              <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed max-w-xl drop-shadow-md">
                A curated showcase of our interior fit-out executions, project advisory, and technical management across commercial, IT/ITES, BFSI, retail, and hospitality spaces.
              </p>

              {/* White CTA Button matching Services page */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#005ea6] font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 duration-200"
                >
                  Start Your Project
                </Link>
              </div>
            </div>

            {/* Right Side Stats Cards */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {/* Stat Card 1 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/50 shadow-2xl flex flex-col justify-between hover:bg-white hover:scale-[1.03] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005ea6] flex items-center justify-center font-bold shadow-inner">
                    <Layout className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#005ea6] bg-blue-50/80 px-2 py-0.5 rounded-full border border-blue-100">
                    Volume
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight block font-sans">
                    8M+
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-snug mt-1 block">
                    Sq. Ft. Delivered
                  </span>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/50 shadow-2xl flex flex-col justify-between hover:bg-white hover:scale-[1.03] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold shadow-inner">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50/80 px-2 py-0.5 rounded-full border border-cyan-100">
                    Excellence
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight block font-sans">
                    18+
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-snug mt-1 block">
                    Years Leadership
                  </span>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/50 shadow-2xl flex flex-col justify-between hover:bg-white hover:scale-[1.03] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shadow-inner">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50/80 px-2 py-0.5 rounded-full border border-emerald-100">
                    Quality
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight block font-sans">
                    100%
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-snug mt-1 block">
                    Predictable Delivery
                  </span>
                </div>
              </div>

              {/* Stat Card 4 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/50 shadow-2xl flex flex-col justify-between hover:bg-white hover:scale-[1.03] transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold shadow-inner">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50/80 px-2 py-0.5 rounded-full border border-indigo-100">
                    Portfolio
                  </span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight block font-sans">
                    {projects.length > 0 ? `${projects.length}+` : "50+"}
                  </span>
                  <span className="text-xs text-slate-600 font-medium leading-snug mt-1 block">
                    Corporate Projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ANIMATED SCROLL DOWN ARROW BUTTON */}
        <div className="relative z-10 flex flex-col items-center justify-center pb-2">
          <button
            onClick={() => {
              const mainSection = document.getElementById("projects-explorer");
              if (mainSection) {
                mainSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll down to view projects"
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-300 group-hover:text-cyan-300 transition-colors drop-shadow-sm">
              Explore Projects Below
            </span>
            <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center animate-bounce group-hover:bg-white/30 transition-all shadow-xl">
              <ChevronDown className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </section>

      {/* EXPLORER DASHBOARD BODY */}
      <main id="projects-explorer" className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 relative z-30">

        {/* MINIMAL CATEGORY FILTER TABS */}
        <div className="mb-12 border-b border-slate-200/80 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {categories.map((cat) => {
              const isSelected = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative py-2 text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 ${
                    isSelected
                      ? "text-[#005ea6] font-bold"
                      : "text-slate-500 font-medium hover:text-slate-800"
                  }`}
                >
                  {cat.label}
                  {isSelected && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#005ea6] rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* PROJECTS RESULTS LISTING */}
        <section className="py-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <RefreshCw className="w-10 h-10 text-blue-500 animate-spin mb-4" />
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">Loading Projects...</p>
            </div>
          ) : processedProjects.length === 0 ? (
            <div className="text-center py-24 bg-white border border-slate-200 rounded-3xl p-8">
              <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100">
                <Briefcase size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">No Projects Found</h3>
              <p className="text-xs text-slate-455 max-w-sm mx-auto leading-relaxed">
                We couldn't find any projects matching your search criteria. Try adjusting your query.
              </p>
            </div>
          ) : layoutMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processedProjects.map((project) => (
                <ProjectCard
                  key={project._id || project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {processedProjects.map((project) => (
                <ProjectListCard
                  key={project._id || project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          )}
        </section>

      </main>

      {/* DETAIL MODAL DRAWER */}
      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}