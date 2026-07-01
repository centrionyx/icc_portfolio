import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Layout, Award, CheckCircle, ChevronRight } from "lucide-react";

const projectsData = {
  jpmorgan: {
    client: "J.P. Morgan Chase & Co.",
    category: "Corporate Offices",
    location: "Bengaluru, India",
    size: "500,000 Sq. Ft.",
    scope: "Technical Advisory & MEP Coordination",
    duration: "48 Weeks",
    outcomes: "Snag-free handover, zero-delay MEP alignment with global guidelines.",
    image: "/office_building_dusk.png",
    images: ["/office_building_dusk.png", "/sustainability_office.png", "/workplace_strategy.png"],
    intro: "A state-of-the-art global financial technology hub delivered with strict adherence to multinational corporate specifications and international engineering standards.",
    challenge: "Managing extensive MEP services loads (including backup power, critical data infrastructure, and complex HVAC zoning) across a multi-story high-occupancy corporate structure, requiring zero downtime on handover.",
    advisory: "ICC spearheaded the pre-construction clash audit reviews, cross-validating designer CAD drawings with the physical site lines. We established rigorous contractor procurement benchmarks and oversaw milestone tracking workflows.",
    delivery: [
      "Conducted 3D clash-detection audits on HVAC, fire, and electrical line-outs.",
      "Oversaw vendor bidding and BOQ auditing to avoid variation cost spikes.",
      "Coordinated landlord approvals and structural permissions for high-capacity backup machinery.",
      "Provided daily progress metrics and weekly dashboards to regional stakeholders."
    ]
  },
  microsoft: {
    client: "Microsoft Research Center",
    category: "Corporate Offices",
    location: "Hyderabad, India",
    size: "300,000 Sq. Ft.",
    scope: "End-to-end Fit-Out Project Management",
    duration: "36 Weeks",
    outcomes: "Value engineered budget savings of 8.5% and handed over 2 weeks early.",
    image: "/office_building_dusk.png",
    images: ["/office_building_dusk.png", "/industry_trends.png", "/workplace_strategy.png"],
    intro: "A next-generation research facility focused on collaboration, featuring high-spec acoustic testing labs, flexible meeting areas, and custom structural designs.",
    challenge: "Extremely tight fast-track timeline of 36 weeks. The client required bespoke acoustic ratings and low-VOC material installations matching high global environmental criteria.",
    advisory: "We set up a data-driven critical path method (CPM) schedule, dividing the project into hourly site activities. We conducted strict material audits at site entry and ran structural coordination meetings twice a week.",
    delivery: [
      "Delivered pre-construction scheduling that saved 2 weeks on structural line-out phases.",
      "Coordinated with acoustic consultants to verify partition designs prior to drywall installation.",
      "Audited material quality certifications for LEED compliance.",
      "Managed weekly stakeholder alignment across three distinct architectural teams."
    ]
  },
  regent: {
    client: "The Regent Luxury Suites",
    category: "Hospitality",
    location: "Mumbai, India",
    size: "80,000 Sq. Ft.",
    scope: "Technical Advisory & Design Coordination",
    duration: "32 Weeks",
    outcomes: "Achieved high-end acoustic ratings and premium bespoke millwork finishes.",
    image: "/sustainability_office.png",
    images: ["/sustainability_office.png", "/workplace_strategy.png", "/industry_trends.png"],
    intro: "A premium hospitality redevelopment project featuring bespoke millwork, high-end stone finishes, and highly integrated automation controls.",
    challenge: "Integrating high-end custom millwork from multiple global manufacturers while keeping physical services (piping, wiring) hidden behind historical structural grids.",
    advisory: "ICC served as the bridge between international designers and local execution teams, reviewing detailed shop drawings and coordinating mock-up room approvals.",
    delivery: [
      "Reviewed detailed millwork shop drawings to ensure precise joinery and tolerances.",
      "Coordinated automated controls interface (lighting, climate) with MEP contractors.",
      "Supervised stone selection and installation alignments.",
      "Managed strict quality mock-ups for suite approval panels."
    ]
  },
  nexus: {
    client: "Nexus Premium Galleria",
    category: "Retail",
    location: "Pune, India",
    size: "120,000 Sq. Ft.",
    scope: "Site Supervision & Cost Audit Support",
    duration: "28 Weeks",
    outcomes: "Conducted complete structural audits and achieved zero-incident safety rating.",
    image: "/industry_trends.png",
    images: ["/industry_trends.png", "/sustainability_office.png", "/office_building_dusk.png"],
    intro: "A high-traffic premium retail development requiring extensive civil modifications and safety coordination.",
    challenge: "Carrying out heavy civil modifications and layout changes while retail operations continued on neighboring floors, requiring strict dust and noise controls.",
    advisory: "We managed site supervision checklists and implemented strict night-shift safety standards. Our quantity surveyors audited variation logs daily.",
    delivery: [
      "Implemented strict dust-isolation partitions and night-shift scheduling protocols.",
      "Supervised structural reinforcement works.",
      "Audited vendor cost claims and variation logs, preventing cost escalations.",
      "Achieved a 100% zero-incident EHS safety rating across the execution timeline."
    ]
  },
  oberoi: {
    client: "The Oberoi Residences",
    category: "Residential",
    location: "Gurugram, India",
    size: "50,000 Sq. Ft.",
    scope: "Bespoke Project Advisory & Execution Support",
    duration: "24 Weeks",
    outcomes: "Handover of complex multi-layered automated systems with fine architectural finishes.",
    image: "/workplace_strategy.png",
    images: ["/workplace_strategy.png", "/sustainability_office.png", "/office_building_dusk.png"],
    intro: "A high-end residential fit-out featuring automation, custom MEP grids, and premium interior elements.",
    challenge: "Working with highly complex customized details and automated systems that required extensive coordination between three different smart-home vendors.",
    advisory: "ICC designed the master integration timeline, ensuring HVAC and electrical conduits were prepared and tested prior to installing premium wood finishes.",
    delivery: [
      "Created integrated interface matrices for smart-home automation systems.",
      "Supervised installation tolerances on premium custom wood paneling.",
      "Conducted detailed moisture-level checks on walls prior to painting.",
      "Coordinated with custom lighting designers to align ceiling cut-outs."
    ]
  },
  deloitte: {
    client: "Deloitte Innovation Hub",
    category: "Turnkey",
    location: "Bengaluru, India",
    size: "150,000 Sq. Ft.",
    scope: "Turnkey Fit-Out Project Management",
    duration: "30 Weeks",
    outcomes: "Completed full MEP, ID, and landscape work with detailed audit documentation.",
    image: "/office_building_dusk.png",
    images: ["/office_building_dusk.png", "/workplace_strategy.png", "/industry_trends.png"],
    intro: "A turnkey project combining technology-enabled collaborative workspaces, acoustic focus rooms, and premium cafeteria facilities.",
    challenge: "Procuring and managing long-lead items (such as custom HVAC units and acoustic glass partitions) within a compressed 30-week schedule.",
    advisory: "We acted as the single point of contact, managing the design sign-offs, vendor procurement trails, and daily supervision activities.",
    delivery: [
      "Managed design coordination approvals for all collaborative spaces.",
      "Established critical supply-chain schedules for long-lead custom partitions.",
      "Supervised daily MEP installation sequences and commissioning trials.",
      "Delivered complete operations manuals and as-built drawings at handover."
    ]
  }
};

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projectsData[id];

  if (!project) {
    notFound();
  }

  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      
      {/* HEADER BANNER */}
      <section className="w-full bg-[#0a1f44] text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Background Image on the right */}
        <div className="absolute inset-y-0 right-0 w-[50%] z-0 hidden md:block">
          <Image
            src={project.image}
            alt={project.client}
            fill
            priority
            className="object-cover object-right opacity-30"
          />
        </div>

        {/* Horizontal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/90 to-transparent z-10 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-20">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3 block">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight font-serif max-w-2xl leading-tight">
            {project.client}
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-4 max-w-xl leading-relaxed">
            {project.intro}
          </p>
        </div>
      </section>

      {/* METADATA HORIZONTAL STRIPE */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Location</p>
              <p className="text-xs font-bold text-[#0a1f44]">{project.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <Layout className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Project Size</p>
              <p className="text-xs font-bold text-[#0a1f44]">{project.size}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Duration</p>
              <p className="text-xs font-bold text-[#0a1f44]">{project.duration}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Service Scope</p>
              <p className="text-xs font-bold text-[#0a1f44] truncate max-w-[150px]" title={project.scope}>
                {project.scope}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CASE STUDY DETAILS */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: NARRATIVE */}
          <div className="flex-grow space-y-10">
            
            {/* The Challenge */}
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                The Objective
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-4">
                The Project Challenge
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Advisory Solution */}
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Advisory Approach
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-4">
                ICC Strategy & Solutions
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {project.advisory}
              </p>
            </div>

            {/* Detailed Deliveries */}
            <div>
              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Execution Details
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-4">
                Key Technical Deliveries
              </h2>
              <ul className="space-y-3.5">
                {project.delivery.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold text-[9px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT COLUMN: SIDEBAR & GALLERY */}
          <div className="w-full lg:w-[420px] shrink-0 space-y-8">
            
            {/* Key Outcome Panel */}
            <div className="bg-[#0a1f44] text-white p-6 border border-slate-800 shadow-md">
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block mb-2">Project Success KPI</span>
              <h3 className="text-base font-bold font-serif mb-3">Deliverable Outcome</h3>
              <div className="flex items-start gap-2.5 bg-white/5 p-4 border border-white/10 text-xs text-slate-300">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{project.outcomes}</span>
              </div>
            </div>

            {/* Images Grid */}
            <div className="bg-white border border-slate-200 p-6 shadow-sm">
              <h4 className="text-xs font-bold text-[#0a1f44] uppercase tracking-wider mb-4">Project Gallery</h4>
              <div className="grid grid-cols-1 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="relative h-[180px] w-full bg-slate-100 border border-slate-200 overflow-hidden group">
                    <Image
                      src={img}
                      alt={`${project.client} showcase ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
