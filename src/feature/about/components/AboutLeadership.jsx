"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function AboutLeadership({ founder, careerDeliveries }) {
  return (
    <section className="py-20 lg:py-28 border-b border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#003A70] block mb-2">
            Leadership
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44]">Meet Our Founder</h2>
        </motion.div>

        {/* FOUNDERS CARD: Photo, Name, Designation on LEFT; Description & Social Profiles on RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-10 shadow-xl mb-16 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center md:items-start">
            {/* LEFT COLUMN: Photo, Name & Designation */}
            <div className="w-full md:w-80 shrink-0 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-gray-100 pb-8 md:pb-0 md:pr-10">
              <motion.div
                className="relative w-40 sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-lg border-2 border-[#003A70]/10"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src={founder.image || "/founder.png"}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003A70]/30 to-transparent" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-[#0a1f44]">{founder.name}</h3>
              <p className="text-sm text-[#005ea6] font-mono font-semibold tracking-wider mt-1">
                {founder.role}
              </p>

              {/* Founder Quick Stats */}
              <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <p className="text-xl font-black text-[#0a1f44]">{founder.experience}+</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-0.5">Years Exp.</p>
                </div>
                <div className="text-center">
                  <p className="text-xl font-black text-[#0a1f44]">{founder.deliveredArea}+</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-0.5">Sq. Ft.</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Description & Social Profiles */}
            <div className="flex-1 flex flex-col justify-between h-full pt-2">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#003A70] font-semibold block mb-3">
                  About Founder
                </span>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
                  {founder.bio}
                </p>
              </div>

              {/* Social Profiles & Contact */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                  Connect & Social Profiles
                </h4>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${founder.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-100 text-[#003A70] hover:bg-[#003A70] hover:text-white transition-all text-xs font-semibold"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{founder.email}</span>
                  </a>
                  
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all text-xs font-semibold tracking-wide"
                  >
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#1da1f2] hover:text-white hover:border-[#1da1f2] transition-all text-xs font-semibold tracking-wide"
                  >
                    <span>Twitter / X</span>
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-700 hover:bg-[#0a1f44] hover:text-white hover:border-[#0a1f44] transition-all text-xs font-semibold tracking-wide"
                  >
                    <span>Portfolio</span>
                  </a>
                </div>
              </div>
            </div>
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
