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
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHeroData = async () => {
    try {
      const [heroRes, clientsRes] = await Promise.all([
        fetch("/api/admin/hero"),
        fetch("/api/admin/clients"),
      ]);

      if (heroRes.ok) {
        const data = await heroRes.json();
        setHeroData(data);
        setInitialHeroData(data);
      }
      if (clientsRes.ok) {
        const clientsData = await clientsRes.json();
        setClients(clientsData);
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
      clients={clients}
      onRefresh={fetchHeroData}
    />
  );
}
