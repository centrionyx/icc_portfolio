import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Reminder from "@/models/Reminder";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";
import { sendReminderEmail } from "@/lib/email";

async function isAuthorized(request) {
  const tokenCookie = request.cookies.get("admin_session");
  if (!tokenCookie) return false;
  const payload = await verifyToken(tokenCookie.value);
  return !!payload;
}

const defaultReminders = [
  { title: "Visa Site Quality Audit", time: "10:30", date: "2026-07-05", type: "urgent", email: "audit@centrionyx.com" },
  { title: "BOQ Validation - Sheraton", time: "14:00", date: "2026-07-12", type: "pending", email: "billing@centrionyx.com" },
  { title: "Contractor Selection Meeting", time: "11:00", date: "2026-07-18", type: "scheduled", email: "board@centrionyx.com" },
  { title: "Blog Review: Workplace Trends", time: "16:30", date: "2026-07-25", type: "blog", email: "editor@centrionyx.com" }
];

export async function GET(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    let reminders = await Reminder.find({}).sort({ createdAt: -1 });

    if (reminders.length === 0) {
      await Reminder.insertMany(defaultReminders);
      reminders = await Reminder.find({}).sort({ createdAt: -1 });
    }

    return NextResponse.json(reminders);
  } catch (error) {
    console.error("GET reminders error:", error);
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
    const { title, time, date, type, email } = body;

    if (!title || !date) {
      return NextResponse.json({ error: "Title and date are required." }, { status: 400 });
    }

    const newReminder = await Reminder.create({
      title,
      time: time || "12:00",
      date,
      type: type || "scheduled",
      email: email || ""
    });

    await Notification.create({
      title: "Reminder Scheduled",
      description: `New schedule added: "${title}" for ${date} at ${time}.`,
      type: "info"
    });

    if (email) {
      await sendReminderEmail(newReminder);
    }

    return NextResponse.json({ success: true, reminder: newReminder }, { status: 201 });
  } catch (error) {
    console.error("POST reminder error:", error);
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

    const reminder = await Reminder.findByIdAndDelete(id);

    await Notification.create({
      title: "Reminder Dismissed",
      description: `Task "${reminder ? reminder.title : id}" was dismissed or completed.`,
      type: "info"
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE reminder error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
