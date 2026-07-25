"use client";

import { useState } from "react";
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
  Check, 
  FileText,
  Cpu, 
  Columns, 
  Sun, 
  HardHat, 
  Compass, 
  CheckCircle,
  FileCheck,
  Zap,
  ShieldCheck,
  X,
  SlidersHorizontal,
  Info,
  ClipboardList,
  GitMerge,
  BadgeCheck,
  KeyRound
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  TiltCard,
  MagneticButton,
  AnimateModal,
  FloatingParticles,
  GlowFollower,
  TextReveal,
} from "@/components/animations";

// Technical Inspection Log Modal
function QAChecklistModal({ pillar, onClose }) {
  const mockChecklists = {
    "MEP Services Integration": [
      { check: "CF-1.1", label: "3D Clash Audit Coordination", desc: "Review structural beam files against HVAC/Cable duct layouts." },
      { check: "CF-1.2", label: "Electrical Load Balancing Verification", desc: "Validate that final DB loads map safely with landlord incoming capacity." },
      { check: "CF-1.3", label: "Acoustic Attenuation at Duct Silencers", desc: "Inspection of acoustic wraps at primary return air plenums." },
      { check: "CF-1.4", label: "Sprinkler Pipe Pressure Logs", desc: "Hydro-testing validation log check before drywall insulation closure." },
      { check: "CF-1.5", label: "Security & Access Control Integration", desc: "Validation of fire alarm relay interfaces at primary exits." }
    ],
    "Civil & Drywall Systems": [
      { check: "CF-2.1", label: "Drywall Stud Gauge Thickness Audit", desc: "Verify stud spacing and sheet gauge sizes mapped to project specs." },
      { check: "CF-2.2", label: "Partition Deflection Head Detailing", desc: "Check head clearance deflection channels at expansion joints." },
      { check: "CF-2.3", label: "Floor Levelness (FF/FL) Survey Logs", desc: "Verify level tolerances before modular carpet or vinyl floor layouts." },
      { check: "CF-2.4", label: "Ceiling Wire Suspensions Alignment", desc: "Verify hanger spacings are compliant with heavy lighting layout plans." },
      { check: "CF-2.5", label: "Rockwool Acoustic Infill Density checks", desc: "Verify uniform density layouts at speech-sensitive partitions." }
    ],
    "Bespoke Millwork & Finishes": [
      { check: "CF-3.1", label: "Veneer Flitch Matching Logs", desc: "Verify grain continuation and sequences on reception wall panelings." },
      { check: "CF-3.2", label: "Wood Moisture Content Validation", desc: "Moisture level meter tests on solid wood structures to prevent wrapping." },
      { check: "CF-3.3", label: "Stone Miter Joint Precision Checks", desc: "Verification of seamless epoxy joint alignments at counter corners." },
      { check: "CF-3.4", label: "High-Traffic Paint Snug Snagging", desc: "Lux level inspections to mark flashing and roller marks on wall finishes." },
      { check: "CF-3.5", label: "Glass Partition Gasket Fittings", desc: "Verify double-glazed silicon seals are tight to optimize acoustics." }
    ],
    "Acoustic & Lighting Coordination": [
      { check: "CF-4.1", label: "Speech Intelligibility Index (STI) test", desc: "Decibel checking at meeting rooms to verify speech insulation levels." },
      { check: "CF-4.2", label: "Emergency Lighting Lux Distribution", desc: "Simulate power failures to measure emergency path lighting coverages." },
      { check: "CF-4.3", label: "DALI Dimming Protocol Calibration", desc: "Test integration controls with automated daylight harvesting sensors." },
      { check: "CF-4.4", label: "Reverberation Time (RT60) Verification", desc: "Calculate room acoustics response at mid-range frequencies." },
      { check: "CF-4.5", label: "High-Frequency Flicker Audits", desc: "Check light driver outputs to prevent camera and eye-strain flickers." }
    ],
    "Site Safety & Quality Audits": [
      { check: "CF-5.1", label: "Personal Protective Equipment Logs", desc: "EHS log checks tracking worker safety orientations and compliance." },
      { check: "CF-5.2", label: "Inward Material Test Logs", desc: "Log reviews mapping manufacturer batch certificates to site samples." },
      { check: "CF-5.3", label: "Hot Work Permit Auditing Logs", desc: "Double check fire watch systems during active metal fabrication works." },
      { check: "CF-5.4", label: "Scaffolding Stability Inspections", desc: "Green tag verification logs on height staging structures before use." },
      { check: "CF-5.5", label: "Scrap & E-Waste Disposal Receipts", desc: "Validate that hazardous materials are recycled through local authorized agencies." }
    ],
    "Landlord & Authority Liaising": [
      { check: "CF-6.1", label: "Landlord Fit-Out Manual Reviews", desc: "Map project layouts against building utility guidelines to avoid approvals delay." },
      { check: "CF-6.2", label: "Fire Safety (NOC) Compliance Logs", desc: "Cross reference local fire code alignments with layout drawings." },
      { check: "CF-6.3", label: "Building Utility Connection Permits", desc: "Verify structural loading permits for water/chilled lines setups." },
      { check: "CF-6.4", label: "EHS Audit Submissions Checklists", desc: "Coordinate occupancy verification logs with building administrative teams." },
      { check: "CF-6.5", label: "Public Utility Power Up permits", desc: "Liaise on substation transformation tests for high capacity equipment." }
    ]
  };

  const checklist = pillar ? (mockChecklists[pillar.title] || []) : [];

  return (
    <AnimateModal isOpen={Boolean(pillar)} onClose={onClose} className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden relative flex flex-col max-h-[85vh]">
      {/* Header */}
      <div className="bg-[#0a1f44] text-white p-6 sm:p-8 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all border border-white/10"
          aria-label="Close Dialog"
        >
          <X size={16} />
        </button>
          
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400 block font-mono mb-2">TECHNICAL INSPECTION LOG</span>
          <h3 className="text-xl font-extrabold">{pillar.title}</h3>
          <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">{pillar.description}</p>
        </div>

        {/* Checklist Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-slate-50/50">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4 font-mono">QA VERIFICATION CHECKPOINTS</span>
          <div className="space-y-4">
            {checklist.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200/80 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-500/20 transition-colors"
              >
                <span className="font-mono text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded">
                  {item.check}
                </span>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{item.label}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 flex items-center justify-between bg-white text-xs text-slate-400">
          <span>Centrionyx Governance QA checklist manual</span>
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-[#0a1f44] text-white rounded-full text-xs font-bold hover:bg-blue-600 transition-colors"
          >
            Close Checkpoints
          </button>
        </div>
    </AnimateModal>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("services"); // "services" | "expertise"
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPillar, setSelectedPillar] = useState(null);

  const services = [
    {
      id: "fitout",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Project Management",
      short: "End-to-end site coordination, contractor governance, scheduling, and strict timeline execution control.",
      points: [
        "Master planning & milestone scheduling",
        "Contractor governance & procurement",
        "Daily performance dashboards",
        "Handover governance & tracking"
      ]
    },
    {
      id: "advisory",
      icon: <Search className="w-5 h-5" />,
      title: "Project Advisory",
      short: "Design optimization, specification audits, value engineering, and pre-construction risk management.",
      points: [
        "Scope finalization & validation",
        "Structural design check audits",
        "BOQ & specification check logs",
        "Pre-construction risk assessments"
      ]
    },
    {
      id: "coordination",
      icon: <Layers className="w-5 h-5" />,
      title: "Design Coordination",
      short: "Bridging the gap between creative design intent, physical construction parameters and MEP blueprints.",
      points: [
        "Designer-Vendor-MEP interfaces",
        "Clash audits prior to site line-out",
        "As-built drawing validation checks",
        "Material approval logs tracking"
      ]
    },
    {
      id: "costing",
      icon: <Calculator className="w-5 h-5" />,
      title: "Cost Management",
      short: "BOQ quantity audits, comprehensive vendor cost comparison matrices, and budget variations tracking.",
      points: [
        "Quantity take-off validations",
        "Vendor comparative price sheets",
        "Contingency control management",
        "Cost-to-complete forecast reports"
      ]
    },
    {
      id: "mep",
      icon: <Settings className="w-5 h-5" />,
      title: "MEP Coordination",
      short: "Managing HVAC, electrical, plumbing, fire safety systems, and architectural layout integration.",
      points: [
        "Services constraint checks",
        "MEP shop drawings cross-review",
        "Corridor services clash checks",
        "Testing & commissioning checks"
      ]
    },
    {
      id: "supervision",
      icon: <CheckSquare className="w-5 h-5" />,
      title: "Site Supervision",
      short: "Daily site inspection, quality control checking, inward material validation, and safety compliance audits.",
      points: [
        "Daily site progress tracking logs",
        "Snag identification & tracking logs",
        "Manufacturer certification checks",
        "Site safety audit checks"
      ]
    }
  ];

  const filterCategories = [
    { id: "all", label: "All Sectors" },
    { id: "engineering", label: "Engineering" },
    { id: "execution", label: "Fit-Out & Execution" },
    { id: "compliance", label: "Compliance & Safety" }
  ];

  const pillars = [
    {
      group: "engineering",
      icon: <Cpu className="w-5 h-5" />,
      title: "MEP Services Integration",
      description: "Managing HVAC sizing, electrical layout planning, plumbing line-outs, data cables coordination, and integrated security system clash detection audits.",
      scopes: ["HVAC Layout Coordination", "Electrical Load Calculations", "Integrated Access Control"]
    },
    {
      group: "execution",
      icon: <Layers className="w-5 h-5" />,
      title: "Civil & Drywall Systems",
      description: "Rigorous alignment verification of acoustic partitions, modular ceiling suspensions, structural reinforcements, and floor substrate treatments.",
      scopes: ["Acoustic partitions", "Ceiling Grid Suspension", "Substrate Treatments"]
    },
    {
      group: "execution",
      icon: <Columns className="w-5 h-5" />,
      title: "Bespoke Millwork & Finishes",
      description: "Oversight of customized woodwork detailing, stone fabrication checks, veneer selections, glass installations, and fine paint snuff snagging.",
      scopes: ["Veneer Matching logs", "Counter Stone Miter joints", "Glass Partition Seals"]
    },
    {
      group: "engineering",
      icon: <Sun className="w-5 h-5" />,
      title: "Acoustic & Lighting Coordination",
      description: "Decibel reduction level audit coordination, light fixture alignment calculations, dimming controls integration, and smart room acoustics verification.",
      scopes: ["Acoustic Intelligibility tests", "Lux Distribution mapping", "DALI Protocols Calibration"]
    },
    {
      group: "compliance",
      icon: <HardHat className="w-5 h-5" />,
      title: "Site Safety & Quality Audits",
      description: "Regular site monitoring audits mapping EHS safety compliance, inward material quality checklists, and vendor certification logs.",
      scopes: ["EHS logs checks", "Inward Material Test Logs", "Safety Orientations Logs"]
    },
    {
      group: "compliance",
      icon: <Compass className="w-5 h-5" />,
      title: "Landlord & Authority Liaising",
      description: "Translating corporate interior scopes into landlord compliance reports, matching local fire safety guidelines, and building occupancy rules.",
      scopes: ["Landlord Fit-Out guidelines", "Fire Code NOC checklists", "Utility Connection permits"]
    }
  ];

  const filteredPillars = activeFilter === "all" 
    ? pillars 
    : pillars.filter(p => p.group === activeFilter);

  return (
    <div className="w-full bg-[#f8fafc] text-[#0a1f44] pb-24 font-sans antialiased">
      
      {/* 1. HERO HEADER */}
      <section className="w-full h-[400px] sm:h-[480px] relative overflow-hidden bg-[#0a1f44] text-white">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainability_office.png"
            alt="Office space layout"
            fill
            priority
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-[#0a1f44]/45" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-0 left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-[90px] pointer-events-none z-10" />

        {/* Downward Gradient Fade */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#f8fafc]/45 to-[#f8fafc] z-15 pointer-events-none" />

        {/* Hero Content */}
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 h-full relative z-25 flex flex-col justify-center pb-24">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400 mb-3 block font-mono">
            CAPABILITIES &amp; EXPERTISE
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none text-white">
            Services &amp; Expertise
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed mt-4 max-w-xl font-light">
            High-precision project management, pre-construction design audits, and specialized technical competence for corporate interior fit-out spaces across India.
          </p>

          {/* Toggle Switch Tabs */}
          <div className="mt-8 flex items-center bg-white/10 backdrop-blur-md p-1.5 rounded-2xl w-fit border border-white/15">
            <button
              onClick={() => setActiveTab("services")}
              className={`
                px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300
                ${activeTab === "services"
                  ? "bg-white text-[#0a1f44] shadow-lg scale-[1.02]"
                  : "text-white/80 hover:text-white hover:bg-white/5"
                }
              `}
            >
              Core Services
            </button>
            <button
              onClick={() => setActiveTab("expertise")}
              className={`
                px-6 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all duration-300
                ${activeTab === "expertise"
                  ? "bg-white text-[#0a1f44] shadow-lg scale-[1.02]"
                  : "text-white/80 hover:text-white hover:bg-white/5"
                }
              `}
            >
              Technical Expertise
            </button>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT SECTIONS */}

      {/* SECTION A: CORE SERVICES */}
      {activeTab === "services" && (
        <section className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-30 -mt-20 sm:-mt-24">
          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
            {services.map((s) => (
              <StaggerItem key={s.id} direction="up">
                <TiltCard
                  tiltMaxAngle={8}
                  scaleOnHover={1.02}
                  className="
                    bg-slate-50/80 
                    backdrop-blur-sm
                    border 
                    border-slate-200/60
                    rounded-[24px] 
                    p-8 
                    pt-12
                    relative 
                    shadow-lg
                    shadow-slate-900/5
                    hover:bg-white
                    hover:shadow-[0_0_30px_5px_rgba(0,94,166,0.06),_0_20px_50px_rgba(0,94,166,0.12)]
                    hover:border-[#005ea6]/30
                    transition-all
                    duration-500
                    flex 
                    flex-col 
                    justify-between
                    group
                    h-full
                  "
                >
                  {/* Overlapping Top Icon Block */}
                  <div className="
                    w-12 
                    h-12 
                    rounded-xl 
                    bg-[#0a1f44] 
                    text-white 
                    flex 
                    items-center 
                    justify-center 
                    absolute 
                    top-0 
                    left-1/2 
                    -translate-x-1/2 
                    -translate-y-1/2 
                    shadow-lg
                    shadow-[#0a1f44]/25
                    transition-all
                    duration-500
                    group-hover:bg-[#005ea6]
                    group-hover:scale-110
                    group-hover:shadow-[0_0_20px_rgba(0,94,166,0.65)]
                  ">
                    {s.icon}
                  </div>

                  <div className="text-center">
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 mb-3 mt-2 group-hover:text-[#005ea6] transition-colors duration-500">
                      {s.title}
                    </h3>

                    <p className="text-slate-500 text-xs leading-relaxed font-light mb-6 px-1">
                      {s.short}
                    </p>

                    <div className="border-t border-slate-200/50 pt-5 mb-6 text-left">
                      <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-3 font-mono text-center">
                        Scopes Audited
                      </span>
                      <ul className="space-y-2.5">
                        {s.points.map((pt, ptIdx) => (
                          <li key={ptIdx} className="flex items-start gap-2.5">
                            <span className="
                              w-5 
                              h-5 
                              rounded-lg 
                              bg-[#e6f0fa] 
                              border 
                              border-[#005ea6]/10 
                              flex 
                              items-center 
                              justify-center 
                              shrink-0 
                              mt-0.5 
                              text-[#005ea6] 
                              transition-all 
                              duration-300 
                              group-hover:bg-[#005ea6] 
                              group-hover:text-white
                              group-hover:scale-105
                            ">
                              <Check size={10} strokeWidth={3} />
                            </span>
                            <span className="text-slate-600 text-xs font-semibold leading-snug transition-colors duration-300 group-hover:text-slate-850">
                              {pt}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="text-center mt-auto pt-4 border-t border-slate-200/50">
                    <Link
                      href={`/contact?interest=${s.id}`}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        text-[10px] 
                        font-bold 
                        text-[#005ea6] 
                        group-hover:text-[#0a1f44]
                        border-b 
                        border-[#005ea6]/20 
                        group-hover:border-[#0a1f44]
                        uppercase 
                        tracking-widest 
                        pb-0.5 
                        transition-all
                        duration-300
                      "
                    >
                      <span>Request Proposal</span>
                      <ArrowRight size={10} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>
      )}

      {/* SECTION B: TECHNICAL EXPERTISE */}
      {activeTab === "expertise" && (
        <section className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-30 -mt-16 sm:-mt-20">
          
          <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-xl mb-16">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-10 pb-4 border-b border-slate-200/60">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-2">TECHNICAL PILLARS</span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827]">Fields of Specialization</h2>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 items-center">
                <SlidersHorizontal className="w-4 h-4 text-slate-400 mr-2 shrink-0 hidden sm:block" />
                {filterCategories.map((cat) => {
                  const count = cat.id === "all" 
                    ? pillars.length 
                    : pillars.filter(p => p.group === cat.id).length;

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
                        rounded-xl
                        flex
                        items-center
                        gap-2
                        ${activeFilter === cat.id
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/10"
                          : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }
                      `}
                    >
                      {cat.label}
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeFilter === cat.id ? "bg-white text-blue-900 font-bold" : "bg-slate-200/60 text-slate-700"}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredPillars.map((pillar, idx) => (
                <div 
                  key={pillar.title}
                  onClick={() => setSelectedPillar(pillar)}
                  className="bg-slate-50/70 border border-slate-200/80 p-8 rounded-2xl shadow-sm flex gap-6 items-start hover:bg-white hover:shadow-2xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative"
                >
                  <span className="font-mono text-xl sm:text-2xl font-extrabold text-[#003A70] bg-blue-50 border border-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors group-hover:bg-[#003A70] group-hover:text-white">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#003A70] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed mb-4">
                      {pillar.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/50">
                      {pillar.scopes.map((scope) => (
                        <span key={scope} className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-md text-[#6b7280] font-semibold">
                          {scope}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute right-6 top-6 text-slate-400 group-hover:text-blue-600 transition-colors">
                    <Info size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECT GOVERNANCE MODEL */}
          <div className="bg-[#0a1f44] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 block mb-3 font-mono">
                GOVERNANCE MODEL
              </span>
              <h3 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                Our Rigorous Project <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 bg-clip-text text-transparent">Governance Model</span>
              </h3>
              <p className="text-sm mt-5 max-w-2xl mx-auto leading-relaxed text-slate-300">
                We manage fit-out advisory through structured checklists, clash audits, and periodic milestone reviews — protecting clients from cost overruns and vendor extensions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { num: "01", icon: <ClipboardList className="w-5 h-5" />, title: "Audit & Onboarding", desc: "Site documentation audit, stakeholder kickoff, BOQ and scope validation against CAD/BIM inputs." },
                { num: "02", icon: <GitMerge className="w-5 h-5" />, title: "Clash Clearance", desc: "MEP 3D clash detection, drywall alignment checks, and sequential material inward batch certifications." },
                { num: "03", icon: <BadgeCheck className="w-5 h-5" />, title: "Milestone QA Reviews", desc: "Periodic sign-off audits at civil, MEP, finishes, and furniture stages before proceeding to next phase." },
                { num: "04", icon: <KeyRound className="w-5 h-5" />, title: "Snag-Free Handover", desc: "Formal snag list clearance, punch list submissions, and occupancy certificate coordination with the landlord." },
              ].map((step, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center border border-cyan-400/20">
                      {step.icon}
                    </div>
                    <span className="font-mono text-xs font-bold text-cyan-400">Phase {idx + 1}</span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-10">
              {[
                { icon: <FileCheck className="w-5 h-5 text-cyan-400" />, metric: "100%", desc: "Material validation and certificate checks" },
                { icon: <Zap className="w-5 h-5 text-cyan-400" />, metric: "Clash-Free", desc: "MEP layouts verified before site execution" },
                { icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />, metric: "Zero Snag", desc: "Goal at official project handover phase" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-lg font-extrabold block text-white leading-none">{item.metric}</span>
                    <span className="text-xs mt-1 block text-slate-300 leading-normal">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* 3. BOTTOM PROPOSAL REQUEST BANNER */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 pb-12 mt-20 relative z-30">
        <div className="bg-[#0a1f44] text-white p-8 sm:p-12 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-50%] right-[-20%] w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[50px] pointer-events-none" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
              <FileText size={20} />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white uppercase tracking-wider font-sans">Request Detailed Auditing SOPs</h4>
              <p className="text-xs text-slate-400 leading-relaxed mt-0.5 max-w-xl font-light">Get in touch to receive our standardized project templates, BoQ comparison sheets, and site safety audit guidelines.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="
              bg-[#005ea6]
              hover:bg-[#004b84]
              text-white
              py-4
              px-8
              rounded-xl
              text-xs
              font-extrabold
              uppercase
              tracking-widest
              flex
              items-center
              gap-2
              transition-all
              duration-300
              hover:-translate-y-0.5
              shrink-0
              shadow-lg
              shadow-blue-900/20
              relative
              z-10
            "
          >
            Contact Advisor
            <ArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* DETAILED QA CHECKLIST MODAL */}
      {selectedPillar && (
        <QAChecklistModal 
          pillar={selectedPillar} 
          onClose={() => setSelectedPillar(null)} 
        />
      )}

    </div>
  );
}