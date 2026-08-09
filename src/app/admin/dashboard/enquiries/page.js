"use client";

import { useState, useEffect } from "react";
import EnquiriesTab from "./EnquiriesTab";

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState([]);
  const [enquiryStats, setEnquiryStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    inProgress: 0,
    closed: 0,
  });
  const [loading, setLoading] = useState(true);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch("/api/admin/enquiries");
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
        setEnquiryStats(
          data.stats || { total: 0, new: 0, contacted: 0, inProgress: 0, closed: 0 }
        );
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-xs text-slate-400 animate-pulse">
        Loading Client Enquiries...
      </div>
    );
  }

  return (
    <EnquiriesTab
      enquiries={enquiries}
      enquiryStats={enquiryStats}
      onRefresh={fetchEnquiries}
    />
  );
}
