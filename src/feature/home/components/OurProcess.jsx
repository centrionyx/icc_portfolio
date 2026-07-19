"use client";

import { ArrowRight } from "lucide-react";
import { OUR_PROCESS_CONTENT } from "../constants";

export default function OurProcess() {
  const content = OUR_PROCESS_CONTENT;

  return (
    <section className="w-full bg-[#0a1f44] text-white py-12 sm:py-16 border-b border-gray-800">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* LEFT PANEL - Tagline, Title & Description - 24% width */}
        <div className="w-full lg:w-[24%] flex flex-col justify-between py-1">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005ea6] mb-3 block">
              {content.tagline}
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight leading-[1.2] text-white font-serif">
              {content.titleLine1}
              <span className="block font-bold mt-1 text-white font-serif">
                {content.titleLine2}
              </span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mt-4 max-w-xs">
              {content.description}
            </p>
          </div>
        </div>

        {/* RIGHT PANEL - 5 Process Steps in a Row */}
        <div className="flex-1 flex flex-col sm:flex-row items-start justify-between gap-6 lg:gap-8 mt-6 lg:mt-0 relative">
          {content.steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative flex-1 flex flex-col items-start w-full sm:w-auto"
            >
              {/* Connecting Line to Next Step (Desktop only) */}
              {index < content.steps.length - 1 && (
                <div className="absolute top-6 left-14 right-0 h-6 -translate-y-1/2 hidden sm:block">
                  {/* Track path with traveler */}
                  <div className={`absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[1px] bg-[#005ea6]/30 overflow-hidden animate-line-${index}`}>
                    {/* Light traveler */}
                    <div className={`absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-[#60a5fa] to-transparent -translate-y-1/2 h-[3px] animate-traveler-${index}`} />
                  </div>
                  {/* Arrowhead */}
                  <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-[#005ea6]/40 rotate-45 animate-arrowhead-${index}`} />
                </div>
              )}

              {/* Number Circle */}
              <div className={`
                w-12
                h-12
                rounded-full
                border
                border-[#005ea6]/50
                bg-[#005ea6]/10
                flex
                items-center
                justify-center
                font-bold
                text-sm
                text-white
                mb-4
                z-10
                shadow-[0_0_15px_rgba(0,94,166,0.1)]
                animate-circle-${index}
              `}>
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-white
                mb-2
              ">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="
                text-slate-400
                text-[11px]
                leading-relaxed
                max-w-[160px]
              ">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}