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
    <footer className="w-full bg-[#0a1f44] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
        
        {/* TOP ROW: 5 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 shadow-sm shrink-0">
                <Image
                  src="/logo.svg"
                  alt="ICC Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-8 w-[1px] bg-white/20" />
              <div>
                <p className="text-[8px] font-bold uppercase tracking-wider leading-tight text-slate-300">
                  Innovation
                </p>
                <p className="text-[8px] font-bold uppercase tracking-wider leading-tight text-slate-300">
                  Consultants &
                </p>
                <p className="text-[8px] font-bold uppercase tracking-wider leading-tight text-slate-300">
                  Contractors
                </p>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              {content.description}
            </p>
            {/* Social Links as Initials */}
            <div className="flex items-center gap-4 mt-2">
              {content.socials.map((social) => {
                // Map names to initials
                const initials = social.name === "LinkedIn" ? "LN" : social.name === "Instagram" ? "IG" : "YT";
                return (
                  <Link 
                    key={social.name} 
                    href={social.href}
                    className="text-xs font-bold text-slate-400 hover:text-white transition-colors tracking-wider"
                  >
                    {initials}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Columns 2 & 3: Services & Explore */}
          {content.sections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Contact Us with Text Initials */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
              {content.contact.title}
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-xs text-slate-400">
                <span className="font-bold text-slate-500 shrink-0 w-4">E:</span>
                <a href={`mailto:${content.contact.email}`} className="hover:text-white transition-colors">
                  {content.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-400">
                <span className="font-bold text-slate-500 shrink-0 w-4">P:</span>
                <a href={`tel:${content.contact.phone}`} className="hover:text-white transition-colors">
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                <span className="font-bold text-slate-500 shrink-0 w-4">A:</span>
                <span>{content.contact.address}</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-300">
              {content.newsletter.title}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {content.newsletter.text}
            </p>
            {/* Newsletter Input Form */}
            <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-sm items-center mt-2">
              <input 
                type="email" 
                placeholder={content.newsletter.placeholder}
                className="
                  flex-1
                  bg-transparent
                  border
                  border-gray-700
                  px-4
                  py-2.5
                  text-xs
                  placeholder:text-slate-500
                  focus:outline-none
                  focus:border-gray-500
                  text-white
                "
              />
              <button 
                type="submit"
                className="
                  bg-[#005ea6]
                  hover:bg-[#004b84]
                  text-white
                  p-2.5
                  px-4
                  border
                  border-l-0
                  border-gray-700
                  transition-colors
                  flex
                  items-center
                  justify-center
                "
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & LEGAL LINKS */}
        <div className="w-full border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-500 text-center md:text-left">
            {content.bottom.copyright}
          </p>
          <div className="flex items-center gap-4 text-[10px] text-slate-500">
            {content.bottom.links.map((link, idx) => (
              <React.Fragment key={link.name}>
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
                {idx < content.bottom.links.length - 1 && <span className="text-gray-700">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
