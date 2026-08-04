"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  const BACKGROUND_IMAGE = "/Images/workDay.jpeg";

  return (
    <section className="relative w-full min-h-[680px] bg-[#0a1f44] py-24 sm:py-32 px-5 lg:px-12 overflow-hidden flex items-center justify-center">
      {/* Background Image - Same as Home Page Hero */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Commercial Workspace Interior"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Dark Overlay matching Homepage Hero */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT CARD: How It Started & Vision */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl border border-white/20"
          >
            <div>
              {/* Tagline */}
              <span className="text-xs sm:text-sm font-bold text-[#005ea6] uppercase tracking-wider block mb-4">
                ABOUT US
              </span>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-8 font-sans">
                Innovation Consultants <br />
                &amp; Contractors
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
              Established in Jan 2024 with presence in Pune, Mumbai, and multi-city projects across India, ICC provides complete end-to-end commercial interior fit-out project management, technical consultancy, site supervision, and repair &amp; maintenance services—delivering seamless execution from concept to completion.
            </p>
          </motion.div>

          {/* RIGHT SIDE: IMAGE + 4 STAT CARDS */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* TOP IMAGE CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative w-full h-[220px] sm:h-[260px] rounded-3xl overflow-hidden shadow-2xl bg-slate-100 border border-white/20"
            >
              <Image
                src="/Images/PrincipalGlobal.jpeg"
                alt="Workspace Team Collaboration"
                fill
                unoptimized
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </motion.div>

            {/* BOTTOM 4 STAT CARDS GRID */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 flex-1"
            >
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-xl flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight mb-1">
                  20+
                </span>
                <span className="text-xs text-slate-500 font-medium leading-snug">
                  Years Experience
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-xl flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight mb-1">
                  10M+
                </span>
                <span className="text-xs text-slate-500 font-medium leading-snug">
                  Sq. Ft. Delivered
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-xl flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight mb-1">
                  100%
                </span>
                <span className="text-xs text-slate-500 font-medium leading-snug">
                  Project Predictability
                </span>
              </div>

              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-xl flex flex-col justify-center">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight mb-1">
                  Jan 2024
                </span>
                <span className="text-xs text-slate-500 font-medium leading-snug">
                  ICC Established
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}