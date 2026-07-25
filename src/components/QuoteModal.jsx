"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, CheckCircle2, ArrowRight } from "lucide-react";

export function QuoteModal() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Disable modal on admin pages
    if (pathname && pathname.startsWith("/admin")) return;

    // Check if user has already seen/closed the popup in this session
    const hasSeen = sessionStorage.getItem("icc_quote_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("icc_quote_seen", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("icc_quote_seen", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      setErrorMsg("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType || "General Consultation",
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        sessionStorage.setItem("icc_quote_dismissed", "true");
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setFormData({ name: "", phone: "", email: "", projectType: "", message: "" });
        }, 3000);
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Container matching design mockup */}
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[500px]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/80 md:bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN: Unsplash High-Quality Interior Design Image */}
        <div className="relative w-full md:w-1/2 min-h-[260px] md:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Interior Workspace Design"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 text-white">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-blue-300 mb-1">
              ICC Workspace Consultation
            </span>
            <h3 className="text-xl md:text-2xl font-serif font-light leading-tight">
              Transforming <span className="font-extrabold font-sans text-cyan-300">Workspaces</span> with Precision.
            </h3>
          </div>
        </div>

        {/* RIGHT COLUMN: Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-white">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#0a1f44]">Thank You!</h3>
              <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                Your consultation request has been received. Our expert project team will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight font-sans">
                  Get a quote
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Schedule a complimentary consultation with our workspace experts.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-600">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-md focus:outline-none focus:border-black text-gray-800 placeholder-gray-400 bg-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-md focus:outline-none focus:border-black text-gray-800 placeholder-gray-400 bg-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-md focus:outline-none focus:border-black text-gray-800 placeholder-gray-400 bg-white transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Budget / Project Scope (e.g. 50,000 Sq. Ft.)"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-md focus:outline-none focus:border-black text-gray-800 placeholder-gray-400 bg-white transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs sm:text-sm border border-gray-200 rounded-md focus:outline-none focus:border-black text-gray-800 placeholder-gray-400 bg-white resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black hover:bg-gray-900 text-white font-bold py-3.5 px-6 rounded-md text-xs tracking-widest uppercase transition-all duration-200 flex items-center justify-center gap-2 mt-2 shadow-md disabled:opacity-50"
                >
                  {loading ? "Sending..." : "SEND"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
