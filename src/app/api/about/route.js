import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import About from "@/models/About";

const DEFAULT_ABOUT = {
  founderName: "Yogesh Pawar",
  founderRole: "Founder",
  founderBio:
    "Project Management Consultant with 20+ years of experience delivering more than 10 million sq ft of commercial interior fit-out projects across India. Specialized in project governance, stakeholder alignment, technical due diligence, contractor selection, and end-to-end delivery of fast-track corporate workspace projects.",
  founderEmail: "yogesh.pawar@icc.ind.in",
  founderImage: "/founder.png",
  founderExperience: "20",
  founderDeliveredArea: "10M",
  careerDeliveries: [
    { client: "Principal Global", size: "4.5 Lakh Sq. Ft." },
    { client: "Symantec", size: "3.5 Lakh Sq. Ft." },
    { client: "ZS Associates", size: "3.0 Lakh Sq. Ft." },
    { client: "BMC Software", size: "3.0 Lakh Sq. Ft." },
    { client: "Vodafone", size: "2.5 Lakh Sq. Ft." },
  ],
};

export async function GET() {
  try {
    await dbConnect();
    let aboutData = await About.findOne();
    if (!aboutData) {
      aboutData = await About.create(DEFAULT_ABOUT);
    }
    return NextResponse.json(aboutData);
  } catch (error) {
    console.error("GET /api/about error:", error);
    return NextResponse.json(DEFAULT_ABOUT, { status: 200 });
  }
}
