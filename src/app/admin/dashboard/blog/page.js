"use client";

import { useState, useEffect } from "react";
import BlogsTab from "./BlogsTab";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs");
      if (res.ok) {
        setBlogs(await res.json());
      }
    } catch (err) {
      console.error("Failed to fetch blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-xs text-slate-400 animate-pulse">
        Loading Blog Posts...
      </div>
    );
  }

  return <BlogsTab blogs={blogs} onRefresh={fetchBlogs} />;
}
