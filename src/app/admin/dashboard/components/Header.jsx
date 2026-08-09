"use client";

import { useState } from "react";
import { Search, Bell, RefreshCw, X, Menu } from "lucide-react";

export default function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  searchQuery,
  setSearchQuery,
  onRefreshData,
  notifications = [],
  unreadNotificationsCount = 0,
  onMarkNotificationsRead,
}) {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0 sticky top-0 z-30">
      <div className="flex items-center gap-3 w-auto md:w-96">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors mr-1"
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>
        <div className="relative w-48 sm:w-64 md:w-80">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery || ""}
            onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-md text-xs focus:outline-none focus:border-blue-500 bg-slate-50/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        {onRefreshData && (
          <button
            onClick={onRefreshData}
            className="text-xs bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-600 px-3 py-2 flex items-center gap-1.5 transition-all rounded cursor-pointer"
          >
            <RefreshCw size={12} />
            Sync Data
          </button>
        )}

        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen);
              if (!isNotificationsOpen && onMarkNotificationsRead) {
                onMarkNotificationsRead();
              }
            }}
            className="relative cursor-pointer p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-colors focus:outline-none"
          >
            <Bell size={18} />
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-[8px] font-bold text-white flex items-center justify-center rounded-full">
                {unreadNotificationsCount}
              </span>
            )}
          </button>

          {/* Notification Panel */}
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 shadow-2xl rounded-md overflow-hidden z-50">
              <div className="bg-[#0a1f44] text-white p-3 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider">
                  Audit Alerts
                </span>
                <button
                  onClick={() => setIsNotificationsOpen(false)}
                  className="text-slate-400 hover:text-white"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto divide-y divide-slate-100">
                {notifications.length === 0 ? (
                  <p className="text-center text-xs text-slate-400 py-8">
                    No notifications received.
                  </p>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n._id}
                      className={`p-3 text-xs hover:bg-slate-50 transition-colors ${
                        !n.read ? "bg-blue-50/50" : ""
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span
                          className={`font-bold uppercase tracking-wide text-[9px] ${
                            n.type === "success"
                              ? "text-emerald-600"
                              : n.type === "warning"
                              ? "text-rose-600"
                              : n.type === "audit"
                              ? "text-indigo-600"
                              : "text-blue-600"
                          }`}
                        >
                          {n.title}
                        </span>
                        <span className="text-[8px] text-slate-400">
                          {new Date(n.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <p className="text-slate-600 mt-1 text-[11px] leading-tight">
                        {n.description}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
