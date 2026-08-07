"use client";

import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function ServicesCtaBanner() {
  return (
    <section className="max-w-[1440px] mx-auto px-5 lg:px-8 mt-16">
      <div className="bg-gradient-to-r from-[#0a1f44] to-[#005ea6] text-white p-8 sm:p-12 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans">
              Ready to Start Your Fit-Out Project?
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed mt-0.5 max-w-xl font-light">
              Reach out to our experts to discuss your requirements, project scope, budget, and timelines.
            </p>
          </div>
        </div>
        <Link
          href="/contact"
          className="bg-white text-[#0a1f44] hover:bg-slate-100 py-4 px-8 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 transition-all shrink-0 shadow-lg"
        >
          <span>Contact Us</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
