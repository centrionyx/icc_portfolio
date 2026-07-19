"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { INSIGHTS_CONTENT, WHY_ICC_CONTENT, CLIENT_LOGOS } from "../constants";

export default function InsightsSection() {
  const insights = INSIGHTS_CONTENT;
  const whyIcc = WHY_ICC_CONTENT;

  return (
    <section className="w-full bg-white border-b border-gray-200 flex flex-col">
      
      {/* MAIN ROW: INSIGHTS (LEFT) & WHY ICC (RIGHT - FULL BLEED) */}
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        
        {/* LEFT CONTAINER (Intro + Cards) - Aligned to the 1440px grid on the left */}
        <div className="w-full lg:w-[68%] lg:pl-[calc((100vw-1440px)/2+32px)] pl-5 pr-5 lg:pr-8 py-12 sm:py-14 flex flex-col lg:flex-row gap-8">
          
          {/* 1. INSIGHTS INTRO (30% of left container = ~20% of total) */}
          <div className="w-full lg:w-[30%] flex flex-col justify-between py-1">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005ea6] mb-3 block">
                {insights.tagline}
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight leading-[1.2] text-slate-900 font-serif">
                {insights.titleLine1}
                <span className="block font-bold mt-1 text-slate-900 font-serif">
                  {insights.titleLine2}
                </span>
              </h2>
            </div>

            <Link
              href={insights.cta.href}
              className="
                inline-flex
                items-center
                gap-2
                text-[#005ea6]
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                mt-6
                lg:mt-0
                transition-colors
                duration-300
                hover:text-[#004b84]
                group
              "
            >
              {insights.cta.text}
              <ArrowRight size={14} className="transition-transform duration-350 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 2. INSIGHTS CARDS (70% of left container = ~48% of total) */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {insights.cards.map((card) => (
              <div 
                key={card.id} 
                className="flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden pb-4 group transition-all duration-300 hover:shadow-md hover:border-gray-200"
              >
                {/* Card Image */}
                <div className="relative aspect-[1.6] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Card Text Content */}
                <div className="px-4 pt-4 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#005ea6] mb-2 block">
                      {card.category}
                    </span>
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 leading-snug mb-4 min-h-[44px]">
                      {card.title}
                    </h3>
                  </div>

                  <Link
                    href={card.href}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-[#005ea6]
                      transition-colors
                      duration-300
                      hover:text-[#004b84]
                      group/link
                    "
                  >
                    Read More
                    <ArrowRight size={12} className="transition-transform duration-300 group-hover/link:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT CONTAINER (Why ICC) - Full Bleed to the right edge of screen */}
        <div className="w-full lg:w-[32%] bg-[#0a1f44] text-white py-12 sm:py-14 pl-8 sm:pl-12 lg:pr-[calc((100vw-1440px)/2+32px)] pr-5 relative overflow-hidden flex flex-col justify-between min-h-[350px] lg:min-h-0 shadow-lg">
          {/* Background Image aligned to the right */}
          <div className="absolute inset-y-0 right-0 w-[60%] sm:w-[50%] z-0">
            <Image
              src={whyIcc.image}
              alt="Corporate building background"
              fill
              sizes="(max-width: 1200px) 50vw, 33vw"
              className="object-cover object-right opacity-40"
            />
          </div>
          {/* Horizontal Gradient Overlay: solid blue on left, fades to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-transparent z-10 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-350 mb-4 block">
              {whyIcc.tagline}
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal leading-[1.2] mb-6 font-serif">
              {whyIcc.titleLine1}
              <span className="block font-bold mt-1 font-serif">
                {whyIcc.titleLine2}
              </span>
            </h2>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {whyIcc.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="
                    w-5
                    h-5
                    rounded-full
                    bg-white/10
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    shrink-0
                    mt-0.5
                  ">
                    <Check size={12} className="text-white" />
                  </span>
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="relative z-20 pt-6 border-t border-white/10 mt-6">
            <Link
              href={whyIcc.cta.href}
              className="
                inline-flex
                items-center
                gap-2
                text-white
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                transition-colors
                duration-300
                hover:text-slate-350
                group
              "
            >
              {whyIcc.cta.text}
              <ArrowRight size={14} className="transition-transform duration-350 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: CLIENT LOGOS - Aligned to 1440px grid with Marquee Effect */}
      <div className="w-full max-w-[1440px] mx-auto px-5 lg:px-8 overflow-hidden relative">
        {/* Fading Edge Gradients */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

        <div className="w-full border-t border-gray-100 overflow-hidden py-10">
          <div className="animate-marquee flex items-center gap-16 md:gap-24 opacity-55">
            {/* First Set of Logos */}
            {CLIENT_LOGOS.map((logo, idx) => (
              <div 
                key={`logo-1-${idx}`} 
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight select-none font-sans filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              >
                {logo.text}
              </div>
            ))}
            {/* Second Set of Logos (duplicate for seamless loop) */}
            {CLIENT_LOGOS.map((logo, idx) => (
              <div 
                key={`logo-2-${idx}`} 
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight select-none font-sans filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              >
                {logo.text}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}