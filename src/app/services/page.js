"use client";

import { Briefcase, Search, Eye, Wrench, Calculator, ShieldCheck, Settings, Layers } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ServicesFocusAreas from "@/feature/services/components/ServicesFocusAreas";
import ServicesMatrix from "@/feature/services/components/ServicesMatrix";
import ServicesSectorsWeServe from "@/feature/services/components/ServicesSectorsWeServe";
import ServicesCtaBanner from "@/feature/services/components/ServicesCtaBanner";

export default function ServicesPage() {
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

  return (
    <div className="w-full bg-[#f8fafc] text-[#0a1f44] pb-24 font-sans antialiased">
      {/* HERO SECTION */}
      <PageHero
        title="Commercial Interior Services"
        subtitle="End-to-end fit-out project management, technical consultancy, and execution monitoring tailored for modern workspaces."
        breadcrumbs={[{ label: "Services" }]}
        bgImage="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
      />

      {/* OUR FOCUS AREAS SECTION */}
      <ServicesFocusAreas />

      {/* CORE SERVICES MATRIX */}
      <ServicesMatrix services={services} />

      {/* SECTORS WE SERVE SECTION */}
      <ServicesSectorsWeServe />

      {/* BOTTOM CTA BANNER */}
      <ServicesCtaBanner />
    </div>
  );
}