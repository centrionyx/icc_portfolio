"use client";

import { X } from "lucide-react";

export default function JobModal({
  isOpen,
  onClose,
  editingJob,
  jobFormData,
  setJobFormData,
  onSave,
  isSubmitting,
}) {
  if (!isOpen) return null;

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
            {editingJob ? "Modify Job Opening Parameters" : "Create New Job Opening"}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">
            Fill in position details, department, requirements, and publishing status.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              Position Title *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Senior Site Engineer"
              value={jobFormData.title || ""}
              onChange={(e) =>
                setJobFormData({ ...jobFormData, title: e.target.value })
              }
              className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              Department / Domain *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Execution & Fit-Out"
              value={jobFormData.department || ""}
              onChange={(e) =>
                setJobFormData({ ...jobFormData, department: e.target.value })
              }
              className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              Office Location *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Bengaluru"
              value={jobFormData.location || ""}
              onChange={(e) =>
                setJobFormData({ ...jobFormData, location: e.target.value })
              }
              className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              Experience Needed *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 5–8 Years"
              value={jobFormData.experience || ""}
              onChange={(e) =>
                setJobFormData({ ...jobFormData, experience: e.target.value })
              }
              className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
              Employment Type
            </label>
            <select
              value={jobFormData.type || "Full-Time"}
              onChange={(e) =>
                setJobFormData({ ...jobFormData, type: e.target.value })
              }
              className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white text-slate-700 focus:outline-none focus:border-blue-500 rounded-xl transition-all cursor-pointer"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
            Role Summary *
          </label>
          <textarea
            rows={2}
            required
            placeholder="Brief summary of candidate scope and responsibilities..."
            value={jobFormData.summary || ""}
            onChange={(e) =>
              setJobFormData({ ...jobFormData, summary: e.target.value })
            }
            className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white resize-none focus:outline-none focus:border-blue-500 rounded-xl transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
            Key Requirements (One requirement per line)
          </label>
          <textarea
            rows={4}
            placeholder="Requirement line 1&#10;Requirement line 2&#10;Requirement line 3..."
            value={jobFormData.requirements || ""}
            onChange={(e) =>
              setJobFormData({ ...jobFormData, requirements: e.target.value })
            }
            className="border border-slate-200 px-3.5 py-2.5 text-xs bg-slate-50/50 focus:bg-white resize-none focus:outline-none focus:border-blue-500 rounded-xl transition-all"
          />
        </div>

        <div className="flex items-center gap-2 pt-1">
          <input
            type="checkbox"
            id="active"
            checked={jobFormData.active !== false}
            onChange={(e) =>
              setJobFormData({ ...jobFormData, active: e.target.checked })
            }
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
          />
          <label
            htmlFor="active"
            className="text-xs font-semibold text-slate-700 cursor-pointer select-none"
          >
            Active (Publish immediately to candidate career portal)
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
            {isSubmitting ? "Saving..." : "Save Job Opening"}
          </button>
        </div>
      </form>
    </div>
  );
}
