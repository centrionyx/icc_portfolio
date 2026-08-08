"use client";

import React from "react";
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";

export default function OurStory() {
  return (
    <section className="w-full bg-white py-12 sm:py-24 px-6 sm:px-12 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Story Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col items-start text-left"
        >
          {/* Eyebrow Label */}
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-logo-color mb-3">
            OUR STORY
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 tracking-tight leading-[1.2] mb-6">
            Designing Spaces <span className="text-brand-accent">That Inspire</span>
          </h2>

          {/* Description Paragraph */}
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-normal">
            At ICC, we believe every space has a story. Our team of passionate
            fit-out consultants and contractors creates beautiful, functional,
            and sustainable commercial interiors that enrich lives, streamline
            operations, and elevate everyday working environments.
          </p>

          {/* Action CTA Button */}
          <CustomButton href="/about" variant="primary">
            Know More About Us
          </CustomButton>
        </motion.div>

        {/* Right Column: Seamless Autoplay Video */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 relative"
        >
          <div className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-100">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/our-story.mp4" type="video/mp4" />
              <source
                src="https://www.pexels.com/download/video/8346903/"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
