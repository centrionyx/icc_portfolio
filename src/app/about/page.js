"use client";

import Image from "next/image";
import {
  Users,
  Compass,
  ShieldCheck,
  Heart,
  Award,
  ArrowUpRight,
  ChevronRight,
  Mail,
  CheckCircle,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      num: "01",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Predictable Governance",
      description: "Institutionalized process control, clear milestone auditing, and transparent documentation to commercial interior execution.",
    },
    {
      num: "02",
      icon: <Award className="w-5 h-5" />,
      title: "Absolute Accountability",
      description: "Complete ownership of project schedules, quality control, contractor alignment, and zero-delay execution benchmarks.",
    },
    {
      num: "03",
      icon: <Compass className="w-5 h-5" />,
      title: "Technical Due Diligence",
      description: "Deep expertise in MEP clash audits, civil line-outs, BOQ validation, and design optimization to mitigate timeline risks.",
    },
    {
      num: "04",
      icon: <Users className="w-5 h-5" />,
      title: "Partner Alignment",
      description: "Supporting clients in selecting the right delivery partners, coordination frameworks, and managing stakeholder interfaces.",
    },
    {
      num: "05",
      icon: <Heart className="w-5 h-5" />,
      title: "Uncompromising Quality",
      description: "Rigorous site safety supervision audits and detail-oriented snag list clearance before formal project handovers.",
    },
  ];

  const founder = {
    name: "Yogesh Pawar",
    role: "Founder & Managing Director",
    bio: "Project Management Consultant with 20+ years of experience delivering more than 10 million sq ft of commercial interior fit-out projects across India. Specialized in project governance, stakeholder alignment, technical due diligence, contractor selection, and end-to-end delivery of fast-track corporate workspace projects.",
    email: "yogesh.pawar@icc.ind.in",
  };

  const careerDeliveries = [
    { client: "Principal Global", size: "4.5 Lakh Sq. Ft." },
    { client: "Symantec", size: "3.5 Lakh Sq. Ft." },
    { client: "ZS Associates", size: "3.0 Lakh Sq. Ft." },
    { client: "BMC Software", size: "3.0 Lakh Sq. Ft." },
    { client: "Vodafone", size: "2.5 Lakh Sq. Ft." },
    { client: "TCS", size: "2.5 Lakh Sq. Ft." },
    { client: "Nice Systems", size: "2.0 Lakh Sq. Ft." },
    { client: "Persistent", size: "1.8 Lakh Sq. Ft." },
  ];

  const clientsServed = [
    "Bajaj Finance", "Telstra", "Magna Electronics", "Flextronics",
    "Western Union", "NiCE Systems", "Boardroom", "Red Hat", "Eaton",
  ];

  return (
    <div className="w-full bg-white text-[#111827]">

      {/* HERO — compact, clean, content-first */}
      <section className="bg-[#0a1f44] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400 block mb-4">
             Our Story &amp; Leadership
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif tracking-tight leading-[1.08] mb-5">
                About <span className="font-extrabold font-sans bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ICC</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Bringing high predictability and accountability to commercial interior
                fit-out delivery — documented, measured, and executed with precision.
              </p>
            </div>
            <div className="flex gap-8 lg:gap-12 shrink-0 pb-1">
              {[
                { val: "10M+", label: "Sq. Ft. Delivered" },
                { val: "20+", label: "Years Experience" },
                { val: "2024", label: "Founded" },
              ].map((s) => (
                <div key={s.label} className="border-l border-white/15 pl-6 first:border-0 first:pl-0">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.val}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — white, content-focused */}
      <section className="py-16 lg:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-3">
                Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1f44] mb-6 leading-tight">
                Delivering Workspace Predictability Since 2024
              </h2>
              <div className="space-y-4 text-[#6b7280] text-sm sm:text-base leading-relaxed">
                <p>
                  Innovation Consultants and Contractors (ICC) was founded in 2024 by
                  Yogesh Pawar to bring a higher standard of predictability and
                  accountability to commercial interior delivery.
                </p>
                <p>
                  We support our clients in selecting the right delivery partners and
                  provide a complete, end-to-end project delivery solution — from concept
                  to completion, with documented milestones at every stage.
                </p>
                <p>
                  We help organizations execute workspace projects faster, more
                  efficiently, and with extreme clarity — ensuring predictable cost,
                  timelines, and quality across all coordinates.
                </p>
              </div>
            </div>

            {/* Key priorities card — simple, clean */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="bg-[#0a1f44] px-6 py-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300">
                    Key Priorities
                  </span>
                </div>
                <ul className="divide-y divide-gray-100 bg-white">
                  {[
                    "Predictable cost control systems",
                    "Strict timeline adherence mapping",
                    "Uncompromising quality governance",
                    "Expert contractor selection support",
                    "End-to-end delivery alignment",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 px-6 py-3.5">
                      <CheckCircle className="w-4 h-4 text-[#003A70] shrink-0" />
                      <span className="text-sm text-[#374151] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-xl font-extrabold text-[#0a1f44]">10M+ Sq. Ft.</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">Total Career Deliveries</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#003A70]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP — white background, creative layout */}
      <section className="py-16 lg:py-24 border-b border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          {/* Section label */}
          <div className="mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#003A70] block mb-2">
              Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1f44]">Meet Our Founder</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-stretch">

            {/* ── LEFT: Founder Identity Card ── */}
            <div className="w-full lg:w-[340px] shrink-0 flex flex-col rounded-2xl overflow-hidden border border-gray-200">

              {/* Monogram hero */}
              <div className="relative bg-gradient-to-br from-[#003A70] to-[#005ea6] px-8 pt-10 pb-8 flex flex-col items-center text-center overflow-hidden">
                {/* Diagonal accent stripe */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                <div
                  className="w-20 h-20 rounded-2xl border border-white/20 overflow-hidden mb-4 shadow-[0_0_40px_rgba(0,94,166,0.4)] relative z-10"
                >
                  <Image
                    src="/founder.png"
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white relative z-10">{founder.name}</h3>
                <p className="text-xs text-cyan-300 mt-1 font-mono font-medium tracking-wider relative z-10">{founder.role}</p>
                <div className="mt-4 w-10 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full relative z-10" />
              </div>

              {/* Bio */}
              <div className="px-6 py-5 flex-1 border-b border-gray-100 bg-white">
                <p className="text-sm text-[#6b7280] leading-relaxed">{founder.bio}</p>
              </div>

              {/* Stats bar */}
              <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100 bg-white">
                <div className="px-5 py-5 text-center">
                  <p className="text-2xl font-black text-[#0a1f44] leading-none">20<span className="text-[#005ea6]">+</span></p>
                  <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-gray-400 mt-1.5">Years Exp.</p>
                </div>
                <div className="px-5 py-5 text-center">
                  <p className="text-2xl font-black text-[#0a1f44] leading-none">10M<span className="text-[#005ea6]">+</span></p>
                  <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-gray-400 mt-1.5">Sq. Ft. Delivered</p>
                </div>
              </div>

              {/* Email */}
              <div className="px-6 py-4 bg-white flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#003A70]" />
                </div>
                <a href={`mailto:${founder.email}`} className="text-xs font-mono text-[#003A70] hover:text-[#005ea6] transition-colors font-semibold truncate">
                  {founder.email}
                </a>
              </div>
            </div>

            {/* ── RIGHT: Career Deliveries Panel ── */}
            <div className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-gray-200">

              {/* Panel header */}
              <div className="px-6 py-5 border-b border-gray-100 bg-white flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#003A70] mb-1">Project Register</p>
                  <h3 className="text-xl font-bold text-[#0a1f44]">Major Career Deliveries</h3>
                </div>
                <p className="text-xs text-gray-400 font-mono text-right max-w-[180px] leading-relaxed hidden sm:block">
                  Led directly by Yogesh Pawar prior to founding ICC.
                </p>
              </div>

              {/* Column headers */}
              <div className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 px-6 py-2.5 border-b border-gray-100 bg-gray-50">
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400">#</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400">Client</div>
                <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400 text-right">Area (Sq. Ft.)</div>
              </div>

              {/* Rows */}
              <div className="flex-1 divide-y divide-gray-100 bg-white">
                {careerDeliveries.map((d, idx) => {
                  const maxVal = 4.5;
                  const val = parseFloat(d.size);
                  const pct = Math.round((val / maxVal) * 100);
                  const barFrom = idx < 2 ? "from-[#005ea6]" : idx < 5 ? "from-[#003A70]" : "from-blue-400";
                  const barTo = idx < 2 ? "to-cyan-400" : idx < 5 ? "to-[#005ea6]" : "to-[#003A70]";
                  return (
                    <div
                      key={idx}
                      className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 items-center px-6 py-3.5 hover:bg-blue-50/40 transition-colors group cursor-default"
                    >
                      {/* Index */}
                      <div className="font-mono text-[11px] font-bold text-[#003A70]/50 group-hover:text-[#003A70] transition-colors">
                        {String(idx + 1).padStart(2, "0")}
                      </div>

                      {/* Client name + bar */}
                      <div>
                        <p className="text-sm font-semibold text-[#111827] group-hover:text-[#003A70] transition-colors mb-2">
                          {d.client}
                        </p>
                        <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${barFrom} ${barTo} rounded-full`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      {/* Area badge */}
                      <div className="text-right">
                        <span className="inline-block text-[10px] font-mono font-bold text-[#374151] group-hover:text-[#003A70] transition-colors bg-gray-50 border border-gray-200 rounded-md px-2 py-1 leading-none">
                          {d.size}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Panel footer total */}
              <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Total Career Volume</span>
                <span className="text-sm font-black text-[#0a1f44] font-mono">
                  ~24.8 <span className="text-[#005ea6]">Lakh Sq. Ft.</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OPERATING PRINCIPLES — light gray bg, content dense */}
      <section className="py-16 lg:py-20 bg-[#f7f8fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-2">
                How We Operate
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1f44]">Our Operating Principles</h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">Five pillars that define how we work on every project.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 hover:border-[#003A70]/20 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 bg-[#0a1f44] rounded-xl flex items-center justify-center text-white shrink-0">
                    {val.icon}
                  </div>
                  <span className="font-mono text-4xl font-black text-gray-100 leading-none select-none group-hover:text-gray-200 transition-colors">
                    {val.num}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#111827] mb-2 group-hover:text-[#003A70] transition-colors">{val.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.description}</p>
              </div>
            ))}

            {/* CTA card */}
            <div className="bg-[#0a1f44] rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block mb-3">Ready to Start</span>
                <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                  Bring predictability to your next workspace project
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Let&apos;s discuss how ICC can align with your delivery goals.
                </p>
              </div>
              <a
                href={`mailto:${founder.email}`}
                className="mt-6 inline-flex items-center gap-2 bg-white text-[#0a1f44] text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors self-start"
              >
                Contact Us
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SERVED — clean white, pill strip */}
      <section className="py-14 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-1">Client Register</span>
              <h2 className="text-2xl font-bold text-[#0a1f44]">Organizations We&apos;ve Served</h2>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">High-precision corporate workspace projects across India.</p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {clientsServed.map((client, idx) => (
              <span
                key={idx}
                className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-semibold text-[#374151] hover:bg-[#0a1f44] hover:text-white hover:border-[#0a1f44] transition-all duration-200 cursor-default"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER — navy, minimal */}
      <section className="bg-[#0a1f44] py-16">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
              Ready to bring predictability to your next fit-out?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
              ICC delivers workspace projects with zero-delay benchmarks, thorough governance, and measurable outcomes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href={`mailto:${founder.email}`}
              className="inline-flex items-center gap-2 bg-white text-[#0a1f44] text-sm font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Start a Conversation
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="/expertise"
              className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              View Expertise
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
