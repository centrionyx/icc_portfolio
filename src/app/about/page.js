"use client";

import { useEffect, useRef, useState } from "react";
import {
  Users,
  Compass,
  ShieldCheck,
  Heart,
  Award,
  TrendingUp,
  Star,
  Target,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import AboutFoundation from "@/feature/about/components/AboutFoundation";
import AboutLeadership from "@/feature/about/components/AboutLeadership";
import AboutPrinciples from "@/feature/about/components/AboutPrinciples";
import AboutClients from "@/feature/about/components/AboutClients";

export default function AboutPage() {
  const containerRef = useRef(null);
  const [dynAbout, setDynAbout] = useState(null);

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => setDynAbout(data))
      .catch((err) => console.error("Failed to load about data:", err));
  }, []);

  const values = [
    {
      num: "01",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Predictable Governance",
      description: "Institutionalized process control, clear milestone auditing, and transparent documentation to commercial interior execution.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      num: "02",
      icon: <Award className="w-5 h-5" />,
      title: "Absolute Accountability",
      description: "Complete ownership of project schedules, quality control, contractor alignment, and zero-delay execution benchmarks.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      num: "03",
      icon: <Compass className="w-5 h-5" />,
      title: "Technical Due Diligence",
      description: "Deep expertise in MEP clash audits, civil line-outs, BOQ validation, and design optimization to mitigate timeline risks.",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      num: "04",
      icon: <Users className="w-5 h-5" />,
      title: "Partner Alignment",
      description: "Supporting clients in selecting the right delivery partners, coordination frameworks, and managing stakeholder interfaces.",
      gradient: "from-blue-600 to-indigo-600",
    },
    {
      num: "05",
      icon: <Heart className="w-5 h-5" />,
      title: "Uncompromising Quality",
      description: "Rigorous site safety supervision audits and detail-oriented snag list clearance before formal project handovers.",
      gradient: "from-sky-500 to-blue-500",
    },
  ];

  const careerDeliveries = dynAbout?.careerDeliveries && dynAbout.careerDeliveries.length > 0
    ? dynAbout.careerDeliveries
    : [
        { client: "Principal Global", size: "4.5 Lakh Sq. Ft." },
        { client: "Symantec", size: "3.5 Lakh Sq. Ft." },
        { client: "ZS Associates", size: "3.0 Lakh Sq. Ft." },
        { client: "BMC Software", size: "3.0 Lakh Sq. Ft." },
        { client: "Vodafone", size: "2.5 Lakh Sq. Ft." },
        { client: "TCS", size: "2.5 Lakh Sq. Ft." },
        { client: "Nice Systems", size: "2.0 Lakh Sq. Ft." },
        { client: "Persistent", size: "1.8 Lakh Sq. Ft." },
      ];

  const calculatedDeliveredArea = (() => {
    let totalSqFt = 0;
    careerDeliveries.forEach((item) => {
      if (!item || !item.size) return;
      const sizeStr = item.size.toLowerCase();
      const val = parseFloat(sizeStr.replace(/,/g, "").match(/\d+(\.\d+)?/)?.[0] || 0);

      if (sizeStr.includes("lakh")) {
        totalSqFt += val * 100000;
      } else if (sizeStr.includes("sq. m") || sizeStr.includes("sq m") || sizeStr.includes("sqm")) {
        totalSqFt += val * 10.7639;
      } else if (sizeStr.includes("acre")) {
        totalSqFt += val * 43560;
      } else if (sizeStr.includes("yd")) {
        totalSqFt += val * 9;
      } else {
        totalSqFt += val;
      }
    });

    if (totalSqFt >= 1000000) {
      return `${(totalSqFt / 1000000).toFixed(1)}M`;
    }
    if (totalSqFt >= 100000) {
      return `${(totalSqFt / 100000).toFixed(1)} Lakh`;
    }
    return `${Math.round(totalSqFt).toLocaleString()}`;
  })();

  const founder = {
    name: dynAbout?.founderName || "Yogesh Pawar",
    role: dynAbout?.founderRole || "Founder and Lead Consultant - BE Mechanical",
    bio: dynAbout?.founderBio || "Yogesh Pawar has more than 18+ years of varied experience in Project management & controls of commercial interior Office fitout Projects. He has completed more than 8 million Sq.ft of Interior project in the field of IT / ITES / BFSI / Retail.\n\nHe has been responsible for leading a team of professional project vendors and technical agencies to handle various aspects of Interior office fitout project including Project Process & Procedures. As a “Project Owner”, he works with the client team for managing all aspects of the project delivery and Process management from concept to completion & post handover support for new & retrofit Projects. He is also responsible for Operational Oversight, client relationship management & Strategic planning for effective implementation of the projects.",
    email: dynAbout?.founderEmail || "yogesh.pawar@icc.ind.in",
    image: dynAbout?.founderImage || "/founder.png",
    experience: dynAbout?.founderExperience || "18",
    deliveredArea: calculatedDeliveredArea || "8M",
  };

  const clientsServed = [
    "Bajaj Finance", "Telstra", "Magna Electronics", "Flextronics",
    "Western Union", "NiCE Systems", "Boardroom", "Red Hat", "Eaton",
  ];

  const stats = [
    { val: `${founder.deliveredArea}+`, label: "Sq. Ft. Delivered", icon: <TrendingUp className="w-5 h-5" /> },
    { val: `${founder.experience}+`, label: "Years Experience", icon: <Star className="w-5 h-5" /> },
    { val: "2024", label: "Founded", icon: <Target className="w-5 h-5" /> },
  ];

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full bg-white text-[#111827] overflow-hidden" ref={containerRef}>
      {/* Custom Cursor Effect */}
      <div
        className="fixed pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
          transform: isHovering ? "scale(1.5)" : "scale(1)",
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className="w-10 h-10 rounded-full border-2 border-[#003A70] mix-blend-difference" />
      </div>

      {/* 1. HERO SECTION */}
      <PageHero
        title="About ICC"
        subtitle="Innovation Consultants & Contractors — Delivering seamless commercial fit-out execution from concept to completion."
        breadcrumbs={[{ label: "About ICC" }]}
      />

      {/* 2. FOUNDATION SECTION */}
      <AboutFoundation />

      {/* 3. LEADERSHIP & CAREER DELIVERIES SECTION */}
      <AboutLeadership 
        founder={founder} 
        careerDeliveries={careerDeliveries} 
      />

      {/* 4. OPERATING PRINCIPLES SECTION */}
      <AboutPrinciples 
        values={values} 
        founderEmail={founder.email} 
      />

      {/* 5. CLIENT REGISTER & CTA SECTION */}
      <AboutClients 
        clientsServed={clientsServed} 
        founderEmail={founder.email} 
      />

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
}