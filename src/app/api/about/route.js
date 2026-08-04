import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import About from "@/models/About";

const DEFAULT_ABOUT = {
  founderName: "Yogesh Pawar",
  founderRole: "Lead Consultant - BE Mechanical",
  founderBio:
    "Yogesh Pawar has more than 18+ years of varied experience in Project management & controls of commercial interior Office fitout Projects. He has completed more than 8 million Sq.ft of Interior project in the field of IT / ITES / BFSI / Retail.\n\nHe has been responsible for leading a team of professional project vendors and technical agencies to handle various aspects of Interior office fitout project including Project Process & Procedures. As a “Project Owner”, he works with the client team for managing all aspects of the project delivery and Process management from concept to completion & post handover support for new & retrofit Projects. He is also responsible for Operational Oversight, client relationship management & Strategic planning for effective implementation of the projects.",
  founderEmail: "yogesh.pawar@icc.ind.in",
  founderImage: "/founder.png",
  founderExperience: "18",
  founderDeliveredArea: "8M",
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
    } else {
      // Sync bio and role if using old default bio
      if (!aboutData.founderBio || aboutData.founderBio.includes("Project Management Consultant with 20+ years")) {
        aboutData.founderBio = DEFAULT_ABOUT.founderBio;
        aboutData.founderRole = DEFAULT_ABOUT.founderRole;
        aboutData.founderExperience = DEFAULT_ABOUT.founderExperience;
        await aboutData.save();
      }
    }
    return NextResponse.json(aboutData);
  } catch (error) {
    console.error("GET /api/about error:", error);
    return NextResponse.json(DEFAULT_ABOUT, { status: 200 });
  }
}
