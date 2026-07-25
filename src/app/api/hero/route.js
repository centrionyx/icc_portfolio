import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Hero from "@/models/Hero";
import { HERO_CONTENT, HERO_IMAGES, HERO_IMAGE_ROTATION_INTERVAL, HERO_IMAGE_TRANSITION_DURATION } from "@/feature/home/constants";

export async function GET() {
  try {
    await dbConnect();
    let heroDoc = await Hero.findOne().lean();

    if (!heroDoc) {
      // Fallback response format matching db model structure
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
    console.error("GET hero error:", error);
    return NextResponse.json(
      {
        slides: HERO_CONTENT.slides,
        images: HERO_IMAGES,
        stats: HERO_CONTENT.stats,
        rotationInterval: HERO_IMAGE_ROTATION_INTERVAL,
        transitionDuration: HERO_IMAGE_TRANSITION_DURATION,
        isDefault: true,
        error: "Fallback to default content due to error",
      },
      { status: 200 }
    );
  }
}
