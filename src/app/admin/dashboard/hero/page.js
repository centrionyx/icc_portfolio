"use client";

import { useState, useEffect } from "react";
import HeroTab from "./HeroTab";

export default function AdminHeroPage() {
  const [heroData, setHeroData] = useState({
    slides: [],
    images: [],
    stats: [],
    rotationInterval: 3000,
    transitionDuration: 1000,
  });
  const [initialHeroData, setInitialHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHeroData = async () => {
    try {
      const res = await fetch("/api/admin/hero");
      if (res.ok) {
        const data = await res.json();
        setHeroData(data);
        setInitialHeroData(data);
      }
    } catch (err) {
      console.error("Failed to load hero data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHeroData();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-xs text-slate-400 animate-pulse">
        Loading Hero Section Configuration...
      </div>
    );
  }

  return (
    <HeroTab
      heroData={heroData}
      setHeroData={setHeroData}
      initialHeroData={initialHeroData}
      setInitialHeroData={setInitialHeroData}
      onRefresh={fetchHeroData}
    />
  );
}
