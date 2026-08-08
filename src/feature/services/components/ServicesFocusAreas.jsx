"use client";

import Image from "next/image";
import { Lightbulb, Layers, ShieldCheck, Leaf, Smile, Clock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function ServicesFocusAreas() {
  const items = [
    {
      title: "Thoughtful Design",
      desc: "Designing spaces that reflect your personality and lifestyle.",
      icon: <Lightbulb size={22} strokeWidth={2.2} />,
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Functional Spaces",
      desc: "We create layouts that maximize space, comfort and efficiency.",
      icon: <Layers size={22} strokeWidth={2.2} />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Quality Craftsmanship",
      desc: "High-quality materials and skilled craftsmanship in every detail.",
      icon: <ShieldCheck size={22} strokeWidth={2.2} />,
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Sustainable Approach",
      desc: "Eco-conscious choices for a better tomorrow and healthier spaces.",
      icon: <Leaf size={22} strokeWidth={2.2} />,
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Client-Centric Process",
      desc: "Collaborative process that puts your vision at the center.",
      icon: <Smile size={22} strokeWidth={2.2} />,
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Timely Delivery",
      desc: "On-time execution with attention to detail at every step.",
      icon: <Clock size={22} strokeWidth={2.2} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-16 sm:py-20">
      {/* TOP LEFT-ALIGNED HEADER SECTION */}
      <FadeIn direction="up">
        <div className="text-left max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#E5A900] block mb-2">
            OUR FOCUS AREAS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-950 tracking-tight leading-[1.12] mb-3">
            Our <span className="text-[#E5A900]">Focus Areas</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            We focus on designing spaces that are beautiful, functional, and timeless. <br className="hidden sm:inline" />
            Every detail we create is guided by purpose and people.
          </p>
        </div>
      </FadeIn>

      {/* 6 FOCUS CARDS GRID */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
        {items.map((item, idx) => (
          <StaggerItem key={idx} direction="up">
            <div className="relative bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group pt-0 h-full">
              {/* Card Image Header (Top Section) */}
              <div className="relative aspect-[4/3] w-full bg-slate-100 rounded-t-3xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  unoptimized
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlapping Circular Golden Badge */}
              <div className="absolute top-[33.33%] sm:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-13 h-13 rounded-full bg-amber-50 border-4 border-white text-[#E5A900] shadow-lg flex items-center justify-center z-20 group-hover:bg-[#E5A900] group-hover:text-slate-950 transition-colors">
                {item.icon}
              </div>

              {/* Card Content Area */}
              <div className="pt-10 pb-6 px-4 flex flex-col items-center text-center flex-1 justify-between bg-white rounded-b-3xl">
                <div>
                  <h3 className="text-base font-extrabold text-slate-950 mb-2 leading-snug font-sans group-hover:text-[#E5A900] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Golden Accent Indicator Line */}
                <div className="w-8 h-1 bg-[#E5A900] rounded-full mt-5 opacity-80 group-hover:w-12 transition-all" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
