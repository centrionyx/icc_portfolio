"use client";

import React from "react";
import { ArrowRight, Layers } from "lucide-react";

export const OPEN_POSITIONS = [
  {
    id: 1,
    title: "Interior Designer",
    experience: "2-5 Yrs Experience",
    department: "Design & Spatial Strategy",
    location: "Mumbai / Onsite",
    description: "Lead interior design concepts, material selections, and 3D interior spatial planning for high-end corporate & luxury residential fit-outs.",
  },
  {
    id: 2,
    title: "3D Visualizer",
    experience: "1-3 Yrs Experience",
    department: "3D Rendering & Animation",
    location: "Mumbai / Hybrid",
    description: "Create photorealistic 3D interior renders, lighting simulations, and architectural walkthrough animations using 3ds Max / V-Ray.",
  },
  {
    id: 3,
    title: "Project Coordinator",
    experience: "2-4 Yrs Experience",
    department: "Project Management",
    location: "Mumbai / Onsite",
    description: "Coordinate fit-out project schedules, MEP vendor alignment, site progress tracking, and client reporting for zero-delay execution.",
  },
  {
    id: 4,
    title: "Site Supervisor",
    experience: "3-6 Yrs Experience",
    department: "Turnkey Construction",
    location: "Onsite Projects",
    description: "Supervise onsite interior fit-out construction, quality assurance, safety compliance, and contractor workflow governance.",
  },
];

export default function OpenPositionsList({ onSelectJob }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mb-6">
        Open Positions
      </h2>

      <div className="space-y-4">
        {OPEN_POSITIONS.map((job) => (
          <div
            key={job.id}
            onClick={() => onSelectJob(job)}
            className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between gap-4 group cursor-pointer"
          >
            {/* Left Icon + Position Info */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-brand-accent group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                <Layers size={22} />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-accent transition-colors leading-tight">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {job.experience}
                </p>
              </div>
            </div>

            {/* Right View Details CTA */}
            <button className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-accent transition-colors shrink-0 cursor-pointer">
              <span>View Details</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
