"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ChevronRight, ChevronLeft } from "lucide-react";
import { HERO_CONTENT, HERO_IMAGES, HERO_IMAGE_ROTATION_INTERVAL, HERO_IMAGE_TRANSITION_DURATION } from "../constants";

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slide = HERO_CONTENT.slides[currentImageIndex] || HERO_CONTENT.slides[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, HERO_IMAGE_ROTATION_INTERVAL);

    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  return (
    <section className="relative w-full h-[650px] sm:h-[720px] lg:h-[calc(100vh-80px)] min-h-[700px] bg-[#0a1f44] overflow-hidden">

      {/* 1. DYNAMIC BACKGROUND ORBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-[120px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[-10%] right-[20%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-cyan-600/15 to-transparent blur-[100px] animate-pulse duration-[6000ms]" />
      </div>

      {/* 2. ARCHITECTURAL BLUEPRINT GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* 3. DIAGONALLY CUT LEFT CONTENT PANEL */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[54%] bg-[#0a1f44]/95 text-white p-6 sm:p-12 lg:pl-16 lg:pr-24 xl:pl-20 xl:pr-32 flex flex-col justify-between z-10 select-none
                   lg:[clip-path:polygon(0_0,_100%_0,_84%_100%,_0_100%)] border-r border-white/5"
      >
        <div className="w-16 h-[3px] bg-gradient-to-r from-[#005ea6] to-cyan-400 mt-4 rounded-full relative z-10" />

        {/* Stable Content Box */}
        <div className="my-auto w-full max-w-lg relative z-10">
          <div className="mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 block font-mono">
              // INNOVATIVE WORKPLACES
            </span>
          </div>

          {/* Title Wrapper with fixed height to keep alignment */}
          <div className="h-[120px] sm:h-[135px] lg:h-[160px] flex flex-col justify-end mb-4">
            <h2 className="text-3xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-light tracking-tight leading-[1.15] font-serif transition-all duration-500">
              <span className="block text-white font-normal">
                {slide.titleLine1}
              </span>
              <span className="block font-sans font-black bg-gradient-to-r from-[#005ea6] via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-1">
                {slide.titleLine2}
              </span>
            </h2>
          </div>

          {/* Description Wrapper with fixed height to keep CTA buttons in place */}
          <div className="h-[75px] sm:h-[65px] lg:h-[80px] mb-8">
            <p className="text-slate-350 text-xs sm:text-sm lg:text-base leading-relaxed font-light line-clamp-3">
              {slide.description}
            </p>
          </div>

          {/* Action Buttons (Fixed Frame Position) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href={slide.primaryCta.href}
              className="
                relative
                overflow-hidden
                inline-flex
                items-center
                gap-3
                bg-gradient-to-r
                from-[#005ea6]
                to-blue-500
                text-white
                px-7
                py-3.5
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                rounded-lg
                shadow-[0_4px_20px_rgba(0,94,166,0.3)]
                transition-all
                duration-300
                hover:from-[#004b84]
                hover:to-blue-600
                hover:shadow-[0_6px_25px_rgba(0,94,166,0.5)]
                hover:-translate-y-0.5
                group
              "
            >
              {slide.primaryCta.text}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
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
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                transition-colors
                duration-300
                hover:text-cyan-400
                group
              "
            >
              <span className="
                w-10
                h-10
                rounded-full
                border
                border-white/10
                bg-white/5
                backdrop-blur-sm
                flex
                items-center
                justify-center
                transition-all
                duration-300
                group-hover:border-cyan-400
                group-hover:bg-cyan-500/10
              ">
                <Play size={11} className="fill-white ml-0.5 group-hover:fill-cyan-400 group-hover:text-cyan-400 transition-colors" />
              </span>
              {slide.secondaryCta.text}
            </button>
          </div>
        </div>

        {/* Stats Row (Always Pinned to Bottom) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10 w-full max-w-lg mb-4 relative z-10">
          {HERO_CONTENT.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl p-3 transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            >
              <p className="text-xl sm:text-2xl font-extrabold tracking-tight mb-0.5 text-white">
                {stat.value}
              </p>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-450 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. RIGHT IMAGE SLIDER - Fills behind the diagonal cut */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[60%] h-full bg-slate-900 z-0
                   hidden lg:block lg:[clip-path:polygon(24%_0,_100%_0,_100%_100%,_0_100%)]"
      >
        {HERO_IMAGES.map((imgSrc, idx) => (
          <div
            key={imgSrc}
            className={`absolute inset-0 transition-all ease-in-out ${idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
            style={{ transitionDuration: `${HERO_IMAGE_TRANSITION_DURATION}ms` }}
          >
            <Image
              src={imgSrc}
              alt={`Hero background ${idx + 1}`}
              fill
              priority={idx === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/40 via-transparent to-black/30 pointer-events-none z-10" />
          </div>
        ))}

        {/* Slider Controls */}
        <div className="absolute bottom-6 right-6 flex items-center bg-[#0a1f44]/90 backdrop-blur-md text-white z-20 select-none rounded-lg border border-white/10 overflow-hidden shadow-2xl">
          <button
            onClick={handlePrev}
            className="p-3.5 bg-white/5 text-white transition-colors duration-300 hover:bg-white/10 flex items-center justify-center"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="px-4 py-2.5 text-[10px] font-mono tracking-widest text-slate-400 border-x border-white/10">
            <span className="text-white font-bold">
              {String(currentImageIndex + 1).padStart(2, "0")}
            </span>{" "}
            / {String(HERO_IMAGES.length).padStart(2, "0")}
          </div>

          <button
            onClick={handleNext}
            className="p-3.5 bg-[#005ea6] text-white transition-colors duration-300 hover:bg-[#004b84] flex items-center justify-center"
          >
            <ChevronRight size={16} />
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
            priority={idx === 0}
            style={{ transitionDuration: `${HERO_IMAGE_TRANSITION_DURATION}ms` }}
            className={`object-cover transition-opacity ease-in-out absolute inset-0 ${idx === currentImageIndex ? "opacity-25" : "opacity-0"
              }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#0a1f44]/85 pointer-events-none" />
      </div>

      {/* Scrolling mouse indicator */}
      <div className="absolute bottom-6 left-[41.5%] transform -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-1.5 opacity-60">
        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Scroll</span>
        <div className="w-[18px] h-[30px] border border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-[2px] h-[5px] bg-slate-400 rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
}
