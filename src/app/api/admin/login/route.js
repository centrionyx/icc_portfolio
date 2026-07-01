import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Admin from "@/models/Admin";
import { signToken } from "@/lib/auth";
import { verifyPassword } from "@/lib/auth-node";

export async function POST(request) {
  try {
    await dbConnect();
    const { username, password } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required." },
        { status: 400 }
      );
    }

    const admin = await Admin.findOne({ username: username.toLowerCase() });
    if (!admin) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 }
      );
    }

    const isValid = verifyPassword(password, admin.salt, admin.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid username or password." },
        { status: 401 }
      );
    }

    const token = await signToken(admin.username);

    const response = NextResponse.json({ success: true, message: "Logged in successfully" });
    
    response.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
