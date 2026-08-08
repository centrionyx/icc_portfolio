"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { BLOGS_DATA } from "@/feature/blogs/data/blogsData";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const categories = ["All", "Design Tips", "Trends", "Materials", "Inspiration"];

  const filtered =
    activeCategory === "All"
      ? BLOGS_DATA
      : BLOGS_DATA.filter((b) => b.category === activeCategory);

  const displayedBlogs = filtered.slice(0, visibleCount);

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pb-20">
      
      {/* ── PAGE HERO ── */}
      <PageHero
        title="Design Insights &amp; Blogs"
        subtitle="Inspiration, design trends, material choices, and workplace solutions."
        breadcrumbs={[{ label: "Blogs" }]}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mt-10">
        
        {/* ── PILL CATEGORY FILTER TABS (Matching Reference Image) ── */}
        <div className="flex justify-center mb-10 overflow-x-auto no-scrollbar py-2">
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6);
                  }}
                  className={`px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-[#E5A900] text-slate-950 shadow-md font-bold scale-105"
                      : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 6 BLOG CARDS GRID (Matching Reference Image) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {displayedBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blogs/${blog.slug || blog.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/70 group cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with rounded top corners */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & Date Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#E5A900] transition-colors">
                    {blog.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 font-medium mt-3">
                  {blog.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* ── VIEW MORE ARTICLES BUTTON (Matching Reference Image) ── */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-[#E5A900] hover:bg-[#CA9400] text-slate-950 font-bold text-xs sm:text-sm px-10 py-3.5 rounded-xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer uppercase tracking-wide"
            >
              View More Articles
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
