"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

// FOOTER CONFIGURATION CONSTANTS (Easily editable here)
export const FOOTER_CONFIG = {
  brand: {
    name: "Innovation Consultants & Contractors",
    subtitle: "Consultants & Contractors",
    logoSrc: "/logo.svg",
    description: "We design beautiful, functional and inspiring interiors that enhance the way you live and work.",
  },
  socialLinks: [
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "Pinterest", href: "https://pinterest.com", icon: FaPinterestP },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Insights", href: "/blogs" },
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  servicesLinks: [
    { label: "Interior Fit-Out Project Management", href: "/services" },
    { label: "Project Advisory & Consultancy", href: "/services" },
    { label: "Fit-Out Project Monitoring", href: "/services" },
    { label: "Design Coordination", href: "/services" },
    { label: "Costing & BOQ Validation", href: "/services" },
    { label: "Quality & Safety Monitoring", href: "/services" },
  ],
  companyLinks: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Testimonials", href: "/about#testimonials" },
    { label: "Blog", href: "/blogs" },
    { label: "FAQ", href: "/contact" },
  ],
  newsletter: {
    title: "Newsletter",
    description: "Subscribe to our newsletter for design tips and updates.",
    placeholder: "Enter your email",
  },
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const {
    brand,
    socialLinks,
    quickLinks,
    servicesLinks,
    companyLinks,
    newsletter,
    bottomLinks,
  } = FOOTER_CONFIG;

  return (
    <footer className="w-full bg-white text-slate-800 pt-12 pb-8 border-t border-slate-200 font-sans">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* MAIN FOOTER GRID (Full width 12-column layout: 3 + 2 + 2 + 2 + 3 = 12) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-slate-100">
          
          {/* Column 1: Brand Info & Socials (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
            <div>
              {/* Brand Logo & Title - Matched exactly with Navbar Header */}
              <Link href="/" className="flex items-center gap-3 shrink-0 group mb-4">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden p-1 shrink-0">
                  <Image
                    src={brand.logoSrc}
                    alt={`${brand.name} Logo`}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-tight text-slate-900 font-sans">
                    INNOVATION
                  </p>
                  <p className="text-[10px] font-bold uppercase tracking-widest leading-tight text-slate-900 font-sans">
                    Consultants &amp; Contractors
                  </p>
                </div>
              </Link>

              {/* Tagline / Description */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs font-normal">
                {brand.description}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-label={item.name}
                    className="w-8.5 h-8.5 rounded-full bg-slate-100 hover:bg-[#005ea6] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-300"
                  >
                    <IconComponent size={15} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight font-sans">
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2 text-xs sm:text-sm font-medium text-slate-600">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#005ea6] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight font-sans">
              Services
            </h3>
            <ul className="flex flex-col space-y-2 text-xs sm:text-sm font-medium text-slate-600">
              {servicesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#005ea6] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-3.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight font-sans">
              Company
            </h3>
            <ul className="flex flex-col space-y-2 text-xs sm:text-sm font-medium text-slate-600">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="hover:text-[#005ea6] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Newsletter (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-3.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight font-sans">
              {newsletter.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
              {newsletter.description}
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#005ea6] transition-all"
                />
              </div>
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-[#0a1f44] hover:bg-[#002850] text-white p-3 rounded-xl transition-all shadow-sm shrink-0 flex items-center justify-center cursor-pointer"
              >
                <FaPaperPlane className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 font-normal">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {bottomLinks.map((item, idx) => (
              <Link key={idx} href={item.href} className="hover:text-slate-700 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
