import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Notification from "@/models/Notification";
import Enquiry from "@/models/Enquiry";
import { sendEnquiryEmail } from "@/lib/email";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, email, phone, projectType, message } = body;

    if (!name || !email || !phone || !projectType) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Save candidate to database
    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      projectType,
      message,
      status: "New"
    });

    // Create dashboard notification for audit trail
    await Notification.create({
      title: "New Project Enquiry Received",
      description: `${name} has requested a consultation for "${projectType}".`,
      type: "success"
    });

    // Dispatch email notification to prernasharma9327@gmail.com
    await sendEnquiryEmail({
      name,
      email,
      phone,
      projectType,
      message
    });

    return NextResponse.json({ success: true, enquiry }, { status: 201 });
  } catch (error) {
    console.error("POST client enquiry error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
