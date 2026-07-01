import { NextResponse } from "next/server";
import { verifyToken } from "./lib/auth";

export async function proxy(request) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/dashboard")) {
    const sessionCookie = request.cookies.get("admin_session");

    if (!sessionCookie) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }

    const payload = await verifyToken(sessionCookie.value);
    if (!payload) {
      const response = NextResponse.redirect(new URL("/admin/login", request.url));
      response.cookies.delete("admin_session");
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/dashboard/:path*"],
};
