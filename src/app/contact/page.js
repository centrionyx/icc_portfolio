"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType) {
      setFormState({ isSubmitting: false, submitted: false, error: "Please fill out all required fields." });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: "" });

    // Simulate API request
    setTimeout(() => {
      setFormState({ isSubmitting: false, submitted: true, error: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      
      {/* PAGE HEADER SECTION */}
      <section className="w-full bg-[#0a1f44] text-white py-16 lg:py-20 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-serif max-w-2xl leading-tight">
            Contact <span className="font-extrabold text-blue-500">ICC</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-xl leading-relaxed">
            Reach out to discuss your upcoming project requirements, costing validation, or design audit scopes.
          </p>
        </div>
      </section>

      {/* CORE CONTACT & FORM SECTION */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT COLUMN: CONTACT FORM */}
          <div className="flex-1 bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-6">
              Submit an Enquiry
            </h2>

            {formState.submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 flex flex-col items-center text-center justify-center min-h-[300px]">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-base font-bold mb-2">Enquiry Submitted Successfully</h3>
                <p className="text-xs text-emerald-700 max-w-xs leading-relaxed">
                  Thank you for reaching out. A technical advisory representative will review your request and call you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState({ isSubmitting: false, submitted: false, error: "" })}
                  className="mt-6 text-xs font-bold text-blue-600 hover:text-blue-800 underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {formState.error && (
                  <p className="text-xs text-rose-500 bg-rose-55 border border-rose-200 p-3 font-semibold">
                    {formState.error}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
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
                      className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
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
                      className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
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
                      className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50"
                    />
                  </div>

                  {/* Project Type select */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="projectType" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Type of Project *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50 text-slate-700"
                    >
                      <option value="">Select Project Type</option>
                      <option value="corporate">Corporate Offices</option>
                      <option value="retail">Retail Space</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="residential">High-End Residential</option>
                      <option value="consultancy">Technical Advisory Only</option>
                    </select>
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your fit-out space details, size and expected timelines..."
                    className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="
                    w-full
                    bg-[#003A70]
                    hover:bg-[#004B91]
                    disabled:bg-slate-400
                    text-white
                    py-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-widest
                    transition-all
                    flex
                    items-center
                    justify-center
                    gap-2
                  "
                >
                  {formState.isSubmitting ? "Sending..." : "Submit Enquiry"}
                  <Send size={12} />
                </button>

              </form>
            )}
          </div>

          {/* RIGHT COLUMN: DIRECT CONTACT DETAILS */}
          <div className="w-full lg:w-[450px] flex flex-col gap-8">
            
            {/* Contact details card */}
            <div className="bg-white border border-slate-200 p-8 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#003A70] mb-6">
                  Office Information
                </h3>

                <ul className="space-y-6">
                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Email Address</p>
                      <a href="mailto:info@icc.co.in" className="text-xs font-bold text-[#0a1f44] hover:text-blue-500 transition-colors">
                        info@icc.co.in
                      </a>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Phone Lines</p>
                      <a href="tel:+918045678900" className="text-xs font-bold text-[#0a1f44] hover:text-blue-500 transition-colors">
                        +91 80 4567 8900
                      </a>
                    </div>
                  </li>

                  {/* Addresses */}
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Registered Address</p>
                      <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                        ICC Tech Park, Level 4, 100 Feet Road, Indiranagar, Bengaluru, KA - 560038
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">NCR Branch Office</p>
                      <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                        Cyber City, Building 10-C, 12th Floor, DLF Phase 2, Gurugram, HR - 122002
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Working hours banner */}
              <div className="border-t border-slate-100 pt-6 mt-8">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Working Hours</p>
                <p className="text-xs font-bold text-[#0a1f44] mt-1">Monday – Saturday: 9:00 AM – 6:30 PM</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* MAP EMBED */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 pb-4">
        <div className="w-full h-[400px] border border-slate-200 shadow-sm overflow-hidden relative bg-slate-200">
          {/* Stylized high-contrast Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.978168231016!2d77.6402434!3d12.9732731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34522a!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(1) contrast(1.1) invert(0)" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ICC Head Office Location Map"
          />
        </div>
      </section>

    </div>
  );
}