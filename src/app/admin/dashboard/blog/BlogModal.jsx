"use client";

import { X, Upload } from "lucide-react";

export default function BlogModal({
  isOpen,
  onClose,
  editingBlog,
  blogFormData,
  setBlogFormData,
  onSave,
  isSubmitting,
}) {
  if (!isOpen) return null;

  const handleBlogImageChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "icc_blogs");

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });
        if (res.ok) {
          const data = await res.json();
          setBlogFormData((prev) => ({
            ...prev,
            images: [...(prev.images || []), data.url],
          }));
        }
      } catch (err) {
        console.error("Image upload error:", err);
      }
    }
  };

  const removeBlogImage = (index) => {
    setBlogFormData((prev) => ({
      ...prev,
      images: (prev.images || []).filter((_, idx) => idx !== index),
    }));
  };

  return (
    <div className="fixed inset-0 bg-[#0a1f44]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <form
        onSubmit={onSave}
        className="bg-white border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-5 rounded-2xl animate-fade-in"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="border-b border-slate-100 pb-3">
          <h4 className="text-base font-bold text-slate-900 tracking-tight">
            {editingBlog ? "Edit Insights Article" : "Create New Insights Article"}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Fill in article details, categories, and cover pictures.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              Article Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Acoustic Optimization in Workspaces"
              value={blogFormData.title || ""}
              onChange={(e) =>
                setBlogFormData({ ...blogFormData, title: e.target.value })
              }
              className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Category *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Workplace Strategy"
                value={blogFormData.category || ""}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, category: e.target.value })
                }
                className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Read Time
              </label>
              <input
                type="text"
                placeholder="e.g. 5 min read"
                value={blogFormData.readTime || ""}
                onChange={(e) =>
                  setBlogFormData({ ...blogFormData, readTime: e.target.value })
                }
                className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
            Short Summary *
          </label>
          <textarea
            rows={2}
            required
            placeholder="Brief 1-2 sentence summary shown in article grids..."
            value={blogFormData.summary || ""}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, summary: e.target.value })
            }
            className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white resize-none focus:outline-none focus:border-blue-500 rounded-xl transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
            Full Article Content
          </label>
          <textarea
            rows={5}
            placeholder="Write the complete blog article body content..."
            value={blogFormData.content || ""}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, content: e.target.value })
            }
            className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white resize-none focus:outline-none focus:border-blue-500 rounded-xl transition-all"
          />
        </div>

        <div className="bg-slate-50/80 p-4 border border-slate-200/80 rounded-xl space-y-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              Cover Pictures (Multiple Allowed)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                multiple
                accept="image/*"
                id="blog-image-file-input"
                onChange={handleBlogImageChange}
                className="hidden"
              />
              <label
                htmlFor="blog-image-file-input"
                className="flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 px-3.5 py-2 text-xs font-semibold cursor-pointer border border-slate-200 transition-all rounded-xl shadow-2xs"
              >
                <Upload size={14} className="text-slate-500" /> Upload Pictures
              </label>
            </div>
          </div>

          {blogFormData.images && blogFormData.images.length > 0 && (
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-2 border-t border-slate-200/60">
              {blogFormData.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-14 border border-slate-200 bg-slate-100 rounded-xl overflow-hidden shadow-2xs group"
                >
                  <img
                    src={img}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeBlogImage(idx)}
                    className="absolute top-1 right-1 bg-rose-600 hover:bg-rose-700 text-white p-0.5 rounded-full transition-colors cursor-pointer"
                  >
                    <X size={10} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="blog-featured"
            checked={blogFormData.featured || false}
            onChange={(e) =>
              setBlogFormData({ ...blogFormData, featured: e.target.checked })
            }
            className="w-4 h-4 text-[#005ea6] rounded focus:ring-blue-500 cursor-pointer"
          />
          <label
            htmlFor="blog-featured"
            className="text-xs font-semibold text-slate-700 cursor-pointer select-none"
          >
            Featured Article (Highlight on website insights page)
          </label>
        </div>

        <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors rounded-xl cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2 bg-[#005ea6] hover:bg-[#004b84] text-white text-xs font-bold disabled:bg-slate-400 transition-colors shadow-sm rounded-xl cursor-pointer"
          >
            {isSubmitting ? "Saving Article..." : "Publish Article"}
          </button>
        </div>
      </form>
    </div>
  );
}
