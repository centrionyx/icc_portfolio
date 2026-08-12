"use client";

import { Briefcase, Search, Eye, Wrench, Calculator, ShieldCheck, Settings, Layers } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ServicesFocusAreas from "@/feature/services/components/ServicesFocusAreas";
import ServicesMatrix from "@/feature/services/components/ServicesMatrix";
import ServicesSectorsWeServe from "@/feature/services/components/ServicesSectorsWeServe";
import KeyStrengths from "@/feature/home/components/KeyStrengths";
import ServicesCtaBanner from "@/feature/services/components/ServicesCtaBanner";

export default function ServicesPage() {
  // 8 Core Services matching exact specification
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
      short: "Independent advisory and technical consultancy to support informed decision-making, optimize costs, and reduce project risks.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Site feasibility & due diligence",
        "Design review & optimization",
        "Value engineering solutions",
        "Technical risk assessment"
      ]
    },
    {
      id: "monitoring",
      num: "03",
      icon: <Eye className="w-5 h-5" />,
      title: "Interior Fit-Out Project Monitoring",
      short: "Independent monitoring of project progress, quality, budget, and schedule to ensure complete compliance with project objectives.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Independent progress tracking",
        "Budget & schedule compliance",
        "Quality benchmark auditing",
        "Risk mitigation reporting"
      ]
    },
    {
      id: "design-coordination",
      num: "04",
      icon: <Wrench className="w-5 h-5" />,
      title: "Design Coordination",
      short: "Structured alignment between architects, interior designers, MEP engineers, and trade contractors for clash-free execution.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Designer–Vendor–MEP interface",
        "Drawing reviews & as-built validation",
        "Sample approval coordination",
        "Services clash resolution"
      ]
    },
    {
      id: "costing-boq",
      num: "05",
      icon: <Calculator className="w-5 h-5" />,
      title: "Costing, BOQ Validation & Joint Measurement Services",
      short: "Accurate quantity verification, joint measurement audits, BOQ validation, and billing verification for complete financial transparency.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      points: [
        "BOQ auditing & quantity verification",
        "Joint measurement certification",
        "Variation claim validation",
        "Financial billing management"
      ]
    },
    {
      id: "quality-safety",
      num: "06",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality & Safety Monitoring",
      short: "Continuous quality inspections and site safety audits to ensure strict compliance with standards, drawings, and regulations.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Daily site safety supervision",
        "Material quality verification",
        "Comprehensive snag listing",
        "Defect rectification tracking"
      ]
    },
    {
      id: "mep-services",
      num: "07",
      icon: <Settings className="w-5 h-5" />,
      title: "MEP & Services Coordination",
      short: "Specialized oversight of Mechanical, Electrical, Plumbing, HVAC, Fire Protection, and ELV services integration.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      points: [
        "HVAC, Electrical & Fire alignment",
        "Services line-out review",
        "Clash detection & resolution",
        "Testing & commissioning oversight"
      ]
    },
    {
      id: "site-supervision",
      num: "08",
      icon: <Layers className="w-5 h-5" />,
      title: "Site Supervision & Execution Support",
      short: "Direct on-site supervision monitoring workmanship, contractor performance, site safety, and strict adherence to specifications.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      points: [
        "On-site workmanship oversight",
        "Contractor performance tracking",
        "Daily progress reporting",
        "Handover & close-out assistance"
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
      {/* <ServicesFocusAreas /> */}

      {/* CORE SERVICES MATRIX */}
      <ServicesMatrix services={services} />

      {/* SECTORS WE SERVE SECTION */}
      <ServicesSectorsWeServe />

      {/* KEY STRENGTHS SECTION */}
      <KeyStrengths />

      {/* BOTTOM CTA BANNER */}
      <ServicesCtaBanner />
    </div>
  );
}