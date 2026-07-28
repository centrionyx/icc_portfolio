"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// High-quality Unsplash images for commercial office workspace & interior design
// const HERO_IMAGES = [
//   "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//  ];

export default function HeroSection() {
  const heroRef = useRef(null);

  const SINGLE_HERO_IMAGE = "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop";

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-[#0a1f44]"
    >
      {/* Background Image - Single High Quality Unsplash Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src={SINGLE_HERO_IMAGE}
          alt="Commercial Workspace Interior"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Dark overlay for optimal text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Content for ICC Commercial Fit-Out Workspace */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center max-w-5xl mx-auto pt-16">
        {/* Tagline above headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-cyan-300 text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase">
            Commercial Workspace Management
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold text-white tracking-tight leading-[1.08] mb-6 drop-shadow-md"
        >
          Commercial Workspace <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-cyan-200">
            Design &amp; Governance
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-8 drop-shadow-sm"
        >
          Delivering high-precision commercial interior fit-out project management, BOQ auditing, MEP clash resolution, and zero-delay execution governance across India.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              bg-white
              text-[#005EA6]
              px-8
              py-4
              text-xs sm:text-sm
              font-bold
              tracking-[0.05em]
              rounded-xl
              shadow-2xl
              transition-all
              duration-300
              hover:bg-slate-100
              hover:scale-105
              group
            "
          >
            <span>Book Free Consultation</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-[#005EA6]/40 hover:bg-[#005EA6]/60 border border-white/25 text-white font-bold text-xs sm:text-sm px-8 py-4 rounded-xl backdrop-blur-md transition-all"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}