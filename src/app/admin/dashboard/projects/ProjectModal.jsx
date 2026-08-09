"use client";

import { useState } from "react";
import { X, Upload, Star } from "lucide-react";

export default function ProjectModal({
  isOpen,
  onClose,
  editingProject,
  projectFormData,
  setProjectFormData,
  onSave,
  isSubmitting,
}) {
  if (!isOpen) return null;

  const handleProjectImageChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("folder", "icc_projects");

      try {
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body: formData,
        });
        if (res.ok) {
          const data = await res.json();
          setProjectFormData((prev) => ({
            ...prev,
            images: [...(prev.images || []), data.url],
          }));
        }
      } catch (err) {
        console.error("Image upload error:", err);
      }
    }
  };

  const removeProjectImage = (index) => {
    setProjectFormData((prev) => ({
      ...prev,
      images: (prev.images || []).filter((_, idx) => idx !== index),
    }));
  };

  return (
    <div className="fixed inset-0 bg-[#0a1f44]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <form
        onSubmit={onSave}
        className="bg-white border border-slate-200 max-w-2xl w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-4 rounded-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
        >
          <X size={18} />
        </button>

        <h3 className="text-base font-bold font-serif text-[#0a1f44] border-b pb-3 border-slate-100">
          {editingProject ? "Update Project Entry" : "Create New Project Entry"}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Client / Company Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. JPMorgan Chase"
              value={projectFormData.client || ""}
              onChange={(e) =>
                setProjectFormData({ ...projectFormData, client: e.target.value })
              }
              className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500 rounded"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Category *
            </label>
            <select
              value={projectFormData.category || "corporate"}
              onChange={(e) =>
                setProjectFormData({ ...projectFormData, category: e.target.value })
              }
              className="border border-slate-200 px-3 py-2 text-xs bg-white text-slate-700 focus:outline-none focus:border-blue-500 rounded"
            >
              <option value="corporate">Corporate Offices</option>
              <option value="retail">Retail</option>
              <option value="hospitality">Hospitality</option>
              <option value="residential">Residential</option>
              <option value="turnkey">Turnkey</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Location *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Bengaluru"
              value={projectFormData.location || ""}
              onChange={(e) =>
                setProjectFormData({ ...projectFormData, location: e.target.value })
              }
              className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Area Size & Unit *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 150,000 Sq. Ft."
              value={projectFormData.size || ""}
              onChange={(e) =>
                setProjectFormData({ ...projectFormData, size: e.target.value })
              }
              className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Duration (Weeks)
            </label>
            <input
              type="text"
              placeholder="e.g. 36 Weeks"
              value={projectFormData.duration || ""}
              onChange={(e) =>
                setProjectFormData({ ...projectFormData, duration: e.target.value })
              }
              className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500 rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Scope of Work *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Turnkey Fit-Out Project Management"
              value={projectFormData.scope || ""}
              onChange={(e) =>
                setProjectFormData({ ...projectFormData, scope: e.target.value })
              }
              className="border border-slate-200 px-3 py-2 text-xs bg-white focus:outline-none focus:border-blue-500 rounded"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Completion Status *
            </label>
            <select
              value={projectFormData.status || "Completed"}
              onChange={(e) =>
                setProjectFormData({ ...projectFormData, status: e.target.value })
              }
              className="border border-slate-200 px-3 py-2 text-xs bg-white text-slate-700 focus:outline-none focus:border-blue-500 rounded"
            >
              <option value="Completed">Completed</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-amber-50/70 border border-amber-200 p-3 rounded-lg">
          <input
            type="checkbox"
            id="featured-project"
            checked={!!projectFormData.featured}
            onChange={(e) =>
              setProjectFormData({ ...projectFormData, featured: e.target.checked })
            }
            className="w-4 h-4 text-amber-600 rounded border-slate-300 focus:ring-amber-500 cursor-pointer"
          />
          <label
            htmlFor="featured-project"
            className="text-xs font-bold text-[#0a1f44] cursor-pointer flex items-center gap-1.5"
          >
            <Star size={14} className="text-amber-500 fill-amber-500" />
            Mark as Featured Project (Showcase on Homepage & Highlights)
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
            Key Outcomes / Summary
          </label>
          <textarea
            rows={2}
            placeholder="Summary of construction outcomes..."
            value={projectFormData.outcomes || ""}
            onChange={(e) =>
              setProjectFormData({ ...projectFormData, outcomes: e.target.value })
            }
            className="border border-slate-200 px-3 py-2 text-xs bg-white resize-none focus:outline-none focus:border-blue-500 rounded"
          />
        </div>

        <div className="bg-slate-50 p-4 border border-slate-200 rounded space-y-3">
          <div className="flex flex-col gap-1">
            <label className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
              Project Showcase Images (Cloudinary / File)
            </label>
            <div className="flex items-center gap-2">
              <input
                type="file"
                multiple
                accept="image/*"
                id="project-file-input"
                onChange={handleProjectImageChange}
                className="hidden"
              />
              <label
                htmlFor="project-file-input"
                className="flex items-center gap-1.5 bg-white hover:bg-slate-100 text-slate-700 px-3 py-2 text-[10px] font-bold uppercase tracking-wider cursor-pointer border border-slate-300 transition-colors rounded shadow-sm"
              >
                <Upload size={12} /> Add Pictures
              </label>
            </div>
          </div>

          {projectFormData.images && projectFormData.images.length > 0 && (
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 pt-2 border-t border-slate-200">
              {projectFormData.images.map((img, idx) => (
                <div
                  key={idx}
                  className="relative w-full h-12 border border-slate-200 bg-slate-100 rounded overflow-hidden"
                >
                  <img
                    src={img}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeProjectImage(idx)}
                    className="absolute top-0.5 right-0.5 bg-rose-600 hover:bg-rose-800 text-white p-0.5 rounded-full transition-colors cursor-pointer"
                  >
                    <X size={9} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-slate-300 text-slate-600 text-[10px] font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-5 py-2 bg-[#005ea6] hover:bg-[#004b84] text-white text-[10px] font-bold uppercase tracking-wider disabled:bg-slate-400 transition-colors shadow-sm rounded cursor-pointer"
          >
            {isSubmitting
              ? "Saving..."
              : editingProject
              ? "Update Project"
              : "Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
