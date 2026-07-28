"use client";

import { motion } from "framer-motion";
import { Zap, ArrowUpRight } from "lucide-react";

export default function AboutPrinciples({ values, founderEmail }) {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f8fa] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-2">
              How We Operate
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1f44]">
              Our Operating Principles
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs">
            Five pillars that define how we work on every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <motion.div
              key={val.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 58, 112, 0.1)" }}
              className="relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 group cursor-default"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#003A70] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-5">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${val.gradient} rounded-xl flex items-center justify-center text-white shrink-0`}
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  {val.icon}
                </motion.div>
                <motion.span
                  className="font-mono text-5xl font-black text-gray-100 leading-none select-none group-hover:text-blue-50 transition-colors"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {val.num}
                </motion.span>
              </div>
              <h3 className="text-base font-bold text-[#111827] mb-2 group-hover:text-[#003A70] transition-colors">
                {val.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{val.description}</p>
              
              <motion.div
                className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="w-4 h-4 text-[#003A70]" />
              </motion.div>
            </motion.div>
          ))}

          {/* CTA card with pulse animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="relative bg-[#0a1f44] rounded-2xl p-6 flex flex-col justify-between overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="relative z-10">
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block mb-3">
                Ready to Start
              </span>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                Bring predictability to your next workspace project
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Let's discuss how ICC can align with your delivery goals.
              </p>
            </div>
            <motion.a
              href={`mailto:${founderEmail}`}
              className="relative z-10 mt-6 inline-flex items-center gap-2 bg-white text-[#0a1f44] text-xs font-bold uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-gray-50 transition-colors self-start group/btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </motion.a>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/30 transition-colors" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
