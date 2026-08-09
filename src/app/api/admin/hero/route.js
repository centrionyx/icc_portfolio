import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Hero from "@/models/Hero";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";
import { HERO_CONTENT, HERO_IMAGES, HERO_IMAGE_ROTATION_INTERVAL, HERO_IMAGE_TRANSITION_DURATION } from "@/feature/home/constants";

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
    let heroDoc = await Hero.findOne().lean();

    if (!heroDoc) {
      return NextResponse.json({
        slides: HERO_CONTENT.slides,
        images: HERO_IMAGES,
        stats: HERO_CONTENT.stats,
        rotationInterval: HERO_IMAGE_ROTATION_INTERVAL,
        transitionDuration: HERO_IMAGE_TRANSITION_DURATION,
        isDefault: true,
      });
    }

    return NextResponse.json(heroDoc);
  } catch (error) {
    console.error("GET admin hero error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    if (!(await isAuthorized(request))) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await dbConnect();
    const body = await request.json();
    const { slides, images, stats, rotationInterval, transitionDuration } = body;

    let heroDoc = await Hero.findOne();

    if (!images || !Array.isArray(images) || images.length === 0 || !images[0]) {
      return NextResponse.json(
        { error: "A background image is compulsory for the Hero Section." },
        { status: 400 }
      );
    }

    if (!heroDoc) {
      heroDoc = new Hero({
        slides: slides || [],
        images: images || [],
        stats: stats || [],
        rotationInterval: rotationInterval || 3000,
        transitionDuration: transitionDuration || 1000,
      });
    } else {
      if (slides !== undefined) heroDoc.slides = slides;
      if (images !== undefined) heroDoc.images = images;
      if (stats !== undefined) heroDoc.stats = stats;
      if (rotationInterval !== undefined) heroDoc.rotationInterval = rotationInterval;
      if (transitionDuration !== undefined) heroDoc.transitionDuration = transitionDuration;
    }

    await heroDoc.save();

    await Notification.create({
      title: "Hero Section Updated",
      description: "Admin updated the Hero Section slides, images, or stats.",
      type: "audit",
    });

    return NextResponse.json({ success: true, hero: heroDoc });
  } catch (error) {
    console.error("PUT admin hero error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
