import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Share2, Tag, ChevronRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import HomeNewsletterBanner from "@/feature/home/components/HomeNewsletterBanner";
import { BLOGS_DATA } from "@/feature/blogs/data/blogsData";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  
  let blog = null;
  let relatedBlogs = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/blogs`, {
      cache: "no-store",
    });
    if (res.ok) {
      const allDbBlogs = await res.json();
      if (Array.isArray(allDbBlogs) && allDbBlogs.length > 0) {
        const found = allDbBlogs.find(
          (b) => b._id === slug || b.slug === slug || b.id?.toString() === slug
        );
        if (found) {
          const img =
            found.images && found.images.length > 0
              ? found.images[0]
              : found.image || "/workplace_strategy.png";
          
          blog = {
            id: found._id || found.id,
            slug: found.slug || found._id || found.id,
            title: found.title,
            category: found.category,
            readTime: found.readTime || "5 min read",
            author: found.author || "ICC Editorial Team",
            authorRole: found.authorRole || "Interior Architecture & Workplace Advisory",
            summary: found.summary,
            content: typeof found.content === "string" ? [{ type: "paragraph", text: found.content }] : found.content,
            image: img,
            date: found.createdAt
              ? new Date(found.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "Recent",
          };

          relatedBlogs = allDbBlogs
            .filter((b) => (b._id || b.id) !== (found._id || found.id))
            .slice(0, 3)
            .map((r) => ({
              id: r._id || r.id,
              slug: r.slug || r._id || r.id,
              title: r.title,
              image: (r.images && r.images[0]) || r.image || "/workplace_strategy.png",
              date: r.createdAt
                ? new Date(r.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "Recent",
            }));
        }
      }
    }
  } catch (err) {
    console.error("Failed to fetch blog detail from DB:", err);
  }

  // Fallback to BLOGS_DATA if not found from DB
  if (!blog) {
    blog = BLOGS_DATA.find((b) => b.slug === slug || b.id.toString() === slug);
    if (blog) {
      relatedBlogs = BLOGS_DATA.filter((b) => b.id !== blog.id).slice(0, 3);
    }
  }

  if (!blog) {
    notFound();
  }

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pb-20 font-sans antialiased">
      {/* HERO SECTION */}
      <PageHero
        title={blog.title}
        subtitle={`${blog.date} • ${blog.readTime} • Category: ${blog.category}`}
        breadcrumbs={[
          { label: "Blogs", href: "/blogs" },
          { label: blog.category }
        ]}
        bgImage={blog.image}
      />

      {/* ARTICLE CONTENT CONTAINER */}
      <main className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 mt-12 sm:mt-16">
        {/* Back Link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#E5A900] transition-colors mb-8 uppercase tracking-widest font-mono group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Blogs</span>
        </Link>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-xl mb-10 border border-slate-200/80">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-brand-accent text-white text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-lg shadow-md font-mono">
            {blog.category}
          </div>
        </div>

        {/* Article Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 px-6 bg-white rounded-xl border border-slate-200/80 shadow-sm mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold text-sm border border-slate-200">
              <User size={18} className="text-[#E5A900]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">{blog.author || "ICC Editorial"}</p>
              <p className="text-[11px] text-slate-500 font-normal">{blog.authorRole || "Interior Design Insights"}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#E5A900]" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#E5A900]" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Main Article Body */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          {/* Summary Lead Paragraph */}
          <p className="text-base sm:text-lg font-semibold text-slate-900 leading-relaxed border-l-4 border-[#E5A900] pl-4 py-1 bg-amber-50/50 rounded-r-lg">
            {blog.summary}
          </p>

          {/* Dynamic Content Sections */}
          {blog.content ? (
            blog.content.map((sec, idx) => {
              if (sec.type === "heading") {
                return (
                  <h2 key={idx} className="text-xl sm:text-2xl font-extrabold text-slate-950 pt-4 pb-1 tracking-tight font-sans">
                    {sec.text}
                  </h2>
                );
              }
              return (
                <p key={idx} className="text-slate-600 font-normal leading-relaxed">
                  {sec.text}
                </p>
              );
            })
          ) : (
            <p className="text-slate-600 font-normal leading-relaxed">
              Full comprehensive analysis on spatial optimization, material selection, lighting parameters, and project governance for modern architectural fit-outs.
            </p>
          )}

          {/* Author Sign-off */}
          <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
              <Tag size={14} className="text-[#E5A900]" />
              <span>Category: {blog.category}</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-navy text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-[#002850] transition-all"
            >
              <span>Consult Our Experts</span>
              <ChevronRight size={14} />
            </Link>
          </div>
        </article>

        {/* RELATED ARTICLES SECTION */}
        <section className="mt-16 sm:mt-20">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-8 tracking-tight">
            Related Insights &amp; Articles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((rel) => (
              <Link
                key={rel.id}
                href={`/blogs/${rel.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 group flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h4 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#E5A900] transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium">{rel.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* BOTTOM CTA BANNER MATCHING HOME PAGE */}
      <div className="mt-16 sm:mt-24">
        <HomeNewsletterBanner />
      </div>
    </div>
  );
}
