import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(request) {
  const tokenCookie = request.cookies.get("admin_session");
  if (!tokenCookie) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  const payload = await verifyToken(tokenCookie.value);
  if (!payload) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  return NextResponse.json({ authenticated: true, username: payload.username });
}
