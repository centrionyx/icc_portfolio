"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FolderCheck, Users, Clock, Award } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";

const DEFAULT_STATS = [
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

const ICON_MAP = [FolderCheck, Users, Clock, Award];

export default function StatsBanner() {
  const [stats, setStats] = useState(DEFAULT_STATS);

  useEffect(() => {
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => {
        if (data?.stats && Array.isArray(data.stats) && data.stats.length > 0) {
          const mapped = data.stats.map((s, idx) => ({
            icon: ICON_MAP[idx % ICON_MAP.length],
            value: s.value || "0",
            label: s.label || "",
          }));
          setStats(mapped);
        }
      })
      .catch((err) => console.error("Failed to load hero stats:", err));
  }, []);

  return (
    <section className="w-full bg-slate-50 py-6 sm:py-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-stats-banner-bg rounded-2xl sm:rounded-3xl shadow-xl px-6 sm:px-12 py-8 sm:py-10 text-white"
        >
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:divide-x divide-white/15">
            {stats.map((item, idx) => {
              const IconComponent = item.icon || FolderCheck;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`flex items-center gap-3 sm:gap-5 ${
                    idx !== 0 ? "md:pl-6 lg:pl-8" : ""
                  }`}
                >
                  {/* Golden Yellow Icon */}
                  <div className="p-3 sm:p-3.5 rounded-2xl bg-[#EAB308]/15 text-[#EAB308] border border-[#EAB308]/25 shrink-0 shadow-inner">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
                      <AnimatedCounter value={item.value} />
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide mt-0.5">
                      {item.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
