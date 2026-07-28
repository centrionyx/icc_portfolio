"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowUpRight } from "lucide-react";

export default function AboutFoundation() {
  return (
    <section className="py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-3">
              Foundation
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44] mb-6 leading-tight">
              Delivering Workspace{" "}
              <span className="relative">
                Predictability
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 8" preserveAspectRatio="none">
                  <motion.path
                    d="M0,4 Q50,8 100,4"
                    fill="none"
                    stroke="#003A70"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </svg>
              </span>{" "}
              Since 2024
            </h2>
            <div className="space-y-6 text-[#6b7280] text-base leading-relaxed">
              {[
                "Innovation Consultants and Contractors (ICC) was founded in 2024 by Yogesh Pawar to bring a higher standard of predictability and accountability to commercial interior delivery.",
                "We support our clients in selecting the right delivery partners and provide a complete, end-to-end project delivery solution — from concept to completion, with documented milestones at every stage.",
                "We help organizations execute workspace projects faster, more efficiently, and with extreme clarity — ensuring predictable cost, timelines, and quality across all coordinates."
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.2 }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Key priorities card — with glass effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-[380px] shrink-0"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#003A70] to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
              <div className="relative border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <div className="bg-[#0a1f44] px-6 py-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300">
                    Key Priorities
                  </span>
                </div>
                <ul className="divide-y divide-gray-100">
                  {[
                    "Predictable cost control systems",
                    "Strict timeline adherence mapping",
                    "Uncompromising quality governance",
                    "Expert contractor selection support",
                    "End-to-end delivery alignment",
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="flex items-center gap-4 px-6 py-3.5 hover:bg-gray-50 transition-colors cursor-default group/item"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle className="w-4 h-4 text-[#003A70] shrink-0" />
                      </motion.div>
                      <span className="text-sm text-[#374151] font-medium group-hover/item:text-[#003A70] transition-colors">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between"
                  whileHover={{ backgroundColor: "#f0f4f8" }}
                >
                  <div>
                    <motion.p
                      className="text-2xl font-extrabold text-[#0a1f44]"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      10M+ Sq. Ft.
                    </motion.p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-0.5">
                      Total Career Deliveries
                    </p>
                  </div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-[#003A70]" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
