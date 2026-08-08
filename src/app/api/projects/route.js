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

// In-memory cache for fast response times
let cachedProjects = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 60 * 1000; // Cache for 60 seconds

export async function GET(request) {
  try {
    const now = Date.now();
    
    // Serve from in-memory cache if fresh
    if (cachedProjects && now - lastFetchTime < CACHE_TTL_MS) {
      return NextResponse.json(cachedProjects, {
        headers: {
          "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
        },
      });
    }

    await dbConnect();
    let projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    
    if (projects.length === 0) {
      await Project.insertMany(defaultProjects);
      projects = await Project.find({}).sort({ createdAt: -1 }).lean();
    }
    
    cachedProjects = projects;
    lastFetchTime = now;

    return NextResponse.json(projects, {
      headers: {
        "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
      },
    });
  } catch (error) {
    console.error("GET projects error:", error);
    
    // Fallback to cached projects if available during DB connection errors
    if (cachedProjects) {
      return NextResponse.json(cachedProjects);
    }
    
    // Fallback to default static dataset if DB is unreachable
    return NextResponse.json(defaultProjects);
  }
}

