"use client";

import { useState, useEffect } from "react";
import AboutTab from "./AboutTab";

export default function AdminAboutPage() {
  const [aboutData, setAboutData] = useState({
    founderName: "Yogesh Pawar",
    founderRole: "Founder",
    founderBio: "",
    founderEmail: "",
    founderImage: "/founder.png",
    founderExperience: "20",
    founderDeliveredArea: "10M",
    careerDeliveries: [],
  });
  const [initialAboutData, setInitialAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAboutData = async () => {
    try {
      const res = await fetch("/api/admin/about");
      if (res.ok) {
        const data = await res.json();
        setAboutData(data);
        setInitialAboutData(data);
      }
    } catch (err) {
      console.error("Failed to load about data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAboutData();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-xs text-slate-400 animate-pulse">
        Loading About Us Section Configuration...
      </div>
    );
  }

  return (
    <AboutTab
      aboutData={aboutData}
      setAboutData={setAboutData}
      initialAboutData={initialAboutData}
      setInitialAboutData={setInitialAboutData}
      onRefresh={fetchAboutData}
    />
  );
}
