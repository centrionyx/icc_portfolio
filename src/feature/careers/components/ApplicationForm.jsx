import { CheckCircle2, Paperclip, X, Send } from "lucide-react";

export default function ApplicationForm({
  roles,
  formData,
  formState,
  selectedFile,
  dragActive,
  handleChange,
  handleDrag,
  handleDrop,
  handleFileChange,
  removeFile,
  handleSubmit,
  setFormState
}) {
  return (
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
  );
}
