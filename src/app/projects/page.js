"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, Layout, Award, CheckCircle, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "corporate", label: "Corporate Offices" },
    { id: "retail", label: "Retail" },
    { id: "hospitality", label: "Hospitality" },
    { id: "residential", label: "Residential" },
    { id: "turnkey", label: "Turnkey" }
  ];

  const projects = [
    {
      id: "jpmorgan",
      client: "J.P. Morgan Chase & Co.",
      category: "corporate",
      location: "Bengaluru",
      size: "500,000 Sq. Ft.",
      scope: "Technical Advisory & MEP Coordination",
      duration: "48 Weeks",
      outcomes: "Snag-free handover, zero-delay MEP alignment with global guidelines.",
      image: "/office_building_dusk.png"
    },
    {
      id: "microsoft",
      client: "Microsoft",
      category: "corporate",
      location: "Hyderabad",
      size: "300,000 Sq. Ft.",
      scope: "End-to-end Fit-Out Project Management",
      duration: "36 Weeks",
      outcomes: "Value engineered budget savings of 8.5% and handed over 2 weeks early.",
      image: "/office_building_dusk.png"
    },
    {
      id: "regent",
      client: "The Regent Luxury Suites",
      category: "hospitality",
      location: "Mumbai",
      size: "80,000 Sq. Ft.",
      scope: "Technical Advisory & Design Coordination",
      duration: "32 Weeks",
      outcomes: "Achieved high-end acoustic ratings and premium bespoke millwork finishes.",
      image: "/sustainability_office.png"
    },
    {
      id: "nexus",
      client: "Nexus Premium Galleria",
      category: "retail",
      location: "Pune",
      size: "120,000 Sq. Ft.",
      scope: "Site Supervision & Cost Audit Support",
      duration: "28 Weeks",
      outcomes: "Conducted complete structural audits and achieved zero-incident safety rating.",
      image: "/industry_trends.png"
    },
    {
      id: "oberoi",
      client: "The Oberoi Residences",
      category: "residential",
      location: "Gurugram",
      size: "50,000 Sq. Ft.",
      scope: "Bespoke Project Advisory & Execution Support",
      duration: "24 Weeks",
      outcomes: "Handover of complex multi-layered automated systems with fine architectural finishes.",
      image: "/workplace_strategy.png"
    },
    {
      id: "deloitte",
      client: "Deloitte Innovation Hub",
      category: "turnkey",
      location: "Bengaluru",
      size: "150,000 Sq. Ft.",
      scope: "Turnkey Fit-Out Project Management",
      duration: "30 Weeks",
      outcomes: "Completed full MEP, ID, and landscape work with detailed audit documentation.",
      image: "/office_building_dusk.png"
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      
      {/* PAGE HEADER SECTION */}
      <section className="w-full bg-[#0a1f44] text-white py-16 lg:py-20 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Background Image on the right */}
        <div className="absolute inset-y-0 right-0 w-[50%] z-0 hidden md:block">
          <Image
            src="/office_building_dusk.png"
            alt="Featured Projects Banner"
            fill
            priority
            className="object-cover object-right opacity-40"
          />
        </div>

        {/* Horizontal Gradient Overlay: solid blue on left, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/85 to-transparent z-10 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
            PORTFOLIO OF DELIVERY
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-serif max-w-2xl leading-tight">
            Our Featured <span className="font-extrabold text-blue-500">Projects</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-xl leading-relaxed">
            Explore our project footprints representing precision, safety compliance, and premium interior finish execution.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 pt-10 pb-6">
        <div className="flex flex-wrap items-center justify-start gap-2 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`
                px-5
                py-2.5
                text-xs
                font-bold
                uppercase
                tracking-wider
                transition-all
                duration-200
                border-b-2
                ${activeFilter === cat.id
                  ? "border-[#003A70] text-[#003A70] bg-white shadow-sm"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white border border-slate-200 flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              
              {/* Cover Image container */}
              <div className="relative h-[240px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                <span className="absolute top-4 left-4 bg-[#003A70] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Text content details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#0a1f44] mb-4">
                    {project.client}
                  </h3>

                  {/* Structured attributes */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
                        <p className="text-xs font-semibold text-slate-700">{project.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layout className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Area Size</p>
                        <p className="text-xs font-semibold text-slate-700">{project.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Duration</p>
                        <p className="text-xs font-semibold text-slate-700">{project.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Scope</p>
                        <p className="text-xs font-semibold text-slate-700 truncate max-w-[120px]" title={project.scope}>
                          {project.scope}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Outcome Panel */}
                  <div className="border-t border-slate-100 pt-4 mt-2">
                    <div className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#0a1f44] block text-[10px] uppercase tracking-wider mb-0.5">Key Outcome</span>
                        <p className="text-[11px] leading-relaxed text-slate-600">{project.outcomes}</p>
                      </div>
                    </div>
                  </div>

                  {/* Link to dynamic page */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex justify-end">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-[#003A70] hover:text-[#005ea6] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all hover:gap-2.5"
                    >
                      View Showcase
                      <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 pt-12 pb-6">
        <div className="bg-[#0a1f44] text-white p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-bl-full pointer-events-none" />
          <div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight font-serif mb-2">
              Have an Upcoming Workplace Fit-Out Project?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              Partner with ICC for high-precision costing audits, site supervision oversight, and seamless execution advisory.
            </p>
          </div>
          <a 
            href="/contact" 
            className="
              bg-white
              text-[#0a1f44]
              hover:bg-slate-100
              px-6
              py-3.5
              text-xs
              font-bold
              uppercase
              tracking-wider
              transition-all
              shrink-0
            "
          >
            Partner With Us
          </a>
        </div>
      </section>

    </div>
  );
}