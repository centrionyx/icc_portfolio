"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Building2, Save, X } from "lucide-react";

export default function ClientsSection({ clients = [], onRefresh }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    text: "",
    order: 0,
  });

  const handleOpenAdd = () => {
    setEditingClient(null);
    setFormData({
      name: "",
      text: "",
      order: clients.length,
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (client) => {
    setEditingClient(client);
    setFormData({
      name: client.name || "",
      text: client.text || "",
      order: client.order !== undefined ? client.order : 0,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.text.trim()) return;

    setIsSubmitting(true);
    const isEdit = !!editingClient;
    const url = "/api/admin/clients";
    const method = isEdit ? "PATCH" : "POST";
    const payload = isEdit
      ? { ...formData, id: editingClient._id }
      : formData;

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to save client logo.");
      setIsModalOpen(false);
      setEditingClient(null);
      if (onRefresh) await onRefresh();
    } catch (err) {
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this client from the marquee?")) return;
    try {
      const res = await fetch(`/api/admin/clients?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok && onRefresh) await onRefresh();
    } catch (err) {
      console.error("Delete client error:", err);
    }
  };

  return (
    <div className="space-y-4 pt-6 border-t border-slate-200/60">
      <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
        <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
          <Building2 size={14} className="text-[#005ea6]" /> HOMEPAGE CLIENTS MARQUEE (PARTNERS)
        </h4>
        <button
          type="button"
          onClick={handleOpenAdd}
          className="bg-[#005ea6] hover:bg-[#004b84] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
        >
          <Plus size={13} /> Add Client Logo
        </button>
      </div>

      {/* Grid List of Client Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {clients.map((c) => (
          <div
            key={c._id || c.text}
            className="p-3.5 border border-slate-200/80 rounded-2xl bg-white shadow-2xs flex items-center justify-between group hover:border-slate-300 transition-all"
          >
            <div>
              <p className="text-xs font-bold text-slate-800 line-clamp-1">{c.text || c.name}</p>
              {c.name && c.name !== c.text && (
                <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">{c.name}</p>
              )}
            </div>
            <div className="flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
              <button
                type="button"
                onClick={() => handleOpenEdit(c)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                title="Edit Client"
              >
                <Pencil size={12} />
              </button>
              <button
                type="button"
                onClick={() => handleDelete(c._id)}
                className="p-1.5 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                title="Delete Client"
              >
                <Trash2 size={12} />
              </button>
            </div>
          </div>
        ))}

        {clients.length === 0 && (
          <div className="col-span-full py-8 text-center text-xs text-slate-400 font-medium bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            No client logos configured yet. Click "Add Client Logo" to create one.
          </div>
        )}
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#0a1f44]/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 max-w-md w-full p-6 shadow-2xl relative rounded-2xl animate-fade-in space-y-4"
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="border-b border-slate-100 pb-2">
              <h4 className="text-sm font-bold text-slate-900">
                {editingClient ? "Edit Client Marquee Text" : "Add New Client to Marquee"}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Client text appears animated in the homepage bottom marquee strip.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Display Brand Text / Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Western Union"
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value, name: e.target.value })}
                  className="border border-slate-200 px-3 py-2 text-xs bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all font-semibold"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-3.5 py-1.5 border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-colors rounded-xl cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-1.5 bg-[#005ea6] hover:bg-[#004b84] text-white text-xs font-bold disabled:bg-slate-400 transition-colors shadow-sm rounded-xl cursor-pointer flex items-center gap-1.5"
              >
                <Save size={13} />
                {isSubmitting ? "Saving..." : "Save Client"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
