"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  const CENTER_IMAGE = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";
  const RIGHT_IMAGE = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop";

  return (
    <section className="relative w-full bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden select-none">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        
        {/* 3-COLUMN GRID WITH PERFECT ALIGNMENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: "ABOUT US" & BOTTOM TEXT */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            {/* 
               TITLE: Added a wide gap between "ABOUT" and "US" 
               by removing the tight leading and adding mb-12 
            */}
            <h1 className="text-[5.5rem] sm:text-[7rem] lg:text-[9rem] font-black tracking-tighter text-black uppercase leading-[0.9] font-sans">
              ABOUT <br className="hidden lg:block" /> 
              <span className="block mt-8 lg:mt-12">US</span>
            </h1>

            {/* TEXT BLOCK: Positioned at the bottom of the column via justify-between */}
            <div className="space-y-6 pb-1">
              <span className="text-xs sm:text-sm text-black font-medium block tracking-wide">
                Luxurious Interior and Industrial Design
              </span>

              <p className="text-xs sm:text-sm text-gray-700 leading-[1.8] max-w-xs font-normal">
                Modern Elegance: Designs featuring clean lines, neutral palettes, and high-quality materials.
              </p>
            </div>
          </div>

          {/* MIDDLE COLUMN: LARGE CURVED IMAGE */}
          <div className="lg:col-span-5 relative w-full flex items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] rounded-[3rem] overflow-hidden shadow-sm bg-gray-100"
            >
              <Image
                src={CENTER_IMAGE}
                alt="Modern Executive Commercial Workspace"
                fill
                priority
                unoptimized
                className="object-cover h-10 object-center hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: SMALL IMAGE & PHILOSOPHY */}
          <div className="lg:col-span-3 flex flex-col justify-between pt-2 lg:pt-0">
            
            {/* Small Curved Photo - Aligned to top */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full h-[160px] sm:h-[180px] rounded-[2.5rem] overflow-hidden shadow-sm bg-gray-100"
            >
              <Image
                src={RIGHT_IMAGE}
                alt="Commercial Interior Design Details"
                fill
                unoptimized
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* Philosophy Text Block - Aligned to bottom */}
            <div className="space-y-3 pb-1 mt-4 lg:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight font-sans">
                Our Philosophy
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-[1.8] font-normal pr-4">
                At Britto Charette, we believe in creating luxurious, personalized environments that reflect our clients&apos; tastes and lifestyles.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}