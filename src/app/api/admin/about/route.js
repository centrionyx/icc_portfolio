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
