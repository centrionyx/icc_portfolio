"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Layout,
  Award,
  CheckCircle,
  CheckCircle2,
  Check,
  Ruler,
  Settings,
  Building2,
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
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations";

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
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-1 group-hover:text-brand-accent transition-colors">
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
          <h4 className="text-3xl sm:text-4xl font-extrabold mt-3 text-slate-900">
            <AnimatedCounter value={formattedArea} />
          </h4>
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
              <span className="text-xl font-extrabold text-emerald-600">
                <AnimatedCounter value={completedCount} />
              </span>
              <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Completed</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center">
              <span className="text-xl font-extrabold text-blue-600">
                <AnimatedCounter value={ongoingCount} />
              </span>
              <span className="block text-[8px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">Ongoing</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-center">
              <span className="text-xl font-extrabold text-amber-600">
                <AnimatedCounter value={pendingCount} />
              </span>
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

// Project Details Dialog Modal - REDESIGNED EXACTLY MATCHING REFERENCE IMAGE
function ProjectDetailsModal({ project, onClose }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const carouselRef = useRef(null);

  if (!project) return null;

  const images = project.images && project.images.length > 0
    ? project.images
    : (project.image ? [project.image] : ["/office_building_dusk.png"]);

  const highlights = project.highlights || [
    "Ergonomic workspace planning",
    "Collaborative spaces",
    "Premium material palette",
    "State-of-the-art MEP systems",
    "Sustainable & energy-efficient design",
    "Timely delivery with zero compromise"
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -140, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 140, behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative border border-slate-200/90 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Right Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-1.5 rounded-full hover:bg-slate-100 transition-colors z-40 cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Scrollable Container */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: Main Feature Image & Thumbnail Carousel */}
            <div className="lg:col-span-6 flex flex-col gap-3">
              {/* Main Feature Image Container */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm bg-slate-100 border border-slate-200/80">
                <img
                  src={images[activeImgIdx]}
                  alt={project.client}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                />
              </div>

              {/* Thumbnail Carousel Row with Prev/Next Arrow Controls */}
              {images.length > 1 && (
                <div className="relative flex items-center gap-1.5 pt-0.5">
                  <button
                    onClick={scrollLeft}
                    className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center shrink-0 shadow-sm cursor-pointer transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div
                    ref={carouselRef}
                    className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 scroll-smooth"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImgIdx(idx)}
                        className={`relative aspect-[4/3] w-18 sm:w-22 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                          idx === activeImgIdx
                            ? "border-[#E5A900] ring-2 ring-[#E5A900]/30 opacity-100 scale-105"
                            : "border-transparent opacity-70 hover:opacity-100"
                        }`}
                      >
                        <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={scrollRight}
                    className="w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 flex items-center justify-center shrink-0 shadow-sm cursor-pointer transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Category Tag, Title, Subheader, Description, Specs Grid, Highlights */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                {/* Category Uppercase Eyebrow */}
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent block mb-1 font-sans">
                  {project.category || "COMMERCIAL"}
                </span>

                {/* Main Client Title */}
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight mb-1 font-sans">
                  {project.client}
                </h2>

                {/* Location & Year Subheader */}
                <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-brand-accent" />
                    <span>{project.location}</span>
                  </span>
                  <span>|</span>
                  <span className="flex items-center gap-1">
                    <Calendar size={13} className="text-brand-accent" />
                    <span>{project.year || project.duration || "2023"}</span>
                  </span>
                </div>

                {/* Description Paragraph */}
                <p className="text-slate-600 text-xs font-normal leading-relaxed mb-4">
                  {project.outcomes || project.scope || "A contemporary workspace designed to inspire productivity and collaboration. The design reflects the brand's professionalism through a perfect blend of functionality, comfort, and modern aesthetics."}
                </p>

                {/* 6 Specs Grid matching reference design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                  {/* 1. Project Type */}
                  <div className="bg-blue-50/50 border border-blue-100/80 rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-brand-accent flex items-center justify-center shrink-0">
                      <Building2 size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Project Type</p>
                      <p className="text-xs font-bold text-slate-900 capitalize mt-0.5">
                        {project.category ? `${project.category} Office` : "Corporate Office"}
                      </p>
                    </div>
                  </div>

                  {/* 2. Area */}
                  <div className="bg-blue-50/50 border border-blue-100/80 rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-brand-accent flex items-center justify-center shrink-0">
                      <Ruler size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Area</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5">
                        {project.size || "32,000 Sq. Ft."}
                      </p>
                    </div>
                  </div>

                  {/* 3. Scope of Work */}
                  <div className="bg-blue-50/50 border border-blue-100/80 rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-brand-accent flex items-center justify-center shrink-0">
                      <Briefcase size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Scope of Work</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">
                        {project.scope || "Design & Build"}
                      </p>
                    </div>
                  </div>

                  {/* 4. Duration */}
                  <div className="bg-blue-50/50 border border-blue-100/80 rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-brand-accent flex items-center justify-center shrink-0">
                      <Calendar size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5">
                        {project.duration || "6 Months"}
                      </p>
                    </div>
                  </div>

                  {/* 5. Services */}
                  <div className="bg-blue-50/50 border border-blue-100/80 rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-brand-accent flex items-center justify-center shrink-0">
                      <Settings size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Services</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">
                        PMC, Execution Management
                      </p>
                    </div>
                  </div>

                  {/* 6. Completion */}
                  <div className="bg-blue-50/50 border border-blue-100/80 rounded-xl p-2.5 sm:p-3 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-100/60 text-brand-accent flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Completion</p>
                      <p className="text-xs font-bold text-slate-900 mt-0.5">
                        {project.year || "2023"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Highlights Section */}
                <div className="pt-1">
                  <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-2 font-sans">
                    Key Highlights
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <Check size={14} className="text-brand-accent shrink-0" strokeWidth={2.5} />
                        <span className="text-[11px] text-slate-600 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [allProjects, setAllProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [layoutMode, setLayoutMode] = useState("grid");
  const [selectedProject, setSelectedProject] = useState(null);

  const formatCategoryLabel = (cat) => {
    const labels = {
      corporate: "Corporate Offices",
      retail: "Retail Spaces",
      hospitality: "Hospitality",
      residential: "Residential",
      turnkey: "Turnkey Works",
    };
    if (labels[cat.toLowerCase()]) return labels[cat.toLowerCase()];
    return cat.replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const availableCategoryKeys = Array.from(
    new Set(
      allProjects
        .map((p) => p.category)
        .filter(Boolean)
        .map((c) => c.trim().toLowerCase())
    )
  );

  const categories = [
    { id: "all", label: "All Deliveries" },
    ...availableCategoryKeys.map((catKey) => ({
      id: catKey,
      label: formatCategoryLabel(catKey),
    })),
  ];

  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data)) {
            setAllProjects(data);
          }
        }
      } catch (err) {
        console.error("Failed to load projects:", err);
      } finally {
        setLoading(false);
      }
    };

    const searchParams = new URLSearchParams(window.location.search);
    const initialCategory = searchParams.get("category") || "all";
    setActiveFilter(initialCategory);
    fetchAllProjects();
  }, []);

  const handleCategoryChange = (catId) => {
    setActiveFilter(catId);
    const newUrl =
      catId === "all"
        ? window.location.pathname
        : `${window.location.pathname}?category=${encodeURIComponent(catId)}`;
    window.history.pushState(null, "", newUrl);
  };

  // Filter, Search, and Sort Logic
  const processedProjects = allProjects
    .filter((project) => {
      if (activeFilter !== "all") {
        const projCat = (project.category || "").trim().toLowerCase();
        const filterCat = activeFilter.trim().toLowerCase();
        if (projCat !== filterCat && !projCat.includes(filterCat) && !filterCat.includes(projCat)) {
          return false;
        }
      }

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
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap shrink-0 ${isSelected
                      ? "bg-brand-accent text-white shadow-md scale-105"
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
            <StaggerContainer
              key={`grid-${activeFilter}`}
              once={false}
              staggerDelay={0.08}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {processedProjects.map((project) => (
                <StaggerItem key={project._id || project.id || project.client} direction="up">
                  <ProjectCard
                    project={project}
                    onClick={setSelectedProject}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <StaggerContainer
              key={`list-${activeFilter}`}
              once={false}
              staggerDelay={0.08}
              className="flex flex-col gap-6"
            >
              {processedProjects.map((project) => (
                <StaggerItem key={project._id || project.id || project.client} direction="up">
                  <ProjectListCard
                    project={project}
                    onClick={setSelectedProject}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
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