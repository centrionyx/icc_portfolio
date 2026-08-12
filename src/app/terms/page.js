"use client";

import React from "react";
import PageHero from "@/components/layout/PageHero";
import HomeNewsletterBanner from "@/feature/home/components/HomeNewsletterBanner";
import { FileText, Award, Scale, Gavel, RefreshCw, Mail } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 pb-20 font-sans">
      {/* ── PAGE HERO ── */}
      <PageHero
        title="Terms & Conditions"
        subtitle="Standard operating terms governing website usage, intellectual property, and service engagements."
        breadcrumbs={[{ label: "Terms & Conditions" }]}
      />

      {/* ── POLICY BODY CONTAINER ── */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 mt-12 sm:mt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="bg-amber-50/60 border-l-4 border-[#E5A900] p-4 sm:p-5 rounded-r-2xl">
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
              Effective Date: January 2024 (Updated August 2026)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Welcome to the official web portal of Innovation Consultants & Contractors (ICC). By accessing or using this site, you agree to comply with the terms and conditions set forth below.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <FileText className="w-5 h-5 text-brand-accent shrink-0" />
              1. Acceptance of Terms
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              By accessing, browsing, or utilizing enquiry features on `www.iccindia.co.in`, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree, please discontinue using the website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Award className="w-5 h-5 text-brand-accent shrink-0" />
              2. Intellectual Property Rights
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              All website layouts, technical diagrams, copywriting, branding symbols, and project showcase photography are the exclusive property of Innovation Consultants & Contractors (ICC). Unauthorized reproduction, redistribution, or commercial copying is strictly prohibited.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Scale className="w-5 h-5 text-brand-accent shrink-0" />
              3. Service & Contractual Disclaimer
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Information presented on this website is for general project capability overview purposes. Formal commitments regarding project timelines, commercial BOQ values, and execution scopes are governed exclusively by a executed Master Services Agreement (MSA) or Contract signed directly between ICC and the client entity.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Gavel className="w-5 h-5 text-brand-accent shrink-0" />
              4. Governing Law & Jurisdiction
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of India. Any legal proceedings or disputes arising in connection with website usage shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra, India.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <RefreshCw className="w-5 h-5 text-brand-accent shrink-0" />
              5. Updates & Modifications
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ICC reserves the right to revise or update these terms at any time without prior notice. Continued usage of the portal following modifications constitutes your binding acceptance of the updated terms.
            </p>
          </section>

          {/* Contact Bar */}
          <section className="space-y-3 pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-slate-950 flex items-center gap-2 font-sans tracking-tight">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              6. Legal Inquiries
            </h3>
            <div className="bg-slate-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-[#E5A900] uppercase tracking-wider font-mono">ICC Legal Advisory</p>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">Email: info@iccindia.co.in | Phone: +91 93569 81566</p>
              </div>
              <a
                href="mailto:info@iccindia.co.in"
                className="bg-brand-accent hover:bg-[#004B84] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm shrink-0"
              >
                Contact Legal Desk
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
