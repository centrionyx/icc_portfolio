"use client";

import { useState, useRef, useEffect } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  MoreVertical,
  ArrowUpDown,
  Search,
  Clock,
  BookOpen
} from "lucide-react";
import BlogModal from "./BlogModal";

function getBlogCategoryBadge(category) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("workplace") || cat.includes("strategy")) {
    return {
      label: category || "Workplace Strategy",
      style: "bg-blue-50/80 text-blue-700 border-blue-200/60 font-semibold"
    };
  }
  if (cat.includes("sustainab")) {
    return {
      label: category || "Sustainability",
      style: "bg-emerald-50/80 text-emerald-700 border-emerald-200/60 font-semibold"
    };
  }
  if (cat.includes("tech") || cat.includes("digital")) {
    return {
      label: category || "Technology",
      style: "bg-purple-50/80 text-purple-700 border-purple-200/60 font-semibold"
    };
  }
  if (cat.includes("design") || cat.includes("trend")) {
    return {
      label: category || "Design Trends",
      style: "bg-amber-50/80 text-amber-700 border-amber-200/60 font-semibold"
    };
  }
  return {
    label: category ? category.charAt(0).toUpperCase() + category.slice(1) : "General",
    style: "bg-slate-50 text-slate-700 border-slate-200/60 font-semibold"
  };
}

function getFeaturedBadge(featured) {
  if (featured) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
        Featured
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-2xs">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
      Standard
    </span>
  );
}

function BlogTableRow({ blog, handleStartEditBlog, handleDeleteBlog }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const images =
    blog.images && blog.images.length > 0
      ? blog.images
      : blog.image
      ? [blog.image]
      : ["/workplace_strategy.png"];

  const catBadge = getBlogCategoryBadge(blog.category);
  const publishedDate = blog.createdAt || blog.updatedAt
    ? new Date(blog.createdAt || blog.updatedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      })
    : "12 May 2024";

  return (
    <tr className="hover:bg-slate-50/80 transition-colors border-b border-slate-100 last:border-b-0 group">
      {/* 1. ARTICLE COLUMN */}
      <td className="py-4 px-6 max-w-xs md:max-w-md">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200/80 shadow-2xs">
            <img
              src={images[0]}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="min-w-0">
            <h4 className="text-sm font-bold text-slate-900 tracking-tight line-clamp-1">
              {blog.title}
            </h4>
            <p className="text-xs text-slate-500 font-normal mt-0.5 line-clamp-1">
              {blog.summary || "No summary preview provided."}
            </p>
          </div>
        </div>
      </td>

      {/* 2. CATEGORY COLUMN */}
      <td className="py-4 px-6">
        <span
          className={`inline-block px-3 py-1 rounded-lg text-xs border ${catBadge.style}`}
        >
          {catBadge.label}
        </span>
      </td>

      {/* 3. READ TIME COLUMN */}
      <td className="py-4 px-6">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
          <Clock size={14} className="text-slate-400 shrink-0" />
          <span>{blog.readTime || "5 min read"}</span>
        </div>
      </td>

      {/* 4. FEATURED COLUMN */}
      <td className="py-4 px-6">
        {getFeaturedBadge(blog.featured)}
      </td>

      {/* 5. PUBLISHED ON COLUMN */}
      <td className="py-4 px-6 text-xs font-medium text-slate-600 whitespace-nowrap">
        {publishedDate}
      </td>

      {/* 6. ACTION COLUMN */}
      <td className="py-4 px-6 text-right relative">
        <div className="relative inline-block text-left" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Actions"
          >
            <MoreVertical size={16} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-50 animate-fade-in text-left">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleStartEditBlog(blog);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Pencil size={13} className="text-slate-500" /> Edit Article
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  handleDeleteBlog(blog._id || blog.id);
                }}
                className="w-full text-left px-3.5 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Trash2 size={13} className="text-rose-500" /> Delete Article
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
}

export default function BlogsTab({ blogs = [], onRefresh }) {
  const [isBlogFormOpen, setIsBlogFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [isSubmittingBlog, setIsSubmittingBlog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAsc, setSortAsc] = useState(false);

  const [blogFormData, setBlogFormData] = useState({
    title: "",
    category: "",
    readTime: "5 min read",
    summary: "",
    content: "",
    images: [],
    featured: false,
  });

  const handleStartEditBlog = (blog) => {
    const initialImages =
      blog.images && blog.images.length > 0
        ? blog.images
        : blog.image
        ? [blog.image]
        : [];

    setEditingBlog(blog);
    setBlogFormData({
      title: blog.title || "",
      category: blog.category || "",
      readTime: blog.readTime || "5 min read",
      summary: blog.summary || "",
      content: blog.content || "",
      images: initialImages,
      featured: blog.featured || false,
    });
    setIsBlogFormOpen(true);
  };

  const handleSaveBlogSubmit = async (e) => {
    e.preventDefault();
    if (!blogFormData.title || !blogFormData.category || !blogFormData.summary)
      return;

    setIsSubmittingBlog(true);
    const isEdit = !!editingBlog;
    const url = "/api/admin/blogs";
    const method = isEdit ? "PATCH" : "POST";
    const payload = isEdit
      ? { ...blogFormData, id: editingBlog._id }
      : blogFormData;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save blog post.");
      setIsBlogFormOpen(false);
      setEditingBlog(null);
      if (onRefresh) await onRefresh();
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmittingBlog(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    try {
      const res = await fetch(`/api/admin/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok && onRefresh) await onRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  // Filter & Sort Logic
  const filteredBlogs = blogs
    .filter((b) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        (b.title && b.title.toLowerCase().includes(q)) ||
        (b.category && b.category.toLowerCase().includes(q)) ||
        (b.summary && b.summary.toLowerCase().includes(q))
      );
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || a.updatedAt || 0).getTime();
      const dateB = new Date(b.createdAt || b.updatedAt || 0).getTime();
      return sortAsc ? dateA - dateB : dateB - dateA;
    });

  return (
    <div className="space-y-6">
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-1">
        <div>
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Insights & Articles
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage live thought leadership articles, categories, and read times.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Search Input */}
          <div className="relative flex-1 sm:w-64">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-2xs"
            />
          </div>

          <button
            onClick={() => {
              setEditingBlog(null);
              setBlogFormData({
                title: "",
                category: "",
                readTime: "5 min read",
                summary: "",
                content: "",
                images: [],
                featured: false,
              });
              setIsBlogFormOpen(true);
            }}
            className="bg-[#005ea6] hover:bg-[#004b84] text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2 transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <Plus size={15} /> Add New Post
          </button>
        </div>
      </div>

      <BlogModal
        isOpen={isBlogFormOpen}
        onClose={() => {
          setIsBlogFormOpen(false);
          setEditingBlog(null);
        }}
        editingBlog={editingBlog}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        onSave={handleSaveBlogSubmit}
        isSubmitting={isSubmittingBlog}
      />

      {/* Main Table Container directly on page bg */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="border-b border-slate-200/80">
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                ARTICLE
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                CATEGORY
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                READ TIME
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                FEATURED
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono">
                <button
                  onClick={() => setSortAsc(!sortAsc)}
                  className="flex items-center gap-1.5 hover:text-slate-700 transition-colors cursor-pointer"
                >
                  PUBLISHED ON <ArrowUpDown size={12} />
                </button>
              </th>
              <th className="py-3.5 px-6 text-[11px] font-extrabold text-slate-400 uppercase tracking-wider font-mono text-right">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60">
            {filteredBlogs.map((blog) => (
              <BlogTableRow
                key={blog._id || blog.id || blog.title}
                blog={blog}
                handleStartEditBlog={handleStartEditBlog}
                handleDeleteBlog={handleDeleteBlog}
              />
            ))}

            {filteredBlogs.length === 0 && (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-400 text-xs font-medium">
                  No articles matching your search criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
