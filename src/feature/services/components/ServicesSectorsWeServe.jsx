"use client";

import { motion } from "framer-motion";
import { HiOutlineOfficeBuilding, HiOutlineHome, HiOutlineShoppingBag } from "react-icons/hi";
import { LuBuilding2, LuUtensilsCrossed, LuFactory } from "react-icons/lu";

export default function ServicesSectorsWeServe() {
  const sectors = [
    {
      title: "Commercial Offices",
      desc: "Corporate workspaces designed for productivity, collaboration, and brand identity.",
      icon: <HiOutlineOfficeBuilding className="text-3xl text-[#E5A900]" />,
    },
    {
      title: "Base Build Spaces",
      desc: "Comprehensive interior execution from shell condition to fully functional spaces.",
      icon: <LuBuilding2 className="text-3xl text-[#E5A900]" />,
    },
    {
      title: "Hospitality Spaces",
      desc: "Hotels, restaurants, lounges, and guest experiences crafted for comfort and elegance.",
      icon: <LuUtensilsCrossed className="text-3xl text-[#E5A900]" />,
    },
    {
      title: "Residential Spaces",
      desc: "Modern homes, villas, apartments, and luxury residences tailored to every lifestyle.",
      icon: <HiOutlineHome className="text-3xl text-[#E5A900]" />,
    },
    {
      title: "Industrial Spaces",
      desc: "Functional industrial interiors that prioritize efficiency, safety, and operational flow.",
      icon: <LuFactory className="text-3xl text-[#E5A900]" />,
    },
    {
      title: "Retail Spaces",
      desc: "Engaging retail environments that enhance customer experience and maximize business impact.",
      icon: <HiOutlineShoppingBag className="text-3xl text-[#E5A900]" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 max-w-[1440px] mx-auto px-5 lg:px-8">
      {/* ── TOP HEADER SECTION (LEFT ALIGNED) ── */}
      <div className="text-left max-w-2xl mb-12 sm:mb-14">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#E5A900] block mb-2">
          SECTORS WE SERVE
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-3">
          Sectors <span className="text-[#E5A900]">We Serve</span>
        </h2>
        <div className="w-12 h-1 bg-[#E5A900] rounded-full mb-4" />
        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
          We bring ideas to life across a wide range of sectors, designing interiors that are functional, inspiring, and built to make a lasting impact.
        </p>
      </div>

      {/* ── 6 SECTORS CARDS GRID (MATCHING REFERENCE IMAGE) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sectors.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-6 group"
          >
            {/* Left Circular Yellow Badge Container */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 group-hover:bg-[#E5A900] transition-colors shadow-sm [&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-slate-950">
              {item.icon}
            </div>

            {/* Right Text Content */}
            <div className="flex flex-col justify-between h-full pt-1">
              <div>
                <h3 className="text-lg font-extrabold text-slate-950 mb-2 font-sans group-hover:text-[#E5A900] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Yellow Accent Line */}
              <div className="w-10 h-1 bg-[#E5A900] rounded-full mt-5 opacity-80 group-hover:w-14 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
