"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export default function AboutClients({ clientsServed, founderEmail }) {
  return (
    <>
      {/* CLIENTS SERVED — with marquee / staggered effect */}
      <section className="py-16 border-b border-gray-100 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#003A70] block mb-1">
                Client Register
              </span>
              <h2 className="text-3xl font-bold text-[#0a1f44]">Organizations We've Served</h2>
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              High-precision corporate workspace projects across India.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {clientsServed.map((client, idx) => (
              <motion.span
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0a1f44",
                  color: "#fff",
                  borderColor: "#0a1f44",
                  boxShadow: "0 10px 25px rgba(0, 58, 112, 0.2)",
                }}
                className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-semibold text-[#374151] transition-all duration-300 cursor-default"
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA BANNER — with particle effect */}
      <section className="relative bg-[#0a1f44] py-20 overflow-hidden">
        {/* Animated particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Ready to bring predictability to your next fit-out?
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              ICC delivers workspace projects with zero-delay benchmarks, thorough governance, and measurable outcomes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <motion.a
              href={`mailto:${founderEmail}`}
              className="inline-flex items-center gap-2 bg-white text-[#0a1f44] text-sm font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
            
            <motion.a
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white text-sm font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom line glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      </section>
    </>
  );
}
