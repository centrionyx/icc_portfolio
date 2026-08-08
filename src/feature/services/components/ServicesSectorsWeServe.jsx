"use client";

import { HiOutlineShoppingBag, HiOutlineBuildingOffice2, HiOutlineCpuChip, HiOutlineBanknotes, HiOutlineBeaker, HiOutlineUserGroup } from "react-icons/hi2";
import SectionHeader from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/animations";

export default function ServicesSectorsWeServe() {
  const sectors = [
    {
      title: "Corporate Workspaces",
      desc: "High-precision commercial office fit-outs tailored for maximum productivity, brand identity, and modern collaboration.",
      icon: <HiOutlineBuildingOffice2 className="text-3xl text-brand-accent" />,
    },
    {
      title: "IT & Technology Hubs",
      desc: "Tech-enabled environments with advanced acoustic engineering, smart MEP integrations, and flexible workstation layouts.",
      icon: <HiOutlineCpuChip className="text-3xl text-brand-accent" />,
    },
    {
      title: "BFSI & Financial Centers",
      desc: "Secure, prestigious banking and financial office spaces designed with high-end finishes and robust compliance standards.",
      icon: <HiOutlineBanknotes className="text-3xl text-brand-accent" />,
    },
    {
      title: "R&D / Technical Labs",
      desc: "Specialized cleanrooms and technical workspaces adhering to stringent environmental, safety, and operational protocols.",
      icon: <HiOutlineBeaker className="text-3xl text-brand-accent" />,
    },
    {
      title: "Executive Boardrooms & Suites",
      desc: "Exclusive leadership suites and high-impact conference rooms featuring premium craftsmanship and AV integration.",
      icon: <HiOutlineUserGroup className="text-3xl text-brand-accent" />,
    },
    {
      title: "Retail Spaces",
      desc: "Engaging retail environments that enhance customer experience and maximize business impact.",
      icon: <HiOutlineShoppingBag className="text-3xl text-brand-accent" />,
    },
  ];

  return (
    <section className="py-16 sm:py-20 max-w-[1440px] mx-auto px-5 lg:px-8">
      {/* Reusable Section Header */}
      <SectionHeader
        eyebrow="SECTORS WE SERVE"
        title="Sectors"
        highlight="We Serve"
        description="We bring ideas to life across a wide range of sectors, designing interiors that are functional, inspiring, and built to make a lasting impact."
      />

      {/* ── 6 SECTORS CARDS GRID ── */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {sectors.map((item, idx) => (
          <StaggerItem key={idx} direction="up">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex items-start gap-6 group h-full">
              {/* Left Circular Blue Badge Container */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-brand-accent transition-colors shadow-sm [&>svg]:transition-colors [&>svg]:duration-300 group-hover:[&>svg]:text-white">
                {item.icon}
              </div>

              {/* Right Text Content */}
              <div className="flex flex-col justify-between h-full pt-1">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950 mb-2 font-sans group-hover:text-brand-accent transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Blue Accent Line */}
                <div className="w-10 h-1 bg-brand-accent rounded-full mt-5 opacity-80 group-hover:w-14 transition-all" />
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
