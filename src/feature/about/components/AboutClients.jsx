"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Building2 } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";

export default function AboutClients({ clientsServed, founderEmail }) {
  return (
    <>
      {/* ── CLIENT REGISTER SECTION WITH INFINITE MARQUEE ── */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
          {/* Reusable Responsive Section Header */}
          <SectionHeader
            eyebrow="CLIENT REGISTER"
            title="Organizations"
            highlight="We've Served"
            description="High-precision corporate workspace projects across India."
          />
        </div>

        {/* Continuous Single-Line Infinite Marquee */}
        <div className="relative w-full overflow-hidden flex py-2">
          {/* Gradient Fade Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-4 shrink-0 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 65,
              repeat: Infinity,
            }}
          >
            {[...clientsServed, ...clientsServed, ...clientsServed, ...clientsServed].map((client, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-800 transition-all duration-900 shadow-sm flex items-center gap-2.5 shrink-0 hover:bg-[#0a1f44] hover:text-white hover:border-[#0a1f44] cursor-default group"
              >
                <div className="w-2 h-2 rounded-full bg-[#E5A900] group-hover:bg-amber-400 transition-colors" />
                <span>{client}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER MATCHING SITE THEME ── */}
      <section className="w-full bg-[#f8fafc] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-brand-yellow text-slate-950 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-950 font-sans mb-3">
                Ready to bring predictability to your next fit-out?
              </h2>
              <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-900/90">
                ICC delivers workspace projects with zero-delay benchmarks, thorough governance, and measurable outcomes.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="shrink-0 w-full lg:w-auto flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={`mailto:${founderEmail}`}
                className="w-full sm:w-auto bg-brand-navy hover:bg-[#002850] text-white px-8 py-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center justify-center gap-2.5 cursor-pointer uppercase tracking-wider"
              >
                <span>Start a Conversation</span>
                <ArrowRight size={16} />
              </a>

              <Link
                href="/services"
                className="w-full sm:w-auto bg-white/90 hover:bg-white text-slate-950 border border-slate-300 px-8 py-4 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-sm hover:scale-105 inline-flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
              >
                <span>View Services</span>
                <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

