"use client";

import React from "react";

/**
 * Reusable SectionHeader component matching the Key Strengths header style:
 * - Left line indicator with golden uppercase eyebrow
 * - Playfair Display serif title with highlighted golden words
 * - Clean descriptive paragraph
 * - Golden diamond (◆) line accent
 */
export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "left",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div
      className={`relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 ${
        isCenter ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      <div className="max-w-2xl">
        {/* Eyebrow with gold line indicator */}
        {eyebrow && (
          <div
            className={`flex items-center gap-2 mb-2 ${
              isCenter ? "justify-center" : "justify-start"
            }`}
          >
            <span className="w-8 h-[2px] bg-[#c59b27]" />
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#b8860b] uppercase font-sans">
              {eyebrow}
            </span>
          </div>
        )}

        {/* Main Serif Title */}
        {title && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0e1e38] tracking-tight leading-tight mb-3">
            {title}{" "}
            {highlight && <span className="text-[#b8860b]">{highlight}</span>}
          </h2>
        )}

        {/* Description paragraph */}
        {description && (
          <p className="text-slate-600 text-xs sm:text-sm font-sans font-normal leading-relaxed">
            {description}
          </p>
        )}

        {/* Golden Diamond Line Accent */}
        <div
          className={`flex items-center gap-2.5 mt-4 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          {isCenter && <span className="w-12 h-[1px] bg-amber-200" />}
          <span className="w-2 h-2 rotate-45 bg-[#b8860b]" />
          <span className="w-16 h-[1px] bg-amber-200" />
        </div>
      </div>

      {/* Decorative Dotted Pattern in front / to the right side of the Title block */}
      <div className="opacity-[0.25] pointer-events-none hidden md:block shrink-0 mb-2">
        <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
          ))}
        </div>
      </div>
    </div>
  );
}
