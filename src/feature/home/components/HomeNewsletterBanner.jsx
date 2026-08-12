"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeNewsletterBanner() {
  return (
    <section className="w-full bg-[#f8fafc] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-brand-yellow text-slate-950 rounded-2xl sm:rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Left Title */}
          <div className="md:w-auto text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-serif tracking-tight leading-tight text-white">
              Let's Bring Your <br className="hidden sm:inline" />
              Dream Space to Life
            </h2>
          </div>

          {/* Center Description */}
          <div className="md:flex-1 text-center md:text-left max-w-md">
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-white/90">
              Connect with our technical team to discuss your project scope, budget benchmarks, and execution timeline.
            </p>
          </div>

          {/* Right Contact Us Button */}
          <div className="shrink-0 w-full md:w-auto flex justify-center">
            <Link
              href="/contact"
              className="bg-brand-navy hover:bg-[#002850] text-white px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:scale-105 inline-flex items-center gap-2.5 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
