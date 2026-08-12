import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import ClientLogo from "@/models/ClientLogo";
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
    const clients = await ClientLogo.find({}).sort({ order: 1, createdAt: -1 });
    return NextResponse.json(clients);
  } catch (error) {
    console.error("GET admin clients error:", error);
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
    const { name, text, logoUrl, order } = body;

    if (!name && !text) {
      return NextResponse.json({ error: "Client name or display text is required." }, { status: 400 });
    }

    const newClient = await ClientLogo.create({
      name: name || text,
      text: text || name,
      logoUrl: logoUrl || "",
      order: order !== undefined ? Number(order) : 0,
    });

    await Notification.create({
      title: "Client Added",
      description: `New client logo "${newClient.text}" added to homepage marquee.`,
      type: "success",
    });

    return NextResponse.json({ success: true, client: newClient }, { status: 201 });
  } catch (error) {
    console.error("POST admin client error:", error);
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
    const { id, name, text, logoUrl, order } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing client ID." }, { status: 400 });
    }

    const updateFields = {};
    if (name !== undefined) updateFields.name = name;
    if (text !== undefined) updateFields.text = text;
    if (logoUrl !== undefined) updateFields.logoUrl = logoUrl;
    if (order !== undefined) updateFields.order = Number(order);

    const updatedClient = await ClientLogo.findByIdAndUpdate(id, updateFields, { new: true });

    await Notification.create({
      title: "Client Updated",
      description: `Updated client marquee record "${updatedClient.text}".`,
      type: "audit",
    });

    return NextResponse.json({ success: true, client: updatedClient });
  } catch (error) {
    console.error("PATCH admin client error:", error);
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

    const client = await ClientLogo.findByIdAndDelete(id);

    await Notification.create({
      title: "Client Deleted",
      description: `Client logo "${client ? client.text : id}" was removed from homepage marquee.`,
      type: "warning",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE admin client error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
