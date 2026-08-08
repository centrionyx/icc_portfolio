"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  RotateCw, 
  HardHat, 
  BarChart3, 
  Users2, 
  ShieldCheck, 
  Receipt 
} from "lucide-react";

export default function KeyStrengths() {
  const strengths = [
    {
      num: "01",
      title: "End-to-end Project Lifecycle Management",
      desc: "Seamless management across all stages – from concept and planning to execution and successful completion.",
      icon: RotateCw,
    },
    {
      num: "02",
      title: "Strong Technical Expertise in MEP, Civil, and Interior Systems",
      desc: "Deep domain knowledge and hands-on expertise ensure high-quality, efficient, and compliant project delivery.",
      icon: HardHat,
    },
    {
      num: "03",
      title: "Data-driven Planning and Scheduling",
      desc: "We leverage data, tools, and analytics to create accurate plans, optimize timelines, and improve project outcomes.",
      icon: BarChart3,
    },
    {
      num: "04",
      title: "Vendor & Stakeholder Coordination",
      desc: "Effective collaboration and clear communication with vendors, consultants, and stakeholders to keep projects aligned and on track.",
      icon: Users2,
    },
    {
      num: "05",
      title: "Project Governance & Site Safety Management",
      desc: "Robust governance frameworks and a strong focus on site safety to ensure quality, compliance, and zero compromise.",
      icon: ShieldCheck,
    },
    {
      num: "06",
      title: "Joint Measurement and Billing Management",
      desc: "Transparent measurement, accurate billing, and timely reporting to ensure trust, clarity, and financial control.",
      icon: Receipt,
    },
  ];

  return (
    <section className="relative w-full bg-[#fdfcf9] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Top-Left Decorative Dots */}
      <div className="absolute top-4 left-6 opacity-[0.2] pointer-events-none">
        <div className="grid grid-cols-6 gap-1.5">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#b8860b]" />
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto relative z-10">
        
        {/* Left-Aligned Header Block */}
        <div className="text-left max-w-2xl mb-8 sm:mb-10">
          {/* Eyebrow with left line indicator */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-8 h-[2px] bg-[#c59b27]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#b8860b] uppercase font-sans">
              KEY STRENGTHS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0e1e38] tracking-tight leading-tight mb-3">
            Our <span className="text-[#b8860b]">Key Strengths</span>
          </h2>

          {/* Subtitle text */}
          <p className="text-slate-600 text-xs sm:text-sm font-sans font-normal leading-relaxed">
            At ICC, we support our clients in selecting the right delivery partners and provide a complete, end-to-end project delivery solution—from concept to completion.
          </p>

          {/* Left Diamond Accent */}
          <div className="flex items-center gap-2.5 mt-4">
            <span className="w-2 h-2 rotate-45 bg-[#b8860b]" />
            <span className="w-16 h-[1px] bg-amber-200" />
          </div>
        </div>

        {/* 6 Strengths Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {strengths.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-amber-100 shadow-[0_2px_12px_rgba(229,169,0,0.05)] hover:shadow-[0_8px_24px_rgba(229,169,0,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Curved Gold Arch Line Accent on Card Edge */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-amber-100/40 to-transparent rounded-bl-full pointer-events-none group-hover:from-amber-200/50 transition-colors" />

                <div>
                  {/* Top-Right Number & Left Circular Icon Badge Layout */}
                  <div className="flex items-center justify-between mb-3.5">
                    {/* Circle Icon Ring Container */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#fdfaf2] border border-[#f5e6c4] flex items-center justify-center shrink-0 text-[#b8860b] group-hover:bg-[#b8860b] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <IconComp size={22} strokeWidth={1.75} />
                    </div>

                    {/* Top-Right Golden Number */}
                    <span className="text-lg sm:text-xl font-bold text-[#b8860b] font-sans">
                      {item.num}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug font-sans group-hover:text-[#b8860b] transition-colors mb-2">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-slate-500 text-xs leading-relaxed font-normal font-sans">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Gold Indicator Bar */}
                <div className="w-6 h-[2px] bg-[#c59b27] mt-4 group-hover:w-10 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
