"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ChevronRight, Building2, Award, Clock, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingParticles, GlowFollower } from "@/components/animations";
import { HERO_CONTENT, HERO_IMAGES, HERO_IMAGE_ROTATION_INTERVAL, HERO_IMAGE_TRANSITION_DURATION } from "../constants";

export default function HeroSection() {
  const [heroData, setHeroData] = useState({
    slides: HERO_CONTENT.slides,
    images: HERO_IMAGES,
    stats: HERO_CONTENT.stats,
    rotationInterval: HERO_IMAGE_ROTATION_INTERVAL,
    transitionDuration: HERO_IMAGE_TRANSITION_DURATION,
  });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await fetch("/api/hero");
        if (res.ok) {
          const data = await res.json();
          setHeroData({
            slides: data.slides && data.slides.length > 0 ? data.slides : HERO_CONTENT.slides,
            images: data.images && data.images.length > 0 ? data.images : HERO_IMAGES,
            stats: data.stats && data.stats.length > 0 ? data.stats : HERO_CONTENT.stats,
            rotationInterval: data.rotationInterval || HERO_IMAGE_ROTATION_INTERVAL,
            transitionDuration: data.transitionDuration || HERO_IMAGE_TRANSITION_DURATION,
          });
        }
      } catch (err) {
        console.error("Error fetching hero section data:", err);
      }
    }
    fetchHero();
  }, []);

  const activeImages = heroData.images && heroData.images.length > 0 ? heroData.images : HERO_IMAGES;
  const slide = (heroData.slides && heroData.slides[0]) || HERO_CONTENT.slides[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % activeImages.length);
    }, heroData.rotationInterval || 3000);

    return () => clearInterval(timer);
  }, [activeImages.length, heroData.rotationInterval]);

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % activeImages.length);
  };

  const defaultIcons = [
    <Building2 key="1" className="w-4 h-4" />,
    <Award key="2" className="w-4 h-4" />,
    <Clock key="3" className="w-4 h-4" />,
    <Shield key="4" className="w-4 h-4" />,
  ];

  const statsWithIcons = (heroData.stats || []).map((st, idx) => ({
    ...st,
    icon: defaultIcons[idx % defaultIcons.length],
  }));

  return (
    <section
      ref={heroRef}
      className="relative w-full h-auto lg:h-[calc(100vh-80px)] lg:min-h-[520px] xl:min-h-[520px] bg-[#0a1f44] overflow-hidden flex flex-col"
    >
      {/* Animated Background Particles */}
      <FloatingParticles count={30} color="bg-blue-400/20" />

      {/* Mouse-follow glow effect */}
      <GlowFollower targetRef={heroRef} size={256} color="rgba(0, 94, 166, 0.2)" />

      {/* LEFT CONTENT PANEL (Navy Blue with Diagonal Cut) */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative lg:absolute lg:inset-y-0 lg:left-0 w-full lg:w-full bg-[#0a1f44]/80 backdrop-blur-sm lg:bg-[#0a1f44] text-white p-6 sm:p-12 lg:py-10 lg:px-16 xl:py-16 xl:px-24 flex flex-col justify-between z-10 select-none
                   lg:[clip-path:polygon(0_-5%,_47%_-5%,_39%_105%,_0_105%)]"
      >
        {/* Animated gradient line at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2px] z-30"
          style={{
            background: "linear-gradient(90deg, transparent, #005ea6, #00d4ff, #005ea6, transparent)",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Decorative elements */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 border border-blue-500/10 rounded-full hidden lg:block"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-16 h-16 border border-cyan-500/10 rounded-full hidden lg:block"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Subtle decorative line at the top */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 48 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-12 h-[2px] bg-gradient-to-r from-[#005ea6] to-transparent mt-4"
        />

        {/* Hero Text Content */}
        <div className="my-auto max-w-[90%] lg:max-w-[42%] xl:max-w-[38%] py-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-[42px] xl:text-[56px] 2xl:text-[64px] font-normal tracking-tight leading-[1.15] mb-4 xl:mb-6 font-serif"
          >
            {slide.titleLine1}
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block font-sans font-extrabold text-[#005ea6] mt-2 relative"
            >
              {slide.titleLine2}
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#005ea6] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-slate-300 text-sm xl:text-base leading-relaxed max-w-md mb-6 xl:mb-8"
          >
            {slide.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={slide.primaryCta.href}
                className="
                  inline-flex
                  items-center
                  gap-3
                  bg-[#005ea6]
                  text-white
                  px-6
                  py-3.5
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  transition-all
                  duration-300
                  hover:bg-[#004b84]
                  hover:shadow-lg
                  hover:shadow-[#005ea6]/25
                  relative
                  overflow-hidden
                  group
                "
              >
                <span className="relative z-10 flex items-center gap-3">
                  {slide.primaryCta.text}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={14} />
                  </motion.div>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#004b84] to-[#003a70]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>

            <motion.button
              onClick={() => {
                // Play showreel action
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex
                items-center
                gap-3
                text-white
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                transition-colors
                duration-300
                hover:text-blue-400
                group
              "
            >
              <motion.span
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  transition-all
                  duration-300
                  group-hover:border-blue-400
                  group-hover:bg-white/5
                  relative
                "
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0, 94, 166, 0)",
                    "0 0 0 10px rgba(0, 94, 166, 0)",
                    "0 0 0 0 rgba(0, 94, 166, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Play size={12} className="fill-white ml-0.5 group-hover:fill-blue-400 group-hover:text-blue-400" />
                </motion.div>
              </motion.span>
              {slide.secondaryCta.text}
            </motion.button>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 xl:pt-8 border-t border-white/10 max-w-[90%] lg:max-w-[40%] xl:max-w-[36%] mb-4"
        >
          {statsWithIcons.map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative pr-4 last:border-0 sm:border-r sm:border-white/10 group cursor-default"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-blue-400 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ y: 10 }}
                whileHover={{ y: 0 }}
              >
                {stat.icon}
              </motion.div>
              <motion.p
                className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[36px] font-bold tracking-tight mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 + idx * 0.1 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400 leading-tight group-hover:text-blue-400 transition-colors duration-300">
                {stat.label}
              </p>
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#005ea6] to-transparent group-hover:w-full transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE PANEL (Office Building Image & Slider Controls) */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-full h-full bg-slate-100 z-0
                   hidden lg:block lg:[clip-path:polygon(46%_-5%,_105%_-5%,_105%_105%,_38%_105%)]"
      >
        <AnimatePresence mode="wait">
          {activeImages.map((imgSrc, idx) => (
            idx === currentImageIndex && (
              <motion.div
                key={imgSrc}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: HERO_IMAGE_TRANSITION_DURATION / 1000, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={imgSrc}
                  alt={`Hero background ${idx + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={idx === 0}
                  className="object-cover"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        {/* Subtle overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none z-10" />

        {/* Slider Controls (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-0 right-0 flex items-center bg-[#0a1f44] text-white z-20 select-none"
        >
          <motion.div
            className="px-6 py-4 text-xs font-mono tracking-widest text-slate-400 border-r border-white/10"
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            <motion.span
              key={currentImageIndex}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-bold inline-block"
            >
              {String(currentImageIndex + 1).padStart(2, "0")}
            </motion.span>{" "}
            / {String(activeImages.length).padStart(2, "0")}
          </motion.div>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1, backgroundColor: "#004b84" }}
            whileTap={{ scale: 0.9 }}
            className="
              p-5
              bg-[#005ea6]
              text-white
              transition-colors
              duration-300
              hover:bg-[#004b84]
              flex
              items-center
              justify-center
              relative
              overflow-hidden
              group
            "
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#004b84] to-[#003a70]"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10"
            >
              <ChevronRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile background image fallback */}
      <div className="absolute inset-0 lg:hidden z-0">
        <AnimatePresence mode="wait">
          {activeImages.map((imgSrc, idx) => (
            idx === currentImageIndex && (
              <motion.div
                key={imgSrc}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.45 }}
                exit={{ opacity: 0 }}
                transition={{ duration: HERO_IMAGE_TRANSITION_DURATION / 1000 }}
                className="absolute inset-0"
              >
                <Image
                  src={imgSrc}
                  alt={`Hero background mobile ${idx + 1}`}
                  fill
                  sizes="100vw"
                  priority={idx === 0}
                  className="object-cover"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-20 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}