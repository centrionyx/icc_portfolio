import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BlogPost from "@/models/BlogPost";
import Notification from "@/models/Notification";
import { verifyToken } from "@/lib/auth";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb",
    },
  },
};

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

    await dbConnect();
    const body = await request.json();
    const { title, category, readTime, summary, content, images } = body;

    if (!title || !category || !summary) {
      return NextResponse.json({ error: "Title, category, and summary are required." }, { status: 400 });
    }

    const newPost = await BlogPost.create({
      title,
      category,
      readTime: readTime || "5 min read",
      summary,
      content,
      images: images || [],
    });

    await Notification.create({
      title: "Blog Post Published",
      description: `New article "${title}" published under ${category}.`,
      type: "success"
    });

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error) {
    console.error("POST admin blog error:", error);
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
    const { id, title, category, readTime, summary, content, images } = body;

    if (!id) {
      return NextResponse.json({ error: "Missing post ID." }, { status: 400 });
    }

    const updateFields = {};
    if (title !== undefined) updateFields.title = title;
    if (category !== undefined) updateFields.category = category;
    if (readTime !== undefined) updateFields.readTime = readTime;
    if (summary !== undefined) updateFields.summary = summary;
    if (content !== undefined) updateFields.content = content;
    if (images !== undefined) updateFields.images = images;

    const updatedPost = await BlogPost.findByIdAndUpdate(id, updateFields, { new: true });

    await Notification.create({
      title: "Blog Post Edited",
      description: `Changes saved to article "${title || updatedPost.title}".`,
      type: "audit"
    });

    return NextResponse.json({ success: true, post: updatedPost });
  } catch (error) {
    console.error("PATCH admin blog error:", error);
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

    const post = await BlogPost.findByIdAndDelete(id);

    await Notification.create({
      title: "Blog Post Deleted",
      description: `Article "${post ? post.title : id}" was permanently removed.`,
      type: "warning"
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE admin blog error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
