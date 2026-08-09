"use client";

import Link from "next/link";
import {
  MessageSquare,
  TrendingUp,
  CheckCircle2,
  Users,
  Briefcase,
  ArrowRight,
  Clock,
  Sparkles
} from "lucide-react";

export default function OverviewTab({
  enquiryStats = { total: 0, new: 0 },
  projects = [],
  appStats = { total: 0, applied: 0, underReview: 0, interviewing: 0, hired: 0 },
  applications = [],
}) {
  const calculateTotalSqFt = () => {
    let total = 0;
    (projects || []).forEach((p) => {
      if (!p || !p.size) return;
      const sizeStr = p.size.toLowerCase();
      const val = parseFloat(sizeStr.replace(/,/g, "").match(/\d+(\.\d+)?/)?.[0] || 0);

      if (sizeStr.includes("lakh")) {
        total += val * 100000;
      } else if (sizeStr.includes("sq. m") || sizeStr.includes("sq m") || sizeStr.includes("sqm")) {
        total += val * 10.7639;
      } else if (sizeStr.includes("acre")) {
        total += val * 43560;
      } else if (sizeStr.includes("yd")) {
        total += val * 9;
      } else {
        total += val;
      }
    });

    if (total >= 1000000) return `${(total / 1000000).toFixed(1)}M Sq. Ft.`;
    if (total >= 100000) return `${(total / 100000).toFixed(1)} Lakh Sq. Ft.`;
    if (total > 0) return `${Math.round(total).toLocaleString()} Sq. Ft.`;
    return "0 Sq. Ft.";
  };

  const completedProjectsCount = (projects || []).filter(
    (p) => p.completion === 100 || p.status === "Completed"
  ).length;

  const activeProjects = (projects || []).filter(
    (p) => (p.completion !== undefined ? p.completion < 100 : p.status !== "Completed")
  );

  return (
    <div className="space-y-8">
      {/* Welcome Message Banner */}
      <div className="bg-gradient-to-r from-[#005ea6] to-[#003d6d] text-white p-6 rounded-2xl shadow-sm relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-300 block mb-1 font-mono flex items-center gap-1.5">
            <Sparkles size={12} /> WORKSPACE ADVISORY CONSOLE
          </span>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back, Yogesh Pawar</h2>
          <p className="text-blue-100 text-xs mt-1 font-normal max-w-xl">
            Track site fit-out progress, live estimation parameters, and incoming career application pipelines across all commercial & residential projects.
          </p>
        </div>
      </div>

      {/* Redesigned Metric Cards Grid (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Link href="/admin/dashboard/enquiries" className="block group">
          <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all group-hover:border-blue-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                  Consultation Quotes
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-sans">
                  {enquiryStats.total}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
            </div>
            <p className="text-[11px] font-semibold text-blue-600 mt-3 flex items-center gap-1">
              <span>{enquiryStats.new} New / Unread Requests</span>
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </p>
          </div>
        </Link>

        <Link href="/admin/dashboard/projects" className="block group">
          <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all group-hover:border-blue-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                  Total Fit-Out Sq Ft
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-sans">
                  {calculateTotalSqFt()}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 mt-3">
              Across Commercial Sites
            </p>
          </div>
        </Link>

        <Link href="/admin/dashboard/projects" className="block group">
          <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all group-hover:border-blue-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                  Completed Projects
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-sans">
                  {completedProjectsCount}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <p className="text-[11px] font-semibold text-amber-600 mt-3">
              {activeProjects.length} Sites In Execution
            </p>
          </div>
        </Link>

        <Link href="/admin/dashboard/careers" className="block group">
          <div className="bg-white border border-slate-200/80 p-5 rounded-2xl shadow-2xs hover:shadow-md transition-all group-hover:border-blue-300">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 font-mono">
                  Candidate Pipeline
                </p>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-2 font-sans">
                  {appStats.total}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <p className="text-[11px] font-semibold text-slate-500 mt-3">
              Active Job Applications
            </p>
          </div>
        </Link>
      </div>

      {/* HR Pipeline Funnel Widget */}
      <div className="space-y-4">
        <div className="border-b border-slate-200/60 pb-2 flex items-center justify-between">
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono">
              HR CANDIDATE PIPELINE FUNNEL
            </h4>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#005ea6] bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-lg font-mono">
            Live Tracking
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            {
              label: "Applied",
              count: appStats.applied,
              color: "bg-blue-500",
              percent: appStats.total ? Math.round((appStats.applied / appStats.total) * 100) : 0,
            },
            {
              label: "Under Review",
              count: appStats.underReview,
              color: "bg-amber-500",
              percent: appStats.total ? Math.round((appStats.underReview / appStats.total) * 100) : 0,
            },
            {
              label: "Interviewing",
              count: appStats.interviewing,
              color: "bg-indigo-500",
              percent: appStats.total ? Math.round((appStats.interviewing / appStats.total) * 100) : 0,
            },
            {
              label: "Hired",
              count: appStats.hired,
              color: "bg-emerald-500",
              percent: appStats.total ? Math.round((appStats.hired / appStats.total) * 100) : 0,
            },
          ].map((step, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 p-4 rounded-2xl shadow-2xs flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center text-xs font-bold text-slate-600">
                  <span>{step.label}</span>
                  <span className="text-slate-900 text-sm">{step.count}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-2">
                  <div className={`h-full rounded-full ${step.color}`} style={{ width: `${step.percent}%` }} />
                </div>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold mt-3 block">
                {step.percent}% of total candidate pipeline
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Grid: Projects and Recent Candidates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Active Key Projects */}
        <div className="space-y-4">
          <div className="border-b border-slate-200/60 pb-2 flex items-center justify-between">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono">
              ACTIVE SITE PROGRESS
            </h4>
            <Link
              href="/admin/dashboard/projects"
              className="text-xs font-bold text-[#005ea6] hover:underline flex items-center gap-1"
            >
              View Projects Ledger <ArrowRight size={12} />
            </Link>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[350px]">
              <tbody className="divide-y divide-slate-200/60">
                {activeProjects.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-8 text-center text-slate-400 text-xs italic">
                      No active projects currently in progress.
                    </td>
                  </tr>
                ) : (
                  activeProjects.map((project, idx) => (
                    <tr key={project._id || idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-3">
                        <p className="text-xs font-bold text-slate-900">{project.client}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{project.size} • {project.location}</p>
                      </td>
                      <td className="py-3.5 px-3">
                        <div className="w-24 bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="bg-[#005ea6] h-full rounded-full" style={{ width: `${project.completion}%` }} />
                        </div>
                      </td>
                      <td className="py-3.5 px-3 text-right font-extrabold text-xs text-slate-900 font-mono">
                        {project.completion}%
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Candidate Activities */}
        <div className="space-y-4">
          <div className="border-b border-slate-200/60 pb-2 flex items-center justify-between">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 font-mono">
              RECENT CANDIDATE APPLICANTS
            </h4>
            <Link
              href="/admin/dashboard/careers"
              className="text-xs font-bold text-[#005ea6] hover:underline flex items-center gap-1"
            >
              View Candidate Pipeline <ArrowRight size={12} />
            </Link>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[350px]">
              <tbody className="divide-y divide-slate-200/60">
                {applications.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-8 text-center text-slate-400 text-xs italic">
                      No candidate application records found.
                    </td>
                  </tr>
                ) : (
                  applications.slice(0, 5).map((app, idx) => (
                    <tr key={app._id || idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-3">
                        <p className="text-xs font-bold text-slate-900">{app.name}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{app.email}</p>
                      </td>
                      <td className="py-3.5 px-3 text-xs font-medium text-slate-700">
                        {app.roleTitle || app.role}
                      </td>
                      <td className="py-3.5 px-3 text-right">
                        <span
                          className={`inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-lg border ${
                            app.status === "Hired"
                              ? "bg-purple-50 text-purple-700 border-purple-200/60"
                              : app.status === "Interviewing"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200/60"
                              : app.status === "Under Review"
                              ? "bg-amber-50 text-amber-700 border-amber-200/60"
                              : app.status === "Declined"
                              ? "bg-slate-100 text-slate-500 border-slate-200"
                              : "bg-blue-50 text-blue-700 border-blue-200/60"
                          }`}
                        >
                          {app.status || "New"}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
