"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Building2, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ChevronDown,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Bengaluru",
    projectType: "Corporate Offices",
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
          location: "Bengaluru",
          projectType: "Corporate Offices",
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

  // High-quality commercial interior background from services page
  const PAGE_BG_IMAGE = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="w-full bg-[#f8fafc] flex flex-col font-sans">
      
      {/* 1. HERO & FORM SECTION WITH LIGHT BACKGROUND IMAGE */}
      <section className="relative w-full min-h-screen bg-slate-100 text-slate-900 pt-24 pb-16 px-4 sm:px-6 lg:px-10 flex flex-col items-center justify-center overflow-hidden">
        
        {/* LIGHT FULL-PAGE BACKGROUND IMAGE WITH SOFT GRADIENT */}
        <div className="absolute inset-0 z-0">
          <Image
            src={PAGE_BG_IMAGE}
            alt="Bright Modern Office Workspace Background"
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
          {/* Soft vignette gradient for legibility matching services page */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/20" />
        </div>

        {/* CORE LAYOUT CONTENT CONTAINER */}
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center justify-center">
          
          {/* MAIN HERO CONTENT AND FORM GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center w-full my-auto">
            
            {/* Left Text Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 text-white space-y-4 lg:pr-2"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-white tracking-tight leading-[1.08] drop-shadow-lg">
                Construct &amp; Transform <br />
                <span className="text-cyan-300 font-extrabold">Your Perfect Space</span>
              </h1>

              <p className="text-slate-100 text-xs sm:text-sm font-medium leading-relaxed max-w-md drop-shadow-md">
                Whether you're planning a corporate office fit-out or turn-key workspace advisory, our teams are here to guide you every step of the way.
              </p>

              {/* Quick Contact Badges */}
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-2 bg-slate-900/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-xs shadow-lg">
                  <Mail size={13} className="text-cyan-300" />
                  <span>mail@example.com</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-900/70 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20 text-xs shadow-lg">
                  <Phone size={13} className="text-cyan-300" />
                  <span>+91 *** *** ****</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: COMPACT FLOATING WHITE FORM CARD */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="lg:col-span-6 bg-white rounded-2xl lg:rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 text-slate-800 relative z-20"
            >
              <div className="mb-3">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-sans tracking-tight">
                  Connect with Us
                </h2>
                <p className="text-[10px] text-slate-400 mt-0.5 font-medium">
                  Please fill in all details for a quick response.
                </p>
              </div>

              {formState.submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-5 rounded-2xl flex flex-col items-center text-center justify-center min-h-[250px]">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-bounce" />
                  </div>
                  <h3 className="text-base font-bold mb-1 font-serif text-slate-900">Enquiry Received</h3>
                  <p className="text-xs text-slate-600 max-w-xs leading-relaxed font-light">
                    Thank you for reaching out. Our technical project team will review your specifications and contact you shortly.
                  </p>
                  <button
                    onClick={() => setFormState({ isSubmitting: false, submitted: false, error: "" })}
                    className="mt-4 text-xs font-bold text-[#005ea6] hover:underline font-mono"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  
                  {formState.error && (
                    <p className="text-[10px] text-rose-500 bg-rose-50 border border-rose-100 p-2 rounded-xl font-medium">
                      {formState.error}
                    </p>
                  )}

                  {/* Location Dropdown Field */}
                  <div className="space-y-0.5">
                    <label htmlFor="location" className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Project Location
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-2.5 text-slate-900 p-1 bg-slate-100 rounded-full">
                        <MapPin size={12} />
                      </div>
                      <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full pl-9 pr-7 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#005ea6] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="Bengaluru">Bengaluru, India</option>
                        <option value="Gurugram">Gurugram / NCR</option>
                        <option value="Mumbai">Mumbai, India</option>
                        <option value="Hyderabad">Hyderabad, India</option>
                        <option value="Remote">Pan-India / Remote</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-2.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Workspace Type Select */}
                  <div className="space-y-0.5">
                    <label htmlFor="projectType" className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Workspace Type
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-2.5 text-slate-900 p-1 bg-slate-100 rounded-full">
                        <Building2 size={12} />
                      </div>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full pl-9 pr-7 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:border-[#005ea6] focus:bg-white transition-all appearance-none cursor-pointer"
                      >
                        <option value="Corporate Offices">Corporate Office Fit-Out</option>
                        <option value="Retail Spaces">Retail &amp; Experience Store</option>
                        <option value="Hospitality">Hospitality &amp; Commercial</option>
                        <option value="Technical Advisory">MEP &amp; BOQ Advisory</option>
                      </select>
                      <ChevronDown size={13} className="absolute right-2.5 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Name & Phone Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="space-y-0.5">
                      <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#005ea6] focus:bg-white transition-all placeholder-slate-400"
                      />
                    </div>

                    <div className="space-y-0.5">
                      <label htmlFor="phone" className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 Phone"
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#005ea6] focus:bg-white transition-all placeholder-slate-400"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-0.5">
                    <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@company.com"
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#005ea6] focus:bg-white transition-all placeholder-slate-400"
                    />
                  </div>

                  {/* Optional Message */}
                  <div className="space-y-0.5">
                    <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Project Message / Scope
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Brief description of space size or requirements..."
                      className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-[#005ea6] focus:bg-white transition-all resize-none placeholder-slate-400"
                    />
                  </div>

                  {/* Action Button */}
                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="w-full bg-[#111827] hover:bg-[#1f2937] text-white py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-1"
                  >
                    {formState.isSubmitting ? "Submitting..." : "Send Consultation Request"}
                    <Send size={11} />
                  </button>
                </form>
              )}
            </motion.div>

          </div>

          {/* HIGH CONTRAST OFFICE LOCATION DETAILS BELOW FORM */}
          <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 p-3.5 rounded-xl shadow-xl flex items-start gap-3 text-white">
              <div className="p-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-lg">
                <MapPin size={16} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold uppercase tracking-wider text-cyan-200 font-mono">Headquarters</h4>
                <p className="text-xs font-semibold text-slate-100 mt-0.5 leading-snug">
                  6, Apurva Apartment, CME Colony, Near Bharat Bakery, New Sangavi, Pune - 411061, Maharashtra, India
                </p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 p-3.5 rounded-xl shadow-lg flex items-start gap-3 text-white">
              <div className="p-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-lg">
                <Mail size={16} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold uppercase tracking-wider text-cyan-200 font-mono">Email Enquiries</h4>
                <p className="text-xs font-semibold text-slate-100 mt-0.5">
                  info@iccindia.co.in
                </p>
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-lg flex items-start gap-3 text-white">
              <div className="p-2 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 rounded-lg">
                <Phone size={16} />
              </div>
              <div>
                <h4 className="text-[9px] font-bold uppercase tracking-wider text-cyan-200 font-mono">Direct Line</h4>
                <p className="text-xs font-semibold text-slate-100 mt-0.5">
                  +91 93569 81566
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 2. GOOGLE MAP SECTION BELOW THE HERO & FORM */}
      <section className="w-full bg-[#f8fafc] py-12 lg:py-16 px-4 sm:px-6 lg:px-10 border-t border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] block font-mono">
              OFFICE LOCATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mt-1">
              Find Us on Map
            </h3>
          </div>

          <div className="w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border-2 border-slate-200 shadow-lg relative">
            <iframe
              src="https://maps.google.com/maps?q=Apurva+apartment%2C+Ganesh+Nagar%2C+Sant+Tukaram+Nagar%2C+New+Sangavi%2C+Pimpri-Chinchwad%2C+Maharashtra+411061&t=&z=17&ie=UTF8&iwloc=B&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ICC Headquarters Exact Location Pin - Apurva Apartment, Pune"
            />
          </div>
        </div>
      </section>

    </div>
  );
}