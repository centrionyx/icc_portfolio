"use client";

import { Briefcase, Search, Eye, Wrench, Calculator, ShieldCheck, Settings, Layers } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ServicesFocusAreas from "@/feature/services/components/ServicesFocusAreas";
import ServicesMatrix from "@/feature/services/components/ServicesMatrix";
import ServicesSectorsWeServe from "@/feature/services/components/ServicesSectorsWeServe";
import KeyStrengths from "@/feature/home/components/KeyStrengths";
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
      title: "Technical Advisory & Consultancy",
      short: "Expert technical guidance, feasibility studies, design reviews, and value engineering to optimize project outcomes.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Site feasibility & due diligence",
        "Design review & optimization",
        "Value engineering solutions",
        "Technical risk assessment"
      ]
    },
    {
      id: "supervision",
      num: "03",
      icon: <Eye className="w-5 h-5" />,
      title: "Execution Monitoring & Site Supervision",
      short: "On-site quality audits, progress tracking, safety compliance, and contractor management for flawless execution.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Daily site progress oversight",
        "Quality control & material checks",
        "Safety compliance monitoring",
        "Contractor performance tracking"
      ]
    },
    {
      id: "turnkey",
      num: "04",
      icon: <Wrench className="w-5 h-5" />,
      title: "Turnkey Interior Solutions",
      short: "Single-point responsibility from initial design concepts to final handover, simplifying delivery for clients.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Single-point accountability",
        "Complete design & build integration",
        "Vendor & procurement management",
        "Hassle-free client experience"
      ]
    },
    {
      id: "cost-management",
      num: "05",
      icon: <Calculator className="w-5 h-5" />,
      title: "Commercial & Cost Management",
      short: "BOQ auditing, variation checks, joint measurements, and billing management for complete financial transparency.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      points: [
        "BOQ auditing & bill validation",
        "Joint measurement verification",
        "Variation claim management",
        "Transparent cost reporting"
      ]
    },
    {
      id: "quality-audit",
      num: "06",
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Quality Assurance & Snag Listing",
      short: "Rigorous quality inspections, defect identification, snag closure tracking, and handover documentation.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Comprehensive snag listing",
        "Defect rectification tracking",
        "Quality benchmark auditing",
        "Handover documentation prep"
      ]
    },
    {
      id: "mep-coordination",
      num: "07",
      icon: <Settings className="w-5 h-5" />,
      title: "MEP & Services Coordination",
      short: "Specialized oversight of Mechanical, Electrical, Plumbing, HVAC, and Fire Safety systems integration.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
      points: [
        "3D clash detection reviews",
        "HVAC, Electrical & Fire alignment",
        "Energy efficiency optimization",
        "Services commissioning oversight"
      ]
    },
    {
      id: "post-handover",
      num: "08",
      icon: <Layers className="w-5 h-5" />,
      title: "Post-Handover & DLP Support",
      short: "Defect liability period management, facility performance reviews, and maintenance coordination post-occupancy.",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      points: [
        "Post-occupancy evaluation",
        "Warranty & DLP management",
        "Contractor performance tracking",
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