import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import About from "@/models/About";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";

async function isAuthorized(request) {
  const tokenCookie = request.cookies.get("admin_session");
  if (!tokenCookie) return false;
  const payload = await verifyToken(tokenCookie.value);
  return !!payload;
}

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

export async function GET(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    let aboutData = await About.findOne();
    if (!aboutData) {
      aboutData = await About.create(DEFAULT_ABOUT);
    }
    return NextResponse.json(aboutData);
  } catch (error) {
    console.error("GET /api/admin/about error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();

    let aboutData = await About.findOne();
    if (!aboutData) {
      aboutData = await About.create({ ...DEFAULT_ABOUT, ...body });
    } else {
      aboutData.founderName = body.founderName || aboutData.founderName;
      aboutData.founderRole = body.founderRole || aboutData.founderRole;
      aboutData.founderBio = body.founderBio || aboutData.founderBio;
      aboutData.founderEmail = body.founderEmail || aboutData.founderEmail;
      aboutData.founderImage = body.founderImage || aboutData.founderImage;
      aboutData.founderExperience = body.founderExperience || aboutData.founderExperience;
      aboutData.founderDeliveredArea = body.founderDeliveredArea || aboutData.founderDeliveredArea;
      if (body.careerDeliveries !== undefined) {
        aboutData.careerDeliveries = body.careerDeliveries;
      }
      await aboutData.save();
    }

    await Notification.create({
      title: "About Us Updated",
      description: "Founder section and About Us details were updated.",
      type: "audit",
    });

    return NextResponse.json({ success: true, about: aboutData });
  } catch (error) {
    console.error("PUT /api/admin/about error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
