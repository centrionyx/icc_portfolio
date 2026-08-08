"use client";

import { useState } from "react";
import PageHero from "@/components/layout/PageHero";
import JoinCreativeTeam from "@/feature/careers/components/JoinCreativeTeam";
import OpenPositionsList from "@/feature/careers/components/OpenPositionsList";
import SendResumeBanner from "@/feature/careers/components/SendResumeBanner";
import { X, Check } from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pb-20">
      
      {/* ── PAGE HERO ── */}
      <PageHero
        title="Careers & Opportunities"
        subtitle="Build your career with India's leading interior fit-out & consulting firm."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mt-12 sm:mt-16 space-y-16">
        
        {/* ── 1. JOIN OUR CREATIVE TEAM SECTION ── */}
        <JoinCreativeTeam />

        {/* ── 2. OPEN POSITIONS SECTION ── */}
        <OpenPositionsList onSelectJob={(job) => setSelectedJob(job)} />

        {/* ── 3. DON'T SEE THE RIGHT ROLE BANNER ── */}
        <SendResumeBanner onOpenResumeModal={() => setResumeModalOpen(true)} />

      </div>

      {/* ── JOB DETAILS MODAL ── */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedJob(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-xl p-6 sm:p-8 shadow-2xl relative border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 p-2 cursor-pointer"
            >
              <X size={20} />
            </button>

            <span className="bg-brand-accent text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md mb-4 inline-block font-mono">
              {selectedJob.department}
            </span>

            <h2 className="text-2xl font-extrabold text-slate-900 mb-1">{selectedJob.title}</h2>
            <p className="text-xs text-slate-500 font-semibold mb-6">{selectedJob.experience} • {selectedJob.location}</p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Role Overview</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{selectedJob.description}</p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setResumeModalOpen(true);
                }}
                className="px-6 py-2.5 rounded-xl bg-brand-accent text-white text-xs font-bold hover:bg-[#004B84] transition-colors cursor-pointer"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── SEND RESUME MODAL ── */}
      {resumeModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setResumeModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 shadow-2xl relative border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setResumeModalOpen(false);
                setEmailSubmitted(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 p-2 cursor-pointer"
            >
              <X size={20} />
            </button>

            {emailSubmitted ? (
              <div className="text-center py-6">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <Check size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Resume Submitted!</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Thank you for applying. Our talent team will review your profile and reach out shortly.
                </p>
                <button
                  onClick={() => {
                    setResumeModalOpen(false);
                    setEmailSubmitted(false);
                  }}
                  className="px-6 py-2.5 bg-brand-accent text-white text-xs font-bold rounded-xl cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmailSubmitted(true);
                }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-1">Submit Your Resume</h3>
                <p className="text-xs text-slate-500 mb-6">Send us your details to be considered for active and upcoming openings.</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-brand-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-brand-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Resume / CV Link or File</label>
                    <input
                      type="text"
                      required
                      placeholder="Google Drive link or portfolio URL"
                      className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-brand-accent"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-brand-accent hover:bg-[#004B84] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer uppercase tracking-wider"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
