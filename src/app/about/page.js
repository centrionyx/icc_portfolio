"use client";

import {
  Users,
  Compass,
  ShieldCheck,
  Heart,
  Award,
  Plus,
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared "drawing sheet" primitives                                  */
/*  ICC's own business is technical drawings & fit-out execution, so   */
/*  the page borrows the vocabulary of a construction drawing set:     */
/*  sheet codes, scale marks, registration crosses, schedules.         */
/* ------------------------------------------------------------------ */

function CornerMarks({ dark = false }) {
  const cls = dark ? "text-white/25" : "text-slate-300";
  const common = "absolute w-3 h-3 " + cls;
  return (
    <>
      <Plus className={`${common} -top-1.5 -left-1.5`} strokeWidth={1.5} />
      <Plus className={`${common} -top-1.5 -right-1.5`} strokeWidth={1.5} />
      <Plus className={`${common} -bottom-1.5 -left-1.5`} strokeWidth={1.5} />
      <Plus className={`${common} -bottom-1.5 -right-1.5`} strokeWidth={1.5} />
    </>
  );
}

function SheetBar({
  code,
  title,
  scale = "NTS",
  dark = false,
}) {
  return (
    <div
      className={`flex items-center justify-between border-b ${
        dark ? "border-white/15" : "border-slate-300"
      } pb-3 mb-8`}
    >
      <div className="flex items-baseline gap-3">
        <span
          className={`font-mono text-[10px] font-bold tracking-widest ${
            dark ? "text-blue-400" : "text-[#003A70]"
          }`}
        >
          {code}
        </span>
        <span
          className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
            dark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {title}
        </span>
      </div>
      <span
        className={`font-mono text-[9px] tracking-wider ${
          dark ? "text-slate-500" : "text-slate-400"
        }`}
      >
        SCALE {scale}
      </span>
    </div>
  );
}

const gridBg =
  "bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:36px_36px]";

const gridBgDark =
  "bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]";

/* ------------------------------------------------------------------ */

export default function AboutPage() {
  const values = [
    {
      code: "A-04.1",
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" strokeWidth={1.75} />,
      title: "Predictable Governance",
      description:
        "Bringing institutionalized process control, clear milestone auditing, and transparent documentation to commercial interior execution.",
    },
    {
      code: "A-04.2",
      icon: <Award className="w-6 h-6 text-blue-500" strokeWidth={1.75} />,
      title: "Absolute Accountability",
      description:
        "We assume complete ownership of project schedules, quality control, contractor alignment, and zero-delay execution benchmarks.",
    },
    {
      code: "A-04.3",
      icon: <Compass className="w-6 h-6 text-blue-500" strokeWidth={1.75} />,
      title: "Technical Due Diligence",
      description:
        "Deep expertise in MEP clash audits, civil line-outs, BOQ validation, and design optimization to mitigate timeline risks.",
    },
    {
      code: "A-04.4",
      icon: <Users className="w-6 h-6 text-blue-500" strokeWidth={1.75} />,
      title: "Partner Alignment",
      description:
        "Supporting clients in selecting the right delivery partners, coordination frameworks, and managing stakeholder interfaces.",
    },
    {
      code: "A-04.5",
      icon: <Heart className="w-6 h-6 text-blue-500" strokeWidth={1.75} />,
      title: "Uncompromising Quality",
      description:
        "Conducting rigorous site safety supervision audits and detail-oriented snag list clearance before formal handovers.",
    },
  ];

  const founder = {
    name: "Yogesh Pawar",
    role: "Founder & Managing Director",
    bio: "Project Management Consultant with 20+ years of experience delivering more than 10 million sq ft of commercial interior fit-out projects across India. Specialized in project governance, stakeholder alignment, technical due diligence, contractor selection, and end-to-end delivery of fast-track corporate workspace projects.",
    email: "yogesh.pawar@icc.ind.in",
  };

  const careerDeliveries = [
    { client: "Principal Global", size: "4.5 Lakh Sq. Ft." },
    { client: "Symantec", size: "3.5 Lakh Sq. Ft." },
    { client: "ZS Associates", size: "3.0 Lakh Sq. Ft." },
    { client: "BMC Software", size: "3.0 Lakh Sq. Ft." },
    { client: "Vodafone", size: "2.5 Lakh Sq. Ft." },
    { client: "TCS", size: "2.5 Lakh Sq. Ft." },
    { client: "Nice Systems", size: "2.0 Lakh Sq. Ft." },
    { client: "Persistent", size: "1.8 Lakh Sq. Ft." },
  ];

  const clientsServed = [
    "Bajaj Finance",
    "Telstra",
    "Magna Electronics",
    "Flextronics",
    "Western Union",
    "NiCE Systems",
    "Boardroom",
    "Red Hat",
    "Eaton",
  ];

  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      {/* PAGE HEADER SECTION — cover sheet */}
      <section className="w-full bg-[#0a1f44] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className={`absolute inset-0 ${gridBgDark}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1f44]/40 to-[#0a1f44]" />

        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative z-10">
          <div className="relative pl-6 border-l border-white/20">
            <div className="flex items-center justify-between mb-10 font-mono text-[10px] tracking-widest text-slate-400 uppercase">
              <span>Sheet A-00 / About ICC</span>
              <span className="hidden sm:inline">Rev. 2024.01</span>
            </div>

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-400 mb-4 block">
              Our Story &amp; Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight font-serif max-w-2xl leading-[1.05]">
              About <span className="font-extrabold text-blue-500">ICC</span>
            </h1>
            <p className="text-slate-400 text-sm mt-6 max-w-lg leading-relaxed">
              Bringing high predictability and accountability to commercial
              interior fit-out delivery — documented, measured, and executed
              like the drawings we work from.
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 font-mono text-[11px] text-slate-400">
              <div>
                <div className="text-2xl font-sans font-extrabold text-white">10M+</div>
                <div className="uppercase tracking-widest text-[9px] mt-1">Sq. Ft. Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-sans font-extrabold text-white">20+</div>
                <div className="uppercase tracking-widest text-[9px] mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-sans font-extrabold text-white">2024</div>
                <div className="uppercase tracking-widest text-[9px] mt-1">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <SheetBar code="A-01" title="Foundation" />

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-stretch">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a1f44] font-serif mb-6 leading-tight">
              Delivering Workspace Predictability Since 2024
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Innovation Consultants and Contractors (ICC) was founded in 2024
              by Yogesh Pawar to bring a higher standard of predictability and
              accountability to commercial interior delivery.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              At ICC, we support our clients in selecting the right delivery
              partners and provide a complete, end-to-end project delivery
              solution — from concept to completion.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We help organizations execute workspace projects faster, more
              efficiently, and with extreme clarity — ensuring predictable
              cost, timelines, and quality across all coordinates.
            </p>
          </div>

          <div className="w-full lg:w-[400px] relative">
            <CornerMarks />
            <div className="bg-white border border-slate-200 p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#003A70] mb-5">
                  Key Priorities
                </h3>
                <ul className="space-y-4">
                  {[
                    "Predictable cost control systems",
                    "Strict timeline adherence mapping",
                    "Uncompromising quality governance",
                    "Expert contractor selection support",
                    "End-to-end delivery alignment",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-600">
                      <span className="font-mono text-[9px] text-blue-500 mt-0.5 shrink-0">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="border-b border-dotted border-slate-200 pb-1 w-full leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-slate-200 pt-6 mt-8 flex items-end justify-between">
                <div>
                  <p className="text-2xl font-extrabold text-[#0a1f44] font-serif">10M+ Sq. Ft.</p>
                  <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    Total Career Deliveries by Founder
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-blue-500 shrink-0" strokeWidth={1.75} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-white border-y border-slate-200 py-16 lg:py-20 relative">
        <div className={`absolute inset-0 ${gridBg} opacity-40 pointer-events-none`} />
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative">
          <SheetBar code="A-02" title="Leadership" />

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Founder title block — modeled on an architectural drawing title block */}
            <div className="w-full lg:w-[420px] shrink-0 relative">
              <CornerMarks />
              <div className="border border-slate-300 bg-[#f7f8fa]">
                <div className="p-7 border-b border-slate-300">
                  <div className="w-14 h-14 bg-[#0a1f44] text-white flex items-center justify-center font-bold text-lg mb-5 font-serif">
                    YP
                  </div>
                  <h3 className="text-xl font-bold text-[#0a1f44] font-serif">{founder.name}</h3>
                  <p className="text-xs font-bold text-[#003A70] uppercase tracking-widest mt-1">
                    {founder.role}
                  </p>
                </div>
                <div className="p-7 border-b border-slate-300">
                  <p className="text-slate-600 text-xs leading-relaxed">{founder.bio}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-slate-300 border-b border-slate-300">
                  <div className="p-4">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Experience</p>
                    <p className="text-sm font-bold text-[#0a1f44] mt-1">20+ Years</p>
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400">Delivered</p>
                    <p className="text-sm font-bold text-[#0a1f44] mt-1">10M+ Sq. Ft.</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-1">
                    Direct Contact
                  </p>
                  <a
                    href={`mailto:${founder.email}`}
                    className="text-xs font-mono text-[#003A70] hover:underline font-bold"
                  >
                    {founder.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Career deliveries — drawing schedule table */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-[#0a1f44] font-serif mb-2 leading-tight">
                  Major Deliveries Across Yogesh's Career
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Client project execution led directly by Yogesh Pawar prior to founding ICC.
                </p>

                <div className="border border-slate-300">
                  <div className="grid grid-cols-[3rem_1fr_9rem] bg-[#0a1f44] text-white">
                    <div className="font-mono text-[9px] uppercase tracking-widest px-3 py-2.5">No.</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest px-3 py-2.5">Client</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest px-3 py-2.5 text-right">
                      Area
                    </div>
                  </div>
                  {careerDeliveries.map((delivery, idx) => (
                    <div
                      key={idx}
                      className={`grid grid-cols-[3rem_1fr_9rem] items-center ${
                        idx % 2 === 0 ? "bg-white" : "bg-[#f7f8fa]"
                      } ${idx !== careerDeliveries.length - 1 ? "border-b border-slate-200" : ""}`}
                    >
                      <div className="font-mono text-[10px] text-blue-500 font-bold px-3 py-3">
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <div className="text-xs font-bold text-[#0a1f44] px-3 py-3">{delivery.client}</div>
                      <div className="text-[10px] text-slate-500 font-semibold px-3 py-3 text-right font-mono">
                        {delivery.size}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SERVED THROUGH ICC */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <SheetBar code="A-03" title="Client Register" />

        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0a1f44] font-serif leading-tight">
            Organizations Served Through ICC
          </h2>
          <p className="text-slate-500 text-xs mt-3">
            Helping top institutions deliver high-precision corporate workspace fits.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clientsServed.map((client, idx) => (
            <div key={idx} className="relative group">
              <CornerMarks />
              <div className="bg-white border border-slate-200 p-6 flex items-center justify-center text-center group-hover:border-blue-400 transition-colors h-full">
                <span className="text-xs font-bold text-slate-700 group-hover:text-[#003A70] transition-colors">
                  {client}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPERATING PRINCIPLES */}
      <section className="bg-[#0a1f44] py-16 lg:py-20 relative overflow-hidden">
        <div className={`absolute inset-0 ${gridBgDark}`} />
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8 relative">
          <SheetBar code="A-04" title="Operating Principles" dark />

          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif leading-tight">
              How We Conduct Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {values.map((val) => (
              <div
                key={val.title}
                className="bg-[#0a1f44] p-7 flex flex-col items-start hover:bg-[#0d2350] transition-colors duration-300"
              >
                <div className="flex items-center justify-between w-full mb-5">
                  {val.icon}
                  <span className="font-mono text-[9px] text-slate-500 tracking-widest">{val.code}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-serif">{val.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING / APPROVAL STAMP */}
      <section className="max-w-[1440px] mx-auto px-5 lg:px-8 py-14">
        <div className="border border-slate-300 bg-white flex flex-col sm:flex-row items-center justify-between gap-6 p-8 relative">
          <CornerMarks />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-blue-500 mb-2">
              Approved for Issue
            </p>
            <h3 className="text-xl font-bold text-[#0a1f44] font-serif">
              Ready to bring predictability to your next fit-out?
            </h3>
          </div>
          <a
            href={`mailto:${founder.email}`}
            className="shrink-0 inline-flex items-center gap-2 bg-[#0a1f44] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 hover:bg-[#003A70] transition-colors"
          >
            Start a Conversation
            <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>
        <div className="flex items-center justify-between mt-6 font-mono text-[9px] tracking-widest text-slate-400 uppercase">
          <span>End of Sheet Set</span>
          <span>ICC — Innovation Consultants and Contractors</span>
        </div>
      </section>
    </div>
  );
}