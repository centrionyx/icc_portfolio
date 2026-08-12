"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitted: false,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setFormState({ isSubmitting: false, submitted: false, error: "Please fill out all required fields." });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: "" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState({ isSubmitting: false, submitted: true, error: "" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
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
    <div className="w-full bg-[#f8fafc] text-slate-900 pb-20 font-sans">
      
      {/* ── PAGE HERO ── */}
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear about your project. Get in touch with our expert fit-out team."
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── FULL WIDTH CONTACT SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: PURE IMAGE BACKGROUND (NO CARD, NO BORDER, NO OVERLAY, NO RADIUS) ── */}
          <div className="lg:col-span-5 relative flex flex-col justify-center p-6 sm:p-8 text-slate-900 overflow-hidden">
            {/* Pure Background Image */}
            <img
              src="https://images.unsplash.com/photo-1667312939978-64cf31718a6e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Background space"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Minimal Legibility Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/40 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3 drop-shadow-sm">
                Let's Talk About <br />
                Your Dream Space
              </h2>

              <p className="text-slate-800 text-sm font-semibold leading-relaxed mb-8 max-w-sm">
                We'd love to hear about your project. Get in touch with us and our team will get back to you shortly.
              </p>

              {/* 4 Contact Info Items with Unboxed Blue Icons */}
              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent shrink-0 pt-0.5">
                    <Phone size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Phone</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">+91 93569 81566</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent shrink-0 pt-0.5">
                    <Mail size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Email</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">info@iccindia.co.in</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent shrink-0 pt-0.5">
                    <MapPin size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Office Address</h4>
                    <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5 max-w-xs leading-snug">
                      6, Apurva Apartment, CME Colony, Near Bharat Bakery, New Sangavi, Pune - 411061, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent shrink-0 pt-0.5">
                    <Clock size={22} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Timings</h4>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM ── */}
          <div className="lg:col-span-7 flex flex-col justify-center py-4 px-2 sm:px-4">
            {formState.submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl flex flex-col items-center text-center justify-center min-h-[380px]">
                <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4 text-emerald-600">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-6">
                  Thank you for contacting ICC. Our technical spatial team will review your enquiry and reach out shortly.
                </p>
                <button
                  onClick={() => setFormState({ isSubmitting: false, submitted: false, error: "" })}
                  className="px-6 py-2.5 bg-brand-accent text-white text-xs font-bold rounded-xl hover:bg-[#004B84] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {formState.error && (
                  <p className="text-xs text-rose-600 bg-rose-50 border border-rose-100 p-3 rounded-xl font-medium">
                    {formState.error}
                  </p>
                )}

                {/* Input: Your Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium"
                  />
                </div>

                {/* Input: Your Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium"
                  />
                </div>

                {/* Input: Phone Number */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium"
                  />
                </div>

                {/* Input: Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all font-medium"
                  />
                </div>

                {/* Textarea: Your Message */}
                <div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none font-medium"
                  />
                </div>

                {/* Submit Button: Send Message (Brand Blue) */}
                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full py-4 bg-brand-accent hover:bg-[#004B84] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all duration-300 hover:scale-[1.01] cursor-pointer uppercase tracking-wider mt-2"
                >
                  {formState.isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ── GOOGLE MAP SECTION BELOW ── */}
        <div className="mt-14 w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden border border-slate-200/80 shadow-md">
          <iframe
            src="https://maps.google.com/maps?q=Apurva+apartment%2C+Ganesh+Nagar%2C+Sant+Tukaram+Nagar%2C+New+Sangavi%2C+Pimpri-Chinchwad%2C+Maharashtra+411061&t=&z=17&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ICC Headquarters Location Pin"
          />
        </div>

      </section>

    </div>
  );
}