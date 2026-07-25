// "use client";

// import Image from "next/image";
// import {
//   Users,
//   Compass,
//   ShieldCheck,
//   Heart,
//   Award,
//   ArrowUpRight,
//   ChevronRight,
//   Mail,
//   CheckCircle,
// } from "lucide-react";

// export default function AboutPage() {
//   const values = [
//     {
//       num: "01",
//       icon: <ShieldCheck className="w-5 h-5" />,
//       title: "Predictable Governance",
//       description: "Institutionalized process control, clear milestone auditing, and transparent documentation to commercial interior execution.",
//     },
//     {
//       num: "02",
//       icon: <Award className="w-5 h-5" />,
//       title: "Absolute Accountability",
//       description: "Complete ownership of project schedules, quality control, contractor alignment, and zero-delay execution benchmarks.",
//     },
//     {
//       num: "03",
//       icon: <Compass className="w-5 h-5" />,
//       title: "Technical Due Diligence",
//       description: "Deep expertise in MEP clash audits, civil line-outs, BOQ validation, and design optimization to mitigate timeline risks.",
//     },
//     {
//       num: "04",
//       icon: <Users className="w-5 h-5" />,
//       title: "Partner Alignment",
//       description: "Supporting clients in selecting the right delivery partners, coordination frameworks, and managing stakeholder interfaces.",
//     },
//     {
//       num: "05",
//       icon: <Heart className="w-5 h-5" />,
//       title: "Uncompromising Quality",
//       description: "Rigorous site safety supervision audits and detail-oriented snag list clearance before formal project handovers.",
//     },
//   ];

//   const founder = {
//     name: "Yogesh Pawar",
//     role: "Founder & Managing Director",
//     bio: "Project Management Consultant with 20+ years of experience delivering more than 10 million sq ft of commercial interior fit-out projects across India. Specialized in project governance, stakeholder alignment, technical due diligence, contractor selection, and end-to-end delivery of fast-track corporate workspace projects.",
//     email: "yogesh.pawar@icc.ind.in",
//   };

//   const careerDeliveries = [
//     { client: "Principal Global", size: "4.5 Lakh Sq. Ft." },
//     { client: "Symantec", size: "3.5 Lakh Sq. Ft." },
//     { client: "ZS Associates", size: "3.0 Lakh Sq. Ft." },
//     { client: "BMC Software", size: "3.0 Lakh Sq. Ft." },
//     { client: "Vodafone", size: "2.5 Lakh Sq. Ft." },
//     { client: "TCS", size: "2.5 Lakh Sq. Ft." },
//     { client: "Nice Systems", size: "2.0 Lakh Sq. Ft." },
//     { client: "Persistent", size: "1.8 Lakh Sq. Ft." },
//   ];

//   const clientsServed = [
//     "Bajaj Finance", "Telstra", "Magna Electronics", "Flextronics",
//     "Western Union", "NiCE Systems", "Boardroom", "Red Hat", "Eaton",
//   ];

//   return (
//     <div className="w-full bg-white text-[#111827]">

//       {/* HERO — compact, clean, content-first */}
//       <section className="bg-[#0a1f44] text-white py-16 sm:py-20">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8">
//           <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400 block mb-4">
//             Our Story &amp; Leadership
//           </span>
//           <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
//             <div className="flex-1">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif tracking-tight leading-[1.08] mb-5">
//                 About <span className="font-extrabold font-sans bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ICC</span>
//               </h1>
//               <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
//                 Bringing high predictability and accountability to commercial interior
//                 fit-out delivery — documented, measured, and executed with precision.
//               </p>
//             </div>
//             <div className="flex gap-8 lg:gap-12 shrink-0 pb-1">
//               {[
//                 { val: "10M+", label: "Sq. Ft. Delivered" },
//                 { val: "20+", label: "Years Experience" },
//                 { val: "2024", label: "Founded" },
//               ].map((s) => (
//                 <div key={s.label} className="border-l border-white/15 pl-6 first:border-0 first:pl-0">
//                   <p className="text-2xl sm:text-3xl font-extrabold text-white">{s.val}</p>
//                   <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{s.label}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHO WE ARE — white, content-focused */}
//       <section className="py-16 lg:py-20 border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8">
//           <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
//             <div className="flex-1">
//               <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-3">
//                 Foundation
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1f44] mb-6 leading-tight">
//                 Delivering Workspace Predictability Since 2024
//               </h2>
//               <div className="space-y-4 text-[#6b7280] text-sm sm:text-base leading-relaxed">
//                 <p>
//                   Innovation Consultants and Contractors (ICC) was founded in 2024 by
//                   Yogesh Pawar to bring a higher standard of predictability and
//                   accountability to commercial interior delivery.
//                 </p>
//                 <p>
//                   We support our clients in selecting the right delivery partners and
//                   provide a complete, end-to-end project delivery solution — from concept
//                   to completion, with documented milestones at every stage.
//                 </p>
//                 <p>
//                   We help organizations execute workspace projects faster, more
//                   efficiently, and with extreme clarity — ensuring predictable cost,
//                   timelines, and quality across all coordinates.
//                 </p>
//               </div>
//             </div>

//             {/* Key priorities card — simple, clean */}
//             <div className="w-full lg:w-[380px] shrink-0">
//               <div className="border border-gray-200 rounded-2xl overflow-hidden">
//                 <div className="bg-[#0a1f44] px-6 py-4">
//                   <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300">
//                     Key Priorities
//                   </span>
//                 </div>
//                 <ul className="divide-y divide-gray-100 bg-white">
//                   {[
//                     "Predictable cost control systems",
//                     "Strict timeline adherence mapping",
//                     "Uncompromising quality governance",
//                     "Expert contractor selection support",
//                     "End-to-end delivery alignment",
//                   ].map((item, idx) => (
//                     <li key={idx} className="flex items-center gap-4 px-6 py-3.5">
//                       <CheckCircle className="w-4 h-4 text-[#003A70] shrink-0" />
//                       <span className="text-sm text-[#374151] font-medium">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between">
//                   <div>
//                     <p className="text-xl font-extrabold text-[#0a1f44]">10M+ Sq. Ft.</p>
//                     <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">Total Career Deliveries</p>
//                   </div>
//                   <ArrowUpRight className="w-5 h-5 text-[#003A70]" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* LEADERSHIP — white background, creative layout */}
//       <section className="py-16 lg:py-24 border-b border-gray-100 bg-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8">

//           {/* Section label */}
//           <div className="mb-10">
//             <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#003A70] block mb-2">
//               Leadership
//             </span>
//             <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1f44]">Meet Our Founder</h2>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-6 items-stretch">

//             {/* ── LEFT: Founder Identity Card ── */}
//             <div className="w-full lg:w-[340px] shrink-0 flex flex-col rounded-2xl overflow-hidden border border-gray-200">

//               {/* Monogram hero */}
//               <div className="relative bg-gradient-to-br from-[#003A70] to-[#005ea6] px-8 pt-10 pb-8 flex flex-col items-center text-center overflow-hidden">
//                 {/* Diagonal accent stripe */}
//                 <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-400/10 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
//                 <div
//                   className="w-20 h-20 rounded-2xl border border-white/20 overflow-hidden mb-4 shadow-[0_0_40px_rgba(0,94,166,0.4)] relative z-10"
//                 >
//                   <Image
//                     src="/founder.png"
//                     alt={founder.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <h3 className="text-lg font-bold text-white relative z-10">{founder.name}</h3>
//                 <p className="text-xs text-cyan-300 mt-1 font-mono font-medium tracking-wider relative z-10">{founder.role}</p>
//                 <div className="mt-4 w-10 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full relative z-10" />
//               </div>

//               {/* Bio */}
//               <div className="px-6 py-5 flex-1 border-b border-gray-100 bg-white">
//                 <p className="text-sm text-[#6b7280] leading-relaxed">{founder.bio}</p>
//               </div>

//               {/* Stats bar */}
//               <div className="grid grid-cols-2 divide-x divide-gray-100 border-b border-gray-100 bg-white">
//                 <div className="px-5 py-5 text-center">
//                   <p className="text-2xl font-black text-[#0a1f44] leading-none">20<span className="text-[#005ea6]">+</span></p>
//                   <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-gray-400 mt-1.5">Years Exp.</p>
//                 </div>
//                 <div className="px-5 py-5 text-center">
//                   <p className="text-2xl font-black text-[#0a1f44] leading-none">10M<span className="text-[#005ea6]">+</span></p>
//                   <p className="text-[9px] font-mono uppercase tracking-[0.18em] text-gray-400 mt-1.5">Sq. Ft. Delivered</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="px-6 py-4 bg-white flex items-center gap-3">
//                 <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
//                   <Mail className="w-3.5 h-3.5 text-[#003A70]" />
//                 </div>
//                 <a href={`mailto:${founder.email}`} className="text-xs font-mono text-[#003A70] hover:text-[#005ea6] transition-colors font-semibold truncate">
//                   {founder.email}
//                 </a>
//               </div>
//             </div>

//             {/* ── RIGHT: Career Deliveries Panel ── */}
//             <div className="flex-1 flex flex-col rounded-2xl overflow-hidden border border-gray-200">

//               {/* Panel header */}
//               <div className="px-6 py-5 border-b border-gray-100 bg-white flex items-end justify-between">
//                 <div>
//                   <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#003A70] mb-1">Project Register</p>
//                   <h3 className="text-xl font-bold text-[#0a1f44]">Major Career Deliveries</h3>
//                 </div>
//                 <p className="text-xs text-gray-400 font-mono text-right max-w-[180px] leading-relaxed hidden sm:block">
//                   Led directly by Yogesh Pawar prior to founding ICC.
//                 </p>
//               </div>

//               {/* Column headers */}
//               <div className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 px-6 py-2.5 border-b border-gray-100 bg-gray-50">
//                 <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400">#</div>
//                 <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400">Client</div>
//                 <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-400 text-right">Area (Sq. Ft.)</div>
//               </div>

//               {/* Rows */}
//               <div className="flex-1 divide-y divide-gray-100 bg-white">
//                 {careerDeliveries.map((d, idx) => {
//                   const maxVal = 4.5;
//                   const val = parseFloat(d.size);
//                   const pct = Math.round((val / maxVal) * 100);
//                   const barFrom = idx < 2 ? "from-[#005ea6]" : idx < 5 ? "from-[#003A70]" : "from-blue-400";
//                   const barTo = idx < 2 ? "to-cyan-400" : idx < 5 ? "to-[#005ea6]" : "to-[#003A70]";
//                   return (
//                     <div
//                       key={idx}
//                       className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 items-center px-6 py-3.5 hover:bg-blue-50/40 transition-colors group cursor-default"
//                     >
//                       {/* Index */}
//                       <div className="font-mono text-[11px] font-bold text-[#003A70]/50 group-hover:text-[#003A70] transition-colors">
//                         {String(idx + 1).padStart(2, "0")}
//                       </div>

//                       {/* Client name + bar */}
//                       <div>
//                         <p className="text-sm font-semibold text-[#111827] group-hover:text-[#003A70] transition-colors mb-2">
//                           {d.client}
//                         </p>
//                         <div className="h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
//                           <div
//                             className={`h-full bg-gradient-to-r ${barFrom} ${barTo} rounded-full`}
//                             style={{ width: `${pct}%` }}
//                           />
//                         </div>
//                       </div>

//                       {/* Area badge */}
//                       <div className="text-right">
//                         <span className="inline-block text-[10px] font-mono font-bold text-[#374151] group-hover:text-[#003A70] transition-colors bg-gray-50 border border-gray-200 rounded-md px-2 py-1 leading-none">
//                           {d.size}
//                         </span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Panel footer total */}
//               <div className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
//                 <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">Total Career Volume</span>
//                 <span className="text-sm font-black text-[#0a1f44] font-mono">
//                   ~24.8 <span className="text-[#005ea6]">Lakh Sq. Ft.</span>
//                 </span>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* OPERATING PRINCIPLES — light gray bg, content dense */}
//       <section className="py-16 lg:py-20 bg-[#f7f8fa] border-b border-gray-100">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
//             <div>
//               <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-2">
//                 How We Operate
//               </span>
//               <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1f44]">Our Operating Principles</h2>
//             </div>
//             <p className="text-sm text-gray-500 max-w-xs">Five pillars that define how we work on every project.</p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {values.map((val) => (
//               <div
//                 key={val.title}
//                 className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 hover:border-[#003A70]/20 transition-all duration-200 group"
//               >
//                 <div className="flex items-start justify-between mb-5">
//                   <div className="w-10 h-10 bg-[#0a1f44] rounded-xl flex items-center justify-center text-white shrink-0">
//                     {val.icon}
//                   </div>
//                   <span className="font-mono text-4xl font-black text-gray-100 leading-none select-none group-hover:text-gray-200 transition-colors">
//                     {val.num}
//                   </span>
//                 </div>
//                 <h3 className="text-sm font-bold text-[#111827] mb-2 group-hover:text-[#003A70] transition-colors">{val.title}</h3>
//                 <p className="text-sm text-gray-500 leading-relaxed">{val.description}</p>
//               </div>
//             ))}

//             {/* CTA card */}
//             <div className="bg-[#0a1f44] rounded-2xl p-6 flex flex-col justify-between">
//               <div>
//                 <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block mb-3">Ready to Start</span>
//                 <h3 className="text-lg font-bold text-white mb-3 leading-snug">
//                   Bring predictability to your next workspace project
//                 </h3>
//                 <p className="text-sm text-slate-300 leading-relaxed">
//                   Let&apos;s discuss how ICC can align with your delivery goals.
//                 </p>
//               </div>
//               <a
//                 href={`mailto:${founder.email}`}
//                 className="mt-6 inline-flex items-center gap-2 bg-white text-[#0a1f44] text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors self-start"
//               >
//                 Contact Us
//                 <ArrowUpRight className="w-3.5 h-3.5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CLIENTS SERVED — clean white, pill strip */}
//       <section className="py-14 border-b border-gray-100 bg-white">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8">
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
//             <div>
//               <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-1">Client Register</span>
//               <h2 className="text-2xl font-bold text-[#0a1f44]">Organizations We&apos;ve Served</h2>
//             </div>
//             <p className="text-sm text-gray-400 max-w-xs">High-precision corporate workspace projects across India.</p>
//           </div>
//           <div className="flex flex-wrap gap-2.5">
//             {clientsServed.map((client, idx) => (
//               <span
//                 key={idx}
//                 className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm font-semibold text-[#374151] hover:bg-[#0a1f44] hover:text-white hover:border-[#0a1f44] transition-all duration-200 cursor-default"
//               >
//                 {client}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA BANNER — navy, minimal */}
//       <section className="bg-[#0a1f44] py-16">
//         <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3">
//               Ready to bring predictability to your next fit-out?
//             </h2>
//             <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
//               ICC delivers workspace projects with zero-delay benchmarks, thorough governance, and measurable outcomes.
//             </p>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-3 shrink-0">
//             <a
//               href={`mailto:${founder.email}`}
//               className="inline-flex items-center gap-2 bg-white text-[#0a1f44] text-sm font-bold px-6 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
//             >
//               Start a Conversation
//               <ArrowUpRight className="w-4 h-4" />
//             </a>
//             <a
//               href="/services"
//               className="inline-flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
//             >
//               View Services
//               <ChevronRight className="w-4 h-4" />
//             </a>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }



"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
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
  Star,
  TrendingUp,
  Target,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [dynAbout, setDynAbout] = useState(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => setDynAbout(data))
      .catch((err) => console.error("Failed to load about data:", err));
  }, []);

  const values = [
    {
      num: "01",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Predictable Governance",
      description: "Institutionalized process control, clear milestone auditing, and transparent documentation to commercial interior execution.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      num: "02",
      icon: <Award className="w-5 h-5" />,
      title: "Absolute Accountability",
      description: "Complete ownership of project schedules, quality control, contractor alignment, and zero-delay execution benchmarks.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      num: "03",
      icon: <Compass className="w-5 h-5" />,
      title: "Technical Due Diligence",
      description: "Deep expertise in MEP clash audits, civil line-outs, BOQ validation, and design optimization to mitigate timeline risks.",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      num: "04",
      icon: <Users className="w-5 h-5" />,
      title: "Partner Alignment",
      description: "Supporting clients in selecting the right delivery partners, coordination frameworks, and managing stakeholder interfaces.",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      num: "05",
      icon: <Heart className="w-5 h-5" />,
      title: "Uncompromising Quality",
      description: "Rigorous site safety supervision audits and detail-oriented snag list clearance before formal project handovers.",
      gradient: "from-sky-500 to-blue-500",
    },
  ];

  const careerDeliveries = dynAbout?.careerDeliveries && dynAbout.careerDeliveries.length > 0
    ? dynAbout.careerDeliveries
    : [
        { client: "Principal Global", size: "4.5 Lakh Sq. Ft." },
        { client: "Symantec", size: "3.5 Lakh Sq. Ft." },
        { client: "ZS Associates", size: "3.0 Lakh Sq. Ft." },
        { client: "BMC Software", size: "3.0 Lakh Sq. Ft." },
        { client: "Vodafone", size: "2.5 Lakh Sq. Ft." },
        { client: "TCS", size: "2.5 Lakh Sq. Ft." },
        { client: "Nice Systems", size: "2.0 Lakh Sq. Ft." },
        { client: "Persistent", size: "1.8 Lakh Sq. Ft." },
      ];

  const calculatedDeliveredArea = (() => {
    let totalSqFt = 0;
    careerDeliveries.forEach((item) => {
      if (!item || !item.size) return;
      const sizeStr = item.size.toLowerCase();
      const val = parseFloat(sizeStr.replace(/,/g, "").match(/\d+(\.\d+)?/)?.[0] || 0);

      if (sizeStr.includes("lakh")) {
        totalSqFt += val * 100000;
      } else if (sizeStr.includes("sq. m") || sizeStr.includes("sq m") || sizeStr.includes("sqm")) {
        totalSqFt += val * 10.7639;
      } else if (sizeStr.includes("acre")) {
        totalSqFt += val * 43560;
      } else if (sizeStr.includes("yd")) {
        totalSqFt += val * 9;
      } else {
        totalSqFt += val;
      }
    });

    if (totalSqFt >= 1000000) {
      return `${(totalSqFt / 1000000).toFixed(1)}M`;
    }
    if (totalSqFt >= 100000) {
      return `${(totalSqFt / 100000).toFixed(1)} Lakh`;
    }
    return `${Math.round(totalSqFt).toLocaleString()}`;
  })();

  const founder = {
    name: dynAbout?.founderName || "Yogesh Pawar",
    role: dynAbout?.founderRole || "Founder",
    bio: dynAbout?.founderBio || "Project Management Consultant with 20+ years of experience delivering more than 10 million sq ft of commercial interior fit-out projects across India. Specialized in project governance, stakeholder alignment, technical due diligence, contractor selection, and end-to-end delivery of fast-track corporate workspace projects.",
    email: dynAbout?.founderEmail || "yogesh.pawar@icc.ind.in",
    image: dynAbout?.founderImage || "/founder.png",
    experience: dynAbout?.founderExperience || "20",
    deliveredArea: calculatedDeliveredArea || "10M",
  };

  const clientsServed = [
    "Bajaj Finance", "Telstra", "Magna Electronics", "Flextronics",
    "Western Union", "NiCE Systems", "Boardroom", "Red Hat", "Eaton",
  ];

  const stats = [
    { val: `${founder.deliveredArea}+`, label: "Sq. Ft. Delivered", icon: <TrendingUp className="w-5 h-5" /> },
    { val: `${founder.experience}+`, label: "Years Experience", icon: <Star className="w-5 h-5" /> },
    { val: "2024", label: "Founded", icon: <Target className="w-5 h-5" /> },
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full bg-white text-[#111827] overflow-hidden" ref={containerRef}>
      {/* Custom Cursor Effect */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-[#003A70] mix-blend-difference" />
      </div>

      {/* HERO — with parallax and animated elements */}
      <section className="relative bg-[#0a1f44] text-white py-24 sm:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f44] via-[#0d2a5c] to-[#003A70] animate-gradient-shift" />
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-blue-400 block mb-4"
          >
            Our Story & Leadership
          </motion.span>

          <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex-1"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light font-serif tracking-tight leading-[1.08] mb-5">
                About{" "}
                <span className="relative font-extrabold font-sans">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    ICC
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  />
                </span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl"
              >
                Bringing high predictability and accountability to commercial interior
                fit-out delivery — documented, measured, and executed with precision.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 lg:gap-12 shrink-0 pb-1"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative border-l border-white/15 pl-6 first:border-0 first:pl-0 group cursor-default"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="mb-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <motion.p
                    className="text-3xl sm:text-4xl font-extrabold text-white"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.val}
                  </motion.p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* WHO WE ARE — with reveal animations */}
      <section className="py-20 lg:py-28 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-3">
                Foundation
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44] mb-6 leading-tight">
                Delivering Workspace{" "}
                <span className="relative">
                  Predictability
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <motion.path
                      d="M0,4 Q50,8 100,4"
                      fill="none"
                      stroke="#003A70"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </svg>
                </span>{" "}
                Since 2024
              </h2>
              <div className="space-y-6 text-[#6b7280] text-base leading-relaxed">
                {[
                  "Innovation Consultants and Contractors (ICC) was founded in 2024 by Yogesh Pawar to bring a higher standard of predictability and accountability to commercial interior delivery.",
                  "We support our clients in selecting the right delivery partners and provide a complete, end-to-end project delivery solution — from concept to completion, with documented milestones at every stage.",
                  "We help organizations execute workspace projects faster, more efficiently, and with extreme clarity — ensuring predictable cost, timelines, and quality across all coordinates."
                ].map((text, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.2 }}
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Key priorities card — with glass effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full lg:w-[380px] shrink-0"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#003A70] to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                <div className="relative border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <div className="bg-[#0a1f44] px-6 py-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300">
                      Key Priorities
                    </span>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {[
                      "Predictable cost control systems",
                      "Strict timeline adherence mapping",
                      "Uncompromising quality governance",
                      "Expert contractor selection support",
                      "End-to-end delivery alignment",
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.1 }}
                        className="flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors cursor-default group/item"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <CheckCircle className="w-4 h-4 text-[#003A70] shrink-0" />
                        </motion.div>
                        <span className="text-sm text-[#374151] font-medium group-hover/item:text-[#003A70] transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.div
                    className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between"
                    whileHover={{ backgroundColor: "#f0f4f8" }}
                  >
                    <div>
                      <motion.p
                        className="text-2xl font-extrabold text-[#0a1f44]"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        10M+ Sq. Ft.
                      </motion.p>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">
                        Total Career Deliveries
                      </p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[#003A70]" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP — Founder Section & Career Deliveries */}
      <section className="py-20 lg:py-28 border-b border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#003A70] block mb-2">
              Leadership
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44]">Meet Our Founder</h2>
          </motion.div>

          {/* FOUNDERS CARD: Photo, Name, Designation on LEFT; Description & Social Profiles on RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xl mb-16 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start">
              {/* LEFT COLUMN: Photo, Name & Designation */}
              <div className="w-full md:w-80 shrink-0 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-10">
                <motion.div
                  className="relative w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-lg border-2 border-[#003A70]/10"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={founder.image || "/founder.png"}
                    alt={founder.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003A70]/30 to-transparent" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-[#0a1f44]">{founder.name}</h3>
                <p className="text-sm text-[#005ea6] font-mono font-semibold tracking-wider mt-1">
                  {founder.role}
                </p>

                {/* Founder Quick Stats */}
                <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <p className="text-xl font-black text-[#0a1f44]">{founder.experience}+</p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-0.5">Years Exp.</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-black text-[#0a1f44]">{founder.deliveredArea}+</p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-0.5">Sq. Ft.</p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Description & Social Profiles */}
              <div className="flex-1 flex flex-col justify-between h-full pt-2">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#003A70] font-semibold block mb-3">
                    About Founder
                  </span>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                    {founder.bio}
                  </p>
                </div>

                {/* Social Profiles & Contact */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                    Connect & Social Profiles
                  </h4>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${founder.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-[#003A70] hover:bg-[#003A70] hover:text-white transition-all text-xs font-semibold"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{founder.email}</span>
                    </a>
                    
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all text-xs font-semibold tracking-wide"
                    >
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] transition-all text-xs font-semibold tracking-wide"
                    >
                      <span>Twitter / X</span>
                    </a>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#0a1f44] hover:text-white hover:border-[#0a1f44] transition-all text-xs font-semibold tracking-wide"
                    >
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MAJOR CAREER DELIVERIES — Positioned below the About/Founder section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white"
          >
            <div className="px-6 py-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#003A70] block mb-1">
                  Project Register
                </span>
                <h3 className="text-2xl font-bold text-[#0a1f44]">Major Career Deliveries</h3>
              </div>
              <p className="text-xs text-gray-500 font-mono max-w-sm leading-relaxed">
                Key corporate interior projects led directly by Yogesh Pawar prior to founding ICC.
              </p>
            </div>

            <div className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 px-6 py-3 border-b border-gray-100 bg-gray-100/70">
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">#</div>
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">Client</div>
              <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold text-right">
                Area (Sq. Ft.)
              </div>
            </div>

            <div className="divide-y divide-gray-100 bg-white">
              {careerDeliveries.map((d, idx) => {
                const maxVal = 4.5;
                const val = parseFloat(d.size);
                const pct = Math.round((val / maxVal) * 100);
                const barFrom =
                  idx < 2
                    ? "from-[#005ea6]"
                    : idx < 5
                    ? "from-[#003A70]"
                    : "from-blue-400";
                const barTo =
                  idx < 2
                    ? "to-cyan-400"
                    : idx < 5
                    ? "to-[#005ea6]"
                    : "to-[#003A70]";

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    whileHover={{ backgroundColor: "#eff6ff" }}
                    className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 items-center px-6 py-4 transition-colors group cursor-default"
                  >
                    <div className="font-mono text-xs font-bold text-[#003A70]/60 group-hover:text-[#003A70] transition-colors">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#111827] group-hover:text-[#003A70] transition-colors mb-2">
                        {d.client}
                      </p>
                      <div className="h-[4px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${barFrom} ${barTo} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + idx * 0.05 }}
                        />
                      </div>
                    </div>

                    <div className="text-right">
                      <motion.span
                        className="inline-block text-xs font-mono font-bold text-[#374151] group-hover:text-[#003A70] transition-colors bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 leading-none"
                        whileHover={{ scale: 1.05, backgroundColor: "#003A70", color: "#fff" }}
                      >
                        {d.size}
                      </motion.span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between"
              whileHover={{ backgroundColor: "#f0f4f8" }}
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 font-semibold">
                Total Career Volume
              </span>
              <motion.span
                className="text-base font-black text-[#0a1f44] font-mono"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
              >
                ~24.8 <span className="text-[#005ea6]">Lakh Sq. Ft.</span>
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OPERATING PRINCIPLES — with floating cards */}
      <section className="py-20 lg:py-28 bg-[#f7f8fa] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-2">
                How We Operate
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44]">
                Our Operating Principles
              </h2>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Five pillars that define how we work on every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 58, 112, 0.1)" }}
                className="relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 group cursor-default"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#003A70] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex items-start justify-between mb-5">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${val.gradient} rounded-xl flex items-center justify-center text-white shrink-0`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {val.icon}
                  </motion.div>
                  <motion.span
                    className="font-mono text-5xl font-black text-gray-100 leading-none select-none group-hover:text-blue-50 transition-colors"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {val.num}
                  </motion.span>
                </div>
                <h3 className="text-base font-bold text-[#111827] mb-2 group-hover:text-[#003A70] transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{val.description}</p>
                
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-4 h-4 text-[#003A70]" />
                </motion.div>
              </motion.div>
            ))}

            {/* CTA card with pulse animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative bg-[#0a1f44] rounded-2xl p-6 flex flex-col justify-between overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block mb-3">
                  Ready to Start
                </span>
                <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                  Bring predictability to your next workspace project
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Let's discuss how ICC can align with your delivery goals.
                </p>
              </div>
              <motion.a
                href={`mailto:${founder.email}`}
                className="relative z-10 mt-6 inline-flex items-center gap-2 bg-white text-[#0a1f44] text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors self-start group/btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.div>
              </motion.a>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-colors" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLIENTS SERVED — with marquee effect */}
      <section className="py-16 border-b border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-1">
                Client Register
              </span>
              <h2 className="text-3xl font-bold text-[#0a1f44]">Organizations We've Served</h2>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              High-precision corporate workspace projects across India.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {clientsServed.map((client, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0a1f44",
                  color: "#fff",
                  borderColor: "#0a1f44",
                  boxShadow: "0 10px 25px rgba(0, 58, 112, 0.2)",
                }}
                className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-semibold text-[#374151] transition-all duration-300 cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER — with particle effect */}
      <section className="relative bg-[#0a1f44] py-20 overflow-hidden">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Ready to bring predictability to your next fit-out?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              ICC delivers workspace projects with zero-delay benchmarks, thorough governance, and measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <motion.a
              href={`mailto:${founder.email}`}
              className="inline-flex items-center gap-2 bg-white text-[#0a1f44] text-sm font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
            
            <motion.a
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white text-sm font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom line glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </section>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}