"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { INSIGHTS_CONTENT, CLIENT_LOGOS } from "../constants";

// High quality Unsplash images for Article Categories matching reference image
const CATEGORY_IMAGES = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop", // Workplace Strategy
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop", // Sustainability & Design
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop", // Fit-Out Governance
];

export default function InsightsSection() {
  const insights = INSIGHTS_CONTENT;

  return (
    <section className="w-full bg-[#f1f3f5] py-16 sm:py-24 px-5 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER BLOCK — 'Article categories' and pill CTA matching reference image */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#0a1f44] tracking-tight">
            Featured <span className="text-brand-accent">Blogs</span>
          </h2>

          <Link
            href="/blogs"
            className="
              inline-flex
              items-center
              justify-center
              bg-brand-accent
              hover:bg-[#004B84]
              text-white
              text-xs
              font-bold
              px-6
              py-2.5
              rounded-full
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Browse all Blogs
          </Link>
        </div>

        {/* 3 ARTICLE CATEGORY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {insights.cards.map((card, idx) => {
            const bgImage = CATEGORY_IMAGES[idx % CATEGORY_IMAGES.length];

            return (
              <motion.div
                key={card.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <Link
                  href={card.href || "/blogs"}
                className="
                  group
                  relative
                  aspect-[3/4]
                  w-full
                  rounded-3xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  flex
                  flex-col
                  justify-between
                  hover:-translate-y-1.5
                "
              >
                {/* Background Image */}
                <Image
                  src={bgImage}
                  alt={card.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay for crisp text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 group-hover:opacity-90 transition-opacity" />

                {/* Top-Right Arrow Badge Icon matching reference UI */}
                <div className="relative z-10 p-6 flex justify-end">
                  <div className="
                    w-11
                    h-11
                    rounded-full
                    bg-white/20
                    backdrop-blur-md
                    border
                    border-white/30
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    transition-transform
                    duration-300
                    group-hover:scale-110
                    group-hover:bg-brand-accent
                    group-hover:text-white
                    group-hover:border-brand-accent
                  ">
                    <ArrowUpRight size={20} strokeWidth={2} />
                  </div>
                </div>

                {/* Bottom Content — Category Title & Subtext description matching reference image */}
                <div className="relative z-10 p-6 sm:p-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-brand-accent transition-colors">
                    {card.category || card.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {card.title}. Comprehensive workplace strategy and commercial fit-out execution insights.
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

        {/* CLIENT LOGOS MARQUEE */}
        <div className="w-full border-t border-slate-200/80 pt-10 overflow-hidden relative">
          <div className="animate-marquee flex items-center gap-16 md:gap-24 opacity-60">
            {CLIENT_LOGOS.map((logo, idx) => (
              <div 
                key={`logo-1-${idx}`} 
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight select-none font-sans filter grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              >
                {logo.text}
              </div>
            ))}
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