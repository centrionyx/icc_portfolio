"use client";

import React from "react";

export default function SendResumeBanner({ onOpenResumeModal }) {
  return (
    <div className="bg-[#0a1f44] text-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
          Don't see the right role?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 font-normal">
          Send us your resume at <span className="font-semibold text-[#E5A900]">careers@icc.ind.in</span>
        </p>
      </div>

      <button
        onClick={onOpenResumeModal}
        className="bg-[#E5A900] hover:bg-[#CA9400] text-slate-950 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shrink-0 shadow-md cursor-pointer uppercase tracking-wider"
      >
        Send Resume
      </button>
    </div>
  );
}
