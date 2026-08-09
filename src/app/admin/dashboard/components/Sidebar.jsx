"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  BookOpen,
  Sparkles,
  Users,
  LogOut,
  X,
  UserCheck
} from "lucide-react";

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const mainNav = [
    { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Enquiries", href: "/admin/dashboard/enquiries", icon: MessageSquare },
    { label: "Projects", href: "/admin/dashboard/projects", icon: Briefcase },
  ];

  const contentNav = [
    { label: "Blog Insights", href: "/admin/dashboard/blog", icon: BookOpen },
    { label: "Hero Section", href: "/admin/dashboard/hero", icon: Sparkles },
    { label: "About Founder", href: "/admin/dashboard/about", icon: Users },
    { label: "Careers Portal", href: "/admin/dashboard/careers", icon: UserCheck },
  ];

  const isActive = (href) => {
    if (href === "/admin/dashboard") {
      return pathname === "/admin/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Panel - Beautiful Light Theme */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 h-screen bg-white border-r border-slate-200/80 text-slate-800 flex flex-col justify-between transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div>
          {/* Logo Header */}
          <div className="h-16 px-6 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-[#005ea6] to-[#003d6d] rounded-xl flex items-center justify-center font-black text-white text-xs shadow-md shadow-blue-900/10">
                ICC
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-tight text-slate-900 font-sans leading-none">
                  ICC <span className="text-[#005ea6]">DESK</span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 font-mono mt-0.5">
                  Admin Portal
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Links Grouped */}
          <nav className="p-4 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)]">
            {/* Section 1: Main Overview */}
            <div>
              <p className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono mb-2">
                Main Menu
              </p>
              <div className="space-y-1">
                {mainNav.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`relative w-full flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                        active
                          ? "bg-blue-50/80 text-[#005ea6] font-bold border border-blue-200/60 shadow-2xs"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {active && (
                        <span className="w-1 h-5 bg-[#005ea6] rounded-r-full absolute left-0 top-1/2 -translate-y-1/2" />
                      )}
                      <Icon size={16} className={active ? "text-[#005ea6]" : "text-slate-400"} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Content Management */}
            <div>
              <p className="px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-mono mb-2">
                Content Management
              </p>
              <div className="space-y-1">
                {contentNav.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`relative w-full flex items-center gap-3 px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                        active
                          ? "bg-blue-50/80 text-[#005ea6] font-bold border border-blue-200/60 shadow-2xs"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {active && (
                        <span className="w-1 h-5 bg-[#005ea6] rounded-r-full absolute left-0 top-1/2 -translate-y-1/2" />
                      )}
                      <Icon size={16} className={active ? "text-[#005ea6]" : "text-slate-400"} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>
        </div>

        {/* Footer User Info & Logout */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-3 mb-3 px-1">
            <div className="w-9 h-9 rounded-full bg-blue-100 text-[#005ea6] border border-blue-200/80 flex items-center justify-center font-extrabold text-xs shadow-2xs shrink-0">
              YP
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">Yogesh Pawar</p>
              <p className="text-[10px] font-medium text-slate-400 font-mono">Lead Consultant</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-rose-50 hover:bg-rose-100/80 text-rose-600 border border-rose-200/70 py-2.5 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
          >
            <LogOut size={13} />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
}
