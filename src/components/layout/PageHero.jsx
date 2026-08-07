"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Reusable Minimal Page Hero component for subpages.
 * Displays a clean dark navy background section with centered Heading and Golden Breadcrumbs below it, matching reference image.
 * 
 * Props:
 * - title: string (Main page title e.g. "About Us")
 * - breadcrumbs?: Array<{ label: string, href?: string }>
 */
export default function PageHero({ title, breadcrumbs = [] }) {
  return (
    <section className="w-full bg-[#001229] py-12 sm:py-16 md:py-20 px-6 overflow-hidden flex flex-col items-center justify-center text-center border-b border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-3 font-sans"
        >
          {title}
        </motion.h1>

        {/* Centered Golden Breadcrumbs below Heading */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#E5A900] flex-wrap justify-center"
        >
          <Link href="/" className="hover:underline transition-all">
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight size={14} className="text-[#E5A900]/80 shrink-0" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:underline transition-all">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-[#E5A900]">
                  {crumb.label}
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}
