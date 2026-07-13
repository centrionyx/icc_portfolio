"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitted: false,
    error: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType) {
      setFormState({ isSubmitting: false, submitted: false, error: "Please fill out all required fields." });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: "" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, submitted: true, error: "" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: ""
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit enquiry.");
      }
    } catch (err) {
      setFormState({ isSubmitting: false, submitted: false, error: err.message });
    }
  };

  return (
    <div className="w-full bg-[#0a1f44] text-white pb-20 relative overflow-hidden">
      
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Hero Banner Grid Header */}
      <section className="w-full pt-20 pb-16 relative border-b border-white/5">
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative z-10 text-center md:text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#3b82f6] mb-3 block font-mono">
            // CLIENT ENGAGEMENT CENTER
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight font-serif max-w-4xl leading-tight">
            Partner with <span className="font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-white bg-clip-text text-transparent">ICC Advisory</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-2xl leading-relaxed">
            Connect with our technical execution desks to discuss scope validation, commercial cost estimation, or site audit coordinates.
          </p>
        </div>
      </section>

      {/* Core Contact Area */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-stretch">

          {/* Left Column: Glassmorphic Blueprint Form */}
          <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-white font-serif">Submit Project Details</h2>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono">// FIELDS MARKED WITH * ARE MANDATORY</p>
                </div>
                <HelpCircle size={18} className="text-slate-500" />
              </div>

              {formState.submitted ? (
                <div className="bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 p-8 flex flex-col items-center text-center justify-center min-h-[350px] rounded-xl">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mb-5 animate-pulse" />
                  <h3 className="text-base font-bold mb-2">Enquiry Successfully Dispatched</h3>
                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    Thank you. A senior project advisor will review your site specifications and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState({ isSubmitting: false, submitted: false, error: "" })}
                    className="mt-8 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg border border-white/10 transition-all"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {formState.error && (
                    <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 p-4 font-semibold rounded-lg font-mono">
                      [ERROR] {formState.error}
                    </p>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rohan Sharma"
                        className="bg-[#0c244b] border border-white/10 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rohan@company.com"
                        className="bg-[#0c244b] border border-white/10 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="bg-[#0c244b] border border-white/10 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all font-medium"
                      />
                    </div>

                    {/* Project Type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="projectType" className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">
                        Type of Project *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="bg-[#0c244b] border border-white/10 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-slate-300 focus:outline-none transition-all font-medium"
                      >
                        <option value="" className="bg-[#0a1f44]">Select Project Type</option>
                        <option value="corporate" className="bg-[#0a1f44]">Corporate Offices</option>
                        <option value="retail" className="bg-[#0a1f44]">Retail Space</option>
                        <option value="hospitality" className="bg-[#0a1f44]">Hospitality</option>
                        <option value="residential" className="bg-[#0a1f44]">High-End Residential</option>
                        <option value="consultancy" className="bg-[#0a1f44]">Technical Advisory Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[9px] font-extrabold uppercase tracking-widest text-slate-400 font-mono">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your fit-out space details, size (Sq Ft), location and expected milestones..."
                      className="bg-[#0c244b] border border-white/10 focus:border-blue-500 rounded-lg px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none transition-all font-medium resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="w-full bg-[#3b82f6] hover:bg-[#2563eb] disabled:bg-slate-700 disabled:text-slate-500 text-white py-4 rounded-lg text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                  >
                    {formState.isSubmitting ? "Dispatching..." : "Submit Enquiry Request"}
                    <Send size={13} />
                  </button>

                </form>
              )}
            </div>
          </div>

          {/* Right Column: Office Info & Visual Guides */}
          <div className="w-full lg:w-[460px] flex flex-col gap-8">

            {/* Office Locations Info Card */}
            <div className="bg-[#0c244b]/50 border border-white/5 p-8 rounded-2xl shadow-xl flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#3b82f6] mb-8 font-mono">
                  // OFFICE COORDINATES
                </h3>

                <ul className="space-y-7">
                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Email Address</p>
                      <a href="mailto:info@icc.co.in" className="text-xs font-bold text-white hover:text-blue-400 transition-colors mt-1 block">
                        info@icc.co.in
                      </a>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Phone Lines</p>
                      <a href="tel:+918045678900" className="text-xs font-bold text-white hover:text-blue-400 transition-colors mt-1 block">
                        +91 80 4567 8900
                      </a>
                    </div>
                  </li>

                  {/* Addresses */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">Registered HQ</p>
                      <p className="text-xs font-light text-slate-300 leading-relaxed mt-1">
                        ICC Tech Park, Level 4, 100 Feet Road, Indiranagar, Bengaluru, KA - 560038
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/10 border border-white/5 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">NCR Branch Desk</p>
                      <p className="text-xs font-light text-slate-300 leading-relaxed mt-1">
                        Cyber City, Building 10-C, 12th Floor, DLF Phase 2, Gurugram, HR - 122002
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Working hours & compliance */}
              <div className="border-t border-white/5 pt-6 mt-8 flex items-center justify-between text-xs text-slate-400">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-widest text-[#3b82f6] font-mono">Working Hours</p>
                  <p className="text-white font-bold mt-1 text-[11px]">Mon – Sat: 9:00 AM – 6:30 PM</p>
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-300">ISO Verified</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Styled Embed Map Frame */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 pb-12">
        <div className="w-full h-[400px] border-2 border-white/10 rounded-2xl overflow-hidden relative shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.978168231016!2d77.6402434!3d12.9732731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34522a!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%) opacity(85%)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ICC HQ Map Coordinates"
          />
        </div>
      </section>

    </div>
  );
}