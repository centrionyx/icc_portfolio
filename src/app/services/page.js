"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Briefcase, 
  Search, 
  Layers, 
  Calculator, 
  Settings, 
  CheckSquare, 
  ArrowRight, 
  FileText,
  CheckCircle,
  Cpu,
  ShieldCheck,
  TrendingUp,
  FileCheck
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("fitout");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger smooth transition animation when tab changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 250);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const services = [
    {
      id: "fitout",
      icon: <Briefcase className="w-6 h-6 text-blue-500" />,
      title: "Interior Fit-Out Project Management",
      short: "End-to-end site coordination, contractor governance, and timelines control.",
      metric: "100% On-Time Delivery Goal",
      points: [
        "End-to-end master planning, milestone scheduling & execution mapping",
        "Rigorous contractor pre-qualification & procurement administration",
        "Daily/weekly standardized stakeholder reports & performance dashboards",
        "On-site project tracking, progress mapping & handover governance"
      ]
    },
    {
      id: "advisory",
      icon: <Search className="w-6 h-6 text-blue-500" />,
      title: "Project Advisory & Technical Consultancy",
      short: "Design optimization, specification checks, and pre-construction advisory.",
      metric: "Clash-Free Design Layouts",
      points: [
        "Scope finalization & architectural validation checklists",
        "Design optimization to reduce structural complications",
        "Value engineering recommendations for high-impact cost savings",
        "BOQ & material specification verification before vendor on-boarding",
        "Pre-construction project scheduling & risk mapping assessments"
      ]
    },
    {
      id: "coordination",
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      title: "Design Coordination",
      short: "Bridging the gap between design intent and execution blueprints.",
      metric: "As-Built Drawing Validation",
      points: [
        "Seamless Designer-Vendor-MEP interface management",
        "Comprehensive drawing reviews & clash audits prior to site line-out",
        "Rigorous as-built drawings verification & physical measurements cross-checking",
        "Material sample review & approval coordination tracking log"
      ]
    },
    {
      id: "costing",
      icon: <Calculator className="w-6 h-6 text-blue-500" />,
      title: "Cost Management & BOQ Validation",
      short: "BOQ audits, cost comparison, and budget guardrails maintenance.",
      metric: "Maximized Cost Predictability",
      points: [
        "Comprehensive BOQ auditing & quantity take-off validation",
        "Granular vendor comparative statements & pricing negotiations advisory",
        "Active budget optimization & contingency control management",
        "Periodic cost-to-complete analysis reports & variations tracking"
      ]
    },
    {
      id: "mep",
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: "MEP & Services Coordination",
      short: "Managing HVAC, electrical, plumbing, fire safety, and services layout integration.",
      metric: "Clash Resolution Audit",
      points: [
        "MEP services line-out verification & site constraint identification",
        "MEP shop drawings cross-review against civil & ID layouts",
        "Services clash resolution, corridor layout planning & serviceability audits",
        "Vendor execution alignment checks for testing & commissioning"
      ]
    },
    {
      id: "supervision",
      icon: <CheckSquare className="w-6 h-6 text-blue-500" />,
      title: "Site Supervision & Execution Support",
      short: "Daily site inspection, quality control, material validation, and safety compliance.",
      metric: "Zero-Incident Site Safety",
      points: [
        "Daily site monitoring & work sequence tracking logs",
        "Rigorous quality checks & snag list identification/rectification tracking",
        "Inward material verification & manufacturer certificate validation",
        "Zero-accident safety compliance monitoring & environmental regulations check"
      ]
    }
  ];

  const activeService = services.find((s) => s.id === activeTab) || services[0];

  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      
      {/* PAGE HEADER SECTION WITH DUST GRADIENT FADE */}
      <section className="w-full bg-[#0a1f44] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Background Image on the right */}
        <div className="absolute inset-y-0 right-0 w-[50%] z-0 hidden md:block">
          <Image
            src="/sustainability_office.png"
            alt="Services Banner Background"
            fill
            priority
            className="object-cover object-right opacity-40"
          />
        </div>

        {/* Horizontal Gradient Overlay: solid blue on left, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/85 to-transparent z-10 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
            OUR TECHNICAL SPECIALIZATION
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-serif max-w-2xl leading-tight">
            Specialized <span className="font-extrabold text-blue-500">Services</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-xl leading-relaxed">
            High-precision project management, due diligence audits, and site execution advisory for corporate interior fit-out spaces across India.
          </p>
        </div>
      </section>

      {/* DETAILED SERVICES INTERACTIVE WORKBENCH */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
          
          {/* LEFT SIDEBAR NAVIGATION */}
          <div className="w-full lg:w-[360px] shrink-0 bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block px-2 mb-4">
                Service Tracks
              </span>
              <div className="flex flex-col gap-2">
                {services.map((s) => {
                  const isSelected = activeTab === s.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveTab(s.id)}
                      className={`
                        w-full
                        text-left
                        px-4
                        py-4
                        text-xs
                        font-bold
                        transition-all
                        duration-300
                        flex
                        items-center
                        justify-between
                        border
                        relative
                        overflow-hidden
                        ${isSelected 
                          ? "bg-[#0a1f44] text-white border-[#0a1f44] shadow-md shadow-slate-900/10" 
                          : "bg-slate-50/50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300"
                        }
                      `}
                    >
                      {/* Active highlight color bar */}
                      {isSelected && (
                        <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-blue-500" />
                      )}
                      
                      <span className="max-w-[85%] relative z-10">{s.title}</span>
                      <span className={`transition-transform duration-300 relative z-10 ${isSelected ? "translate-x-1.5 text-blue-400" : "text-slate-400"}`}>
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick stats indicator */}
            <div className="border-t border-slate-100 pt-6 mt-8 hidden lg:block">
              <div className="bg-[#f7f8fa] p-4 border border-slate-200 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-blue-500 shrink-0" />
                <div>
                  <h4 className="text-[10px] font-bold text-[#0a1f44] uppercase tracking-wider">Expertise Benchmarks</h4>
                  <p className="text-[10px] text-slate-500 leading-tight">ISO-quality audits and zero-delay site execution logs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT DETAILED PANEL WITH TRANSITION EFFECT */}
          <div 
            className={`
              flex-grow 
              bg-white 
              border 
              border-slate-200 
              p-8 
              lg:p-10 
              shadow-sm 
              flex 
              flex-col 
              justify-between 
              transition-all 
              duration-300
              ${isTransitioning ? "opacity-50 translate-y-2 scale-[0.995]" : "opacity-100 translate-y-0 scale-100"}
            `}
          >
            <div>
              {/* Service header with HSL card styling */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center shrink-0">
                    {activeService.icon}
                  </div>
                  <div>
                    <h2 className="text-xl lg:text-2xl font-bold tracking-tight text-[#0a1f44] font-serif leading-tight">
                      {activeService.title}
                    </h2>
                    <p className="text-slate-500 text-xs mt-1.5 leading-relaxed">
                      {activeService.short}
                    </p>
                  </div>
                </div>

                {/* Service Target Metric badge */}
                <div className="hidden sm:block shrink-0 bg-blue-50/50 border border-blue-100 px-4 py-2 text-right">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Target Metric</span>
                  <span className="text-[11px] font-extrabold text-[#003A70] tracking-tight">{activeService.metric}</span>
                </div>
              </div>

              {/* Core technical scopes as dynamic grids */}
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#003A70] mb-5 block">
                Technical Deliverables Checklists
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeService.points.map((point, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-200/80 p-4 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-start gap-3.5 shadow-sm group/item"
                  >
                    <span className="w-6 h-6 rounded-full bg-blue-50 text-[#003A70] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-blue-500 group-hover/item:text-white transition-colors duration-300">
                      {idx + 1}
                    </span>
                    <span className="text-xs leading-relaxed text-slate-600 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom proposal CTA */}
            <div className="bg-[#0a1f44] text-white p-6 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-400 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold font-serif text-white">Need detailed specifications for this service?</h4>
                  <p className="text-[10px] text-slate-400">Request our standard project SOPs, templates, and auditing methodology.</p>
                </div>
              </div>
              <Link
                href={`/contact?interest=${activeService.id}`}
                className="
                  bg-[#005ea6]
                  hover:bg-[#004b84]
                  text-white
                  px-5
                  py-3
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  transition-all
                  flex
                  items-center
                  gap-2
                  shrink-0
                "
              >
                Request Proposal
                <ArrowRight size={12} />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* ALL SERVICES INTERACTIVE SUMMARY INDEX */}
      <section className="bg-white border-t border-slate-200 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#003A70] block mb-2">
              SERVICE MATRIX
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#0a1f44] font-serif leading-tight">
              Comprehensive Service Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const isSelected = activeTab === s.id;
              return (
                <div 
                  key={s.id}
                  onClick={() => {
                    setActiveTab(s.id);
                    // Smooth scroll back to workbench panel
                    const element = document.getElementById("services-workbench");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }
                  }}
                  className={`
                    p-6
                    border
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    flex
                    flex-col
                    justify-between
                    relative
                    overflow-hidden
                    shadow-sm
                    ${isSelected 
                      ? "bg-slate-50/50 border-[#0a1f44] shadow-md shadow-slate-900/5" 
                      : "bg-white border-slate-200 hover:shadow-lg hover:border-slate-350"
                    }
                  `}
                >
                  {/* Styling top bar accent */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] ${isSelected ? "bg-blue-500" : "bg-slate-200 group-hover:bg-blue-400"}`} />

                  <div>
                    <div className="mb-4">{s.icon}</div>
                    <h4 className="text-sm font-bold text-[#0a1f44] mb-2 leading-tight">{s.title}</h4>
                    <p className="text-slate-500 text-[11px] leading-relaxed mb-6">{s.short}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#003A70] flex items-center gap-1.5">
                      Configure details
                      <ArrowRight size={10} />
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase">{s.metric}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}