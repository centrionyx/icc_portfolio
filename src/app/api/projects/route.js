import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";

const defaultProjects = [
  {
    client: "J.P. Morgan Chase & Co.",
    category: "corporate",
    location: "Bengaluru",
    size: "500,000 Sq. Ft.",
    scope: "Technical Advisory & MEP Coordination",
    duration: "48 Weeks",
    outcomes: "Snag-free handover, zero-delay MEP alignment with global guidelines.",
    images: ["/office_building_dusk.png", "/sustainability_office.png"],
    completion: 100
  },
  {
    client: "Microsoft",
    category: "corporate",
    location: "Hyderabad",
    size: "300,000 Sq. Ft.",
    scope: "End-to-end Fit-Out Project Management",
    duration: "36 Weeks",
    outcomes: "Value engineered budget savings of 8.5% and handed over 2 weeks early.",
    images: ["/office_building_dusk.png", "/industry_trends.png"],
    completion: 100
  },
  {
    client: "Principal Global Workspace",
    category: "corporate",
    location: "Pune",
    size: "4.5 Lakh Sq. Ft.",
    scope: "Lead Advisory",
    duration: "40 Weeks",
    outcomes: "Active Project Under Construction.",
    images: ["/workplace_strategy.png", "/sustainability_office.png"],
    completion: 94
  }
];

export async function GET(request) {
  try {
    await dbConnect();
    let projects = await Project.find({}).sort({ createdAt: -1 });
    
    if (projects.length === 0) {
      await Project.insertMany(defaultProjects);
      projects = await Project.find({}).sort({ createdAt: -1 });
    }
    
    return NextResponse.json(projects);
  } catch (error) {
    console.error("GET projects error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
