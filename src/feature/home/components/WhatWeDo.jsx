"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users2, DraftingCompass, HardHat, Leaf, CheckCircle2, Wrench, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { WHAT_WE_DO_CONTENT } from "../constants";

// Icon mapping helper
const iconMap = {
  Users2: Users2,
  DraftingCompass: DraftingCompass,
  HardHat: HardHat,
  Leaf: Leaf,
  CheckCircle2: CheckCircle2,
  Wrench: Wrench,
};

const serviceDetails = {
  strategy: {
    description: "Data-driven strategy to optimize spatial agility, space utilization, and workforce performance.",
    metric: "15% Avg Space Saved",
    tag: "Workplace Consulting",
    image: "/workplace_strategy.png",
    highlight: "Hybrid Work Models"
  },
  design: {
    description: "Human-centric spaces crafted with architectural excellence, biophilic design, and creative details.",
    metric: "Award-Winning Formats",
    tag: "Interior Design",
    image: "/sustainability_office.png",
    highlight: "3D Visualization"
  },
  fitout: {
    description: "Precise project execution ensuring timeline predictability, cost control, and premium build quality.",
    metric: "100% On-Time Delivery",
    tag: "Project Management",
    image: "/office_building_dusk.png",
    highlight: "Quality Control"
  },
  sustainability: {
    description: "Eco-friendly materials, energy optimization, waste reduction, and green certification strategy.",
    metric: "LEED Gold Certified standard",
    tag: "Green Building",
    image: "/sustainability_office.png",
    highlight: "Carbon Neutrality"
  },
  execution: {
    description: "Seamless general contracting integration from procurement to final site testing and commissioning.",
    metric: "Zero-Defect Handover",
    tag: "General Contracting",
    image: "/office_building_dusk.png",
    highlight: "Safety Standards"
  },
  maintenance: {
    description: "Proactive facility management, regular audits, and post-handover operational support.",
    metric: "24/7 Support SLA",
    tag: "Asset Optimization",
    image: "/industry_trends.png",
    highlight: "Facility SLA"
  },
};

export default function WhatWeDo() {
  const content = WHAT_WE_DO_CONTENT;
  const [activeServiceId, setActiveServiceId] = useState("strategy");

  // Get active service details
  const activeDetail = serviceDetails[activeServiceId] || serviceDetails.strategy;
  const activeService = content.services.find(s => s.id === activeServiceId) || content.services[0];

  return (
    <section className="w-full bg-[#f8fafc] py-24 border-b border-gray-200 relative overflow-hidden">
      {/* Decorative background grid and glows */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0a1f44 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 flex flex-col xl:flex-row gap-16 relative z-10">

        {/* LEFT PANEL - Text, CTA and Interactive Dynamic Showcase */}
        <div className="w-full xl:w-[35%] flex flex-col justify-between gap-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] mb-3 block">
              {content.tagline}
            </span>

            <h2 className="text-4xl font-light tracking-tight leading-[1.12] mb-6 text-slate-900 font-serif">
              {content.titleLine1}
              <span className="block font-sans font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#005ea6] via-blue-600 to-[#0a1f44]">
                {content.titleLine2}
              </span>
            </h2>

            <div className="w-16 h-[3px] bg-gradient-to-r from-[#005ea6] to-cyan-400 rounded-full mb-6" />

            <p className="text-slate-650 text-sm leading-relaxed max-w-md font-light mb-8">
              {content.description}
            </p>

            {/* DYNAMIC SHOWCASE CONTAINER */}
            <div className="relative aspect-[1.5] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white group/showcase">
              {/* Image Transition */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={activeDetail.image}
                  alt={activeService.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover/showcase:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
              </div>

              {/* Showcase Content Overlays */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-bold uppercase tracking-widest bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30 px-2.5 py-1 rounded-full text-cyan-300">
                    {activeDetail.tag}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1">
                    <Sparkles size={10} className="text-cyan-300" />
                    {activeDetail.highlight}
                  </span>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 mb-1">
                    Active Preview
                  </p>
                  <h4 className="text-base font-extrabold uppercase tracking-wide mb-2 text-white">
                    {activeService.title}
                  </h4>
                  <p className="text-[11px] text-slate-350 leading-relaxed font-light mb-4 max-w-sm">
                    {activeDetail.description}
                  </p>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/10 text-xs font-semibold text-white">
                    <Zap size={14} className="text-cyan-405 text-cyan-400" />
                    <span>Key Metric: <strong className="text-cyan-300">{activeDetail.metric}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={content.cta.href}
            className="
              inline-flex
              items-center
              gap-3
              bg-[#0a1f44]
              text-white
              px-8
              py-4
              rounded-xl
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              shadow-[0_4px_15px_rgba(10,31,68,0.2)]
              transition-all
              duration-300
              hover:bg-[#005ea6]
              hover:shadow-[0_4px_20px_rgba(0,94,166,0.3)]
              hover:-translate-y-0.5
              group
              w-fit
            "
          >
            {content.cta.text}
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* RIGHT PANEL - Premium Interactive Cards Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            const displayIndex = String(index + 1).padStart(2, "0");
            const isActive = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                className={`
                  relative
                  flex
                  flex-col
                  justify-between
                  p-8
                  rounded-2xl
                  overflow-hidden
                  cursor-pointer
                  transition-all
                  duration-500
                  group
                  ${isActive
                    ? "bg-gradient-to-br from-white via-white to-blue-50/30 border-blue-500 shadow-[0_20px_40px_rgba(0,58,112,0.06)] -translate-y-2"
                    : "bg-white border-slate-100 shadow-sm hover:border-slate-350 hover:shadow-md hover:-translate-y-1"
                  }
                  border
                `}
              >
                {/* 1. Custom Top Accent Bar (Expands on Hover/Active) */}
                <div className={`
                  absolute
                  top-0
                  left-0
                  h-[4px]
                  bg-gradient-to-r
                  from-[#005ea6]
                  to-cyan-400
                  transition-all
                  duration-500
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `} />

                {/* 2. Parallax Watermark Number */}
                <div className={`
                  absolute
                  right-6
                  bottom-4
                  text-8xl
                  font-black
                  select-none
                  pointer-events-none
                  transition-all
                  duration-500
                  ${isActive
                    ? "text-blue-50/80 scale-108 -translate-x-1 -translate-y-1"
                    : "text-slate-50 group-hover:scale-105 group-hover:text-blue-50/40"
                  }
                `}>
                  {displayIndex}
                </div>

                <div className="relative z-10">
                  {/* 3. Icon Wrapper (Double Ring Glow on Hover/Active) */}
                  <div className="relative mb-8 w-12 h-12">
                    {/* Glowing outer ring */}
                    <div className={`
                      absolute
                      inset-0
                      rounded-xl
                      bg-cyan-400/20
                      transition-all
                      duration-500
                      ${isActive ? "scale-125 opacity-100 blur-sm" : "scale-100 opacity-0 group-hover:scale-115 group-hover:opacity-80 group-hover:blur-[2px]"}
                    `} />

                    {/* Standard Icon wrapper */}
                    <div className={`
                      relative
                      w-full
                      h-full
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${isActive
                        ? "bg-[#005ea6] text-white shadow-[0_4px_12px_rgba(0,94,166,0.3)]"
                        : "bg-[#e6f0fa] text-[#005ea6]"
                      }
                    `}>
                      {IconComponent && <IconComponent size={20} strokeWidth={2} />}
                    </div>
                  </div>

                  {/* 4. Title (Color transitions & glow styling) */}
                  <h3 className={`
                    text-xs
                    font-extrabold
                    uppercase
                    tracking-[0.12em]
                    leading-snug
                    mb-3
                    max-w-[170px]
                    transition-colors
                    duration-300
                    ${isActive ? "text-[#005ea6]" : "text-slate-800"}
                  `}>
                    {service.title}
                  </h3>

                  {/* 5. Tiny active support badge */}
                  {isActive && (
                    <span className="inline-flex items-center gap-1 text-[8px] font-bold text-cyan-600 bg-cyan-50 border border-cyan-155 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      <ShieldCheck size={9} /> Selected
                    </span>
                  )}
                </div>

                {/* 6. Explore Link at bottom (Shifts Arrow on hover/active) */}
                <Link
                  href={service.href}
                  className={`
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-wider
                    mt-8
                    transition-colors
                    duration-300
                    ${isActive ? "text-[#005ea6]" : "text-slate-400"}
                  `}
                >
                  <span>Explore service</span>
                  <ArrowRight
                    size={14}
                    className={`
                      transition-transform
                      duration-300
                      ${isActive ? "translate-x-1.5" : "group-hover:translate-x-1"}
                    `}
                  />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
