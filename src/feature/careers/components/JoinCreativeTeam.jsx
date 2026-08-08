"use client";

import React from "react";
import { Sparkles, GraduationCap, Briefcase, Smile } from "lucide-react";
import { FadeIn } from "@/components/animations";

export default function JoinCreativeTeam() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* Left Text & Key Values Column */}
        <FadeIn direction="right" className="lg:col-span-6 flex flex-col justify-between py-2">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E5A900] block mb-2">
              BUILD WITH ICC
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-slate-950 tracking-tight mb-3">
              Join Our Creative Team
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6">
              We are always looking for talented individuals who are passionate about spatial design, engineering innovation, and execution excellence across India's premier commercial fit-outs.
            </p>
          </div>

          {/* 4 Value Icons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-[#E5A900] flex items-center justify-center shrink-0">
                <Sparkles size={18} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                Creative Environment
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-[#E5A900] flex items-center justify-center shrink-0">
                <GraduationCap size={18} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                Learning &amp; Growth
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-[#E5A900] flex items-center justify-center shrink-0">
                <Briefcase size={18} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                Exciting Projects
              </span>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="w-9 h-9 rounded-xl bg-amber-100/70 text-[#E5A900] flex items-center justify-center shrink-0">
                <Smile size={18} />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-900">
                Work-Life Balance
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Right Image Container — Matched Height */}
        <FadeIn direction="left" className="lg:col-span-6 relative min-h-[320px] lg:min-h-0 w-full rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
            alt="Join Creative Team"
            className="w-full h-full object-cover"
          />
        </FadeIn>

      </div>
    </section>
  );
}
