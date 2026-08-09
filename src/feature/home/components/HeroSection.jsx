"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";

export default function HeroSection() {
  const heroRef = useRef(null);
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.error("Failed to fetch hero data:", err));
  }, []);

  const slide = heroData?.slides?.[0];
  const bgImage =
    heroData?.images && heroData.images.length > 0
      ? heroData.images[0]
      : slide?.image || "/Images/workDay.jpeg";

  const titleLine1 = slide?.titleLine1 || "Delivering Projects";
  const titleLine2 = slide?.titleLine2 || "From Concept to Completion";
  const description =
    slide?.description ||
    "Interior Fit-Out Project Advisory | Execution | Coordination | Quality Management";
  const primaryCta = slide?.primaryCta || {
    text: "Get a Consultation",
    href: "/contact",
  };
  const secondaryCta = slide?.secondaryCta || {
    text: "View Our Projects",
    href: "/projects",
  };

  const renderTitleLine2 = (line2) => {
    if (!line2) return null;
    if (line2.includes("From Concept")) {
      const parts = line2.split("From Concept");
      return (
        <>
          <span className="text-brand-logo-color block sm:inline my-1 sm:my-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            From Concept
          </span>
          {parts[1] || ""}
        </>
      );
    }
    return (
      <span className="text-brand-logo-color block sm:inline my-1 sm:my-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        {line2}
      </span>
    );
  };

  return (
    <section
      ref={heroRef}
      className="relative w-full h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] min-h-[500px] overflow-hidden bg-[#0a1f44]"
    >
      {/* Clean Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
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
          {titleLine1} <br className="hidden sm:inline" />
          {renderTitleLine2(titleLine2)}
        </motion.h1>

        {/* Sub-headline / Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-slate-100 text-base sm:text-lg md:text-lg max-w-xl font-normal leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          {description}
        </motion.p>

        {/* CTA Buttons using reusable CustomButton */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4"
        >
          {primaryCta.text && (
            <CustomButton href={primaryCta.href || "/contact"} variant="primary">
              {primaryCta.text}
            </CustomButton>
          )}

          {secondaryCta.text && (
            <CustomButton href={secondaryCta.href || "/projects"} variant="outline">
              {secondaryCta.text}
            </CustomButton>
          )}
        </motion.div>
      </div>
    </section>
  );
}