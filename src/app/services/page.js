"use client";

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
  FileText
} from "lucide-react";

export default function ServicesPage() {
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

  return (
    <div className="w-full bg-[#f8fafc] text-[#0a1f44] pb-24 font-sans antialiased">
      
      {/* 1. HERO HEADER WITH DOWNWARD FADING BANNER & LIGHT GLOW */}
      <section className="w-full h-[380px] sm:h-[450px] relative overflow-hidden bg-[#0a1f44] text-white">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/sustainability_office.png"
            alt="Office space layout"
            fill
            priority
            className="object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-[#0a1f44]/40" />
        </div>

        {/* Ambient top-left soft cyan lighting glow */}
        <div className="absolute top-0 left-[10%] w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-[90px] pointer-events-none z-10" />

        {/* Downward Gradient Fade Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[#f8fafc]/45 to-[#f8fafc] z-15 pointer-events-none" />

        {/* Content */}
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 h-full relative z-25 flex flex-col justify-center pb-20">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400 mb-3 block font-mono">
            // OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-none text-white">
            Our Services
          </h1>
          <p className="text-slate-200 text-sm leading-relaxed mt-4 max-w-xl font-light">
            High-precision project management, pre-construction design audits, and site execution advisory for corporate interior fit-out spaces across India.
          </p>
        </div>
      </section>

      {/* 2. OVERLAPPING SERVICES PORTFOLIO GRID */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-30 -mt-28 sm:-mt-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-20">
          {services.map((s, idx) => {
            const displayIndex = String(idx + 1).padStart(2, "0");

            return (
              <div 
                key={s.id}
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
                  hover:-translate-y-2
                  transition-all
                  duration-700
                  ease-in-out
                  flex 
                  flex-col 
                  justify-between
                  group
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
                  duration-700
                  ease-in-out
                  group-hover:bg-[#005ea6]
                  group-hover:scale-110
                  group-hover:shadow-[0_0_20px_rgba(0,94,166,0.65)]
                ">
                  {s.icon}
                </div>

                <div className="text-center">
                  {/* Title */}
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-800 mb-3 mt-2 group-hover:text-[#005ea6] transition-colors duration-700 ease-in-out">
                    {s.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-slate-500 text-xs leading-relaxed font-light mb-6 px-1">
                    {s.short}
                  </p>

                  {/* Scope Bullet Checklist Points */}
                  <div className="border-t border-slate-200/50 pt-5 mb-6 text-left">
                    <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-3 font-mono text-center">
                      // Scopes Audited
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
                            transition-colors 
                            duration-700 
                            ease-in-out
                            group-hover:bg-[#005ea6] 
                            group-hover:text-white
                            group-hover:scale-105
                          ">
                            <Check size={10} strokeWidth={3} />
                          </span>
                          <span className="text-slate-600 text-xs font-semibold leading-snug transition-colors duration-700 ease-in-out group-hover:text-slate-850">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA action Link */}
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
                      duration-700
                      ease-in-out
                    "
                  >
                    <span>Request Proposal</span>
                    <ArrowRight size={10} className="transition-transform duration-700 ease-in-out group-hover:translate-x-1" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. BOTTOM SPECIFICATIONS PROPOSAL BLOCK */}
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

    </div>
  );
}