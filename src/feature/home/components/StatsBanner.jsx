"use client";

import React from "react";
import Image from "next/image";
import { FolderCheck, Users, Clock, Award } from "lucide-react";

export default function StatsBanner() {
  const stats = [
    {
      icon: FolderCheck,
      value: "250+",
      label: "Projects Completed",
    },
    {
      icon: Users,
      value: "120+",
      label: "Happy Clients",
    },
    {
      icon: Clock,
      value: "15+",
      label: "Years Experience",
    },
    {
      icon: Award,
      value: "25+",
      label: "Expert Designers",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-6 sm:py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-stats-banner-bg rounded-2xl sm:rounded-3xl shadow-xl px-6 sm:px-12 py-8 sm:py-10 text-white">
          {/* Faded Background Logo Variant */}
          

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {stats.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-4 sm:gap-5 ${
                    idx !== 0 ? "pt-4 sm:pt-0 sm:pl-6 md:pl-8" : ""
                  }`}
                >
                  {/* Golden Yellow Icon */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-[#EAB308]/15 text-[#EAB308] border border-[#EAB308]/25 shrink-0 shadow-inner">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                      {item.value}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide mt-0.5">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
