"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export default function InsightsPage() {
  const articles = [
    {
      id: "future-of-work",
      category: "Workplace Strategy",
      title: "The Future of Work is Human-Centric",
      date: "June 15, 2026",
      readTime: "5 min read",
      summary: "Explore how corporate environments are adapting to post-hybrid workflows, emphasizing acoustic control, active MEP ventilation, and modular layouts.",
      image: "/workplace_strategy.png"
    },
    {
      id: "designing-workplaces",
      category: "Sustainability",
      title: "Designing Workplaces for a Better Tomorrow",
      date: "May 28, 2026",
      readTime: "7 min read",
      summary: "A practical guide to implementing LEED guidelines, energy-efficient HVAC services, and low-VOC materials in interior commercial fit-outs.",
      image: "/sustainability_office.png"
    },
    {
      id: "flexibility-experience",
      category: "Industry Trends",
      title: "Flexibility, Experience, and Workplace Performance",
      date: "April 10, 2026",
      readTime: "4 min read",
      summary: "Understand how technical advisory audits and BOQ optimizations safeguard commercial developers from variation pitfalls during project execution.",
      image: "/industry_trends.png"
    }
  ];

  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      
      {/* PAGE HEADER SECTION */}
      <section className="w-full bg-[#0a1f44] text-white py-16 lg:py-20 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
            IDEAS & KNOWLEDGE ARTICLES
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-serif max-w-2xl leading-tight">
            Corporate <span className="font-extrabold text-blue-500">Insights</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-xl leading-relaxed">
            Stay informed with our specialized articles on workplace design management, MEP innovations, costing, and execution.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id}
              className="bg-white border border-slate-200 flex flex-col group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              
              {/* Cover Image container */}
              <div className="relative h-[220px] w-full bg-slate-100 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-[#003A70] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-sm">
                  {article.category}
                </span>
              </div>

              {/* Text content details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Article Meta */}
                  <div className="flex items-center gap-4 text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-3">
                    <span className="flex items-center gap-1">
                      <Clock size={11} />
                      {article.readTime}
                    </span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0a1f44] mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#003A70] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Read Article
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
