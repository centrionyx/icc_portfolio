"use client";

import { Cpu, Columns, Layers, Sun, HardHat, Compass } from "lucide-react";

export default function ExpertisePage() {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
      title: "MEP Services Integration",
      description: "Managing HVAC sizing, electrical layout planning, plumbing line-outs, data cables coordination, and integrated security system clash detection audits."
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-500" />,
      title: "Civil & Drywall Systems",
      description: "Rigorous alignment verification of acoustic partitions, modular ceiling suspensions, structural reinforcements, and floor substrate treatments."
    },
    {
      icon: <Columns className="w-6 h-6 text-blue-500" />,
      title: "Bespoke Millwork & Finishes",
      description: "Oversight of customized woodwork detailing, stone fabrication checks, veneer selections, glass installations, and fine paint snuff snagging."
    },
    {
      icon: <Sun className="w-6 h-6 text-blue-500" />,
      title: "Acoustic & Lighting Coordination",
      description: "Decibel reduction level audit coordination, light fixture alignment calculations, dimming controls integration, and smart room acoustics verification."
    },
    {
      icon: <HardHat className="w-6 h-6 text-blue-500" />,
      title: "Site Safety & Quality Audits",
      description: "Regular site monitoring audits mapping EHS safety compliance, inward material quality checklists, and vendor certification logs."
    },
    {
      icon: <Compass className="w-6 h-6 text-blue-500" />,
      title: "Landlord & Authority Liaising",
      description: "Translating corporate interior scopes into landlord compliance reports, matching local fire safety guidelines, and building occupancy rules."
    }
  ];

  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      
      {/* PAGE HEADER SECTION */}
      <section className="w-full bg-[#0a1f44] text-white py-16 lg:py-20 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
            TECHNICAL ENGINEERING STANDARDS
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-serif max-w-2xl leading-tight">
            Our Core <span className="font-extrabold text-blue-500">Expertise</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-xl leading-relaxed">
            Uncompromising technical precision across critical interior infrastructure, materials auditing, and services integration.
          </p>
        </div>
      </section>

      {/* CORE SPEC FIELDS GRID */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <div 
              key={pillar.title}
              className="bg-white border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold text-[#0a1f44] mb-3">{pillar.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METHODOLOGY BLOCK */}
      <section className="bg-white border-y border-slate-200 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#003A70] mb-2 block">
                DELIVERY METRICS
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-[#0a1f44] font-serif mb-4 leading-tight">
                Our Rigorous Project Governance Model
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                We manage fit-out advisory through structured checklists, clash audits, and periodic milestones reviews. Our experienced team verifies as-built measurements against CAD/BIM outputs to eliminate execution clashes prior to site execution.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                By maintaining detailed verification logs of MEP testing, material inward certificates, and budget contingencies, we protect clients from cost overruns and vendor extensions.
              </p>
            </div>

            <div className="w-full lg:w-[450px] shrink-0 bg-[#f7f8fa] border border-slate-200 p-8">
              <h4 className="text-xs font-bold text-[#0a1f44] uppercase tracking-wider mb-6">Expertise Highlights</h4>
              <div className="space-y-4">
                {[
                  { metric: "100%", desc: "Material validation and certificate checks" },
                  { metric: "Clash-Free", desc: "MEP services layouts before execution" },
                  { metric: "Zero Snag", desc: "Goal at official project handover phase" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 border-b border-slate-200 pb-3 last:border-0 last:pb-0">
                    <span className="text-xl font-extrabold text-[#003A70] shrink-0 w-24">{item.metric}</span>
                    <span className="text-xs text-slate-600">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
