import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Application from "@/models/Application";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";

async function isAuthorized(request) {
  const tokenCookie = request.cookies.get("admin_session");
  if (!tokenCookie) return false;
  const payload = await verifyToken(tokenCookie.value);
  return !!payload;
}

export async function GET(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (id) {
      const application = await Application.findById(id);
      if (!application) {
        return NextResponse.json({ error: "Application not found" }, { status: 404 });
      }
      return NextResponse.json(application);
    }

    const applications = await Application.find({}).sort({ createdAt: -1 });

    // Calculate quick stats
    const total = applications.length;
    const applied = applications.filter(a => a.status === "Applied").length;
    const underReview = applications.filter(a => a.status === "Under Review").length;
    const interviewing = applications.filter(a => a.status === "Interviewing").length;
    const hired = applications.filter(a => a.status === "Hired").length;
    const declined = applications.filter(a => a.status === "Declined").length;

    return NextResponse.json({
      applications,
      stats: {
        total,
        applied,
        underReview,
        interviewing,
        hired,
        declined
      }
    });
  } catch (error) {
    console.error("GET admin applications error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PATCH(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: "Missing application ID or status." }, { status: 400 });
    }

    const updatedApp = await Application.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedApp) {
      return NextResponse.json({ error: "Application not found" }, { status: 404 });
    }

    // Log action to notifications
    await Notification.create({
      title: "Candidate Pipeline Update",
      description: `Applicant "${updatedApp.name}" status updated to ${status}.`,
      type: "info"
    });

    return NextResponse.json({ success: true, application: updatedApp });
  } catch (error) {
    console.error("PATCH admin applications error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing ID parameter." }, { status: 400 });
    }

    const deletedApp = await Application.findByIdAndDelete(id);

    if (deletedApp) {
      await Notification.create({
        title: "Application Discarded",
        description: `Permanently deleted candidate record for "${deletedApp.name}".`,
        type: "warning"
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE admin applications error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
