"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FOOTER_CONTENT } from "./constants";

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const content = FOOTER_CONTENT;

  return (
    <footer className="w-full bg-[#0a1f44] text-white pt-20 pb-10 relative overflow-hidden">
      {/* SMOOTH ORGANIC WAVE TOP BORDER (Matching Reference Image) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-24 text-[#f1f3f5] fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          {/* Fluid organic wave shape matching reference image */}
          <path d="M0,0 C150,90 350,-40 600,45 C850,130 1050,-20 1200,30 L1200,0 L0,0 Z" />
        </svg>
      </div>

      {/* Background Subtle Radial Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#005ea6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-10">
        
        {/* MAIN FOOTER GRID (4 COLUMNS) */}
        <div className="grid mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-sm p-1.5 shadow-sm shrink-0">
                <Image
                  src="/logo.svg"
                  alt="ICC Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest leading-tight text-white font-sans">
                  INNOVATION
                </p>
                <p className="text-[9px] font-medium uppercase tracking-wider leading-tight text-slate-400 font-mono mt-0.5">
                  Consultants &amp; Contractors
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-light">
              {content.description}
            </p>

            {/* Social Text Badges */}
            <div className="flex items-center gap-3 mt-2">
              <Link 
                href="https://linkedin.com" 
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#005ea6] border border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-all duration-300"
              >
                LN
              </Link>
              <Link 
                href="https://instagram.com" 
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#005ea6] border border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-all duration-300"
              >
                IG
              </Link>
              <Link 
                href="https://youtube.com" 
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-[#005ea6] border border-white/10 text-xs font-bold text-slate-300 hover:text-white transition-all duration-300"
              >
                YT
              </Link>
            </div>
          </div>

          {/* Column 2 & 3: Quick Links (4 cols) */}
          {content.sections.map((section) => (
            <div key={section.title} className="lg:col-span-2 flex flex-col gap-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-cyan-300">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors duration-200 font-light"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Newsletter & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-cyan-300">
              {content.newsletter.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              {content.newsletter.text}
            </p>

            {/* Glassmorphism Newsletter Form */}
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <div className="relative flex-1">
                <input 
                  type="email" 
                  placeholder={content.newsletter.placeholder}
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/15
                    rounded-xl
                    px-4
                    py-3
                    text-xs
                    placeholder:text-slate-500
                    focus:outline-none
                    focus:border-cyan-400
                    text-white
                    transition-all
                  "
                />
              </div>
              <button 
                type="submit"
                className="
                  bg-[#005ea6]
                  hover:bg-[#004b84]
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  text-xs
                  font-bold
                  uppercase
                  tracking-wider
                  transition-all
                  duration-300
                  shadow-md
                  hover:scale-105
                  shrink-0
                "
              >
                Join
              </button>
            </form>

            {/* Direct Contact Info (Plain Text Labels) */}
            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400 font-light">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-500">Email:</span>
                <a href={`mailto:${content.contact.email}`} className="hover:text-white transition-colors">
                  {content.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-500">Phone:</span>
                <a href={`tel:${content.contact.phone}`} className="hover:text-white transition-colors">
                  {content.contact.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & LEGAL */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left font-light">
            {content.bottom.copyright}
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500 font-light">
            {content.bottom.links.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-slate-300 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
