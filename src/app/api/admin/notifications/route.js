import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";

async function isAuthorized(request) {
  const tokenCookie = request.cookies.get("admin_session");
  if (!tokenCookie) return false;
  const payload = await verifyToken(tokenCookie.value);
  return !!payload;
}

const defaultNotifications = [
  { title: "Database Synced", description: "Successfully loaded initial portfolios and insights articles.", type: "success" },
  { title: "Admin Console Active", description: "Audit trail successfully initialized for Yogesh Pawar.", type: "info" }
];

export async function GET(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    let notifications = await Notification.find({}).sort({ createdAt: -1 }).limit(30);

    if (notifications.length === 0) {
      await Notification.insertMany(defaultNotifications);
      notifications = await Notification.find({}).sort({ createdAt: -1 });
    }

    return NextResponse.json(notifications);
  } catch (error) {
    console.error("GET notifications error:", error);
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
    const { id } = body;

    if (id) {
      await Notification.findByIdAndUpdate(id, { read: true });
    } else {
      await Notification.updateMany({ read: false }, { read: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PATCH notifications error:", error);
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
    const { title, description, type } = body;

    const notif = await Notification.create({ title, description, type });
    return NextResponse.json({ success: true, notification: notif }, { status: 201 });
  } catch (error) {
    console.error("POST notification error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
