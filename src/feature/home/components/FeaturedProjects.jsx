"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Default fallback projects if API is loading or empty
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Skyline Towers",
    subtitle: "Sophisticated urban living",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: 2,
    title: "Midtown Lofts",
    subtitle: "Stylish apartment community",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    id: 3,
    title: "The Shoreline",
    subtitle: "Waterside luxury lifestyle",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
  },
  {
    id: 4,
    title: "Apex Horizon",
    subtitle: "Modern corporate workspace",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 5,
    title: "Vanguard Hub",
    subtitle: "Executive interior suite",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
  },
];

export default function FeaturedProjects() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const featuredOnly = data.filter((p) => p.featured === true);
          const listToUse = featuredOnly.length > 0 ? featuredOnly : data;

          const formatted = listToUse.map((p, idx) => ({
            id: p._id || p.id || idx + 1,
            title: p.client || "Featured Project",
            subtitle: p.scope || p.category || "Interior Fit-Out",
            image:
              (p.images && p.images.length > 0 ? p.images[0] : p.image) ||
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
          }));
          setProjects(formatted);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  // Discrete step auto-scroll: Step to next card every 2.5 seconds cleanly
  useEffect(() => {
    if (projects.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 2500);

    return () => clearInterval(timer);
  }, [projects.length]);

  // Smoothly scroll container whenever currentIndex updates
  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !container.children[currentIndex]) return;

    const targetCard = container.children[currentIndex];
    const offsetLeft = targetCard.offsetLeft - container.offsetLeft;

    container.scrollTo({
      left: offsetLeft,
      behavior: "smooth",
    });
  }, [currentIndex, projects.length]);

  return (
    <section className="w-full bg-white py-10 sm:py-14 px-5 lg:px-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        {/* Header - Single Heading without duplicate text */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-gray-100 gap-4">
          <h2 className="text-2xl sm:text-3xl font-serif tracking-tight text-black leading-tight">
            Featured <span className="font-serif text-brand-accent">Projects</span>
          </h2>

          <Link
            href="/projects"
            className="
              inline-flex
              items-center
              gap-2
              text-black/60
              text-sm
              font-medium
              transition-all
              duration-300
              hover:text-black
              group
              whitespace-nowrap
            "
          >
            View All Developments
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* Carousel Slider Row — Exactly 3 full cards visible at once on md/lg screens */}
        {loading ? (
          <div className="flex gap-5 overflow-hidden py-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative aspect-[4/3] w-full min-w-[280px] md:min-w-[calc((100%-2.5rem)/3)] md:w-[calc((100%-2.5rem)/3)] flex-shrink-0 rounded-2xl bg-slate-200/80 animate-pulse overflow-hidden p-5 flex flex-col justify-end"
              >
                <div className="w-2/3 h-5 bg-slate-300 rounded mb-2" />
                <div className="w-1/3 h-3 bg-slate-300 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth py-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/3] w-full min-w-[280px] md:min-w-[calc((100%-2.5rem)/3)] md:w-[calc((100%-2.5rem)/3)] flex-shrink-0 overflow-hidden group cursor-pointer snap-start"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Project info & View Details - Cleanly Aligned at Bottom */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between z-10">
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white mb-0.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/80 font-light tracking-wide">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* View details link */}
                  <Link
                    href="/projects"
                    className="
                      text-white/80
                      hover:text-white
                      text-xs
                      font-medium
                      uppercase
                      tracking-wider
                      flex
                      items-center
                      gap-1.5
                      transition-colors
                      duration-300
                      group/link
                      shrink-0
                      ml-2
                    "
                  >
                    <span>Details</span>
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform duration-300"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}