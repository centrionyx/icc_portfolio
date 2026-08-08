"use client";

import { motion } from "framer-motion";
import { Sparkles, Award, Clock, Layers } from "lucide-react";

export default function AboutFoundation() {
  return (
    <section className="py-8 sm:py-10 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main Grid matching reference image with equal height stretching */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          
          {/* LEFT COLUMN: Square Showcase Image (No Corner Radius) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[260px] sm:min-h-[400px] lg:min-h-0 w-full overflow-hidden shadow-md bg-slate-100 border border-slate-200/80 rounded-2xl lg:rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
              alt="We Design Interiors That Reflect You"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* RIGHT COLUMN: WHO WE ARE content matching reference photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col justify-between py-1"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-brand-accent block mb-2">
                WHO WE ARE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-950 tracking-tight leading-[1.12] mb-3">
                We Design Interiors <br />
                That <span className="text-brand-accent">Reflect You</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6">
Innovation Consultants and Contractors (ICC) is a specialised project advisory and execution partner for interior fit-out projects. We support corporate offices, commercial spaces, hospitality, and high-end residential developments from design intent to handover of the projects and until completion of Defect liability Period.              </p>
            </div>

            {/* 4 Feature Cards Grid with Blue Icons */}
            <div className="space-y-3.5">
              
              {/* 1. Personalized Designs */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent text-white flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">Personalized Designs</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Tailored to your style and needs</p>
                </div>
              </div>

              {/* 2. Quality & Craftsmanship */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent text-white flex items-center justify-center shrink-0 shadow-md">
                  <Award size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">Quality &amp; Craftsmanship</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Premium materials and fine detailing</p>
                </div>
              </div>

              {/* 3. End-to-End Solutions */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent text-white flex items-center justify-center shrink-0 shadow-md">
                  <Layers size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">End-to-End Solutions</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">From concept to completion</p>
                </div>
              </div>

              {/* 4. Timely Delivery */}
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-brand-accent text-white flex items-center justify-center shrink-0 shadow-md">
                  <Clock size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">Timely Delivery</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">On time, every time</p>
                </div>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
