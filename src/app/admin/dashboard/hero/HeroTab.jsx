"use client";

import { useState } from "react";
import {
  Sparkles,
  RefreshCw,
  CheckCircle2,
  Image as ImageIcon,
  Upload,
  FileText,
  Award,
  Trash2,
  AlertTriangle
} from "lucide-react";

const FIXED_DEFAULT_STATS = [
  { value: "250+", label: "Projects Completed" },
  { value: "120+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "25+", label: "Expert Designers" },
];

export default function HeroTab({
  heroData,
  setHeroData,
  initialHeroData,
  setInitialHeroData,
  onRefresh,
}) {
  const [isSavingHero, setIsSavingHero] = useState(false);
  const [isUploadingHeroImg, setIsUploadingHeroImg] = useState(false);
  const [imageError, setImageError] = useState("");

  const currentStats = FIXED_DEFAULT_STATS.map((def, idx) => ({
    value: heroData?.stats?.[idx]?.value || def.value,
    label: def.label,
  }));

  const isHeroDirty = initialHeroData
    ? JSON.stringify({ ...heroData, stats: currentStats }) !== JSON.stringify(initialHeroData)
    : false;

  const handleUploadCloudinaryImage = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingHeroImg(true);
    setImageError("");
    const formData = new FormData();
    formData.append("file", file);
    formData.append("folder", "icc_hero");

    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        const data = await res.json();
        setHeroData((prev) => ({
          ...prev,
          images: [data.url],
        }));
        setImageError("");
      } else {
        const err = await res.json();
        alert(err.error || "Failed to upload image to Cloudinary");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading image to Cloudinary");
    } finally {
      setIsUploadingHeroImg(false);
      e.target.value = "";
    }
  };

  const handleRemoveHeroImage = () => {
    setHeroData((prev) => ({
      ...prev,
      images: [],
    }));
    setImageError("Hero background image is compulsory! Please select or upload an image.");
  };

  const handleSaveHeroSubmit = async (e) => {
    if (e) e.preventDefault();

    // Compulsory Background Image Validation Check
    if (!heroData?.images || !Array.isArray(heroData.images) || heroData.images.length === 0 || !heroData.images[0]) {
      setImageError("Hero background image is compulsory! Please select or upload an image.");
      alert("Validation Error: A background image is compulsory for the Hero Section!");
      return;
    }

    setIsSavingHero(true);
    setImageError("");

    const payload = {
      ...heroData,
      stats: currentStats,
    };

    try {
      const res = await fetch("/api/admin/hero", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setInitialHeroData(payload);
        setHeroData(payload);
        alert("Hero Section settings saved successfully!");
        if (onRefresh) await onRefresh();
      } else {
        const err = await res.json();
        const msg = err.error || "Failed to save Hero Section";
        setImageError(msg);
        alert(msg);
      }
    } catch (err) {
      console.error("Save Hero error:", err);
      alert("Error saving Hero Section settings");
    } finally {
      setIsSavingHero(false);
    }
  };

  const slide = (heroData?.slides && heroData.slides[0]) || {
    titleLine1: "Delivering Projects",
    titleLine2: "From Concept to Completion",
    description:
      "Interior Fit-Out Project Advisory | Execution | Coordination | Quality Management",
    primaryCta: { text: "Get a Consultation", href: "/contact" },
    secondaryCta: { text: "View Our Projects", href: "/projects" },
  };

  const updateSingleSlide = (updatedFields) => {
    setHeroData((prev) => {
      const currentSlide = (prev?.slides && prev.slides[0]) || {};
      return {
        ...prev,
        slides: [{ ...currentSlide, ...updatedFields }],
      };
    });
  };

  const updateStatItem = (index, field, val) => {
    const updatedStats = currentStats.map((item, idx) =>
      idx === index ? { ...item, [field]: val } : item
    );
    setHeroData((prev) => ({
      ...prev,
      stats: updatedStats,
    }));
  };

  const hasNoImage = !heroData?.images || heroData.images.length === 0 || !heroData.images[0];

  return (
    <div className="space-y-8">
      {/* Top Header Control Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-1">
        <div>
          <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <Sparkles size={18} className="text-[#005ea6]" /> Hero Section Settings
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Configure homepage background banner image, headlines, CTA action links, and 4 fixed stat callouts.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSaveHeroSubmit}
          disabled={!isHeroDirty || isSavingHero}
          className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer shrink-0 shadow-xs ${
            isHeroDirty && !isSavingHero
              ? "bg-[#005ea6] hover:bg-[#004b84] text-white"
              : "bg-slate-200 text-slate-400 cursor-not-allowed opacity-70"
          }`}
        >
          {isSavingHero ? (
            <RefreshCw size={14} className="animate-spin" />
          ) : (
            <CheckCircle2 size={14} />
          )}
          {isSavingHero
            ? "Saving..."
            : isHeroDirty
            ? "Save Hero Changes"
            : "No Changes to Save"}
        </button>
      </div>

      {/* Mandatory Image Error Warning Banner */}
      {(hasNoImage || imageError) && (
        <div className="p-4 bg-rose-50 border border-rose-200/80 rounded-2xl text-rose-700 text-xs font-semibold flex items-center gap-3 shadow-2xs">
          <AlertTriangle size={18} className="text-rose-600 shrink-0" />
          <div>
            <p className="font-bold text-rose-800">Compulsory Requirement Missing!</p>
            <p className="text-[11px] text-rose-600 mt-0.5">
              {imageError || "A background image is compulsory for the Hero Section. You cannot save the section without an active image."}
            </p>
          </div>
        </div>
      )}

      {/* Grid: 2 Columns for Background Image and Headlines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Cloudinary Background Image (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <ImageIcon size={14} className="text-[#005ea6]" /> HERO BACKGROUND <span className="text-rose-500">*</span>
            </h4>
            <label className="cursor-pointer bg-white hover:bg-slate-50 text-[#005ea6] border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs">
              {isUploadingHeroImg ? (
                <>
                  <RefreshCw size={13} className="animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Upload size={13} /> {heroData?.images?.length ? "Change Image" : "Upload Image"}
                </>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleUploadCloudinaryImage}
                disabled={isUploadingHeroImg}
                className="hidden"
              />
            </label>
          </div>

          <div>
            {heroData?.images && heroData.images.length > 0 && heroData.images[0] ? (
              <div className="relative w-full border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-100 aspect-video shadow-2xs group">
                <img
                  src={heroData.images[0]}
                  alt="Hero Background"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <button
                    type="button"
                    onClick={handleRemoveHeroImage}
                    className="px-3.5 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                  >
                    <Trash2 size={13} /> Remove Image
                  </button>
                </div>
                <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-lg font-mono font-bold border border-white/10">
                  Active Hero Image
                </span>
              </div>
            ) : (
              <div className="py-10 text-center bg-rose-50/50 border-2 border-dashed border-rose-300 rounded-2xl p-6">
                <AlertTriangle size={32} className="mx-auto mb-2 text-rose-500" />
                <p className="text-xs font-bold text-rose-800">No Image Selected!</p>
                <p className="text-[11px] text-rose-600 mt-1 max-w-xs mx-auto">
                  A background image is compulsory. Click the button above to upload a Cloudinary picture.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Hero Headlines & CTA Links (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="border-b border-slate-200/60 pb-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
              <FileText size={14} className="text-[#005ea6]" /> HEADLINE & TEXT CONTENT
            </h4>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Title Line 1 *
                </label>
                <input
                  type="text"
                  value={slide.titleLine1 || ""}
                  onChange={(e) =>
                    updateSingleSlide({ titleLine1: e.target.value })
                  }
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs font-semibold"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Title Line 2 (Highlighted Accent) *
                </label>
                <input
                  type="text"
                  value={slide.titleLine2 || ""}
                  onChange={(e) =>
                    updateSingleSlide({ titleLine2: e.target.value })
                  }
                  className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs font-semibold text-[#005ea6]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                Subheading Description *
              </label>
              <textarea
                rows={3}
                value={slide.description || ""}
                onChange={(e) =>
                  updateSingleSlide({ description: e.target.value })
                }
                className="w-full border border-slate-200 px-3.5 py-2.5 text-xs bg-white focus:outline-none focus:border-blue-500 rounded-xl transition-all shadow-2xs resize-none"
              />
            </div>

            {/* CTA Buttons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              <div className="p-3.5 bg-white border border-slate-200/80 rounded-xl space-y-2 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#005ea6] font-mono block">
                  Primary Action Button
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Button Label"
                    value={slide.primaryCta?.text || ""}
                    onChange={(e) =>
                      updateSingleSlide({
                        primaryCta: {
                          ...(slide.primaryCta || {}),
                          text: e.target.value,
                        },
                      })
                    }
                    className="border border-slate-200 px-2.5 py-1.5 text-xs rounded-lg font-medium"
                  />
                  <input
                    type="text"
                    placeholder="URL Href"
                    value={slide.primaryCta?.href || ""}
                    onChange={(e) =>
                      updateSingleSlide({
                        primaryCta: {
                          ...(slide.primaryCta || {}),
                          href: e.target.value,
                        },
                      })
                    }
                    className="border border-slate-200 px-2.5 py-1.5 text-xs rounded-lg font-mono"
                  />
                </div>
              </div>

              <div className="p-3.5 bg-white border border-slate-200/80 rounded-xl space-y-2 shadow-2xs">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 font-mono block">
                  Secondary Action Button
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Button Label"
                    value={slide.secondaryCta?.text || ""}
                    onChange={(e) =>
                      updateSingleSlide({
                        secondaryCta: {
                          ...(slide.secondaryCta || {}),
                          text: e.target.value,
                        },
                      })
                    }
                    className="border border-slate-200 px-2.5 py-1.5 text-xs rounded-lg font-medium"
                  />
                  <input
                    type="text"
                    placeholder="URL Href"
                    value={slide.secondaryCta?.href || ""}
                    onChange={(e) =>
                      updateSingleSlide({
                        secondaryCta: {
                          ...(slide.secondaryCta || {}),
                          href: e.target.value,
                        },
                      })
                    }
                    className="border border-slate-200 px-2.5 py-1.5 text-xs rounded-lg font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Hero Statistics Section (4 Fixed Metrics Cards) */}
      <div className="space-y-4 pt-4 border-t border-slate-200/60">
        <div className="border-b border-slate-200/60 pb-2">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
            <Award size={14} className="text-[#005ea6]" /> FIXED HOMEPAGE STATISTICS (4 METRICS)
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 border border-slate-200/80 rounded-2xl bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#005ea6] block font-mono">
                  Metric #{idx + 1}
                </span>
                <p className="text-xs font-bold text-slate-800 mt-1 leading-snug">{stat.label}</p>
              </div>

              <div className="mt-3">
                <label className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1 font-mono">
                  Display Value
                </label>
                <input
                  type="text"
                  value={stat.value || ""}
                  onChange={(e) => updateStatItem(idx, "value", e.target.value)}
                  className="w-full border border-slate-200 px-3 py-1.5 text-sm font-extrabold text-[#005ea6] bg-slate-50 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-center font-mono"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
