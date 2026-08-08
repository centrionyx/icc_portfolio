"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiMail, HiBriefcase, HiChartBar } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

export default function AboutLeadership({ founder, careerDeliveries }) {
  return (
    <section className="py-8 sm:py-10 lg:py-12 border-b border-slate-200/80 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* ── TOP LEFT ALIGNED HEADER SECTION ── */}
        <div className="text-left max-w-2xl mb-8 sm:mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#E5A900] block mb-1.5">
            OUR FOUNDER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-2">
            The Vision Behind <span className="text-[#E5A900]">ICC</span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
            Meet the founder whose passion and technical vision drive every commercial space we design and every experience we create.
          </p>
        </div>

        {/* ── MAIN FOUNDER GRID (MATCHING REFERENCE IMAGE) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-14"
        >
          {/* LEFT COLUMN: Large Rounded Founder Portrait Image (Matching Reference Image) */}
          <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[440px] lg:min-h-0 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-100">
            <Image
              src={founder.image || "/founder.png"}
              alt={founder.name}
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* RIGHT COLUMN: Founder Info, Bio, Stats Line & Quote Card */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-0.5">
                {founder.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#E5A900] mb-4">
                {founder.role}
              </p>

              <div className="space-y-3 text-slate-600 text-xs sm:text-sm font-normal leading-relaxed mb-6">
                {founder.bio ? (
                  founder.bio.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))
                ) : (
                  <p>{founder.bio}</p>
                )}
              </div>

              {/* 4 STATS ROW IN A SINGLE LINE (MATCHING REFERENCE IMAGE) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y border-slate-100 mb-6">
                {/* Stat 1 */}
                <div className="flex items-center gap-2.5">
                  <div className="text-[#E5A900] shrink-0">
                    <HiBriefcase className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-slate-950 leading-tight">
                      {founder.experience}+
                    </h5>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                      Years of Exp.
                    </p>
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="flex items-center gap-2.5 sm:border-l sm:border-slate-100 sm:pl-3">
                  <div className="text-[#E5A900] shrink-0">
                    <HiChartBar className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-slate-950 leading-tight">
                      {founder.deliveredArea}+
                    </h5>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                      Sq. Ft. Delivered
                    </p>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="flex items-center gap-2.5 sm:border-l sm:border-slate-100 sm:pl-3">
                  <div className="text-[#E5A900] shrink-0">
                    <FaGlobe className="text-xl" />
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-slate-950 leading-tight">
                      50+
                    </h5>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                      Major Projects
                    </p>
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="flex items-center gap-2.5 sm:border-l sm:border-slate-100 sm:pl-3">
                  <div className="text-[#E5A900] shrink-0">
                    <HiMail className="text-2xl" />
                  </div>
                  <div>
                    <h5 className="text-sm sm:text-base font-extrabold text-slate-950 leading-tight">
                      100%
                    </h5>
                    <p className="text-[10px] font-medium text-slate-500 leading-tight mt-0.5">
                      Quality Audit
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QUOTE CARD (MATCHING BEIGE CONTAINER IN REFERENCE IMAGE) */}
            <div className="bg-[#fcf8f2] border border-amber-200/60 p-4 sm:p-5 rounded-2xl relative">
              <span className="text-3xl font-serif text-[#E5A900] leading-none absolute top-2.5 left-3.5 select-none opacity-80">
                “
              </span>
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed pl-5 mb-1.5">
                Design is not just what it looks like and feels like. Design is how it works and delivers predictability for organizations.
              </p>
              <span className="text-xs font-bold text-[#E5A900] pl-5 block">
                — {founder.name}
              </span>
            </div>

          </div>
        </motion.div>

        {/* ── MAJOR CAREER DELIVERIES (MATCHING REFERENCE IMAGE UI) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col bg-white overflow-hidden"
        >
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E5A900] block mb-1">
                PROJECT REGISTER
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                Major Career Deliveries
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-xs leading-relaxed text-right sm:text-right">
              Key corporate interior projects led directly by Yogesh Pawar prior to founding ICC.
            </p>
          </div>

          {/* Table Header Bar (Warm Beige Tinted) */}
          <div className="grid grid-cols-[3.5rem_1fr_9rem] gap-4 px-6 sm:px-8 py-3.5 bg-[#fcf8f2] border-b border-amber-100 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-800 rounded-t-xl">
            <div>#</div>
            <div>CLIENT</div>
            <div className="text-right">AREA (SQ. FT.)</div>
          </div>

          {/* Table Body List */}
          <div className="divide-y divide-slate-100 border-x border-b border-slate-100">
            {careerDeliveries.map((d, idx) => {
              const maxVal = 4.5;
              const val = parseFloat(d.size);
              const pct = Math.round((val / maxVal) * 100);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.06 * idx }}
                  className="grid grid-cols-[3.5rem_1fr_9rem] gap-4 items-center px-6 sm:px-8 py-4 bg-white hover:bg-slate-50/50 transition-colors group"
                >
                  {/* Number Badge (Golden Tint Boxed) */}
                  <div>
                    <span className="w-8 h-8 rounded-lg bg-[#fcf8f2] border border-amber-200/60 text-[#E5A900] font-mono text-xs font-bold flex items-center justify-center">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Client Name & Progress Bar */}
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-950 mb-2 font-sans tracking-tight">
                      {d.client}
                    </h4>
                    {/* Solid Golden Horizontal Progress Bar */}
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#E5A900] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 + idx * 0.05 }}
                      />
                    </div>
                  </div>

                  {/* Area Size Pill Badge */}
                  <div className="text-right">
                    <span className="inline-block text-xs font-bold text-slate-900 bg-[#fcf8f2] border border-amber-200/80 rounded-xl px-4 py-2 leading-none shadow-2xs font-sans">
                      {d.size}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Table Footer Total Row (Warm Beige Tinted) */}
          <div className="px-6 sm:px-8 py-4 bg-[#fcf8f2] border-x border-b border-amber-100 rounded-b-xl flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-800">
              TOTAL CAREER VOLUME
            </span>
            <div className="text-base sm:text-lg font-extrabold text-slate-950 font-sans">
              ~24.8 <span className="text-[#E5A900]">Lakh Sq. Ft.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
