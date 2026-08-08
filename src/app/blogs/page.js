"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { BLOGS_DATA } from "@/feature/blogs/data/blogsData";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations";

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
        
        {/* ── PILL CATEGORY FILTER TABS ── */}
        <FadeIn direction="up">
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
                        ? "bg-brand-accent text-white shadow-md font-bold scale-105"
                        : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* ── 6 BLOG CARDS GRID ── */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {displayedBlogs.map((blog) => (
            <StaggerItem key={blog.id} direction="up">
              <Link
                href={`/blogs/${blog.slug || blog.id}`}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                {/* Image Header */}
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {blog.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2 group-hover:text-brand-accent transition-colors leading-snug line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                  </div>

                  <p className="text-[11px] font-medium text-slate-400">
                    {blog.date}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── VIEW MORE ARTICLES BUTTON ── */}
        {visibleCount < filtered.length && (
          <div className="flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-brand-accent hover:bg-[#004B84] text-white font-bold text-xs sm:text-sm px-10 py-3.5 rounded-xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer uppercase tracking-wide"
            >
              View More Articles
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
