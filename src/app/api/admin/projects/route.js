import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Project from "@/models/Project";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb",
    },
  },
};

async function isAuthorized(request) {
  const tokenCookie = request.cookies.get("admin_session");
  if (!tokenCookie) return false;
  const payload = await verifyToken(tokenCookie.value);
  return !!payload;
}

export async function POST(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const { client, category, location, size, scope, duration, outcomes, images, completion } = body;

    if (!client || !category || !location || !size || !scope) {
      return NextResponse.json({ error: "Client, category, location, size, and scope are required." }, { status: 400 });
    }

    const newProject = await Project.create({
      client,
      category,
      location,
      size,
      scope,
      duration: duration || "36 Weeks",
      outcomes,
      images: images || [],
      completion: completion !== undefined ? Number(completion) : 100,
    });

    await Notification.create({
      title: "Project Added",
      description: `New project showcase created for ${client} (${location}).`,
      type: "success"
    });

    return NextResponse.json({ success: true, project: newProject }, { status: 201 });
  } catch (error) {
    console.error("POST admin project error:", error);
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
    const { id, client, category, location, size, scope, duration, outcomes, images, completion } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing project ID." }, { status: 400 });
    }

    const updateFields = {};
    if (client !== undefined) updateFields.client = client;
    if (category !== undefined) updateFields.category = category;
    if (location !== undefined) updateFields.location = location;
    if (size !== undefined) updateFields.size = size;
    if (scope !== undefined) updateFields.scope = scope;
    if (duration !== undefined) updateFields.duration = duration;
    if (outcomes !== undefined) updateFields.outcomes = outcomes;
    if (images !== undefined) updateFields.images = images;
    if (completion !== undefined) updateFields.completion = Number(completion);

    const updatedProject = await Project.findByIdAndUpdate(id, updateFields, { new: true });

    await Notification.create({
      title: "Project Updated",
      description: `Project execution ledger updated for ${client || updatedProject.client}.`,
      type: "audit"
    });

    return NextResponse.json({ success: true, project: updatedProject });
  } catch (error) {
    console.error("PATCH admin project error:", error);
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

    const project = await Project.findByIdAndDelete(id);

    await Notification.create({
      title: "Project Deleted",
      description: `Project entry for ${project ? project.client : id} was removed from the database.`,
      type: "warning"
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE admin project error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
