import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BlogPost from "@/models/BlogPost";

const defaultPosts = [
  {
    title: "The Future of Work is Human-Centric",
    category: "Workplace Strategy",
    readTime: "5 min read",
    summary: "Explore how corporate environments are adapting to post-hybrid workflows, emphasizing acoustic control, active MEP ventilation, and modular layouts.",
    content: "The corporate workspace is going through an unprecedented transformation...",
    images: ["/workplace_strategy.png", "/sustainability_office.png"]
  },
  {
    title: "Designing Workplaces for a Better Tomorrow",
    category: "Sustainability",
    readTime: "7 min read",
    summary: "A practical guide to implementing LEED guidelines, energy-efficient HVAC services, and low-VOC materials in interior commercial fit-outs.",
    content: "Building sustainably is no longer an option, it is a strategic requirement...",
    images: ["/sustainability_office.png", "/industry_trends.png"]
  }
];

export async function GET(request) {
  try {
    await dbConnect();
    let posts = await BlogPost.find({}).sort({ createdAt: -1 });
    
    if (posts.length === 0) {
      await BlogPost.insertMany(defaultPosts);
      posts = await BlogPost.find({}).sort({ createdAt: -1 });
    }
    
    return NextResponse.json(posts);
  } catch (error) {
    console.error("GET blogs error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
