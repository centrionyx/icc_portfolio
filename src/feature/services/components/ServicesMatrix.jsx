"use client";

import Link from "next/link";
import Image from "next/image";
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function ServicesMatrix({ services }) {
  return (
    <section id="services-matrix" className="max-w-[1440px] mx-auto px-5 lg:px-8 pt-6 pb-12">
      {/* TOP LEFT-ALIGNED HEADER SECTION */}
      <div className="text-left max-w-2xl mb-12">
        <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#E5A900] block mb-2">
          SOLUTIONS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-3">
          Our <span className="text-[#E5A900]">Services</span>
        </h2>
        <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
          Comprehensive interior fit-out management and technical consulting solutions.
        </p>
      </div>

      {/* ALL 8 SERVICES GRID */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((s) => (
          <StaggerItem key={s.id} direction="up">
            <Link
              href={`/contact?interest=${s.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200/80 flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full"
            >
              {/* Top Half: Image with Floating Golden Icon Pill */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Floating White Icon Pill with Golden Yellow Icon */}
                <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-100/60 text-[#E5A900] flex items-center justify-center">
                  {s.icon}
                </div>
              </div>

              {/* Bottom Half: Clean White Content Area */}
              <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                <div>
                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-950 leading-snug mb-2 font-sans group-hover:text-[#E5A900] transition-colors">
                    {s.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed line-clamp-3">
                    {s.short}
                  </p>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
