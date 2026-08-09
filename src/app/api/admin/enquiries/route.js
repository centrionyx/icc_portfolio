import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";

export const revalidate = 0;
export const dynamic = "force-dynamic";

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
    const enquiries = await Enquiry.find({}).sort({ createdAt: -1 });

    const total = enquiries.length;
    const newCount = enquiries.filter(e => e.status === "New").length;
    const contacted = enquiries.filter(e => e.status === "Contacted").length;
    const inProgress = enquiries.filter(e => e.status === "In Progress").length;
    const closed = enquiries.filter(e => e.status === "Closed").length;

    return NextResponse.json({
      enquiries,
      stats: {
        total,
        new: newCount,
        contacted,
        inProgress,
        closed
      }
    });
  } catch (error) {
    console.error("GET admin enquiries error:", error);
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
      return NextResponse.json({ error: "Missing enquiry ID or status." }, { status: 400 });
    }

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedEnquiry) {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
    }

    await Notification.create({
      title: "Consultation Request Status Updated",
      description: `Enquiry from "${updatedEnquiry.name}" status updated to ${status}.`,
      type: "info"
    });

    return NextResponse.json({ success: true, enquiry: updatedEnquiry });
  } catch (error) {
    console.error("PATCH admin enquiries error:", error);
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

    const deletedEnquiry = await Enquiry.findByIdAndDelete(id);

    if (deletedEnquiry) {
      await Notification.create({
        title: "Consultation Request Deleted",
        description: `Permanently removed consultation enquiry from "${deletedEnquiry.name}".`,
        type: "warning"
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE admin enquiries error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
