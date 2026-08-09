"use client";

import { useState } from "react";
import {
  Users,
  RefreshCw,
  CheckCircle2,
  Upload,
  Award,
  Plus,
  Trash2,
  Mail,
  Briefcase
} from "lucide-react";

export default function AboutTab({
  aboutData,
  setAboutData,
  initialAboutData,
  setInitialAboutData,
  onRefresh,
}) {
  const [isSavingAbout, setIsSavingAbout] = useState(false);
  const [isUploadingFounderImg, setIsUploadingFounderImg] = useState(false);

  const isAboutDirty = initialAboutData
    ? JSON.stringify(aboutData) !== JSON.stringify(initialAboutData)
    : false;

  const handleUploadFounderImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingFounderImg(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "icc_about");

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setAboutData((prev) => ({
          ...prev,
          founderImage: data.url,
        }));
      } else {
        const err = await res.json();
        alert(err.error || "Failed to upload image to Cloudinary");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading image to Cloudinary");
    } finally {
      setIsUploadingFounderImg(false);
      e.target.value = "";
    }
  };

  const handleSaveAboutSubmit = async (e) => {
    if (e) e.preventDefault();
    setIsSavingAbout(true);

    try {
      const res = await fetch("/api/admin/about", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(aboutData),
      });

      if (res.ok) {
        setInitialAboutData(aboutData);
        alert("About Us settings saved successfully!");
        if (onRefresh) await onRefresh();
      } else {
        const err = await res.json();
        alert(err.error || "Failed to save About Us section");
      }
    } catch (err) {
      console.error("Error saving about:", err);
      alert("Error saving About Us settings.");
    } finally {
      setIsSavingAbout(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Controls Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-1">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Users size={18} className="text-[#005ea6]" /> About Us & Founder Profile
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage Founder leadership bio, Cloudinary photo, experience metrics, and key execution milestones.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveAboutSubmit}
          disabled={!isAboutDirty || isSavingAbout}
          className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-xs ${
            isAboutDirty && !isSavingAbout
              ? "bg-[#005ea6] hover:bg-[#004b84] text-white"
              : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-70"
          }`}
        >
          {isSavingAbout ? (
            <RefreshCw size={14} className="animate-spin" />
          ) : (
            <CheckCircle2 size={14} />
          )}
          {isSavingAbout
            ? "Saving..."
            : isAboutDirty
            ? "Save About Changes"
            : "No Changes to Save"}
        </button>
      </div>

      {/* 1. Founder Profile & Photo Layout */}
      <div className="space-y-4">
        <div className="border-b border-slate-200/60 pb-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
            <Users size={14} className="text-[#005ea6]" /> FOUNDER DETAILS & EXECUTIVE BIO
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Photo Cloudinary Uploader (3 Cols) */}
          <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center p-5 bg-white border border-slate-200/80 rounded-2xl shadow-2xs space-y-4">
            <div className="relative w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#005ea6]/30 shadow-md bg-slate-100 group">
              <img
                src={aboutData?.founderImage || "/founder.png"}
                alt={aboutData?.founderName || "Founder"}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <label className="cursor-pointer bg-white hover:bg-slate-50 text-[#005ea6] border border-slate-200 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs text-center w-full justify-center">
              {isUploadingFounderImg ? (
                <>
                  <RefreshCw size={13} className="animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Upload size={13} /> Upload Photo
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadFounderImage}
                disabled={isUploadingFounderImg}
                className="hidden"
              />
            </label>
          </div>

          {/* Text Fields (9 Cols) */}
          <div className="md:col-span-8 lg:col-span-9 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Founder Name *
                </label>
                <input
                  type="text"
                  value={aboutData?.founderName || ""}
                  onChange={(e) =>
                    setAboutData({ ...aboutData, founderName: e.target.value })
                  }
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs font-semibold text-slate-900"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Role / Designation *
                </label>
                <input
                  type="text"
                  value={aboutData?.founderRole || "Founder"}
                  onChange={(e) =>
                    setAboutData({ ...aboutData, founderRole: e.target.value })
                  }
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs font-semibold text-slate-900"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Email Address
              </label>
              <input
                type="email"
                value={aboutData?.founderEmail || ""}
                onChange={(e) =>
                  setAboutData({ ...aboutData, founderEmail: e.target.value })
                }
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Founder Executive Biography *
              </label>
              <textarea
                rows={4}
                value={aboutData?.founderBio || ""}
                onChange={(e) =>
                  setAboutData({ ...aboutData, founderBio: e.target.value })
                }
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Years Experience (e.g. 20)
                </label>
                <input
                  type="text"
                  value={aboutData?.founderExperience || "20"}
                  onChange={(e) =>
                    setAboutData({
                      ...aboutData,
                      founderExperience: e.target.value,
                    })
                  }
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs font-semibold"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Delivered Area Metric (Auto Calculated)
                </label>
                {(() => {
                  let totalSqFt = 0;
                  (aboutData?.careerDeliveries || []).forEach((item) => {
                    if (!item || !item.size) return;
                    const sizeStr = item.size.toLowerCase();
                    const val = parseFloat(
                      sizeStr.replace(/,/g, "").match(/\d+(\.\d+)?/)?.[0] || 0
                    );

                    if (sizeStr.includes("lakh")) {
                      totalSqFt += val * 100000;
                    } else if (
                      sizeStr.includes("sq. m") ||
                      sizeStr.includes("sq m") ||
                      sizeStr.includes("sqm")
                    ) {
                      totalSqFt += val * 10.7639;
                    } else if (sizeStr.includes("acre")) {
                      totalSqFt += val * 43560;
                    } else if (sizeStr.includes("yd")) {
                      totalSqFt += val * 9;
                    } else {
                      totalSqFt += val;
                    }
                  });

                  let calcVal = "0 Sq. Ft.";
                  if (totalSqFt >= 1000000) {
                    calcVal = `${(totalSqFt / 1000000).toFixed(1)}M`;
                  } else if (totalSqFt >= 100000) {
                    calcVal = `${(totalSqFt / 100000).toFixed(1)} Lakh`;
                  } else if (totalSqFt > 0) {
                    calcVal = `${Math.round(
                      totalSqFt
                    ).toLocaleString()} Sq. Ft.`;
                  }

                  return (
                    <div className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-blue-50/80 text-[#005ea6] font-bold rounded-xl flex items-center justify-between shadow-2xs">
                      <span>{calcVal}</span>
                      <span className="text-[9px] text-blue-600 font-mono font-bold uppercase tracking-wider">
                        Auto Summed
                      </span>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Career Deliveries Section */}
      <div className="space-y-4 pt-4 border-t border-slate-200/60">
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
            <Award size={14} className="text-[#005ea6]" /> FOUNDER CAREER KEY DELIVERIES
          </h4>

          <button
            type="button"
            onClick={() => {
              setAboutData((prev) => ({
                ...prev,
                careerDeliveries: [
                  ...(prev?.careerDeliveries || []),
                  { client: "New Client", size: "1.0 Lakh Sq. Ft." },
                ],
              }));
            }}
            className="px-3.5 py-2 bg-white hover:bg-slate-50 text-[#005ea6] text-xs font-bold rounded-xl border border-slate-200 flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs"
          >
            <Plus size={14} /> Add Milestone
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(aboutData?.careerDeliveries || []).map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-slate-200/80 rounded-2xl bg-white shadow-2xs space-y-3 relative group"
            >
              <div className="flex justify-between items-start">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#005ea6] font-mono">
                  Milestone #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setAboutData((prev) => ({
                      ...prev,
                      careerDeliveries: (prev?.careerDeliveries || []).filter(
                        (_, cIdx) => cIdx !== idx
                      ),
                    }));
                  }}
                  className="p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                  title="Remove Milestone"
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5 font-mono">
                    Client Name
                  </label>
                  <input
                    type="text"
                    value={item.client || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setAboutData((prev) => {
                        const updated = [...(prev?.careerDeliveries || [])];
                        updated[idx] = { ...updated[idx], client: val };
                        return { ...prev, careerDeliveries: updated };
                      });
                    }}
                    className="w-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-900 bg-slate-50/50 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5 font-mono">
                    Area Size & Unit
                  </label>
                  <input
                    type="text"
                    value={item.size || ""}
                    onChange={(e) => {
                      const val = e.target.value;
                      setAboutData((prev) => {
                        const updated = [...(prev?.careerDeliveries || [])];
                        updated[idx] = { ...updated[idx], size: val };
                        return { ...prev, careerDeliveries: updated };
                      });
                    }}
                    className="w-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50/50 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
