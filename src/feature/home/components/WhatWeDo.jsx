"use client";

import Link from "next/link";
import { ArrowRight, Users2, DraftingCompass, HardHat, Leaf, CheckCircle2, Wrench } from "lucide-react";
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

export default function WhatWeDo() {
  const content = WHAT_WE_DO_CONTENT;

  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
        
        {/* LEFT PANEL (Text & CTA) - 24% width for perfect vertical alignment */}
        <div className="w-full lg:w-[35%] bg-[#f7f8fa] p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-200">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005ea6] mb-3 block">
            {content.tagline}
          </span>
          
          <h2 className="text-2xl sm:text-3xl font-normal tracking-tight leading-[1.2] mb-4 text-slate-900 font-serif">
            {content.titleLine1}
            <span className="block font-bold mt-1 text-slate-900 font-serif">
              {content.titleLine2}
            </span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-sm">
            {content.description}
          </p>

          <Link
            href={content.cta.href}
            className="
              inline-flex
              items-center
              gap-2
              text-[#005ea6]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              transition-colors
              duration-300
              hover:text-[#004b84]
              group
            "
          >
            {content.cta.text}
            <ArrowRight size={14} className="transition-transform duration-350 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* RIGHT PANEL (6 Service Columns) - Left-aligned items */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.iconName];
            return (
              <Link
                key={service.id}
                href={service.href}
                className="
                  group
                  flex
                  flex-col
                  items-start
                  justify-between
                  text-left
                  p-6
                  lg:p-8
                  border-r
                  border-b
                  last:border-r-0
                  md:even:border-r-0
                  lg:even:border-r
                  lg:border-b-0
                  border-gray-100
                  transition-all
                  duration-300
                  hover:bg-slate-50/50
                "
              >
                {/* Circular Icon Wrapper - Left Aligned */}
                <div className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#e6f0fa]
                  flex
                  items-center
                  justify-center
                  text-[#005ea6]
                  mb-6
                  transition-transform
                  duration-500
                  group-hover:scale-105
                ">
                  {IconComponent && <IconComponent size={20} strokeWidth={1.5} />}
                </div>

                {/* Title - Left Aligned */}
                <h3 className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  leading-normal
                  text-slate-800
                  mb-6
                  min-h-[30px]
                  flex
                  items-center
                  max-w-[120px]
                ">
                  {service.title}
                </h3>

                {/* Arrow Indicator - Left Aligned */}
                <ArrowRight 
                  size={14} 
                  className="
                    text-slate-400
                    transition-all
                    duration-300
                    group-hover:text-[#005ea6]
                    group-hover:translate-x-0.5
                  " 
                />
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}