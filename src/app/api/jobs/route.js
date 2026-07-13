import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobOpening from "@/models/JobOpening";

const defaultJobs = [
  {
    title: "Senior Site Engineer (Civil & ID)",
    location: "Bengaluru / Gurugram",
    type: "Full-Time",
    experience: "5–8 Years",
    department: "Execution",
    summary: "Responsible for managing daily site operations, contractor alignment, drawings execution, and physical snagging monitoring.",
    requirements: [
      "Bachelor's degree or Diploma in Civil Engineering / Construction Management.",
      "Proven experience overseeing corporate interior fit-out projects (>50k Sq. Ft.).",
      "Deep understanding of finishing execution, layout line-outs, and construction safety guidelines.",
      "Excellent communication skills to coordinate with architects, clients, and labor forces."
    ],
    active: true
  },
  {
    title: "Project Coordinator & Technical Advisory",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "3–6 Years",
    department: "Management",
    summary: "Responsible for bridging the communication gap between landlord layouts, design teams, services teams, and site supervisors.",
    requirements: [
      "Degree in Architecture, Interior Design, or Civil Engineering.",
      "Excellent proficiency in AutoCAD, MS Project, and project reporting dashboards.",
      "Strong understanding of MEP drawings, clash resolution processes, and material sample approval flows.",
      "Highly structured organization capability to run weekly stakeholder governance meetings."
    ],
    active: true
  },
  {
    title: "QS & Estimation Engineer (BOQ Auditor)",
    location: "Bengaluru / Remote",
    type: "Full-Time",
    experience: "4–7 Years",
    department: "Commercial",
    summary: "Responsible for verifying client BOQs, drafting comparative statements, auditing variation logs, and managing budgets.",
    requirements: [
      "Degree/Diploma in Quantity Surveying or Civil Engineering.",
      "Deep knowledge of market material pricing indices, interior specification structures, and civil costing systems.",
      "Advanced proficiency in Microsoft Excel and measurement estimation tools.",
      "Experience auditing large-scale commercial contracts and variation claims."
    ],
    active: true
  },
  {
    title: "Interior Fit-Out Site Supervisor",
    location: "Gurugram / NCR",
    type: "Full-Time",
    experience: "2–5 Years",
    department: "Execution",
    summary: "Responsible for day-to-day quality inspection, materials receipt validation, and labor sequence monitoring on-site.",
    requirements: [
      "Diploma in Civil/Interior or equivalent training certifications.",
      "Strong eyes for finishing snags, alignment deviations, and material verification.",
      "Rigorous commitment to site safety compliance and zero-accident site policies.",
      "Ability to maintain daily project diary logs and material inward/outward registers."
    ],
    active: true
  }
];

export async function GET(request) {
  try {
    await dbConnect();
    let jobs = await JobOpening.find({ active: true }).sort({ createdAt: -1 });

    if (jobs.length === 0) {
      await JobOpening.insertMany(defaultJobs);
      jobs = await JobOpening.find({ active: true }).sort({ createdAt: -1 });
    }

    return NextResponse.json(jobs);
  } catch (error) {
    console.error("GET jobs error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
