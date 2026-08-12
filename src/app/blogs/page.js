"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import { BLOGS_DATA } from "@/feature/blogs/data/blogsData";
import { StaggerContainer, StaggerItem, FadeIn } from "@/components/animations";
import { Star } from "lucide-react";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [allBlogs, setAllBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const dbPosts = await res.json();
          if (Array.isArray(dbPosts) && dbPosts.length > 0) {
            const formatted = dbPosts.map((p) => {
              const img =
                p.images && p.images.length > 0
                  ? p.images[0]
                  : p.image || "/workplace_strategy.png";
              return {
                id: p._id || p.id,
                slug: p.slug || p._id || p.id,
                title: p.title,
                category: p.category,
                readTime: p.readTime || "5 min read",
                excerpt: p.summary,
                image: img,
                featured: !!p.featured,
                date: p.createdAt
                  ? new Date(p.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "Recent",
              };
            });
            setAllBlogs(formatted);
          } else {
            setAllBlogs(BLOGS_DATA);
          }
        } else {
          setAllBlogs(BLOGS_DATA);
        }
      } catch (err) {
        console.error("Failed to fetch live blogs:", err);
        setAllBlogs(BLOGS_DATA);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const dynamicCategories = [
    "All",
    ...Array.from(
      new Set(
        allBlogs
          .map((b) => (b.category ? b.category.trim() : null))
          .filter(Boolean)
      )
    ),
  ];

  const filtered =
    activeCategory === "All"
      ? allBlogs
      : allBlogs.filter(
          (b) =>
            b.category &&
            b.category.trim().toLowerCase() === activeCategory.trim().toLowerCase()
        );

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
              {dynamicCategories.map((cat) => {
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

        {/* ── BLOG CARDS GRID ── */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md flex flex-col h-[380px] animate-pulse"
              >
                <div className="aspect-[16/10] w-full bg-slate-200" />
                <div className="p-6 flex flex-col justify-between flex-1 space-y-3">
                  <div className="space-y-2">
                    <div className="h-5 bg-slate-200 rounded w-3/4" />
                    <div className="h-3 bg-slate-200 rounded w-full" />
                    <div className="h-3 bg-slate-200 rounded w-2/3" />
                  </div>
                  <div className="flex justify-between items-center pt-4">
                    <div className="h-3 bg-slate-200 rounded w-1/4" />
                    <div className="h-3 bg-slate-200 rounded w-1/4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <StaggerContainer
            key={`grid-${activeCategory}`}
            once={false}
            staggerDelay={0.08}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14"
          >
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
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {blog.category}
                      </span>
                      {blog.featured && (
                        <span className="bg-amber-500 text-white font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                          <Star size={10} className="fill-white" /> Featured
                        </span>
                      )}
                    </div>
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

                    <div className="flex items-center justify-between text-[11px] font-medium text-slate-400">
                      <span>{blog.date}</span>
                      <span>{blog.readTime || "5 min read"}</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

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
