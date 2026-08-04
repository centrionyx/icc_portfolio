"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CareersHero() {
  // High-resolution workplace career, engineering, construction & team collaboration images
  const GALLERY_IMAGES = [
    {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      alt: "Female Engineer & Project Lead",
      height: "h-48 sm:h-56 lg:h-64",
      mt: "mt-8"
    },
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
      alt: "Diverse Technical Team Strategy Session",
      height: "h-56 sm:h-64 lg:h-72",
      mt: "mt-3"
    },
    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
      alt: "Architect & Engineer Blueprint Review",
      height: "h-64 sm:h-72 lg:h-[340px]",
      mt: "mt-0"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
      alt: "Construction Project Management Collaboration",
      height: "h-56 sm:h-64 lg:h-72",
      mt: "mt-4"
    },
    {
      src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
      alt: "Corporate Team Office Workshop",
      height: "h-48 sm:h-56 lg:h-64",
      mt: "mt-10"
    }
  ];

  // High quality interior office space photo (Same as Homepage & About Hero)
  const OFFICE_BACKGROUND_IMAGE = "/Images/workDay.jpeg";

  return (
    <section className="relative w-full bg-[#f8fafc] text-[#0a1f44] pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden select-none">
      
      {/* FULL-PAGE COMMERCIAL OFFICE BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={OFFICE_BACKGROUND_IMAGE}
          alt="Modern Commercial Office Space Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        {/* Dark Overlay matching Homepage & About Hero */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* TOP HEADER TITLE CONTAINER */}
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 space-y-3">
        
        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-sans drop-shadow-md">
          Build Your Future with Us
        </h1>

        {/* Subtitle */}
        <p className="text-slate-200 text-xs sm:text-sm max-w-lg mx-auto font-light font-sans leading-relaxed drop-shadow-sm">
          Discover exciting opportunities and grow your career in a thriving, high-performance environment.
        </p>
      </div>

      {/* FLOATING TESTIMONIAL QUOTE BADGE */}
      <div className="max-w-5xl mx-auto px-6 relative mt-6 mb-2 z-20 hidden md:block">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="absolute left-4 top-0 bg-white/95 border border-slate-200 p-3 rounded-2xl shadow-xl max-w-xs flex items-start gap-3 backdrop-blur-md"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold font-mono text-xs shadow-inner">
            99
          </div>
          <p className="text-[10px] text-slate-800 leading-relaxed font-sans font-medium">
            At ICC, we merge precision engineering with strategy to craft commercial workspace environments that perform.
          </p>
        </motion.div>
      </div>

      {/* STAGGERED MASONRY GALLERY SHOWCASE WITH CAREER & COLLABORATION IMAGES */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-4 items-center justify-center">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * idx, duration: 0.5 }}
              className={`relative w-full ${img.height} ${img.mt} rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border-2 border-white group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                unoptimized
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
