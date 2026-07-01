"use client";

import { useState } from "react";
import { Briefcase, MapPin, Clock, Search, Send, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function CareersPage() {
  const [expandedRole, setExpandedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    coverLetter: ""
  });
  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitted: false,
    error: ""
  });

  const roles = [
    {
      id: "site-engineer",
      title: "Senior Site Engineer (Civil & ID)",
      location: "Bengaluru / Gurugram",
      type: "Full-Time",
      experience: "5–8 Years",
      summary: "Responsible for managing daily site operations, contractor alignment, drawings execution, and physical snagging monitoring.",
      requirements: [
        "Bachelor's degree or Diploma in Civil Engineering / Construction Management.",
        "Proven experience overseeing corporate interior fit-out projects (>50k Sq. Ft.).",
        "Deep understanding of finishing execution, layout line-outs, and construction safety guidelines.",
        "Excellent communication skills to coordinate with architects, clients, and labor forces."
      ]
    },
    {
      id: "project-coordinator",
      title: "Project Coordinator & Technical Advisory",
      location: "Bengaluru",
      type: "Full-Time",
      experience: "3–6 Years",
      summary: "Responsible for bridging the communication gap between landlord layouts, design teams, services teams, and site supervisors.",
      requirements: [
        "Degree in Architecture, Interior Design, or Civil Engineering.",
        "Excellent proficiency in AutoCAD, MS Project, and project reporting dashboards.",
        "Strong understanding of MEP drawings, clash resolution processes, and material sample approval flows.",
        "Highly structured organization capability to run weekly stakeholder governance meetings."
      ]
    },
    {
      id: "qs-estimation",
      title: "QS & Estimation Engineer (BOQ Auditor)",
      location: "Bengaluru / Remote",
      type: "Full-Time",
      experience: "4–7 Years",
      summary: "Responsible for verifying client BOQs, drafting comparative statements, auditing variation logs, and managing budgets.",
      requirements: [
        "Degree/Diploma in Quantity Surveying or Civil Engineering.",
        "Deep knowledge of market material pricing indices, interior specification structures, and civil costing systems.",
        "Advanced proficiency in Microsoft Excel and measurement estimation tools.",
        "Experience auditing large-scale commercial contracts and variation claims."
      ]
    },
    {
      id: "site-supervisor",
      title: "Interior Fit-Out Site Supervisor",
      location: "NCR Region",
      type: "Full-Time",
      experience: "2–5 Years",
      summary: "Responsible for day-to-day quality inspection, materials receipt validation, and labor sequence monitoring on-site.",
      requirements: [
        "Diploma in Civil/Interior or equivalent training certifications.",
        "Strong eyes for finishing snags, alignment deviations, and material verification.",
        "Rigorous commitment to site safety compliance and zero-accident site policies.",
        "Ability to maintain daily project diary logs and material inward/outward registers."
      ]
    }
  ];

  const handleToggle = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      setFormState({ isSubmitting: false, submitted: false, error: "Please fill out all required fields." });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: "" });

    setTimeout(() => {
      setFormState({ isSubmitting: false, submitted: true, error: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        coverLetter: ""
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
            WORK WITH ICC
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-serif max-w-2xl leading-tight">
            Careers at <span className="font-extrabold text-blue-500">ICC</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-xl leading-relaxed">
            Join a multi-disciplinary technical team committed to quality, data-driven scheduling, and precision construction.
          </p>
        </div>
      </section>

      {/* JOBS LISTINGS & APPLICATION FORM */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: ACTIVE ROLES LIST */}
          <div className="flex-1 space-y-6 w-full">
            <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-6">
              Current Openings
            </h2>

            <div className="space-y-4">
              {roles.map((role) => {
                const isExpanded = expandedRole === role.id;
                return (
                  <div 
                    key={role.id}
                    className="bg-white border border-slate-200 transition-all duration-200 shadow-sm"
                  >
                    {/* Header trigger button */}
                    <button
                      onClick={() => handleToggle(role.id)}
                      className="w-full p-6 text-left flex items-start justify-between gap-4"
                    >
                      <div>
                        <h3 className="text-base font-bold text-[#0a1f44] group-hover:text-blue-600 transition-colors">
                          {role.title}
                        </h3>
                        {/* Meta tags */}
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-blue-500" />
                            {role.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={12} className="text-blue-500" />
                            {role.type}
                          </span>
                          <span className="bg-blue-50 text-[#003A70] px-2 py-0.5 text-[9px] font-bold">
                            Exp: {role.experience}
                          </span>
                        </div>
                      </div>
                      <span className="text-slate-400 mt-1">
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>

                    {/* Detailed info panel */}
                    {isExpanded && (
                      <div className="px-6 pb-6 border-t border-slate-100 pt-5 bg-slate-50/50">
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                          {role.summary}
                        </p>
                        <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#003A70] mb-2">
                          Key Requirements
                        </h4>
                        <ul className="space-y-2 mb-6">
                          {role.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                              <span className="text-blue-500 shrink-0 font-bold">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                        {/* Apply button link */}
                        <button
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, role: role.id }));
                            document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
                          }}
                          className="bg-[#003A70] hover:bg-[#004B91] text-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider"
                        >
                          Apply For This Role
                        </button>
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: APPLICATION FORM */}
          <div id="apply-form" className="w-full lg:w-[450px] bg-white border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-6">
              Apply Now
            </h2>

            {formState.submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 flex flex-col items-center text-center justify-center min-h-[300px]">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mb-4" />
                <h3 className="text-base font-bold mb-2">Application Received</h3>
                <p className="text-xs text-emerald-700 max-w-xs leading-relaxed">
                  Thank you for applying. Our talent acquisition team will review your profile credentials and reach back via email shortly.
                </p>
                <button
                  onClick={() => setFormState({ isSubmitting: false, submitted: false, error: "" })}
                  className="mt-6 text-xs font-bold text-blue-600 hover:text-blue-800 underline"
                >
                  Apply for another role
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {formState.error && (
                  <p className="text-xs text-rose-500 bg-rose-50 border border-rose-200 p-3">
                    {formState.error}
                  </p>
                )}

                {/* Name */}
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
                    placeholder="e.g. Sanjana Sen"
                    className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50"
                  />
                </div>

                {/* Email */}
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
                    placeholder="e.g. sanjana@mail.com"
                    className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50"
                  />
                </div>

                {/* Phone */}
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
                    placeholder="e.g. +91 90123 45678"
                    className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50"
                  />
                </div>

                {/* Target Role selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="role" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Position of Interest *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50 text-slate-700"
                  >
                    <option value="">Select Role</option>
                    <option value="site-engineer">Senior Site Engineer</option>
                    <option value="project-coordinator">Project Coordinator</option>
                    <option value="qs-estimation">QS & Estimation Engineer</option>
                    <option value="site-supervisor">Site Supervisor</option>
                    <option value="other">Other Position / Speculative Application</option>
                  </select>
                </div>

                {/* Cover letter info */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="coverLetter" className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Brief Statement / Cover Note
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Share a brief overview of your key qualifications or link to your online resume/portfolio..."
                    className="border border-slate-200 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 bg-slate-50 resize-none"
                  />
                </div>

                {/* CV prompt */}
                <p className="text-[10px] text-slate-400 italic">
                  Note: Please send your detailed PDF resume to <a href="mailto:careers@icc.co.in" className="text-blue-500 underline">careers@icc.co.in</a> reference code matching your position interest.
                </p>

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
                    mt-4
                  "
                >
                  {formState.isSubmitting ? "Sending..." : "Submit Application"}
                  <Send size={12} />
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
