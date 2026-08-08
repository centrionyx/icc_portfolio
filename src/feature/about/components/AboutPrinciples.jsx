"use client";

import { motion } from "framer-motion";

export default function AboutPrinciples({ values }) {
  // If values prop is passed, use it, else fallback to default principles list
  const defaultPrinciples = [
    {
      title: "Thoughtful Design",
      description: "We design with intention, creating spaces that reflect your personality and purpose.",
    },
    {
      title: "Quality First",
      description: "We never compromise on quality — from materials to craftsmanship, every detail matters.",
    },
    {
      title: "Client-Centric Approach",
      description: "Your vision is our starting point. We listen, understand, and build around your needs.",
    },
    {
      title: "Innovation in Every Detail",
      description: "We blend creativity with functionality to deliver spaces that are both modern and timeless.",
    },
    {
      title: "Sustainable Thinking",
      description: "We believe in responsible design choices that create a better, greener future for spaces we live in.",
    },
    {
      title: "Integrity & Transparency",
      description: "Honest communication, clear processes, and complete transparency at every stage of the journey.",
    },
  ];

  const list = values && values.length >= 6 ? values : defaultPrinciples;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* ── TOP LEFT-ALIGNED HEADER SECTION ── */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-3">
            Our Principles
          </h2>
          <div className="w-12 h-1 bg-[#E5A900] rounded-full mb-4" />
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            At ICC, our work is guided by a set of core principles that define the way we design, collaborate, and deliver.
          </p>
        </div>

        {/* ── 6 CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-[#fcf8f2]/70 border border-amber-100/80 rounded-2xl p-7 sm:p-8 hover:shadow-md hover:bg-[#fcf8f2] transition-all duration-300 flex flex-col justify-start"
            >
              {/* Top Golden Pill Bar */}
              <div className="w-10 h-1 bg-[#E5A900] rounded-full mb-6" />

              {/* Card Title */}
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 mb-3 tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed">
                {item.description || item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── FULL-WIDTH QUOTE BANNER AT BOTTOM ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#fcf8f2] border border-amber-200/80 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden"
        >
          {/* Quote Icon */}
          <div className="text-4xl sm:text-5xl font-serif text-[#E5A900] leading-none shrink-0 select-none">
            ““
          </div>

          {/* Vertical Divider */}
          <div className="hidden sm:block w-px h-10 bg-amber-200" />

          {/* Quote Text */}
          <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug tracking-tight">
            We don’t just design spaces, we build trust, relationships, and experiences that last.
          </p>

          {/* Subtle Decorative Yellow Ribbon Path */}
          <div className="absolute right-0 bottom-0 top-0 w-48 opacity-10 pointer-events-none hidden md:block">
            <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M0 50 Q 50 10, 100 50 T 200 50" stroke="#E5A900" strokeWidth="4" />
            </svg>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
