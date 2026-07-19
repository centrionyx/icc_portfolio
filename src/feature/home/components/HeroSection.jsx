"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ChevronRight } from "lucide-react";
import { HERO_CONTENT, HERO_IMAGES, HERO_IMAGE_ROTATION_INTERVAL, HERO_IMAGE_TRANSITION_DURATION } from "../constants";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slide = HERO_CONTENT.slides[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, HERO_IMAGE_ROTATION_INTERVAL);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    <section className="relative w-full h-[500px] sm:h-[600px] lg:h-[calc(100vh-80px)] min-h-[520px] lg:min-h-[520px] xl:min-h-[520px] bg-white overflow-hidden">
      
      {/* LEFT CONTENT PANEL (Navy Blue with Diagonal Cut) */}
      <div 
        className="absolute inset-y-0 left-0 w-full lg:w-full bg-[#0a1f44] text-white p-6 sm:p-12 lg:py-10 lg:px-16 xl:py-16 xl:px-24 flex flex-col justify-between z-10 select-none
                   lg:[clip-path:polygon(0_-5%,_47%_-5%,_39%_105%,_0_105%)]"
      >
        {/* White stripe at the top connecting with the navbar */}
        <div className="absolute top-0 left-0 right-0 h-[20px] bg-white z-20" />

        {/* Subtle decorative line at the top */}
        <div className="w-12 h-[2px] bg-[#005ea6] mt-4" />

        {/* Hero Text Content */}
        <div className="my-auto max-w-[90%] lg:max-w-[42%] xl:max-w-[38%] py-4">
          <h2 className="text-4xl sm:text-5xl lg:text-[42px] xl:text-[56px] 2xl:text-[64px] font-normal tracking-tight leading-[1.15] mb-4 xl:mb-6 font-serif">
            {slide.titleLine1}
            <span className="block font-sans font-extrabold text-[#005ea6] mt-2">
              {slide.titleLine2}
            </span>
          </h2>

          <p className="text-slate-300 text-sm xl:text-base leading-relaxed max-w-md mb-6 xl:mb-8">
            {slide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link
              href={slide.primaryCta.href}
              className="
                inline-flex
                items-center
                gap-3
                bg-[#005ea6]
                text-white
                px-6
                py-3.5
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                transition-all
                duration-300
                hover:bg-[#004b84]
                hover:shadow-lg
              "
            >
              {slide.primaryCta.text}
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={() => {
                // Play showreel action
              }}
              className="
                inline-flex
                items-center
                gap-3
                text-white
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                transition-colors
                duration-300
                hover:text-blue-400
                group
              "
            >
              <span className="
                w-10
                h-10
                rounded-full
                border
                border-white/20
                flex
                items-center
                justify-center
                transition-all
                duration-300
                group-hover:border-blue-400
                group-hover:bg-white/5
              ">
                <Play size={12} className="fill-white ml-0.5 group-hover:fill-blue-400 group-hover:text-blue-400" />
              </span>
              {slide.secondaryCta.text}
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 xl:pt-8 border-t border-white/10 max-w-[90%] lg:max-w-[40%] xl:max-w-[36%] mb-4">
          {HERO_CONTENT.stats.map((stat, idx) => (
            <div key={idx} className="relative pr-4 last:border-0 sm:border-r sm:border-white/10">
              <p className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[36px] font-bold tracking-tight mb-1">
                {stat.value}
              </p>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT IMAGE PANEL (Office Building Image & Slider Controls) */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-full h-full bg-slate-100 z-0
                   hidden lg:block lg:[clip-path:polygon(46%_-5%,_105%_-5%,_105%_105%,_38%_105%)]"
      >
        {HERO_IMAGES.map((imgSrc, idx) => (
          <Image
            key={imgSrc}
            src={imgSrc}
            alt={`Hero background ${idx + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={idx === 0}
            style={{ transitionDuration: `${HERO_IMAGE_TRANSITION_DURATION}ms` }}
            className={`object-cover transition-opacity ease-in-out absolute inset-0 ${
              idx === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10" />

        {/* Slider Controls (Bottom Right) */}
        <div className="absolute bottom-0 right-0 flex items-center bg-[#0a1f44] text-white z-20 select-none">
          <div className="px-6 py-4 text-xs font-mono tracking-widest text-slate-400 border-r border-white/10">
            <span className="text-white font-bold">
              {String(currentImageIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(HERO_IMAGES.length).padStart(2, "0")}
          </div>
          <button
            onClick={handleNext}
            className="
              p-5
              bg-[#005ea6]
              text-white
              transition-colors
              duration-300
              hover:bg-[#004b84]
              flex
              items-center
              justify-center
            "
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile background image fallback */}
      <div className="absolute inset-0 lg:hidden z-0">
        {HERO_IMAGES.map((imgSrc, idx) => (
          <Image
            key={imgSrc}
            src={imgSrc}
            alt={`Hero background mobile ${idx + 1}`}
            fill
            sizes="100vw"
            priority={idx === 0}
            style={{ transitionDuration: `${HERO_IMAGE_TRANSITION_DURATION}ms` }}
            className={`object-cover transition-opacity ease-in-out absolute inset-0 ${
              idx === currentImageIndex ? "opacity-20" : "opacity-0"
            }`}
          />
        ))}
      </div>

    </section>
  );
}