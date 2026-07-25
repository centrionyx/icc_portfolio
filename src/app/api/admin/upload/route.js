import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { verifyToken } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

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

    const contentType = request.headers.get("content-type") || "";
    let imageSource = null;
    let folder = "icc_hero";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      imageSource = body.image || body.file;
      if (body.folder) folder = body.folder;
    } else if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const file = formData.get("file");
      folder = formData.get("folder") || "icc_hero";

      if (file && typeof file === "object" && file.arrayBuffer) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        imageSource = `data:${file.type || "image/png"};base64,${buffer.toString("base64")}`;
      }
    }

    if (!imageSource) {
      return NextResponse.json({ error: "No image provided for upload." }, { status: 400 });
    }

    const result = await cloudinary.uploader.upload(imageSource, {
      folder: folder,
      resource_type: "auto",
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to upload image to Cloudinary" },
      { status: 500 }
    );
  }
}
