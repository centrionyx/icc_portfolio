"use client";

import { motion } from "framer-motion";
import { Search, Compass, Layout, CheckCircle, LifeBuoy, ShieldCheck } from "lucide-react";
import { OUR_PROCESS_CONTENT } from "../constants";

// Icon mapping corresponding to step index (6 icons)
const stepIcons = [Search, Compass, Layout, CheckCircle, LifeBuoy, ShieldCheck];

export default function OurProcess() {
  const content = OUR_PROCESS_CONTENT;

  return (
    <section className="w-full bg-slate-50/60 py-10 sm:py-14 px-5 lg:px-8 border-b border-slate-200/80">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E5A900] block mb-1">
            {content.tagline}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#0a1f44] tracking-tight">
            {content.titleLine1} <span className="text-[#E5A900]">{content.titleLine2}</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light mt-1.5 max-w-md mx-auto leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* Process Steps - Original UX with wavy animated arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-2 relative items-start">
          {content.steps.map((step, index) => {
            const IconComponent = stepIcons[index % stepIcons.length];
            const isFirst = index === 0;
            const isLast = index === content.steps.length - 1;

            return (
              <motion.div
                key={step.number || index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Animated Smooth Wavy Arrow Connector with Straight Arrowhead */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-[48px] left-[52%] right-[-48%] h-12 z-0 pointer-events-none overflow-visible">
                    <svg
                      className="w-full h-full text-slate-300"
                      viewBox="0 0 100 40"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <marker
                          id={`arrow-${index}`}
                          viewBox="0 0 10 10"
                          refX="7"
                          refY="9"
                          markerWidth="5"
                          markerHeight="5"
                          orient="0" // Keeps arrowhead completely straight horizontal
                        >
                          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#E5A900" />
                        </marker>

                        {/* Infinite looping mask revealing dotted line progressively */}
                        <clipPath id={`clip-${index}`}>
                          <motion.rect
                            x="0"
                            y="0"
                            height="40"
                            initial={{ width: "0%" }}
                            animate={{ width: ["0%", "100%", "100%", "0%"] }}
                            transition={{
                              duration: 5.5,
                              times: [
                                (index * 1.0) / 5.5,
                                ((index + 1) * 1.0) / 5.5,
                                4.5 / 5.5,
                                5.5 / 5.5,
                              ],
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />
                        </clipPath>
                      </defs>

                      <path
                        d="M 5 20 C 30 -2, 45 42, 70 18 C 80 8, 88 18, 92 20"
                        stroke="#E5A900"
                        strokeWidth="1.75"
                        strokeDasharray="4 4"
                        clipPath={`url(#clip-${index})`}
                        markerEnd={`url(#arrow-${index})`}
                      />
                    </svg>
                  </div>
                )}

                {/* Step Number Above Circle */}
                <span className="text-[11px] font-mono font-bold text-slate-400 mb-2 block select-none">
                  {step.number || String(index + 1).padStart(2, '0')}
                </span>

                {/* Main Circular Icon Node */}
                <div
                  className={`
                    relative
                    w-20
                    h-20
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mb-4
                    z-10
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    ${
                      isFirst
                        ? "bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-slate-100"
                        : "bg-white border-2 border-dashed border-slate-200 shadow-sm"
                    }
                  `}
                >
                  {/* Inner Circular Badge Icon */}
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-[#E5A900] flex items-center justify-center shadow-inner group-hover:bg-[#E5A900] group-hover:text-slate-950 transition-colors duration-300">
                    <IconComponent className="w-5 h-5" strokeWidth={2} />
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#0a1f44] mb-1 tracking-tight">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-500 text-xs font-light leading-relaxed max-w-[170px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}