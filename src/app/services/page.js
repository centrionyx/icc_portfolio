"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Briefcase,
  Search,
  Layers,
  Wrench,
  Calculator,
  ShieldCheck,
  Settings,
  Eye,
  ArrowRight,
  Check,
  FileText,
  CheckCircle,
  ChevronRight,
  Target,
  Clock,
  Shield,
  Leaf,
  Smile,
  Lightbulb,
  Compass,
  ShoppingBag,
  HardHat,
  CheckCircle2
} from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  TiltCard,
} from "@/components/animations";
import PageHero from "@/components/layout/PageHero";

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState("fitout-pm");

  // 8 Core Services from services.md with matching Unsplash imagery
  const services = [
    {
      id: "fitout-pm",
      num: "01",
      icon: <Briefcase className="w-5 h-5" />,
      title: "Interior Fit-Out Project Management",
      short: "End-to-end management of interior fit-out projects ensuring seamless planning, coordination, execution, cost control and timely delivery.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      points: [
        "End-to-end planning & scheduling",
        "Seamless stakeholder coordination",
        "Cost control & budget management",
        "On-time project delivery"
      ]
    },
    {
      id: "advisory",
      num: "02",
      icon: <Search className="w-5 h-5" />,
      title: "Project Advisory & Technical Consultancy",
      short: "Independent advisory and technical consultancy to support informed decision-making, optimize costs and reduce project risks.",
      image: "https://images.unsplash.com/photo-1542744801-43245f175232?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Informed strategic decision support",
        "Value engineering & cost optimization",
        "Pre-construction risk reduction",
        "Technical specification audits"
      ]
    },
    {
      id: "monitoring",
      num: "03",
      icon: <Eye className="w-5 h-5" />,
      title: "Interior Fit-Out Project Monitoring",
      short: "Independent monitoring of project progress, quality, budget and schedule to ensure compliance with project objectives.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Independent schedule monitoring",
        "Budget & cost variance audits",
        "Quality compliance verification",
        "Objective alignment tracking"
      ]
    },
    {
      id: "maintenance",
      num: "04",
      icon: <Wrench className="w-5 h-5" />,
      title: "Repair & Maintenance Services",
      short: "Planned and reactive maintenance solutions that ensure workplace functionality, asset performance and business continuity.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Planned preventive maintenance",
        "Rapid reactive repair solutions",
        "Workplace asset optimization",
        "Business continuity assurance"
      ]
    },
    {
      id: "billing",
      num: "05",
      icon: <Calculator className="w-5 h-5" />,
      title: "Billing & Joint Measurement Services",
      short: "Accurate quantity verification, joint measurement and billing validation ensuring transparency and financial accuracy.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Accurate quantity verification",
        "Site joint measurement logs",
        "Transparent billing validation",
        "Financial compliance accuracy"
      ]
    },
    {
      id: "quality-safety",
      num: "06",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality & Safety Monitoring",
      short: "Continuous quality inspections and safety audits to ensure compliance with standards, specifications and regulations.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Continuous quality inspections",
        "EHS site safety audits",
        "Specification & standard checks",
        "Regulatory compliance reporting"
      ]
    },
    {
      id: "mep",
      num: "07",
      icon: <Settings className="w-5 h-5" />,
      title: "MEP & Services Coordination",
      short: "Coordination of MEP, HVAC, Fire Protection, ELV and allied services for seamless integration and efficient project delivery.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
      points: [
        "HVAC, MEP & ELV coordination",
        "Fire protection integration",
        "Inter-services clash checks",
        "Efficient system commissioning"
      ]
    },
    {
      id: "supervision",
      num: "08",
      icon: <Layers className="w-5 h-5" />,
      title: "Site Supervision & Execution Support",
      short: "On-site supervision to monitor workmanship, contractor performance and adherence to drawings and specifications.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      points: [
        "On-site workmanship monitoring",
        "Contractor performance tracking",
        "Drawing & spec adherence checks",
        "Daily site progress oversight"
      ]
    }
  ];

  // Our Focus Pillars from services.md
  const focusPillars = [
    { title: "Quality", desc: "Rigorous standards & zero-compromise execution across every detail.", icon: <Shield className="w-5 h-5 text-blue-600" /> },
    { title: "Timely Delivery", desc: "Predictable schedules and milestone enforcement to guarantee on-time completion.", icon: <Clock className="w-5 h-5 text-blue-600" /> },
    { title: "Safety", desc: "Strict EHS protocols and continuous site safety monitoring.", icon: <ShieldCheck className="w-5 h-5 text-blue-600" /> },
    { title: "Sustainability", desc: "Eco-friendly construction practices and energy-efficient workplace solutions.", icon: <Leaf className="w-5 h-5 text-blue-600" /> },
    { title: "Transparency", desc: "Open communication, accurate billing validation, and joint measurements.", icon: <Target className="w-5 h-5 text-blue-600" /> },
    { title: "Client Satisfaction", desc: "Client-first approach delivering long-term value and high commitment.", icon: <Smile className="w-5 h-5 text-blue-600" /> },
  ];

  // Our Approach (6 Stages) from services.md
  const approachStages = [
    {
      num: "01",
      icon: <Lightbulb className="w-5 h-5 text-[#005ea6]" />,
      stage: "Concept Stage",
      items: ["Project Schedule", "Project Budget", "Stakeholder Appointment", "Site Due Diligence and Shortlisting"]
    },
    {
      num: "02",
      icon: <Compass className="w-5 h-5 text-[#005ea6]" />,
      stage: "Design & Planning Stage",
      items: ["Test Fit", "Look & Feel", "MEP DBR Reviews & Inputs", "BOQ's and Contracts"]
    },
    {
      num: "03",
      icon: <ShoppingBag className="w-5 h-5 text-[#005ea6]" />,
      stage: "Technical Design & Procurement",
      items: ["Recommendation & Award of Work", "D&B Partners", "Order Long Lead & Supply Packages", "Contract Sign Off's"]
    },
    {
      num: "04",
      icon: <HardHat className="w-5 h-5 text-[#005ea6]" />,
      stage: "Construction Stage",
      items: ["Vendor Management", "Sample & Technical Submittals", "Time & Risk Management", "Logistic Management & UAT"]
    },
    {
      num: "05",
      icon: <CheckCircle2 className="w-5 h-5 text-[#005ea6]" />,
      stage: "Handover & Close Out Stage",
      items: ["Testing & Commissioning", "Punch Listing & Deficiency Walk-through", "Close-out Training Programs", "O&M Manual & As-built Collation", "Technical & Commercial Close Out"]
    },
    {
      num: "06",
      icon: <ShieldCheck className="w-5 h-5 text-[#005ea6]" />,
      stage: "Post Handover Stage",
      items: ["Post Move Support during DLP", "Performance Review of Services & Facilities", "Warranty Coordination", "Maintenance Advisory"]
    }
  ];

  const activeServiceObj = services.find(s => s.id === expandedService) || services[0];

  return (
    <div className="w-full bg-[#f8fafc] text-[#0a1f44] pb-24 font-sans antialiased">
      {/* HERO SECTION */}
      <PageHero
        title="Commercial Interior Services"
        subtitle="End-to-end fit-out project management, technical consultancy, and execution monitoring tailored for modern workspaces."
        breadcrumbs={[{ label: "Services" }]}
        bgImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />

      {/* OUR FOCUS SECTION */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#005ea6] block mb-2">
            CORE PRINCIPLES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0a1f44] tracking-tight">
            Our Focus Areas
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light mt-2">
            The values that drive every project we undertake from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusPillars.map((pillar, idx) => (
            <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#005ea6]/30 transition-all duration-300 flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-xl shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0a1f44] mb-1">{pillar.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE SERVICES MATRIX */}
      <section id="services-matrix" className="max-w-[1440px] mx-auto px-5 lg:px-8 pt-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#005ea6] block mb-2">
            SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0a1f44] tracking-tight">
            Our Services
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm font-light mt-2">
            Comprehensive interior fit-out management and technical consulting solutions.
          </p>
        </div>



        {/* ALL 8 SERVICES GRID - Matching Image Design */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((s) => (
            <StaggerItem key={s.id} direction="up">
              <Link
                href={`/contact?interest=${s.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 flex flex-col hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 h-full"
              >
                {/* Top Half: Image with Floating Golden Icon Pill */}
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    unoptimized
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating White Icon Pill with Golden Yellow Icon */}
                  <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-slate-100/60 text-[#E5A900] flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>

                {/* Bottom Half: Clean White Content Area */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    {/* Service Title */}
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug mb-2 font-sans group-hover:text-[#005ea6] transition-colors">
                      {s.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-slate-500 text-xs sm:text-sm font-normal leading-relaxed line-clamp-3">
                      {s.short}
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>



      {/* BOTTOM CTA BANNER */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#0a1f44] to-[#005ea6] text-white p-8 sm:p-12 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-cyan-300 shrink-0">
              <FileText size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider font-sans">Ready to Start Your Fit-Out Project?</h3>
              <p className="text-xs text-slate-200 leading-relaxed mt-0.5 max-w-xl font-light">
                Reach out to our experts to discuss your requirements, project scope, budget, and timelines.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-white text-[#0a1f44] hover:bg-slate-100 py-4 px-8 rounded-xl text-xs font-extrabold uppercase tracking-widest flex items-center gap-2 transition-all shrink-0 shadow-lg"
          >
            <span>Contact Us</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

    </div>
  );
}