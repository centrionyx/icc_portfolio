"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus, Calendar, Square } from "lucide-react";
import { FEATURED_PROJECTS_CONTENT } from "../constants";

export default function FeaturedProjects() {
  const content = FEATURED_PROJECTS_CONTENT;
  const largeProject = content.projects.find((p) => p.isLarge);
  const smallProjects = content.projects.filter((p) => !p.isLarge);

  return (
    <section className="w-full bg-white py-16 sm:py-20 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* LEFT PANEL - Tagline, Title & CTA - 24% width for perfect vertical alignment */}
        <div className="w-full lg:w-[24%] flex flex-col justify-between py-2 border-r border-transparent lg:border-r-0">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#005ea6] mb-4 block">
              {content.tagline}
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight leading-[1.2] text-slate-900 font-serif">
              {content.titleLine1}
              <span className="block font-bold mt-1 text-slate-900 font-serif">
                {content.titleLine2}
              </span>
            </h2>
          </div>

          <Link
            href={content.cta.href}
            className="
              inline-flex
              items-center
              gap-2
              text-[#005ea6]
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              mt-8
              lg:mt-0
              transition-colors
              duration-300
              hover:text-[#004b84]
              group
            "
          >
            {content.cta.text}
            <ArrowRight size={14} className="transition-transform duration-350 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* RIGHT PANEL - Project Grid - 76% width */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4">
          
          {/* Large Project Card - Changed to aspect-[1.5] (rectangular) */}
          {largeProject && (
            <div className="relative aspect-[1.5] w-full bg-slate-900 overflow-hidden group">
              <Image
                src={largeProject.image}
                alt={largeProject.client}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Project Details */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                <h3 className="text-base sm:text-lg font-bold tracking-wide uppercase mb-1">
                  {largeProject.client}
                </h3>
                <p className="text-[10px] text-slate-300 tracking-wider mb-4">
                  {largeProject.location}
                </p>
                
                {/* Stats */}
                <div className="flex items-center gap-6 text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-slate-200">
                  <span className="flex items-center gap-2">
                    <Square size={14} className="text-slate-400" />
                    {largeProject.size}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={14} className="text-slate-400" />
                    {largeProject.duration}
                  </span>
                </div>
              </div>

              {/* Plus Button */}
              <Link
                href={`/projects/${largeProject.id}`}
                className="
                  absolute
                  bottom-0
                  right-0
                  w-10
                  h-10
                  bg-[#005ea6]
                  text-white
                  flex
                  items-center
                  justify-center
                  transition-colors
                  duration-300
                  hover:bg-[#004b84]
                "
              >
                <Plus size={16} />
              </Link>
            </div>
          )}

          {/* 2x2 Small Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {smallProjects.map((project) => (
              <div key={project.id} className="relative aspect-[1.5] w-full bg-slate-900 overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.client}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Project Details */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex flex-col justify-end text-white">
                  <h3 className="text-sm font-bold tracking-wide uppercase mb-0.5">
                    {project.client}
                  </h3>
                  <p className="text-[9px] text-slate-300 tracking-wider mb-3">
                    {project.location}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap items-center gap-4 text-[9px] font-semibold uppercase tracking-wider text-slate-200">
                    <span className="flex items-center gap-1.5">
                      <Square size={12} className="text-slate-400" />
                      {project.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} className="text-slate-400" />
                      {project.duration}
                    </span>
                  </div>
                </div>

                {/* Plus Button */}
                <Link
                  href={`/projects/${project.id}`}
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-10
                    h-10
                    bg-[#005ea6]
                    text-white
                    flex
                    items-center
                    justify-center
                    transition-colors
                    duration-300
                    hover:bg-[#004b84]
                  "
                >
                  <Plus size={16} />
                </Link>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}