"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";

// High-quality Unsplash images for commercial office workspace & interior design
// const HERO_IMAGES = [
//   "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//  ];

export default function HeroSection() {
  const heroRef = useRef(null);

  const SINGLE_HERO_IMAGE = "/Images/workDay.jpeg";

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[500px] overflow-hidden bg-[#0a1f44]"
    >
      {/* Clean Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={SINGLE_HERO_IMAGE}
          alt="Commercial Workspace Interior"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center h-full px-6 sm:px-12 md:px-16 text-center md:text-left max-w-7xl mx-auto">
        {/* Organic Smoke / Radial Backdrop Aura (No rectangular box) */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full md:w-[700px] h-[450px] bg-black/60 rounded-full blur-[90px] pointer-events-none -z-10" />

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-white tracking-tight leading-[1.15] mb-6 max-w-3xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
        >
          Delivering Projects <br className="hidden sm:inline" />
          <span className="text-brand-logo-color block sm:inline my-1 sm:my-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            From Concept
          </span>{" "}
          to Completion
        </motion.h1>

        {/* Sub-headline / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-100 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          Interior Fit-Out Project Advisory | Execution | Coordination | Quality Management
        </motion.p>

        {/* CTA Buttons using reusable CustomButton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4"
        >
          <CustomButton href="/contact" variant="primary">
            Get a Consultation
          </CustomButton>

          <CustomButton href="/projects" variant="outline">
            View Our Projects
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
}