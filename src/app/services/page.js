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
  KeyRound,
  ChevronRight,
  Sparkles
} from "lucide-react";
import {
  FadeIn,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
  AnimateModal,
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
        <h3 className="text-xl font-extrabold">{pillar?.title}</h3>
        <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">{pillar?.description}</p>
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
        <span>Governance QA checklist manual</span>
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
  const [expandedService, setExpandedService] = useState("fitout");

  const services = [
    {
      id: "fitout",
      num: "01",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Project Management & Fit-Out",
      short: "End-to-end site coordination, contractor governance, scheduling, and strict timeline execution control.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Master planning & milestone scheduling",
        "Contractor governance & procurement",
        "Daily site performance dashboards",
        "Handover governance & tracking"
      ]
    },
    {
      id: "advisory",
      num: "02",
      icon: <Search className="w-5 h-5" />,
      title: "Project Advisory & Pre-Construction",
      short: "Design optimization, specification audits, value engineering, and pre-construction risk management.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Scope finalization & validation",
        "Structural design check audits",
        "BOQ & specification check logs",
        "Pre-construction risk assessments"
      ]
    },
    {
      id: "coordination",
      num: "03",
      icon: <Layers className="w-5 h-5" />,
      title: "Design Coordination & BIM Integration",
      short: "Bridging the gap between creative design intent, physical construction parameters and MEP blueprints.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Designer-Vendor-MEP interfaces",
        "Clash audits prior to site line-out",
        "As-built drawing validation checks",
        "Material approval logs tracking"
      ]
    },
    {
      id: "costing",
      num: "04",
      icon: <Calculator className="w-5 h-5" />,
      title: "Cost Management & BOQ Auditing",
      short: "BOQ quantity audits, comprehensive vendor cost comparison matrices, and budget variations tracking.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Quantity take-off validations",
        "Vendor comparative price sheets",
        "Contingency control management",
        "Cost-to-complete forecast reports"
      ]
    },
    {
      id: "mep",
      num: "05",
      icon: <Settings className="w-5 h-5" />,
      title: "MEP Engineering & Systems Control",
      short: "Managing HVAC, electrical, plumbing, fire safety systems, and architectural layout integration.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Services constraint checks",
        "MEP shop drawings cross-review",
        "Corridor services clash checks",
        "Testing & commissioning checks"
      ]
    },
    {
      id: "supervision",
      num: "06",
      icon: <CheckSquare className="w-5 h-5" />,
      title: "Quality Control & Site Supervision",
      short: "Daily site inspection, quality control checking, inward material validation, and safety compliance audits.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
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

  const activeServiceObj = services.find(s => s.id === expandedService) || services[0];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0a1f44] pb-24 font-sans antialiased">
      
      {/* HERO SECTION — Matching reference image layout */}
      <section className="relative w-full min-h-[580px] sm:min-h-[640px] flex items-center bg-[#f8fafc] overflow-hidden py-24 sm:py-32">
        {/* Full-width High-Quality Interior Photo with Subtle Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Luxury Commercial Interior Space"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
          {/* Soft vignette gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/20" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Dark Eyebrow Tagline matching image */}
            <p className="text-xs sm:text-sm font-sans font-extrabold uppercase tracking-[0.25em] text-white/90 drop-shadow-md">
              LET&apos;S RECREATE YOUR WAY OF WORKING
            </p>

            {/* Massive Prominent White Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.08] drop-shadow-lg">
              Commercial Interior <br />
              Designers &amp; Management
            </h1>

            {/* White CTA Button with primary brand text matching image design */}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-[#005EA6] font-bold text-xs sm:text-sm px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105 duration-200"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <div id="services-matrix" className="max-w-[1440px] mx-auto px-5 lg:px-8 pt-16">
        
        {/* FEATURED INTERACTIVE SERVICE SHOWCASE */}
        <div className="mb-20 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Services Selector List */}
            <div className="lg:col-span-5 border-r border-slate-100 bg-slate-50/60 divide-y divide-slate-100">
              <div className="p-6 bg-[#005EA6]/5 border-b border-slate-100">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#005EA6]">
                  Service Matrix
                </span>
                <h3 className="text-lg font-bold text-[#0a1f44] mt-0.5">Explore Key Solutions</h3>
              </div>
              {services.map((s) => {
                const isSelected = expandedService === s.id;
                return (
                  <div
                    key={s.id}
                    onClick={() => setExpandedService(s.id)}
                    className={`p-6 cursor-pointer transition-all duration-300 flex items-center justify-between group ${
                      isSelected
                        ? "bg-white border-l-4 border-l-[#005ea6] shadow-sm"
                        : "hover:bg-white/80"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-xs font-bold ${isSelected ? "text-[#005ea6]" : "text-slate-400"}`}>
                        {s.num}
                      </span>
                      <div>
                        <h4 className={`text-sm font-bold transition-colors ${isSelected ? "text-[#005ea6]" : "text-slate-800 group-hover:text-[#005ea6]"}`}>
                          {s.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{s.short}</p>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-[#005ea6] translate-x-1" : "text-slate-300"}`} />
                  </div>
                );
              })}
            </div>

            {/* Right Detail Display Pane */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between relative bg-white">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-8 shadow-md">
                <Image
                  src={activeServiceObj.image}
                  alt={activeServiceObj.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/80 via-transparent to-transparent flex items-end p-6">
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg">
                    SPECIFICATION OVERVIEW
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0a1f44] mb-3">{activeServiceObj.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{activeServiceObj.short}</p>

                <div className="space-y-2.5 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold block mb-3">
                    AUDITED DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeServiceObj.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 p-3 rounded-xl">
                        <CheckCircle className="w-4 h-4 text-[#005ea6] shrink-0" />
                        <span className="text-xs font-semibold text-slate-700">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Zero-Delay Milestone Standard</span>
                <Link
                  href={`/contact?interest=${activeServiceObj.id}`}
                  className="inline-flex items-center gap-2 bg-[#005ea6] hover:bg-[#004b84] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* ALL SERVICES GRID */}
        <div className="mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-2">
            Capabilities
          </span>
          <h2 className="text-3xl font-bold text-[#0a1f44] mb-8">Comprehensive Delivery Solutions</h2>
        </div>

        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <StaggerItem key={s.id} direction="up">
              <TiltCard
                tiltMaxAngle={6}
                scaleOnHover={1.02}
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 text-[#005ea6] flex items-center justify-center group-hover:bg-[#005ea6] group-hover:text-white transition-colors duration-300">
                      {s.icon}
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-200 group-hover:text-[#005ea6]/20 transition-colors">
                      {s.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0a1f44] mb-3 group-hover:text-[#005ea6] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-light">{s.short}</p>

                  <div className="space-y-2 border-t border-slate-100 pt-5 mb-6">
                    {s.points.map((pt, ptIdx) => (
                      <div key={ptIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-[#005ea6] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/contact?interest=${s.id}`}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-xs font-bold text-[#005ea6] uppercase tracking-wider group-hover:text-[#0a1f44] transition-colors"
                >
                  <span>Request Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* PROJECT GOVERNANCE PROCESS (lhinteriors inspired cards) */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 mt-20">
        <div className="bg-[#0a1f44] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 block mb-3 font-mono">
              PROJECT WORKFLOW
            </span>
            <h3 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white font-serif">
              Our Structured Fit-Out <span className="font-sans text-cyan-300">Governance Model</span>
            </h3>
            <p className="text-sm mt-4 max-w-2xl mx-auto leading-relaxed text-slate-300 font-light">
              We manage fit-out advisory through structured checklists, clash audits, and periodic milestone reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { num: "01", icon: <ClipboardList className="w-5 h-5" />, title: "Audit & Onboarding", desc: "Site documentation audit, stakeholder kickoff, BOQ and scope validation against CAD/BIM inputs." },
              { num: "02", icon: <GitMerge className="w-5 h-5" />, title: "Clash Clearance", desc: "MEP 3D clash detection, drywall alignment checks, and sequential material inward batch certifications." },
              { num: "03", icon: <BadgeCheck className="w-5 h-5" />, title: "Milestone QA Reviews", desc: "Periodic sign-off audits at civil, MEP, finishes, and furniture stages before proceeding to next phase." },
              { num: "04", icon: <KeyRound className="w-5 h-5" />, title: "Snag-Free Handover", desc: "Formal snag list clearance, punch list submissions, and occupancy certificate coordination with the landlord." },
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 text-cyan-300 flex items-center justify-center border border-cyan-400/20">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-400">Phase {idx + 1}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM PROPOSAL REQUEST BANNER */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#0a1f44] to-[#005ea6] text-white p-8 sm:p-12 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white uppercase tracking-wider font-sans">Request Standard Auditing SOPs</h4>
              <p className="text-xs text-slate-200 leading-relaxed mt-0.5 max-w-xl font-light">
                Get in touch to receive our standardized project templates, BoQ comparison sheets, and site safety audit guidelines.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-white text-[#0a1f44] hover:bg-slate-100 py-4 px-8 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 transition-all shrink-0 shadow-lg"
          >
            Contact Advisor
            <ArrowRight size={14} />
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