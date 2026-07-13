"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  ArrowRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Tag,
  Layers,
  Inbox,
  X,
  Calendar,
} from "lucide-react";

/* ─────────────────────────────────────────
   Smooth Auto-Carousel
   – Crossfade + subtle Ken Burns zoom
   – Auto-advances every 3.5 s
   – Pauses on hover
   – Clickable dot indicators
───────────────────────────────────────── */
function AutoCarousel({ images, alt, className = "" }) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (idx) => {
      if (isTransitioning || idx === current) return;
      setPrev(current);
      setCurrent(idx);
      setIsTransitioning(true);
      setTimeout(() => {
        setPrev(null);
        setIsTransitioning(false);
      }, 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % images.length);
  }, [current, goTo, images.length]);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    timerRef.current = setInterval(next, 3500);
    return () => clearInterval(timerRef.current);
  }, [next, paused, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Outgoing image fades out */}
      {prev !== null && (
        <img
          key={`prev-${prev}`}
          src={images[prev]}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: 0,
            transition: "opacity 0.7s ease-in-out",
            zIndex: 1,
          }}
        />
      )}

      {/* Incoming image fades in with Ken Burns zoom */}
      {images.map((src, i) => (
        <img
          key={`img-${i}`}
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 2 : 0,
            transform: i === current ? "scale(1.06)" : "scale(1)",
            transition:
              i === current
                ? "opacity 0.7s ease-in-out, transform 4s ease-out"
                : "opacity 0.7s ease-in-out",
          }}
        />
      ))}

      {/* Dot indicators */}
      {images.length > 1 && (
        <div
          className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5 z-10"
          style={{ zIndex: 10 }}
        >
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); goTo(i); }}
              aria-label={`Go to image ${i + 1}`}
              style={{
                width: i === current ? "20px" : "6px",
                height: "6px",
                borderRadius: "999px",
                background: i === current ? "white" : "rgba(255,255,255,0.45)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.35s cubic-bezier(.4,0,.2,1), background 0.35s",
              }}
            />
          ))}
        </div>
      )}

      {/* Left / Right manual arrows (appear on hover) */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goTo((current - 1 + images.length) % images.length); }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-[#005ea6] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ zIndex: 10 }}
            aria-label="Previous image"
          >
            <ChevronLeft size={13} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goTo((current + 1) % images.length); }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 hover:bg-[#005ea6] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ zIndex: 10 }}
            aria-label="Next image"
          >
            <ChevronRight size={13} />
          </button>
        </>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   Article Modal (Read More Popup)
───────────────────────────────────────── */
function ArticleModal({ article, formatDate, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  if (!article) return null;

  const images =
    article.images && article.images.length > 0
      ? article.images
      : article.image
      ? [article.image]
      : null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Panel */}
      <div
        className="relative z-10 w-full sm:max-w-2xl max-h-[96vh] sm:max-h-[88vh] bg-white rounded-t-[28px] sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        style={{ boxShadow: "0 30px 90px rgba(10,31,68,0.4)" }}
      >
        {/* ── Header ── */}
        <div className="relative bg-[#0a1f44] px-8 pt-8 pb-8 shrink-0">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-all"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          {/* Category badge */}
          <span className="inline-block bg-[#005ea6] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md mb-5">
            {article.category}
          </span>

          {/* Title — large and bold */}
          <h2
            className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-5 pr-10"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {article.title}
          </h2>

          {/* Meta */}
          <div className="flex items-center gap-5 text-[12px] font-semibold uppercase tracking-wider text-slate-300">
            <span className="flex items-center gap-2">
              <Clock size={13} className="text-cyan-400" />
              {article.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-500" />
            <span className="flex items-center gap-2">
              <Calendar size={13} className="text-cyan-400" />
              {formatDate(article.createdAt || article.date)}
            </span>
          </div>
        </div>

        {/* Accent bar */}
        <div className="h-1 bg-gradient-to-r from-[#005ea6] via-blue-400 to-cyan-400 shrink-0" />

        {/* ── Scrollable Content ── */}
        <div className="flex-1 overflow-y-auto">

          {/* Summary block — high contrast, large */}
          <div className="px-8 pt-7 pb-6 bg-slate-50 border-b border-slate-200">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-[#005ea6] mb-2">
              Summary
            </p>
            <p className="text-[#0a1f44] text-[16px] leading-[1.75] font-medium">
              {article.summary}
            </p>
          </div>

          {/* Full article content */}
          <div className="px-8 py-7">
            {article.content ? (
              <div className="text-slate-800 text-[15px] leading-[1.9] whitespace-pre-wrap font-normal">
                {article.content}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border-2 border-blue-100 flex items-center justify-center mb-5">
                  <BookOpen className="w-7 h-7 text-[#005ea6]" />
                </div>
                <p className="text-slate-600 font-semibold text-base">Full article coming soon.</p>
                <p className="text-slate-400 text-sm mt-1">Check back for the complete write-up.</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Footer ── */}
        <div className="border-t-2 border-slate-100 px-8 py-5 flex items-center justify-between bg-white shrink-0">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
            {article.category}
          </span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2.5 bg-[#0a1f44] text-white text-[11px] font-bold uppercase tracking-[0.18em] px-6 py-3 rounded-lg hover:bg-[#003A70] transition-colors shadow-md"
          >
            Close <X size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Featured Hero Article Card
───────────────────────────────────────── */
function FeaturedArticleCard({ article, formatDate, onReadMore }) {
  const images =
    article.images && article.images.length > 0
      ? article.images
      : article.image
      ? [article.image]
      : null;

  return (
    <div className="w-full rounded-2xl overflow-hidden flex flex-col lg:flex-row group shadow-md hover:shadow-2xl transition-shadow duration-500 border border-slate-200">

      {/* LEFT — Content panel */}
      <div className="w-full lg:w-[46%] bg-white flex flex-col justify-between p-8 sm:p-10 lg:p-14 relative">
        {/* Left accent */}
        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#005ea6] to-cyan-400 rounded-l-2xl" />

        <div>
          {/* Eyebrow */}
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#005ea6] mb-5">
            // Featured Article
          </p>

          {/* Category pill */}
          <span className="inline-flex items-center gap-1.5 border-2 border-[#0a1f44]/20 text-[#0a1f44] text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-6">
            {article.category}
          </span>

          {/* Title — large, high contrast */}
          <h2
            className="text-[26px] sm:text-[32px] lg:text-[36px] font-bold text-[#0a1f44] leading-[1.18] mb-5 group-hover:text-[#003A70] transition-colors duration-300"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {article.title}
          </h2>

          {/* Divider */}
          <div className="w-12 h-[3px] bg-gradient-to-r from-[#005ea6] to-cyan-400 rounded-full mb-5" />

          {/* Summary */}
          <p className="text-slate-600 text-[15px] leading-relaxed line-clamp-3 mb-7">
            {article.summary}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-0">
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#005ea6]" />
              {article.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{formatDate(article.createdAt || article.date)}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => onReadMore(article)}
            className="inline-flex items-center gap-3 border-2 border-[#0a1f44] text-[#0a1f44] bg-white px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] rounded hover:bg-[#0a1f44] hover:text-white transition-all duration-300 hover:shadow-lg group/btn"
          >
            Read More
            <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

      {/* RIGHT — Auto-carousel image panel */}
      <div className="w-full lg:w-[54%] relative min-h-[300px] sm:min-h-[400px] lg:min-h-0 bg-[#0a1f44] overflow-hidden">
        {images && images.length > 0 ? (
          <>
            <AutoCarousel
              images={images}
              alt={article.title}
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#0a1f44]/40 pointer-events-none" style={{ zIndex: 5 }} />
          </>
        ) : (
          /* Placeholder when no image */
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <BookOpen className="w-20 h-20 text-white/20" />
          </div>
        )}

        {/* Info badge */}
        <div className="absolute top-6 right-6 bg-[#0a1f44]/90 backdrop-blur-sm border border-white/15 rounded-xl px-5 py-3.5 text-center shadow-lg" style={{ zIndex: 6 }}>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400 block mb-1">
            Article
          </span>
          <span className="text-white text-[11px] font-bold">{article.category}</span>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#0a1f44]/60 to-transparent pointer-events-none" style={{ zIndex: 5 }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Standard Article Card
───────────────────────────────────────── */
function ArticleCard({ article, formatDate, onReadMore }) {
  const images =
    article.images && article.images.length > 0
      ? article.images
      : article.image
      ? [article.image]
      : null;

  return (
    <div className="group bg-white border-2 border-slate-100 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 hover:border-[#005ea6]/30">

      {/* Cover Image — Auto Carousel */}
      <div className="relative h-52 w-full overflow-hidden bg-[#0a1f44] shrink-0">
        {images && images.length > 0 ? (
          <>
            <AutoCarousel
              images={images}
              alt={article.title}
              className="absolute inset-0 w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ zIndex: 5 }} />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "18px 18px",
              }}
            />
            <BookOpen className="w-12 h-12 text-white/30" />
          </div>
        )}

        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-[#003A70] text-white text-[9px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded" style={{ zIndex: 10 }}>
          {article.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Meta */}
          <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-3">
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-[#005ea6]" />
              {article.readTime}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <span>{formatDate(article.createdAt || article.date)}</span>
          </div>

          {/* Title */}
          <h3
            className="text-[17px] font-bold text-[#0a1f44] leading-snug mb-3 group-hover:text-[#003A70] transition-colors"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {article.title}
          </h3>

          {/* Summary */}
          <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3">
            {article.summary}
          </p>
        </div>

        {/* Read More */}
        <div className="border-t-2 border-slate-100 pt-5 mt-auto">
          <button
            onClick={() => onReadMore(article)}
            className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em] border-2 border-[#0a1f44] text-[#0a1f44] px-5 py-2.5 rounded hover:bg-[#0a1f44] hover:text-white transition-all duration-200 group/btn"
          >
            Read More
            <ArrowRight size={12} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Skeleton Loaders
───────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="bg-white border-2 border-slate-100 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-52 bg-slate-100" />
      <div className="p-6 space-y-4">
        <div className="flex gap-3">
          <div className="h-3 w-16 bg-slate-100 rounded-full" />
          <div className="h-3 w-24 bg-slate-100 rounded-full" />
        </div>
        <div className="space-y-2.5">
          <div className="h-5 w-3/4 bg-slate-100 rounded-full" />
          <div className="h-4 w-full bg-slate-100 rounded-full" />
          <div className="h-4 w-5/6 bg-slate-100 rounded-full" />
        </div>
        <div className="pt-4 border-t-2 border-slate-100">
          <div className="h-9 w-32 bg-slate-100 rounded" />
        </div>
      </div>
    </div>
  );
}

function FeaturedSkeletonCard() {
  return (
    <div className="w-full bg-white border-2 border-slate-100 rounded-2xl overflow-hidden animate-pulse flex flex-col lg:flex-row">
      <div className="w-full lg:w-[46%] p-12 space-y-6">
        <div className="h-3 w-28 bg-slate-100 rounded-full" />
        <div className="h-3 w-20 bg-slate-100 rounded-full" />
        <div className="space-y-3">
          <div className="h-8 w-4/5 bg-slate-100 rounded-full" />
          <div className="h-8 w-3/5 bg-slate-100 rounded-full" />
        </div>
        <div className="h-4 w-full bg-slate-100 rounded-full" />
        <div className="h-4 w-5/6 bg-slate-100 rounded-full" />
        <div className="h-11 w-36 bg-slate-100 rounded" />
      </div>
      <div className="w-full lg:w-[54%] min-h-[320px] bg-slate-100" />
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Insights Page
───────────────────────────────────────── */
export default function InsightsPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (res.ok) {
          const data = await res.json();
          setArticles(data);
        }
      } catch (err) {
        console.error("Failed to load insights articles:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  const formatDate = (dateStr) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const handleReadMore = useCallback((article) => {
    setSelectedArticle(article);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedArticle(null);
  }, []);

  const categories = [
    "All",
    ...Array.from(new Set(articles.map((a) => a.category).filter(Boolean))),
  ];

  const filtered =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  const featuredArticle = filtered.length > 0 ? filtered[0] : null;
  const restArticles = filtered.length > 1 ? filtered.slice(1) : [];

  return (
    <div className="w-full bg-white text-slate-900">

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#0a1f44]" style={{ minHeight: "320px" }}>
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Glow */}
        <div className="absolute -top-1/3 -left-1/4 w-[55vw] h-[55vw] rounded-full bg-blue-600/25 blur-[130px] pointer-events-none" />
        <div className="absolute -bottom-1/4 right-0 w-[40vw] h-[40vw] rounded-full bg-cyan-600/15 blur-[110px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28 z-10">
          {/* Eyebrow */}
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.3em] text-cyan-400 mb-6">
            // Ideas &amp; Knowledge
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-20">
            <div className="flex-1 max-w-2xl">
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Corporate{" "}
                <span
                  className="font-black"
                  style={{
                    background: "linear-gradient(135deg, #60a5fa, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Insights
                </span>
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                Specialized articles on workspace design, MEP innovation,
                project costing, and execution — crafted from two decades of
                hands-on delivery experience.
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 shrink-0 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
              {[
                { icon: <BookOpen className="w-5 h-5 text-cyan-400" />, label: "Expert\nInsights" },
                { icon: <Tag className="w-5 h-5 text-cyan-400" />, label: "Curated\nTopics" },
                { icon: <Layers className="w-5 h-5 text-cyan-400" />, label: "20+ Yrs\nExp." },
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 text-center">
                  <div className="w-11 h-11 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 whitespace-pre-line">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clean sharp bottom edge — no gradient */}
      </section>

      {/* ── CATEGORY FILTER BAR ── */}
      {!loading && articles.length > 0 && (
        <div className="sticky top-0 z-30 bg-[#f0f4f8] border-b-2 border-slate-200 shadow-[0_2px_12px_rgba(10,31,68,0.08)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="flex items-center gap-2.5 overflow-x-auto py-4 scrollbar-none">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#003A70] shrink-0 mr-2">
                Filter by:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-5 py-2 rounded-lg text-[11px] font-bold uppercase tracking-[0.14em] border-2 transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#0a1f44] text-white border-[#0a1f44] shadow-sm"
                      : "bg-white text-slate-700 border-slate-300 hover:border-[#0a1f44] hover:text-[#0a1f44] hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── ARTICLES ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">

        {/* Loading */}
        {loading && (
          <div className="space-y-10">
            <FeaturedSkeletonCard />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {[...Array(3)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        )}

        {/* Empty */}
        {!loading && filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-28 text-center">
            <div className="w-20 h-20 rounded-2xl bg-slate-50 border-2 border-slate-100 flex items-center justify-center mb-6">
              <Inbox className="w-8 h-8 text-slate-300" />
            </div>
            <h3
              className="text-2xl font-bold text-[#0a1f44] mb-3"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              No Articles Available
            </h3>
            <p className="text-slate-500 max-w-xs leading-relaxed mb-8 text-sm">
              {activeCategory === "All"
                ? "Our team is working on sharing new insights. Please check back later."
                : `No articles found in the "${activeCategory}" category.`}
            </p>
            {activeCategory !== "All" && (
              <button
                onClick={() => setActiveCategory("All")}
                className="px-7 py-3 rounded-xl border-2 border-[#003A70] text-[#003A70] text-[11px] font-bold uppercase tracking-widest hover:bg-[#003A70] hover:text-white transition-all duration-200"
              >
                Reset Filter
              </button>
            )}
          </div>
        )}

        {/* Content */}
        {!loading && filtered.length > 0 && (
          <div className="space-y-10">
            {/* Count row */}
            <div className="flex items-center justify-between border-b-2 border-slate-100 pb-5">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] mb-1">
                  // {activeCategory === "All" ? "All Publications" : activeCategory}
                </p>
                <p className="text-sm font-semibold text-slate-500">
                  {filtered.length} {filtered.length === 1 ? "article" : "articles"} found
                </p>
              </div>
              {activeCategory !== "All" && (
                <button
                  onClick={() => setActiveCategory("All")}
                  className="text-[11px] font-bold uppercase tracking-widest text-[#005ea6] hover:underline"
                >
                  Clear filter
                </button>
              )}
            </div>

            {/* Featured */}
            {featuredArticle && (
              <FeaturedArticleCard
                article={featuredArticle}
                formatDate={formatDate}
                onReadMore={handleReadMore}
              />
            )}

            {/* Grid */}
            {restArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-2">
                {restArticles.map((article) => (
                  <ArticleCard
                    key={article._id || article.id}
                    article={article}
                    formatDate={formatDate}
                    onReadMore={handleReadMore}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* ── BOTTOM CTA ── */}
      {!loading && articles.length > 0 && (
        <section className="bg-[#0a1f44] py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 z-10">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 block mb-4">
                // Collaborate with ICC
              </span>
              <h3
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Have a workspace requirement?
              </h3>
              <p className="text-slate-300 max-w-lg leading-relaxed text-base">
                Discuss spatial strategy, costing, or general contracting guidelines.
                Yogesh Pawar and our specialists will help you plan your next interior fit-out.
              </p>
            </div>
            <a
              href="mailto:yogesh.pawar@icc.ind.in"
              className="shrink-0 inline-flex items-center gap-3 bg-gradient-to-r from-[#005ea6] to-blue-500 text-white text-[12px] font-bold uppercase tracking-[0.18em] px-8 py-4 rounded-xl hover:from-[#004b84] hover:to-blue-600 transition-all duration-300 shadow-[0_4px_20px_rgba(0,94,166,0.35)] hover:shadow-[0_6px_30px_rgba(0,94,166,0.55)] hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight size={15} />
            </a>
          </div>
        </section>
      )}

      {/* ── MODAL ── */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          formatDate={formatDate}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
