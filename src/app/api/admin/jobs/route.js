import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import JobOpening from "@/models/JobOpening";
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
    const jobs = await JobOpening.find({}).sort({ createdAt: -1 });
    return NextResponse.json(jobs);
  } catch (error) {
    console.error("GET admin jobs error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const { title, location, type, experience, department, summary, requirements, active } = body;

    if (!title || !location || !experience || !department || !summary) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const job = await JobOpening.create({
      title,
      location,
      type: type || "Full-Time",
      experience,
      department,
      summary,
      requirements: requirements || [],
      active: active !== undefined ? active : true
    });

    await Notification.create({
      title: "New Job Opening Published",
      description: `Job post for "${title}" published under ${department}.`,
      type: "success"
    });

    return NextResponse.json({ success: true, job }, { status: 201 });
  } catch (error) {
    console.error("POST admin jobs error:", error);
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
    const { id, title, location, type, experience, department, summary, requirements, active } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing job opening ID." }, { status: 400 });
    }

    const updateFields = {};
    if (title !== undefined) updateFields.title = title;
    if (location !== undefined) updateFields.location = location;
    if (type !== undefined) updateFields.type = type;
    if (experience !== undefined) updateFields.experience = experience;
    if (department !== undefined) updateFields.department = department;
    if (summary !== undefined) updateFields.summary = summary;
    if (requirements !== undefined) updateFields.requirements = requirements;
    if (active !== undefined) updateFields.active = active;

    const updatedJob = await JobOpening.findByIdAndUpdate(id, updateFields, { new: true });

    if (!updatedJob) {
      return NextResponse.json({ error: "Job opening not found" }, { status: 404 });
    }

    await Notification.create({
      title: "Job Opening Updated",
      description: `Modified parameters for job listing "${updatedJob.title}".`,
      type: "audit"
    });

    return NextResponse.json({ success: true, job: updatedJob });
  } catch (error) {
    console.error("PATCH admin jobs error:", error);
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

    const deletedJob = await JobOpening.findByIdAndDelete(id);

    if (deletedJob) {
      await Notification.create({
        title: "Job Opening Archived",
        description: `Permanently removed job posting "${deletedJob.title}".`,
        type: "warning"
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE admin jobs error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
