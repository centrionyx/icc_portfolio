"use client";

import { useState, useEffect } from "react";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Search, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Award,
  ShieldCheck,
  TrendingUp,
  Users,
  Paperclip,
  X
} from "lucide-react";

export default function CareersPage() {
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRole, setExpandedRole] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("All");
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    coverLetter: "",
    resumeName: "",
    resumeContent: ""
  });
  const [formState, setFormState] = useState({
    isSubmitting: false,
    submitted: false,
    error: ""
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        if (res.ok) {
          const data = await res.json();
          setRoles(data);
        }
      } catch (err) {
        console.error("Failed to load job listings:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-cyan-400" />,
      title: "Industry Leadership",
      description: "Collaborate on award-winning design-build workspaces for fortune-500 brands."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
      title: "Rigorous Standards",
      description: "Work within a technical environment prioritizing precise scheduling and quality execution."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
      title: "Accelerated Growth",
      description: "Fast-track your construction or design career with challenging leadership assignments."
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: "Technical Culture",
      description: "Join structural engineers, MEP specialists, and site planners who speak data and blueprints."
    }
  ];

  const handleToggle = (id) => {
    setExpandedRole(expandedRole === id ? null : id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const processFile = (file) => {
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10MB limit.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(file);
      setFormData((prev) => ({
        ...prev,
        resumeName: file.name,
        resumeContent: reader.result // Base64 data URL
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFormData((prev) => ({
      ...prev,
      resumeName: "",
      resumeContent: ""
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.role) {
      setFormState({ isSubmitting: false, submitted: false, error: "Please fill out all required fields." });
      return;
    }

    setFormState({ isSubmitting: true, submitted: false, error: "" });

    try {
      const response = await fetch("/api/careers", {
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
          role: "",
          coverLetter: "",
          resumeName: "",
          resumeContent: ""
        });
        setSelectedFile(null);
      } else {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to submit application");
      }
    } catch (err) {
      setFormState({ isSubmitting: false, submitted: false, error: err.message || "An unexpected error occurred." });
    }
  };

  // Filter logic
  const filteredRoles = roles.filter(role => {
    const matchesSearch = role.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          role.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          role.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = filterLocation === "All" || 
                            role.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="w-full bg-[#f8fafc] text-[#0a1f44]">
      
      {/* 1. HERO SECTION WITH RICH AESTHETICS */}
      <section className="relative w-full bg-[#0a1f44] text-white py-24 lg:py-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-blue-600/20 to-transparent blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-cyan-600/15 to-transparent blur-[110px] pointer-events-none" />
        
        {/* Blueprint Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="w-16 h-[3px] bg-gradient-to-r from-[#005ea6] to-cyan-400 mb-6 rounded-full" />
          
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 block mb-4 font-mono">
            // JOIN OUR CORE EXECUTION TEAM
          </span>
          
          <h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] max-w-3xl mb-6 font-serif"
          >
            Construct the Future of <br className="hidden sm:inline" />
            <span 
              className="font-black bg-gradient-to-r from-[#60a5fa] via-[#22d3ee] to-white bg-clip-text text-transparent"
            >
              Enterprise Workspaces
            </span>
          </h1>
          
          <p className="text-slate-350 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl leading-relaxed font-light font-sans">
            We are looking for dedicated civil engineers, estimation specialists, and project coordinators committed to high-fidelity interior fit-out delivery.
          </p>
        </div>
      </section>

      {/* 2. BENEFITS / VALUE PROPOSITION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] block mb-3 font-mono">
            // LIFE AT CENTRIONYX
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#0a1f44] font-serif">
            Why Build Your Career With Us?
          </h2>
          <div className="w-12 h-[3px] bg-[#005ea6] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div 
              key={idx} 
              className="bg-white border-2 border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a1f44] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                {b.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0a1f44] mb-3 group-hover:text-[#005ea6] transition-colors font-serif">
                {b.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light font-sans">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ACTIVE ROLES & APPLICATION SECTION */}
      <section className="bg-slate-100/50 border-t-2 border-slate-200/60 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: ACTIVE ROLES LIST */}
            <div className="flex-1 w-full space-y-8">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] block mb-2 font-mono">
                  // CAREER PORTAL
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-[#0a1f44] font-serif">
                  Current Openings
                </h2>
                <p className="text-slate-500 text-sm mt-2 font-light font-sans">
                  Explore active engineering and advisory roles.
                </p>
              </div>

              {/* SEARCH & FILTERS BAR */}
              <div className="flex flex-col sm:flex-row gap-4 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex-1 flex items-center gap-2 px-3 border-b sm:border-b-0 sm:border-r border-slate-150 pb-2 sm:pb-0">
                  <Search size={16} className="text-slate-400 shrink-0" />
                  <input 
                    type="text"
                    placeholder="Search roles or departments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full text-sm text-[#0a1f44] bg-transparent focus:outline-none placeholder-slate-400 font-sans"
                  />
                </div>
                <div className="flex items-center gap-2 px-2 shrink-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">Location:</span>
                  <select 
                    value={filterLocation}
                    onChange={(e) => setFilterLocation(e.target.value)}
                    className="text-xs font-bold uppercase text-[#0a1f44] bg-transparent focus:outline-none cursor-pointer font-sans"
                  >
                    <option value="All">All Locations</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Gurugram">Gurugram / NCR</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>
              </div>

              {/* ROLE ACCORDION LIST */}
              <div className="space-y-4">
                {loading ? (
                  // Simple loading skeletons
                  Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-6 space-y-4 animate-pulse">
                      <div className="h-4 bg-slate-200 rounded w-1/4" />
                      <div className="h-6 bg-slate-200 rounded w-3/4" />
                      <div className="h-4 bg-slate-200 rounded w-1/2" />
                    </div>
                  ))
                ) : filteredRoles.length > 0 ? (
                  filteredRoles.map((role) => {
                    const isExpanded = expandedRole === role._id || expandedRole === role.id;
                    const roleId = role._id || role.id;
                    return (
                      <div 
                        key={roleId}
                        className={`bg-white border-2 rounded-2xl transition-all duration-300 shadow-sm overflow-hidden ${
                          isExpanded ? "border-[#005ea6]/40 shadow-md" : "border-slate-200/70 hover:border-slate-350"
                        }`}
                      >
                        {/* Header Trigger */}
                        <button
                          onClick={() => handleToggle(roleId)}
                          className="w-full p-6 text-left flex items-start justify-between gap-4 group"
                        >
                          <div className="space-y-3">
                            <span className="inline-block bg-slate-100 text-slate-600 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded font-mono">
                              {role.department}
                            </span>
                            <h3 className="text-lg font-bold text-[#0a1f44] group-hover:text-[#005ea6] transition-colors font-serif">
                              {role.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
                              <span className="flex items-center gap-1.5">
                                <MapPin size={13} className="text-[#005ea6]" />
                                {role.location}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-slate-300" />
                              <span className="flex items-center gap-1.5">
                                <Clock size={13} className="text-[#005ea6]" />
                                {role.type}
                              </span>
                              <span className="w-1 h-1 rounded-full bg-slate-300" />
                              <span className="bg-[#0a1f44]/5 text-[#0a1f44] px-2 py-0.5 text-[10px] font-bold rounded">
                                Exp: {role.experience}
                              </span>
                            </div>
                          </div>
                          <span className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-[#005ea6] group-hover:border-[#005ea6] transition-colors mt-2 shrink-0">
                            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                          </span>
                        </button>

                        {/* Detailed Description Panel */}
                        <div 
                          className="transition-all duration-300 ease-in-out overflow-hidden"
                          style={{ maxHeight: isExpanded ? "800px" : "0px" }}
                        >
                          <div className="px-6 pb-6 border-t border-slate-150 pt-5 bg-slate-50/50">
                            <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light font-sans">
                              {role.summary}
                            </p>
                            
                            {role.requirements && role.requirements.length > 0 && (
                              <>
                                <h4 className="text-[10px] font-bold uppercase tracking-wider text-[#005ea6] mb-3 font-mono">
                                  // KEY REQUIREMENTS & CREDENTIALS
                                </h4>
                                <ul className="space-y-2.5 mb-6 font-sans">
                                  {role.requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                                      <span className="text-[#005ea6] shrink-0 font-bold mt-0.5">•</span>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </>
                            )}
                            
                            <button
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, role: roleId }));
                                document.getElementById("apply-form").scrollIntoView({ behavior: "smooth" });
                              }}
                              className="inline-flex items-center gap-2 bg-[#0a1f44] hover:bg-[#005ea6] text-white px-6 py-3 text-[11px] font-bold uppercase tracking-widest rounded-lg shadow-sm hover:shadow transition-all duration-200 font-mono"
                            >
                              Apply For This Role
                              <Briefcase size={12} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-white border-2 border-slate-200 border-dashed p-10 text-center rounded-2xl">
                    <p className="text-slate-400 font-medium font-sans">No positions match your filters.</p>
                    <button 
                      onClick={() => { setSearchTerm(""); setFilterLocation("All"); }}
                      className="mt-3 text-xs font-bold text-[#005ea6] hover:underline font-mono"
                    >
                      Reset filters
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: BLUEPRINT STYLE APPLICATION FORM */}
            <div 
              id="apply-form" 
              className="w-full lg:w-[460px] bg-white border-2 border-slate-200 p-8 rounded-2xl shadow-md shrink-0 relative overflow-hidden"
            >
              {/* Architectural accent edge */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#005ea6] via-blue-400 to-cyan-400" />
              
              <h2 className="text-2xl font-bold tracking-tight text-[#0a1f44] font-serif mb-6">
                Apply Online
              </h2>

              {formState.submitted ? (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-8 rounded-xl flex flex-col items-center text-center justify-center min-h-[350px]">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 font-serif">Application Received</h3>
                  <p className="text-xs text-emerald-600 max-w-xs leading-relaxed font-light font-sans">
                    Your details have been registered. Our HR talent acquisition coordinator will review your profile and contact you soon.
                  </p>
                  <button
                    onClick={() => setFormState({ isSubmitting: false, submitted: false, error: "" })}
                    className="mt-6 text-xs font-bold text-[#005ea6] hover:underline font-mono"
                  >
                    Apply for another role
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formState.error && (
                    <p className="text-xs text-rose-500 bg-rose-50 border border-rose-100 p-3 rounded-lg font-sans">
                      {formState.error}
                    </p>
                  )}

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
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
                      className="border-2 border-slate-200/80 px-4 py-3 rounded-lg text-xs focus:outline-none focus:border-[#005ea6] bg-slate-50/50 hover:bg-slate-50 focus:bg-white transition-all text-[#0a1f44] font-sans"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sanjana@domain.com"
                      className="border-2 border-slate-200/80 px-4 py-3 rounded-lg text-xs focus:outline-none focus:border-[#005ea6] bg-slate-50/50 hover:bg-slate-50 focus:bg-white transition-all text-[#0a1f44] font-sans"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
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
                      className="border-2 border-slate-200/80 px-4 py-3 rounded-lg text-xs focus:outline-none focus:border-[#005ea6] bg-slate-50/50 hover:bg-slate-50 focus:bg-white transition-all text-[#0a1f44] font-sans"
                    />
                  </div>

                  {/* Target Role Dropdown */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="role" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                      Position of Interest *
                    </label>
                    <select 
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="border-2 border-slate-200/80 px-4 py-3 rounded-lg text-xs focus:outline-none focus:border-[#005ea6] bg-slate-50/50 hover:bg-slate-50 focus:bg-white transition-all text-slate-700 cursor-pointer font-sans"
                    >
                      <option value="">Select position</option>
                      {roles.map(role => (
                        <option key={role._id || role.id} value={role._id || role.id}>
                          {role.title}
                        </option>
                      ))}
                      <option value="other">Other Position / Speculative Application</option>
                    </select>
                  </div>

                  {/* Statement Box */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="coverLetter" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                      Brief Statement / Note
                    </label>
                    <textarea 
                      id="coverLetter"
                      name="coverLetter"
                      rows={3}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Share high-level qualifications, key details, or external portfolio link..."
                      className="border-2 border-slate-200/80 px-4 py-3 rounded-lg text-xs focus:outline-none focus:border-[#005ea6] bg-slate-50/50 hover:bg-slate-50 focus:bg-white transition-all resize-none text-[#0a1f44] font-sans"
                    />
                  </div>

                  {/* Visual Dropzone File Upload */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-mono">
                      Attach Resume (PDF/DOC)
                    </label>
                    {selectedFile ? (
                      <div className="flex items-center justify-between border-2 border-emerald-100 bg-emerald-50/40 p-3.5 rounded-lg text-xs font-sans">
                        <div className="flex items-center gap-2 text-emerald-800 font-medium">
                          <Paperclip size={14} className="text-emerald-600 font-sans" />
                          <span className="truncate max-w-[200px]">{selectedFile.name}</span>
                          <span className="text-[10px] text-slate-400">({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button 
                          type="button" 
                          onClick={removeFile}
                          className="w-5 h-5 rounded-full bg-slate-200 hover:bg-rose-100 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-colors"
                        >
                          <X size={10} />
                        </button>
                      </div>
                    ) : (
                      <div 
                        onDragEnter={handleDrag}
                        onDragOver={handleDrag}
                        onDragLeave={handleDrag}
                        onDrop={handleDrop}
                        className={`border-2 border-dashed rounded-lg p-5 text-center transition-all cursor-pointer ${
                          dragActive ? "border-[#005ea6] bg-[#005ea6]/5" : "border-slate-250 bg-slate-50/40 hover:bg-slate-50 hover:border-slate-350"
                        }`}
                        onClick={() => document.getElementById("file-upload").click()}
                      >
                        <input 
                          type="file" 
                          id="file-upload"
                          accept=".pdf,.doc,.docx"
                          className="hidden" 
                          onChange={handleFileChange}
                        />
                        <Paperclip size={18} className="mx-auto text-slate-400 mb-2" />
                        <p className="text-[11px] text-slate-500 font-medium font-sans">
                          Drag and drop or <span className="text-[#005ea6] underline">browse files</span>
                        </p>
                        <p className="text-[9px] text-slate-400 mt-1 font-sans">Max file size: 10MB</p>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={formState.isSubmitting}
                    className="w-full bg-[#0a1f44] hover:bg-[#005ea6] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg disabled:bg-slate-400 transition-all flex items-center justify-center gap-2 mt-2 font-mono"
                  >
                    {formState.isSubmitting ? "Sending details..." : "Submit Application"}
                    <Send size={12} />
                  </button>

                  <p className="text-[10px] text-center text-slate-400 mt-3 font-light leading-relaxed font-sans">
                    Note: Direct resume files can also be submitted to <a href="mailto:careers@icc.co.in" className="text-[#005ea6] hover:underline font-bold">careers@icc.co.in</a>.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 4. SPECULATIVE INQUIRY PANEL */}
      <section className="bg-[#0a1f44] text-white py-20 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px"
          }}
        />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 block font-mono">
            // SPECULATIVE APPLICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif">
            Don't See a Perfect Fit?
          </h2>
          <p className="text-slate-350 text-sm leading-relaxed max-w-xl mx-auto font-light font-sans">
            We are always looking for exceptional engineers, project planners, and MEP designers. Send your unsolicited portfolio or credentials directly to us.
          </p>
          <a
            href="mailto:careers@icc.co.in"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#005ea6] to-blue-500 text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-mono"
          >
            Send Speculative Resume
            <Send size={12} />
          </a>
        </div>
      </section>

    </div>
  );
}
