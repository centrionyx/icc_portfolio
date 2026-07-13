import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Notification from "@/models/Notification";
import Application from "@/models/Application";
import JobOpening from "@/models/JobOpening";
import { sendApplicationEmail } from "@/lib/email";
import mongoose from "mongoose";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, email, phone, role, coverLetter, resumeName, resumeContent } = body;

    if (!name || !email || !phone || !role) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Determine the role title (support either static fallback keys or MongoDB dynamic IDs)
    let roleTitle = "Other Position / Speculative Application";
    const roleMapping = {
      "site-engineer": "Senior Site Engineer (Civil & ID)",
      "project-coordinator": "Project Coordinator & Technical Advisory",
      "qs-estimation": "QS & Estimation Engineer (BOQ Auditor)",
      "site-supervisor": "Interior Fit-Out Site Supervisor",
      "other": "Other Position / Speculative Application"
    };

    if (mongoose.Types.ObjectId.isValid(role)) {
      const job = await JobOpening.findById(role);
      if (job) {
        roleTitle = job.title;
      }
    } else {
      roleTitle = roleMapping[role] || role;
    }

    // Save candidate to database
    const application = await Application.create({
      name,
      email,
      phone,
      role,
      roleTitle,
      coverLetter,
      resumeName,
      resumeContent,
      status: "Applied"
    });

    // Create dashboard notification for audit trail
    await Notification.create({
      title: "New Job Application Received",
      description: `${name} applied for "${roleTitle}". Contact: ${email} | ${phone}`,
      type: "info"
    });

    // Dispatch email notification to prernasharma9327@gmail.com
    await sendApplicationEmail({
      name,
      email,
      phone,
      roleTitle,
      coverLetter,
      resumeName
    });

    return NextResponse.json({ success: true, application }, { status: 201 });
  } catch (error) {
    console.error("POST careers application error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
