"use client";

import { useState } from "react";
import { 
  Cpu, 
  Columns, 
  Layers, 
  Sun, 
  HardHat, 
  Compass, 
  CheckCircle,
  FileCheck,
  Zap,
  ShieldCheck,
  X,
  SlidersHorizontal,
  ChevronRight,
  Info,
  ClipboardList,
  GitMerge,
  BadgeCheck,
  KeyRound,
  ArrowRight
} from "lucide-react";

// Subcomponent for interactive QA checklists modal
function QAChecklistModal({ pillar, onClose }) {
  if (!pillar) return null;

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

  const checklist = mockChecklists[pillar.title] || [];

  return (
    <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div 
        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl border border-slate-200 overflow-hidden relative flex flex-col max-h-[85vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
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
          <p className="text-xs text-slate-305 mt-2 leading-relaxed font-light">{pillar.description}</p>
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
        <div className="p-5 border-t border-slate-150 flex items-center justify-between bg-white text-xs text-slate-400">
          <span>Centrionyx Governance QA checklist manual</span>
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-[#0a1f44] text-white rounded-full text-xs font-bold hover:bg-blue-600 transition-colors"
          >
            Close Checkpoints
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ExpertisePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedPillar, setSelectedPillar] = useState(null);

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
      scopes: ["HVAC Layout Coordination", "Electrical Load Calculations", "integrated Access Control"]
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
    <div className="w-full bg-[#f8fafc] text-slate-800 pb-20 min-h-screen relative overflow-hidden">
      
      {/* BRAND ALIGNED HERO SECTION */}
      <section className="relative w-full py-16 sm:py-20 bg-[#0a1f44] text-white overflow-hidden select-none border-b border-white/5">
        
        {/* Soft Radial Gradient Glow & Blueprint Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0a1f44] to-[#0a1f44] z-0 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Dynamic decorative blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-405 block font-mono mb-3">
               TECHNICAL CAPABILITIES
            </span>
            <h1 className="text-3xl sm:text-5xl font-light tracking-tight leading-[1.15] font-serif text-white">
              Technical Competence.
              <span className="block font-sans font-extrabold bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent mt-1.5">
                Audited Handover.
              </span>
            </h1>
            <p className="text-slate-350 text-xs sm:text-sm mt-5 max-w-xl leading-relaxed font-light">
              Uncompromising technical precision across critical interior infrastructure, materials auditing, and services integration.
            </p>
          </div>

          {/* Simple Minimalist Stat Pill */}
          <div className="bg-white/5 border border-white/10 px-5 py-4 rounded-2xl max-w-xs shrink-0 backdrop-blur-sm self-start md:self-auto">
            <span className="text-[10px] font-bold text-slate-405 uppercase tracking-wider block font-mono">Global Compliance</span>
            <p className="text-2xl font-extrabold mt-1 text-white">100% On-Time</p>
            <p className="text-[11px] text-slate-400 mt-1 leading-normal">Zero-delay MEP alignment with design guidelines.</p>
          </div>
        </div>

      </section>

      {/* CORE SPEC FIELDS MATRIX (ALTERNATING 2-COLUMN LAYOUT) */}
      <main className="max-w-7xl mx-auto px-5 lg:px-8 py-16 relative z-30">
        
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-10 pb-4 border-b border-slate-200/60">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-2">TECHNICAL PILLARS</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827]">Fields of Specialization</h2>
          </div>

          {/* Category Pill Tab selector */}
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
                      : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }
                  `}
                >
                  {cat.label}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeFilter === cat.id ? "bg-white text-blue-900 font-bold" : "bg-slate-100 text-slate-700"}`}>
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
              className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xl shadow-slate-100/50 flex gap-6 items-start hover:shadow-2xl hover:border-blue-500/20 hover:-translate-y-1 transition-all duration-300 group cursor-pointer relative"
            >
              {/* Distinctive big index indicator */}
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

                {/* Sub-scopes list pill badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {pillar.scopes.map((scope) => (
                    <span key={scope} className="text-xs bg-slate-50 border border-slate-200 px-3 py-1 rounded-md text-[#6b7280] font-semibold">
                      {scope}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info arrow indicator tag */}
              <div className="absolute right-6 top-6 text-slate-400 group-hover:text-blue-600 transition-colors">
                <Info size={18} />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* RIGOROUS PROJECT GOVERNANCE MODEL */}
      <section className="relative py-20 lg:py-24 overflow-hidden" style={{ backgroundColor: 'var(--color-offwhite, #f7f8fa)' }}>
        
        {/* Very subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.012] z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #0a1f44 1px, transparent 1px), linear-gradient(to bottom, #0a1f44 1px, transparent 1px)`,
            backgroundSize: '56px 56px',
          }}
        />
        {/* Soft brand ambient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none z-0" style={{ backgroundColor: 'rgba(0,58,112,0.06)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none z-0" style={{ backgroundColor: 'rgba(0,58,112,0.04)' }} />

        <div className="max-w-7xl mx-auto px-5 lg:px-8 relative z-10">

          {/* SECTION HEADER */}
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] block mb-3 font-mono" style={{ color: 'var(--color-blue-600, #003A70)' }}>
              GOVERNANCE MODEL
            </span>
            <h3 className="text-3xl lg:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: 'var(--color-navy-900, #0a1f44)' }}>
              Our Rigorous Project
              <span className="bg-gradient-to-r from-[#003A70] via-[#005ea6] to-blue-400 bg-clip-text text-transparent"> Governance Model</span>
            </h3>
            <p className="text-sm mt-5 max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-gray-600, #6b7280)' }}>
              We manage fit-out advisory through structured checklists, clash audits, and periodic milestone reviews — protecting clients from cost overruns and vendor extensions.
            </p>
          </div>

          {/* STATS ROW */}
          <div className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
            {[
              { value: "100%", label: "Material Validation Rate" },
              { value: "Zero Snag", label: "Handover Goal" },
              { value: "Clash-Free", label: "MEP Layouts Before Execution" },
            ].map((stat, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <p className="text-xl sm:text-2xl font-extrabold" style={{ color: 'var(--color-navy-900, #0a1f44)' }}>{stat.value}</p>
                <p className="text-xs mt-1.5 uppercase tracking-wider font-bold" style={{ color: 'var(--color-gray-400, #9ca3af)' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* 4-STEP PROCESS TIMELINE */}
          <div className="mb-16">
            <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest text-center mb-10">EXECUTION PROCESS — 4 PHASES</p>
            
            <div className="relative">
              {/* Single consistent connector track */}
              <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-[#005ea6]/20 z-0" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[
                  { num: "01", icon: <ClipboardList className="w-5 h-5" />, title: "Audit & Onboarding", desc: "Site documentation audit, stakeholder kickoff, BOQ and scope validation against CAD/BIM inputs." },
                  { num: "02", icon: <GitMerge className="w-5 h-5" />, title: "Clash Clearance", desc: "MEP 3D clash detection, drywall alignment checks, and sequential material inward batch certifications." },
                  { num: "03", icon: <BadgeCheck className="w-5 h-5" />, title: "Milestone QA Reviews", desc: "Periodic sign-off audits at civil, MEP, finishes, and furniture stages before proceeding to next phase." },
                  { num: "04", icon: <KeyRound className="w-5 h-5" />, title: "Snag-Free Handover", desc: "Formal snag list clearance, punch list submissions, and occupancy certificate coordination with the landlord." },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-[#003A70]/20 transition-all duration-300 group flex flex-col"
                  >
                    {/* Single consistent brand bottom bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] opacity-50 group-hover:opacity-100 transition-opacity" style={{ background: 'linear-gradient(to right, #0a1f44, #003A70, #005ea6)' }} />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Top: icon + phase badge — uniform brand colors */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 ring-4 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'var(--color-navy-900, #0a1f44)', ringColor: 'rgba(0,58,112,0.12)' }}>
                          {step.icon}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border font-mono" style={{ backgroundColor: 'rgba(0,58,112,0.06)', color: 'var(--color-blue-600, #003A70)', borderColor: 'rgba(0,58,112,0.14)' }}>
                          Phase {idx + 1}
                        </span>
                      </div>

                      {/* Number watermark */}
                      <span className="font-mono text-[52px] font-black leading-none text-slate-100 select-none -mt-2 mb-2 group-hover:text-[#005ea6]/10 transition-colors">
                        {step.num}
                      </span>

                      <h4 className="text-sm font-bold mb-2 transition-colors leading-snug group-hover:text-[#003A70]" style={{ color: 'var(--color-gray-900, #111827)' }}>
                        {step.title}
                      </h4>
                      <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--color-gray-600, #6b7280)' }}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM SPLIT: TEXT LEFT + HIGHLIGHTS RIGHT */}
          <div className="flex flex-col lg:flex-row gap-10 items-start border-t border-slate-200/60 pt-14">

            <div className="flex-1">
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--color-gray-600, #6b7280)' }}>
                Our experienced team verifies as-built measurements against CAD/BIM outputs to eliminate execution clashes prior to site execution. By maintaining detailed verification logs of MEP testing, material inward certificates, and budget contingencies, we protect clients from cost overruns and vendor extensions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Detailed verification logs",
                  "CAD/BIM verification checks",
                  "Vendor certification logs",
                  "Strict EHS compliance audits",
                  "Budget contingency management",
                  "Third-party material test certificates"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 shrink-0" style={{ color: 'var(--color-blue-600, #003A70)' }} />
                    <span className="text-sm font-semibold" style={{ color: 'var(--color-gray-900, #111827)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[380px] shrink-0 bg-white border border-slate-200 p-7 rounded-3xl shadow-xl">
              <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">
                 EXPERTISE HIGHLIGHTS
              </h4>
              <div className="space-y-5">
                {[
                  { icon: <FileCheck className="w-5 h-5" style={{ color: 'var(--color-blue-600, #003A70)' }} />, metric: "100%", desc: "Material validation and certificate checks" },
                  { icon: <Zap className="w-5 h-5" style={{ color: 'var(--color-blue-600, #003A70)' }} />, metric: "Clash-Free", desc: "MEP layouts verified before site execution" },
                  { icon: <ShieldCheck className="w-5 h-5" style={{ color: 'var(--color-blue-600, #003A70)' }} />, metric: "Zero Snag", desc: "Goal at official project handover phase" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-center border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                    <div className="p-2 rounded-xl border shrink-0" style={{ backgroundColor: 'rgba(0,58,112,0.06)', borderColor: 'rgba(0,58,112,0.12)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <span className="text-lg font-extrabold block leading-none" style={{ color: 'var(--color-navy-900, #0a1f44)' }}>{item.metric}</span>
                      <span className="text-xs mt-1 block leading-normal" style={{ color: 'var(--color-gray-600, #6b7280)' }}>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
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
