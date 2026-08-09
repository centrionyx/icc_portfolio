"use client";

import { useState, useEffect } from "react";
import CareersTab from "./CareersTab";

export default function AdminCareersPage() {
  const [applications, setApplications] = useState([]);
  const [appStats, setAppStats] = useState({
    total: 0,
    applied: 0,
    underReview: 0,
    interviewing: 0,
    hired: 0,
    declined: 0,
  });
  const [adminJobs, setAdminJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCareersData = async () => {
    try {
      const [appsRes, jobsRes] = await Promise.all([
        fetch("/api/admin/applications"),
        fetch("/api/admin/jobs"),
      ]);

      if (appsRes.ok) {
        const appsData = await appsRes.json();
        setApplications(appsData.applications || []);
        setAppStats(
          appsData.stats || {
            total: 0,
            applied: 0,
            underReview: 0,
            interviewing: 0,
            hired: 0,
            declined: 0,
          }
        );
      }
      if (jobsRes.ok) {
        setAdminJobs(await jobsRes.json());
      }
    } catch (err) {
      console.error("Failed to fetch careers data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCareersData();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-xs text-slate-400 animate-pulse">
        Loading Careers & Candidate Pipeline...
      </div>
    );
  }

  return (
    <CareersTab
      applications={applications}
      appStats={appStats}
      adminJobs={adminJobs}
      onRefresh={fetchCareersData}
    />
  );
}
