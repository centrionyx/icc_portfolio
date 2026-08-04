"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function AboutLeadership({ founder, careerDeliveries }) {
  return (
    <section className="py-8 lg:py-10 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* FOUNDER SECTION: Ultra-compact height layout preserving all content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-8"
        >
          {/* LEFT COLUMN: Title, Bio, Circular Stats & Socials */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#003A70] block mb-0.5">
                Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1f44] tracking-tight mb-0.5">
                Meet Our Founder
              </h2>
              <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#005ea6] mb-3">
                {founder.name} — <span className="text-gray-500">{founder.role}</span>
              </p>

              <div className="space-y-2 mb-4">
                {founder.bio ? (
                  founder.bio.split("\n\n").map((para, idx) => (
                    <p key={idx} className="text-gray-600 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-600 text-xs sm:text-sm leading-snug sm:leading-relaxed">
                    {founder.bio}
                  </p>
                )}
              </div>

              {/* TWO COMPACT FEATURE STATS WITH CIRCULAR ICONS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 pt-3 border-t border-gray-100">
                {/* Feature 1 */}
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50/60 hover:bg-gray-100/60 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a1f44] shrink-0 shadow-sm border border-gray-100">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold font-mono tracking-wider text-[#0a1f44] uppercase leading-tight">
                      {founder.experience}+ Years Exp.
                    </h4>
                    <p className="text-[10px] text-gray-500 italic font-serif leading-tight mt-0.5">
                      Commercial interior fitout & governance.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50/60 hover:bg-gray-100/60 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0a1f44] shrink-0 shadow-sm border border-gray-100">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold font-mono tracking-wider text-[#0a1f44] uppercase leading-tight">
                      {founder.deliveredArea}+ Sq. Ft.
                    </h4>
                    <p className="text-[10px] text-gray-500 italic font-serif leading-tight mt-0.5">
                      Delivered corporate workspace projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles & Contact */}
            <div className="pt-2.5 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={`mailto:${founder.email}`}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-[#003A70] hover:bg-[#003A70] hover:text-white transition-all text-[11px] font-semibold"
                >
                  <Mail className="w-3 h-3" />
                  <span>{founder.email}</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all text-[11px] font-semibold tracking-wide"
                >
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] transition-all text-[11px] font-semibold tracking-wide"
                >
                  <span>Twitter / X</span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#0a1f44] hover:text-white hover:border-[#0a1f44] transition-all text-[11px] font-semibold tracking-wide"
                >
                  <span>Portfolio</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Portrait Image (Compact Portrait Shape) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              className="relative w-full max-w-[280px] sm:max-w-[310px] aspect-[3/4] rounded-lg overflow-hidden shadow-sm border border-gray-200 bg-gray-100"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={founder.image || "/founder.png"}
                alt={founder.name}
                fill
                className="object-cover object-top"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* MAJOR CAREER DELIVERIES — Positioned below the About/Founder section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col rounded-3xl overflow-hidden border border-gray-200 shadow-lg bg-white"
        >
          <div className="px-6 py-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#003A70] block mb-1">
                Project Register
              </span>
              <h3 className="text-2xl font-bold text-[#0a1f44]">Major Career Deliveries</h3>
            </div>
            <p className="text-xs text-gray-500 font-mono max-w-sm leading-relaxed">
              Key corporate interior projects led directly by Yogesh Pawar prior to founding ICC.
            </p>
          </div>

          <div className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 px-6 py-3 border-b border-gray-100 bg-gray-100/70">
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">#</div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold">Client</div>
            <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-gray-500 font-bold text-right">
              Area (Sq. Ft.)
            </div>
          </div>

          <div className="divide-y divide-gray-100 bg-white">
            {careerDeliveries.map((d, idx) => {
              const maxVal = 4.5;
              const val = parseFloat(d.size);
              const pct = Math.round((val / maxVal) * 100);
              const barFrom =
                idx < 2
                  ? "from-[#005ea6]"
                  : idx < 5
                    ? "from-[#003A70]"
                    : "from-blue-400";
              const barTo =
                idx < 2
                  ? "to-cyan-400"
                  : idx < 5
                    ? "to-[#005ea6]"
                    : "to-[#003A70]";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  whileHover={{ backgroundColor: "#eff6ff" }}
                  className="grid grid-cols-[2.5rem_1fr_7rem] gap-4 items-center px-6 py-4 transition-colors group cursor-default"
                >
                  <div className="font-mono text-xs font-bold text-[#003A70]/60 group-hover:text-[#003A70] transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#111827] group-hover:text-[#003A70] transition-colors mb-2">
                      {d.client}
                    </p>
                    <div className="h-[4px] w-full bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${barFrom} ${barTo} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + idx * 0.05 }}
                      />
                    </div>
                  </div>

                  <div className="text-right">
                    <motion.span
                      className="inline-block text-xs font-mono font-bold text-[#374151] group-hover:text-[#003A70] transition-colors bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 leading-none"
                      whileHover={{ scale: 1.05, backgroundColor: "#003A70", color: "#fff" }}
                    >
                      {d.size}
                    </motion.span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="px-6 py-4 border-t border-gray-100 bg-gray-50 flex items-center justify-between"
            whileHover={{ backgroundColor: "#f0f4f8" }}
          >
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 font-semibold">
              Total Career Volume
            </span>
            <motion.span
              className="text-base font-black text-[#0a1f44] font-mono"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              ~24.8 <span className="text-[#005ea6]">Lakh Sq. Ft.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
