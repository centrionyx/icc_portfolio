"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, X, BookOpen } from "lucide-react";
import PageHero from "@/components/layout/PageHero";

// Sample / Default Blog Articles matching Indian Interior Design reference image layout
const INITIAL_BLOGS = [
  {
    id: 1,
    title: "10 Indian Interior Design Trends in 2024",
    date: "May 10, 2024",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    summary: "Discover the top Indian interior design trends shaping residential and commercial spaces in 2024, combining traditional warmth with contemporary ergonomics.",
    readTime: "4 min read",
  },
  {
    id: 2,
    title: "How to Choose the Right Colours for Your Home",
    date: "Apr 28, 2024",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop",
    summary: "A practical guide to selecting harmonious color palettes that create depth, warmth, and balanced lighting throughout your living environments.",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "Small Space Interior Ideas That Work",
    date: "Apr 18, 2024",
    category: "Inspiration",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    summary: "Maximize your space with smart multi-functional furniture, sleek minimalist storage solutions, and strategic architectural layouts.",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Sustainable Materials for Interiors",
    date: "Apr 5, 2024",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
    summary: "Explore eco-friendly materials like bamboo, reclaimed wood, organic textiles, and low-VOC finishes for sustainable living spaces.",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Vastu Tips for Positive Energy at Home",
    date: "Mar 23, 2024",
    category: "Design Tips",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    summary: "Enhance positive energy flow, spatial harmony, and peaceful ambience with time-tested Vastu principles tailored for modern homes.",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "Lighting Ideas to Elevate Your Space",
    date: "Mar 10, 2024",
    category: "Inspiration",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    summary: "Transform atmosphere with layered ambient, task, and accent lighting techniques that add luxury and architectural depth.",
    readTime: "5 min read",
  },
];

/* ── ARTICLE READER MODAL ── */
function ArticleModal({ article, onClose }) {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl overflow-hidden relative flex flex-col border border-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-slate-900/80 hover:bg-[#E5A900] text-white hover:text-slate-950 p-2.5 rounded-full z-30 transition-all cursor-pointer shadow-md"
        >
          <X size={16} />
        </button>

        <div className="relative h-60 w-full shrink-0 bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <span className="absolute bottom-4 left-6 bg-[#E5A900] text-slate-950 text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1 rounded-lg">
            {article.category}
          </span>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <p className="text-xs font-semibold text-slate-400 mb-2 font-mono">{article.date} • {article.readTime}</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            {article.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            {article.summary}
          </p>
          <div className="mt-6 pt-6 border-t border-slate-100 text-slate-500 text-xs leading-relaxed">
            Full insights write-up covering spatial layout principles, material choices, lighting strategies, and architectural cost efficiency for commercial &amp; residential fit-outs.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["All", "Design Tips", "Trends", "Materials", "Inspiration"];

  const filtered =
    activeCategory === "All"
      ? INITIAL_BLOGS
      : INITIAL_BLOGS.filter((b) => b.category === activeCategory);

  const displayedBlogs = filtered.slice(0, visibleCount);

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pb-20">
      
      {/* ── PAGE HERO ── */}
      <PageHero
        title="Design Insights &amp; Blogs"
        subtitle="Inspiration, design trends, material choices, and workplace solutions."
        breadcrumbs={[{ label: "Blogs" }]}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 mt-10">
        
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
            <div
              key={blog.id}
              onClick={() => setSelectedArticle(blog)}
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
            </div>
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

      {/* Article Dialog Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  );
}
