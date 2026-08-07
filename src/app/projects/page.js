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
import PageHero from "@/components/layout/PageHero";

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
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1 group-hover:text-[#E5A900] transition-colors">
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

// Project Details Dialog Modal - SHARP EDGE LUXURY ARCHITECTURAL DESIGN
function ProjectDetailsModal({ project, onClose }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  if (!project) return null;

  const images = project.images && project.images.length > 0
    ? project.images
    : (project.image ? [project.image] : ["/office_building_dusk.png"]);

  // Automatic image slideshow timer (changes image every 3 seconds if multiple images exist)
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImgIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div 
      className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-0 sm:p-4 md:p-8 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-none w-full max-w-5xl shadow-2xl overflow-hidden relative flex flex-col lg:flex-row max-h-[92vh] border border-slate-200/90"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sharp Square Top Cross Icon Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-950/90 hover:bg-[#E5A900] text-white hover:text-slate-950 p-2.5 rounded-none z-30 transition-all duration-300 shadow-xl border border-white/20 cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Left Side: Image Showcase with Auto-Slideshow */}
        <div className="lg:w-7/12 bg-slate-950 flex flex-col justify-between relative min-h-[320px] lg:min-h-[520px]">
          <img
            src={images[activeImgIdx]}
            alt={project.client}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-black/30 pointer-events-none" />

          {/* Category Badge Overlay */}
          <div className="p-6 relative z-10">
            <span className="bg-[#E5A900] text-slate-950 text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-none shadow-lg font-mono">
              {project.category}
            </span>
          </div>

          {/* Bottom Image Thumbnails Carousel */}
          {images.length > 1 && (
            <div className="p-4 relative z-10 flex gap-2.5 overflow-x-auto bg-slate-950/80 backdrop-blur-md border-t border-white/10">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`w-14 h-14 rounded-none overflow-hidden border transition-all shrink-0 cursor-pointer ${
                    idx === activeImgIdx ? "border-[#E5A900] opacity-100 scale-105" : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Information Content */}
        <div className="lg:w-5/12 p-6 sm:p-8 sm:py-10 overflow-y-auto flex flex-col justify-between bg-white text-slate-900">
          <div>
            {/* Header & Status */}
            <div className="mb-6 border-b border-slate-100 pb-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5A900] block mb-1">
                PROJECT PROFILE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans mb-3">
                {project.client}
              </h2>
              
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500 font-light flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#E5A900]" />
                  <span>{project.location}</span>
                </p>

                {(() => {
                  const status = project.status || (project.completion === 100 ? "Completed" : "Ongoing");
                  const isDone = status === "Completed";
                  return (
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-none border ${
                      isDone ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-amber-50 text-amber-700 border-amber-200"
                    }`}>
                      {status}
                    </span>
                  );
                })()}
              </div>
            </div>

            {/* Scope Overview */}
            <div className="mb-6">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-1.5">
                PROJECT SCOPE
              </span>
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                {project.scope}
              </p>
            </div>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-slate-50 p-3.5 rounded-none border-l-2 border-[#E5A900]">
                <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">AREA SIZE</p>
                <p className="text-xs font-bold text-slate-900 mt-0.5">{project.size}</p>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-none border-l-2 border-[#E5A900]">
                <p className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">TIMELINE</p>
                <p className="text-xs font-bold text-slate-900 mt-0.5">{project.duration}</p>
              </div>
            </div>

            {/* Key Outcomes */}
            {project.outcomes && (
              <div className="bg-slate-900 text-white p-4 rounded-none border-l-2 border-[#E5A900] mb-6">
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] text-[#E5A900] block mb-1">
                  DELIVERY OUTCOME
                </span>
                <p className="text-xs leading-relaxed font-light text-slate-200">
                  {project.outcomes}
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">ICC PORTFOLIO</span>
            <span className="text-[10px] font-mono text-slate-400">PULL TO CLOSE</span>
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
      {/* HERO SECTION */}
      <PageHero
        title="Projects Showcase"
        subtitle="A curated portfolio of our commercial interior fit-out executions and project management deliveries."
        breadcrumbs={[{ label: "Projects" }]}
      />

      {/* EXPLORER DASHBOARD BODY */}
      <main id="projects-explorer" className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 relative z-30">

        {/* ROUNDED PILL CATEGORY FILTER TABS (Single Line Layout) */}
        <div className="mb-12 flex justify-center w-full overflow-hidden">
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-2 px-1 max-w-full flex-nowrap">
            {categories.map((cat) => {
              const isSelected = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap shrink-0 ${
                    isSelected
                      ? "bg-[#E5A900] text-slate-950 shadow-md scale-105"
                      : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {cat.label}
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