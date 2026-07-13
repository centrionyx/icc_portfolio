"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
  Search,
  Grid,
  List,
  X,
  Percent,
  SlidersHorizontal,
  Briefcase
} from "lucide-react";

// Subcomponent for each project card (Grid View) - CLEAN LIGHT THEME
function ProjectCard({ project, onClick }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  
  const images = project.images && project.images.length > 0 
    ? project.images 
    : (project.image ? [project.image] : ["/office_building_dusk.png"]);

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      onClick={() => onClick(project)}
      className="bg-white border border-slate-200/80 rounded-2xl flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1.5 cursor-pointer relative"
    >
      {/* Cover Image Carousel container */}
      <div className="relative h-[240px] w-full bg-slate-100 overflow-hidden">
        <img
          src={images[currentIdx]}
          alt={`${project.client} ${currentIdx + 1}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg">
          {project.category}
        </span>

        {/* Completion Indicator */}
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
          <span className={`w-2 h-2 rounded-full ${project.completion === 100 ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500 animate-pulse'}`}></span>
          {project.completion}% Complete
        </div>

        {/* Carousel controls if multiple images exist */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-blue-600 hover:text-white text-slate-800 p-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 shadow-md"
              aria-label="Previous Image"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-blue-600 hover:text-white text-slate-800 p-1.5 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10 shadow-md"
              aria-label="Next Image"
            >
              <ChevronRight size={14} />
            </button>

            {/* Indicator dots */}
            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentIdx ? "bg-white scale-125 px-2" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Text content details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
            {project.client}
          </h3>

          {/* Structured attributes */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                <MapPin className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-xs font-semibold text-slate-700">{project.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                <Layout className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Area Size</p>
                <p className="text-xs font-semibold text-slate-700">{project.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                <Calendar className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                <p className="text-xs font-semibold text-slate-700">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
                <Award className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Scope</p>
                <p className="text-xs font-semibold text-slate-700 truncate max-w-[110px]" title={project.scope}>
                  {project.scope}
                </p>
              </div>
            </div>
          </div>

          {/* Outcome Panel */}
          <div className="border-t border-slate-100 pt-4 mt-2">
            <div className="flex items-start gap-2.5 text-xs bg-slate-50/80 p-3 rounded-xl border border-slate-100">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block text-[10px] uppercase tracking-wider mb-0.5">Key Outcome</span>
                <p className="text-[11px] leading-relaxed text-slate-600 line-clamp-2">{project.outcomes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 uppercase tracking-wider">
          <span>Explore Details</span>
          <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
        </div>
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
            <div className="bg-slate-100 text-slate-800 text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${project.completion === 100 ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
              {project.completion}% Complete
            </div>
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
              <p className="text-xs font-semibold text-slate-700">{project.completion === 100 ? 'Handed Over' : 'In Progress'}</p>
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

  const handedOver = projects.filter(p => p.completion === 100).length;
  const activeCount = projects.filter(p => p.completion < 100).length;

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
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#005ea6] block font-mono">// Total Delivery Area</span>
          <h4 className="text-3xl sm:text-4xl font-extrabold mt-3 text-slate-900">{formattedArea}</h4>
        </div>
        <p className="text-xs text-slate-500 mt-5 leading-relaxed">Calculated gross square footage of successfully executed interior & fit-out projects.</p>
      </div>

      {/* Distribution Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
        <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl transform transition-transform duration-500 group-hover:scale-110" />
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#005ea6] block font-mono">// Delivery Distribution</span>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
              <span className="text-2xl font-extrabold text-emerald-600">{handedOver}</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1">Completed</span>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
              <span className="text-2xl font-extrabold text-amber-600">{activeCount}</span>
              <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-1">In Progress</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 leading-relaxed">Real-time status of construction execution & advisory assignments.</p>
      </div>

      {/* Categories Footprint Card */}
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
        <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl transform transition-transform duration-500 group-hover:scale-110" />
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#005ea6] block font-mono">// Categories Footprint</span>
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

// Project Details Dialog Modal - CLEAN LIGHT THEME
function ProjectDetailsModal({ project, onClose }) {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  if (!project) return null;

  const images = project.images && project.images.length > 0 
    ? project.images 
    : (project.image ? [project.image] : ["/office_building_dusk.png"]);

  return (
    <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div 
        className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden relative flex flex-col lg:flex-row max-h-[90vh] md:max-h-[85vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-900/80 hover:bg-slate-900 text-white p-2 rounded-full z-20 transition-all shadow-lg"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Left Side: Images Showcase */}
        <div className="lg:w-1/2 bg-slate-950 flex flex-col justify-between relative h-[300px] lg:h-auto min-h-[300px]">
          <img 
            src={images[activeImgIdx]} 
            alt={project.client} 
            className="absolute inset-0 w-full h-full object-cover opacity-80" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />

          {/* Badge Overlay */}
          <div className="p-6 relative z-10">
            <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg">
              {project.category}
            </span>
          </div>

          {/* Bottom Thumbnails */}
          {images.length > 1 && (
            <div className="p-6 relative z-10 flex gap-2 overflow-x-auto">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImgIdx(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    idx === activeImgIdx ? "border-blue-500 scale-105" : "border-white/20 hover:border-white/50"
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Information Content */}
        <div className="lg:w-1/2 p-8 overflow-y-auto flex flex-col justify-between text-slate-800">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <h2 className="text-2xl font-extrabold text-slate-950">{project.client}</h2>
              <div className="bg-slate-100 text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shrink-0">
                <span className={`w-2.5 h-2.5 rounded-full ${project.completion === 100 ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                {project.completion}% Complete
              </div>
            </div>

            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-6">
              Scope: <span className="text-slate-800 lowercase first-letter:uppercase">{project.scope}</span>
            </p>

            {/* Structured Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="text-sm font-semibold text-slate-850">{project.location}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                  <Layout size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Area Size</p>
                  <p className="text-sm font-semibold text-slate-855">{project.size}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                  <Calendar size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Duration</p>
                  <p className="text-sm font-semibold text-slate-850">{project.duration}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                  <Percent size={18} />
                </div>
                <div>
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Status Code</p>
                  <p className="text-sm font-semibold text-slate-850">{project.completion === 100 ? "Ready/Handover" : "Construction"}</p>
                </div>
              </div>
            </div>

            {/* Outcome Highlight Box */}
            <div className="border border-emerald-100 bg-emerald-50/50 p-4 rounded-2xl mb-4">
              <div className="flex items-center gap-2 mb-2 text-emerald-850">
                <CheckCircle size={18} className="text-emerald-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Key Delivery Outcome</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-700">{project.outcomes}</p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-150 flex items-center justify-between">
            <span className="text-xs text-slate-400">Centrionyx Portfolio Delivery Showcase</span>
            <button 
              onClick={onClose} 
              className="px-5 py-2.5 bg-blue-600 text-white rounded-full text-xs font-bold hover:bg-blue-500 transition-colors shadow-lg"
            >
              Close Showcase
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
      
      {/* PRECISE SYMMETRIC IMAGE HERO SECTION */}
      <section className="relative w-full h-[380px] sm:h-[420px] lg:h-[460px] overflow-hidden select-none">
        
        {/* Full-bleed background fit-out image */}
        <img
          src="/workplace_strategy.png"
          alt="Execution Fit-Out Workspace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* High contrast overlay mask */}
        <div className="absolute inset-0 bg-[#0a1f44]/80 backdrop-blur-[1px] pointer-events-none z-0" />

        {/* Symmetric container aligned to global page grids */}
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-full flex items-center relative z-10">
          <div className="w-full lg:w-3/5 flex flex-col items-start text-white">
            
            {/* Monospace tagged category accent */}
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400 block font-mono mb-4">
              // PORTFOLIO SHOWCASE
            </span>
            
            {/* Clean symmetric title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
              Precision Execution.
              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent mt-2">
                Handover Excellence.
              </span>
            </h1>
            
            <p className="text-slate-300 text-xs sm:text-sm mt-5 max-w-xl leading-relaxed font-light">
              Explore our project footprints representing premium fit-out execution, strict safety compliance, and global design standard alignment.
            </p>

            {/* Centered compliance stats pill */}
            <div className="mt-8 flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300">
                100% On-Time MEP Handover Rate
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* EXPLORER DASHBOARD BODY */}
      <main className="max-w-7xl mx-auto px-5 lg:px-8 mt-12 relative z-30">
        
        {/* THREE STATS OVERVIEW PANEL */}
        {!loading && projects.length > 0 && (
          <ProjectStatsDashboard projects={projects} />
        )}

        {/* SEARCH, SORT, FILTER & LAYOUT CONTROLS CARD */}
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-100/50 p-6 mb-8 flex flex-col gap-6 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by client, location, scope..."
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 placeholder-slate-400 transition-all"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 shrink-0">
              <SlidersHorizontal className="text-slate-400 w-4 h-4" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 rounded-2xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
              >
                <option value="default">Default Order</option>
                <option value="area">Sort by Area Size</option>
                <option value="completion">Sort by Completion %</option>
                <option value="duration">Sort by Duration</option>
              </select>
            </div>

            {/* Layout Toggle buttons */}
            <div className="flex items-center gap-1 bg-slate-50 border border-slate-200 p-1.5 rounded-2xl shrink-0 self-end lg:self-auto">
              <button
                onClick={() => setLayoutMode("grid")}
                className={`p-2 rounded-xl transition-all ${layoutMode === "grid" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                title="Grid Layout"
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setLayoutMode("list")}
                className={`p-2 rounded-xl transition-all ${layoutMode === "list" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
                title="List Layout"
              >
                <List size={16} />
              </button>
            </div>

          </div>

          {/* Filter Categories Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5">
            {categories.map((cat) => {
              const count = cat.id === "all" 
                ? projects.length 
                : projects.filter(p => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`
                    px-4
                    py-2
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    transition-all
                    duration-200
                    rounded-xl
                    flex
                    items-center
                    gap-2
                    ${activeFilter === cat.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                  `}
                >
                  {cat.label}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeFilter === cat.id ? "bg-white text-blue-900 font-bold" : "bg-slate-200 text-slate-700"}`}>
                    {count}
                  </span>
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