"use client";

import { useRouter } from "next/navigation";
import { LogOut, LayoutDashboard, Users, FileSpreadsheet, HardHat, TrendingUp, AlertTriangle } from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", { method: "POST" });
      if (res.ok) {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const stats = [
    { label: "Active Project Sites", value: "14", icon: <HardHat className="w-5 h-5 text-blue-500" />, change: "+2 this month" },
    { label: "Recent Enquiries", value: "27", icon: <FileSpreadsheet className="w-5 h-5 text-emerald-500" />, change: "12 pending review" },
    { label: "Job Applications", value: "48", icon: <Users className="w-5 h-5 text-indigo-500" />, change: "8 review scheduled" },
    { label: "Execution Efficiency", value: "98.2%", icon: <TrendingUp className="w-5 h-5 text-amber-500" />, change: "Within baseline KPIs" }
  ];

  const mockEnquiries = [
    { client: "Visa Dev Offices", type: "Corporate Offices", size: "150,000 Sq. Ft.", location: "Bengaluru", status: "New" },
    { client: "Zara Flagship Store", type: "Retail Space", size: "35,000 Sq. Ft.", location: "Mumbai", status: "Contacted" },
    { client: "Sheraton Lounge Fit-Out", type: "Hospitality", size: "60,000 Sq. Ft.", location: "Gurugram", status: "Proposal Sent" }
  ];

  const mockApplications = [
    { applicant: "Kartik Nair", position: "Senior Site Engineer", experience: "6 Years", status: "Interview Shortlist" },
    { applicant: "Priya Varma", position: "QS & Estimation Engineer", experience: "5 Years", status: "New Application" }
  ];

  return (
    <div className="min-h-screen w-full bg-[#f7f8fa] text-slate-800 pb-16 select-none">
      
      {/* Top Admin Header Bar */}
      <header className="bg-[#0a1f44] text-white border-b border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutDashboard className="w-6 h-6 text-blue-400" />
            <h1 className="text-lg font-bold tracking-tight font-serif flex items-center gap-2">
              ICC Admin <span className="text-xs bg-[#005ea6] text-white font-mono px-2 py-0.5 font-bold uppercase">Console</span>
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="
              flex 
              items-center 
              gap-2 
              bg-rose-500/10 
              hover:bg-rose-500/20 
              text-rose-400 
              border 
              border-rose-500/20 
              px-4 
              py-2 
              text-xs 
              font-bold 
              uppercase 
              tracking-wider 
              transition-all
            "
          >
            <LogOut size={12} />
            Logout
          </button>
        </div>
      </header>

      {/* Main dashboard body */}
      <main className="max-w-[1440px] mx-auto px-6 py-10 space-y-8">
        
        {/* Audit banner warning */}
        <div className="bg-amber-500/10 border border-amber-500/20 p-4 text-amber-800 flex items-start gap-3 text-xs leading-relaxed">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold uppercase tracking-wider block mb-0.5">Admin Security Audit Trail Active</span>
            All administrative actions, configuration changes, and report downloads are automatically logged under the authorized user account.
          </div>
        </div>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                <div className="w-10 h-10 rounded-lg bg-slate-55 bg-opacity-5 flex items-center justify-center bg-blue-50">
                  {stat.icon}
                </div>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-[#0a1f44] tracking-tight">{stat.value}</p>
                <p className="text-[10px] text-slate-500 font-semibold mt-1">{stat.change}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Bottom tables grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent enquiries column (span 2) */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-base font-bold text-[#0a1f44] font-serif mb-6 border-b border-slate-100 pb-3">
                Recent Project Enquiries
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                      <th className="pb-3">Client</th>
                      <th className="pb-3">Project Type</th>
                      <th className="pb-3 text-center">Area size</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    {mockEnquiries.map((enq, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="py-3.5 text-[#0a1f44] font-bold">{enq.client}</td>
                        <td className="py-3.5 text-slate-600">{enq.type}</td>
                        <td className="py-3.5 text-slate-600 text-center">{enq.size}</td>
                        <td className="py-3.5 text-slate-600">{enq.location}</td>
                        <td className="py-3.5 text-right">
                          <span className={`
                            px-2 
                            py-0.5 
                            text-[9px] 
                            font-bold 
                            uppercase
                            ${enq.status === "New" 
                              ? "bg-blue-50 text-blue-600 border border-blue-100" 
                              : enq.status === "Contacted" 
                              ? "bg-amber-50 text-amber-600 border border-amber-100" 
                              : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                            }
                          `}>
                            {enq.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 mt-6 text-right">
              <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View All Enquiries →
              </button>
            </div>
          </div>

          {/* Job applications column */}
          <div className="bg-white border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-base font-bold text-[#0a1f44] font-serif mb-6 border-b border-slate-100 pb-3">
                Recent Job Applicants
              </h2>

              <div className="space-y-4">
                {mockApplications.map((app, idx) => (
                  <div key={idx} className="border border-slate-150 p-4 bg-slate-50 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#0a1f44]">{app.applicant}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase">{app.experience}</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{app.position}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-200/60 pt-2.5">
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 uppercase">
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 mt-6 text-right">
              <button className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View All Applicants →
              </button>
            </div>
          </div>

        </section>

      </main>

    </div>
  );
}
