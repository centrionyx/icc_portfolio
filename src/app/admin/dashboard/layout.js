"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAuthAndNotifs = async () => {
    try {
      const authRes = await fetch("/api/admin/check");
      if (!authRes.ok) {
        router.push("/admin/login");
        return;
      }
      const notifRes = await fetch("/api/admin/notifications");
      if (notifRes.ok) {
        const notifs = await notifRes.json();
        setNotifications(notifs);
      }
    } catch (err) {
      console.error("Dashboard layout auth error:", err);
      router.push("/admin/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthAndNotifs();
  }, []);

  const handleMarkNotificationsRead = async () => {
    try {
      await fetch("/api/admin/notifications", { method: "PUT" });
      setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    } catch (err) {
      console.error("Mark notifications read error:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#040d1a] flex items-center justify-center text-white font-sans">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
            Verifying Admin Session...
          </p>
        </div>
      </div>
    );
  }

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onRefreshData={fetchAuthAndNotifs}
          notifications={notifications}
          unreadNotificationsCount={unreadCount}
          onMarkNotificationsRead={handleMarkNotificationsRead}
        />
        <main className="flex-1 p-4 lg:p-8 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
}
