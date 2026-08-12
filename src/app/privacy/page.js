"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import HomeNewsletterBanner from "@/feature/home/components/HomeNewsletterBanner";
import { Shield, Database, Lock, Eye, Mail } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pb-20 font-sans">
      {/* ── PAGE HERO ── */}
      <PageHero
        title="Privacy Policy"
        subtitle="Our commitment to safeguarding corporate client data, candidate resumes, and communication records."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      {/* ── POLICY BODY CONTAINER ── */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="bg-blue-50/60 border-l-4 border-[#005ea6] p-4 sm:p-5 rounded-r-2xl">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Last Updated: August 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              At Innovation Consultants & Contractors (ICC), we respect your privacy and are committed to protecting the personal and proprietary corporate information collected through our website.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Database className="w-5 h-5 text-brand-accent shrink-0" />
              1. Information We Collect
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We collect information that you voluntarily provide to us when submitting project consultation enquiries, requesting BOQ reviews, or applying for job openings on our site. This includes:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5">
              <li><strong>Contact Information:</strong> Full name, professional email address, telephone number, and company name.</li>
              <li><strong>Project Details:</strong> Project type, spatial footprint requirements (Sq. Ft.), location, and scope specifications.</li>
              <li><strong>Career Submissions:</strong> Resumes/CVs, portfolios, work experience history, and cover letters submitted via our careers form.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Eye className="w-5 h-5 text-brand-accent shrink-0" />
              2. How We Use Your Information
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The information gathered is utilized strictly for professional business purposes:
            </p>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-600 space-y-1.5">
              <li>Responding to project advisory enquiries and scheduling site due diligence walkthroughs.</li>
              <li>Preparing customized BOQs, technical proposals, and commercial fit-out quotes.</li>
              <li>Evaluating candidate suitability for open site engineering, project management, and design positions.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Shield className="w-5 h-5 text-brand-accent shrink-0" />
              3. Information Sharing & Confidentiality
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not sell, trade, or rent your personal or commercial project data to third parties. Information is shared only with authorized ICC technical consultants or project execution partners bound by strict non-disclosure obligations.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Lock className="w-5 h-5 text-brand-accent shrink-0" />
              4. Data Protection & Security
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We employ enterprise-grade SSL encryption and secure database controls to safeguard your submitted records from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              5. Contact Us Regarding Privacy
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For any questions regarding our Privacy Policy or data handling practices, please contact us at:
            </p>
            <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#E5A900] uppercase tracking-wider font-mono">ICC Compliance Officer</p>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">Email: info@iccindia.co.in | Phone: +91 93569 81566</p>
              </div>
              <a
                href="mailto:info@iccindia.co.in"
                className="bg-brand-accent hover:bg-[#004B84] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
              >
                Send Privacy Enquiry
              </a>
            </div>
          </section>

        </div>
      </main>

      {/* BOTTOM CTA BANNER */}
      <div className="mt-16 sm:mt-24">
        <HomeNewsletterBanner />
      </div>
    </div>
  );
}
