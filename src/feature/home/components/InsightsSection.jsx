"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { INSIGHTS_CONTENT, WHY_ICC_CONTENT, CLIENT_LOGOS } from "../constants";

export default function InsightsSection() {
  const insights = INSIGHTS_CONTENT;
  const whyIcc = WHY_ICC_CONTENT;

  // Duplicate logos for the infinite marquee effect
  const doubledLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="w-full bg-white border-b border-gray-200 flex flex-col">

      {/* MAIN ROW: INSIGHTS (LEFT) & WHY ICC (RIGHT - FULL BLEED) */}
      <div className="w-full flex flex-col xl:flex-row items-stretch">

        {/* LEFT CONTAINER (Intro + Cards) - Aligned to the 1440px grid on the left */}
        <div className="w-full xl:w-[68%] xl:pl-[calc((100vw-1440px)/2+32px)] lg:pl-8 pl-5 pr-5 xl:pr-8 py-10 sm:py-12 flex flex-col lg:flex-row gap-12">

          {/* 1. INSIGHTS INTRO */}
          <div className="w-full lg:w-[30%] flex flex-col justify-between py-1">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] mb-3 block">
                {insights.tagline}
              </span>
              <h2 className="text-3xl font-light tracking-tight leading-[1.15] text-slate-900 font-serif">
                {insights.titleLine1}
                <span className="block font-sans font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                  {insights.titleLine2}
                </span>
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#005ea6] to-cyan-500 rounded-full mt-6" />
            </div>

            <Link
              href={insights.cta.href}
              className="
                inline-flex
                items-center
                gap-3
                bg-white
                border
                border-slate-200
                text-[#005ea6]
                px-5
                py-3.5
                rounded-lg
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                mt-8
                lg:mt-0
                shadow-sm
                transition-all
                duration-300
                hover:border-[#005ea6]
                hover:shadow-md
                hover:-translate-y-0.5
                group
                w-fit
              "
            >
              {insights.cta.text}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 2. INSIGHTS CARDS */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {insights.cards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden pb-6 group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:border-blue-500/20"
              >
                {/* Card Image with zoom */}
                <div className="relative aspect-[1.5] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Card Text Content */}
                <div className="px-5 pt-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#005ea6] mb-2 block">
                      {card.category}
                    </span>
                    <h3 className="text-xs font-bold text-slate-800 leading-snug mb-5 min-h-[38px] group-hover:text-[#005ea6] transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <Link
                    href={card.href}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-[#005ea6]
                      transition-colors
                      duration-300
                      hover:text-[#004b84]
                      group/link
                    "
                  >
                    Read Article
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT CONTAINER (Why ICC) - Full Bleed to the right edge of screen */}
        <div className="w-full xl:w-[32%] bg-[#0a1f44] text-white py-10 sm:py-12 pl-8 sm:pl-12 xl:pr-[calc((100vw-1440px)/2+32px)] lg:pr-8 pr-5 relative overflow-hidden flex flex-col justify-between min-h-[400px] xl:min-h-0 shadow-2xl">
          {/* Subtle grid and glows in Why ICC */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0"
            style={{
              backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '16px 16px',
            }} />

          {/* Background Image aligned to the right */}
          <div className="absolute inset-y-0 right-0 w-[55%] z-0">
            <Image
              src={whyIcc.image}
              alt="Corporate building background"
              fill
              sizes="(max-width: 1200px) 50vw, 33vw"
              className="object-cover object-right opacity-30"
            />
          </div>
          {/* Horizontal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-transparent z-10 pointer-events-none" />

          {/* Content Container */}
          <div className="relative z-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400 mb-4 block">
              {whyIcc.tagline}
            </span>
            <h2 className="text-3xl font-light leading-[1.15] mb-8 font-serif">
              {whyIcc.titleLine1}
              <span className="block font-sans font-extrabold mt-2 bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
                {whyIcc.titleLine2}
              </span>
            </h2>

            {/* Bullet Points */}
            <ul className="space-y-4">
              {whyIcc.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="
                    w-6
                    h-6
                    rounded-lg
                    bg-cyan-500/10
                    border
                    border-cyan-500/25
                    flex
                    items-center
                    justify-center
                    shrink-0
                    mt-0.5
                    shadow-[0_0_10px_rgba(34,211,238,0.15)]
                  ">
                    <Check size={13} className="text-cyan-400" />
                  </span>
                  <span className="text-xs text-slate-300 leading-relaxed font-light">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="relative z-20 pt-8 border-t border-white/10 mt-8">
            <Link
              href={whyIcc.cta.href}
              className="
                inline-flex
                items-center
                gap-3
                bg-gradient-to-r
                from-[#005ea6]
                to-blue-500
                text-white
                px-6
                py-3.5
                rounded-lg
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                shadow-[0_4px_15px_rgba(0,94,166,0.3)]
                transition-all
                duration-300
                hover:from-[#004b84]
                hover:to-blue-600
                hover:shadow-[0_4px_20px_rgba(0,94,166,0.5)]
                hover:-translate-y-0.5
                group
              "
            >
              {whyIcc.cta.text}
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>

      {/* BOTTOM ROW: CLIENT LOGOS - INFINITE MARQUEE SLIDER */}
      <div className="w-full overflow-hidden border-t border-gray-100 bg-[#f8fafc] py-8 select-none relative">
        {/* Soft edge masking gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-20 md:gap-32 items-center">
          {doubledLogos.map((logo, idx) => (
            <div
              key={idx}
              className="text-lg sm:text-xl font-extrabold text-slate-400 tracking-tight font-sans filter grayscale hover:grayscale-0 hover:text-[#005ea6] hover:opacity-100 transition-all duration-300 shrink-0"
            >
              {logo.text}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
