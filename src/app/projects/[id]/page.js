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
    <div className="w-full bg-[#f8fafc] text-[#0a1f44] pb-24">
      
      {/* 1. HERO HEADER BANNER */}
      <section className="w-full bg-[#0a1f44] text-white py-24 relative overflow-hidden">
        {/* Glowing Ambient Lights */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Background Image on the right */}
        <div className="absolute inset-y-0 right-0 w-[55%] z-0 hidden md:block">
          <Image
            src={project.image}
            alt={project.client}
            fill
            priority
            className="object-cover object-center opacity-25"
          />
        </div>

        {/* Gradient Transition Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44] via-[#0a1f44]/95 to-transparent z-10 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 relative z-20">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-8 hover:text-blue-300 transition-colors font-mono"
          >
            <ArrowLeft size={13} />
            // Back to Portfolio
          </Link>
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 rounded-full mb-4 inline-block font-mono">
            {project.category}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight font-serif max-w-3xl leading-tight">
            {project.client}
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm mt-6 max-w-2xl leading-relaxed font-light">
            {project.intro}
          </p>
        </div>
      </section>

      {/* 2. STATS & PARAMETERS STRIPE */}
      <section className="bg-white border-b border-slate-200 py-8 relative z-20 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Site Location", val: project.location, icon: <MapPin className="w-5 h-5 text-blue-600" /> },
            { label: "Built-up Footprint", val: project.size, icon: <Layout className="w-5 h-5 text-blue-600" /> },
            { label: "Execution Timeline", val: project.duration, icon: <Calendar className="w-5 h-5 text-blue-600" /> },
            { label: "ICC Advisory Scope", val: project.scope, icon: <Award className="w-5 h-5 text-blue-600" /> }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest font-mono">{stat.label}</p>
                <p className="text-xs font-bold text-[#0a1f44] mt-0.5 truncate" title={stat.val}>{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CASE STUDY BRIEF & METRICS */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 xl:gap-16 items-start">
          
          {/* Narrative Block (Left Column) */}
          <div className="flex-grow space-y-12">
            
            {/* The Challenge */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#3b82f6] block mb-2 font-mono">
                // PROJECT CHALLENGE
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-4">
                The Site Challenge
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            {/* Advisory Solution */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#3b82f6] block mb-2 font-mono">
                // ADVISORY STRATEGY
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-4">
                Solutions & Execution Framework
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                {project.advisory}
              </p>
            </div>

            {/* Technical Deliveries list */}
            <div className="space-y-6">
              <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#3b82f6] block font-mono">
                // WORKFLOW TRACKS
              </span>
              <h2 className="text-xl font-bold tracking-tight text-[#0a1f44] font-serif mb-4">
                Key Technical Deliveries
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {project.delivery.map((item, idx) => (
                  <div key={idx} className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-400 transition-all duration-300">
                    <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 text-[#005ea6] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Outcome & Gallery (Right Column) */}
          <div className="w-full lg:w-[420px] shrink-0 space-y-8">
            
            {/* Success KPI Outcome panel */}
            <div className="bg-gradient-to-br from-[#0a1f44] to-[#0c244b] text-white p-8 rounded-2xl shadow-xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[9px] font-extrabold text-cyan-400 uppercase tracking-widest block mb-2 font-mono">
                // DELIVERABLE KPI
              </span>
              <h3 className="text-lg font-bold font-serif mb-4">Success Milestone</h3>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10 text-xs text-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed font-light">{project.outcomes}</span>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4">
              <h4 className="text-xs font-extrabold text-[#0a1f44] uppercase tracking-wider mb-4 font-mono">// PORTFOLIO SHOWCASE</h4>
              <div className="grid grid-cols-1 gap-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="relative h-[200px] w-full rounded-xl overflow-hidden border border-slate-200 group">
                    <Image
                      src={img}
                      alt={`${project.client} showcase ${idx + 1}`}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-[10px] font-bold text-white uppercase tracking-wider font-mono">
                        Showcase View {idx + 1}
                      </span>
                    </div>
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
