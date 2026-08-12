import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import ClientLogo from "@/models/ClientLogo";
import { CLIENT_LOGOS } from "@/feature/home/constants";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const forceSeed = searchParams.get("seed") === "true";

    let clients = await ClientLogo.find({}).sort({ order: 1, createdAt: -1 });

    if (clients.length === 0 || forceSeed) {
      if (forceSeed && clients.length > 0) {
        await ClientLogo.deleteMany({});
      }
      const initialClients = CLIENT_LOGOS.map((c, idx) => ({
        name: c.name || c.text,
        text: c.text || c.name,
        logoUrl: c.logoUrl || "",
        order: idx,
      }));
      await ClientLogo.insertMany(initialClients);
      clients = await ClientLogo.find({}).sort({ order: 1, createdAt: -1 });
    }

    return NextResponse.json(clients, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    console.error("GET clients error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
