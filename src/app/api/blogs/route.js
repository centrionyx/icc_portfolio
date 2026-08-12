import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import BlogPost from "@/models/BlogPost";

const defaultPosts = [
  {
    slug: "10-indian-interior-design-trends-in-2024",
    title: "10 Indian Interior Design Trends in 2024",
    category: "Trends",
    readTime: "4 min read",
    author: "ICC Editorial Team",
    authorRole: "Interior Architecture & Workplace Advisory",
    summary: "Discover the top Indian interior design trends shaping residential and commercial spaces in 2024, combining traditional warmth with contemporary ergonomics.",
    content: "Interior design in India is undergoing a dramatic evolution. As urban living spaces transform and workplace expectations elevate, modern design in 2024 focuses on fusing rich cultural heritage with contemporary minimal aesthetics. From warm earthy color palettes to smart spatial layout engineering, here are the top trends defining Indian interiors this year.\n\n1. Fusion of Vernacular Materials with Modern Clean Lines\nHomeowners and corporate planners alike are embracing locally sourced materials like terracotta, cane, cane webbing, and rattan. When paired with sleek black metal frames and polished concrete floors, these natural textures lend timeless character.\n\n2. Biophilic Integration and Indoor Micro-Courtyards\nBiophilia is no longer just placing potted plants in a corner. 2024 emphasizes architectural green walls, indoor planter troughs integrated into workstation clusters, and natural light optimization through glass partitions.",
    images: ["https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"],
    featured: true
  },
  {
    slug: "how-to-choose-the-right-colours-for-your-home",
    title: "How to Choose the Right Colours for Your Home",
    category: "Design Tips",
    readTime: "5 min read",
    author: "Preeti Sharma",
    authorRole: "Senior Color & Materials Consultant",
    summary: "A practical guide to selecting harmonious color palettes that create depth, warmth, and balanced lighting throughout your living environments.",
    content: "Color is the single most transformative element in interior architecture. The right color scheme can alter perceived spatial proportions, boost mood, and establish cohesive harmony across rooms.\n\nUnderstanding the 60-30-10 Rule\nA classic interior design rule to balance colors effortlessly: 60% dominant base tone (walls, main flooring), 30% secondary shade (upholstery, large rugs), and 10% vivid accent color (cushions, artwork, decorative light fixtures).",
    images: ["https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"],
    featured: false
  },
  {
    slug: "small-space-interior-ideas-that-work",
    title: "Small Space Interior Ideas That Work",
    category: "Inspiration",
    readTime: "3 min read",
    author: "Rahul Verma",
    authorRole: "Spatial Ergonomics Specialist",
    summary: "Maximize your space with smart multi-functional furniture, sleek minimalist storage solutions, and strategic architectural layouts.",
    content: "Designing compact spaces requires clever spatial planning and light engineering. By utilizing height, transparent materials, and floating cabinetry, small apartments and boutique offices can feel twice their physical footprint.\n\nUtilize Vertical Wall Volume\nExtend cabinetry and shelving all the way to ceiling heights. Floor-to-ceiling storage draws the eye upward, giving the illusion of higher ceilings while eliminating unused dead space.",
    images: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"],
    featured: true
  },
  {
    slug: "sustainable-materials-for-interiors",
    title: "Sustainable Materials for Interiors",
    category: "Materials",
    readTime: "6 min read",
    author: "ICC ESG Working Group",
    authorRole: "Sustainable Building Practice Lead",
    summary: "Explore eco-friendly materials like bamboo, reclaimed wood, organic textiles, and low-VOC finishes for sustainable living spaces.",
    content: "Sustainable interior design is rapidly shifting from a luxury choice to an industry standard. Building with non-toxic, renewable, and locally sourced materials dramatically reduces indoor air pollutants and carbon footprint.\n\nLow-VOC Coatings & Adhesives\nVolatile Organic Compounds (VOCs) emitted by standard paints and varnishes degrade indoor air quality. Specifying low or zero-VOC water-based finishes ensures a healthy environment.",
    images: ["https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop"],
    featured: false
  },
  {
    slug: "vastu-tips-for-positive-energy-at-home",
    title: "Vastu Tips for Positive Energy at Home",
    category: "Design Tips",
    readTime: "4 min read",
    author: "Ananya Iyer",
    authorRole: "Residential Design Director",
    summary: "Enhance positive energy flow, spatial harmony, and peaceful ambience with time-tested Vastu principles tailored for modern homes.",
    content: "Aligning contemporary aesthetics with traditional Vastu Shastra principles allows homeowners to experience physical comfort alongside spiritual balance.\n\nMain Entrance Orientation\nThe main door is considered the entry point for life energy. Keeping the foyer uncluttered, well-lit, and adorned with natural wood elements invites positive vibes into the residence.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"],
    featured: false
  },
  {
    slug: "lighting-ideas-to-elevate-your-space",
    title: "Lighting Ideas to Elevate Your Space",
    category: "Inspiration",
    readTime: "5 min read",
    author: "Karan Johar",
    authorRole: "Architectural Lighting Designer",
    summary: "Transform atmosphere with layered ambient, task, and accent lighting techniques that add luxury and architectural depth.",
    content: "Lighting is the unsung hero of interior architecture. A single overhead light bulb makes even high-end furniture look flat, whereas layered lighting brings depth, texture, and emotion to life.\n\nThe Three Layers of Lighting Architecture\n1. Ambient (overall illumination like cove LEDs), 2. Task (focused reading lights or under-cabinet LED strips), and 3. Accent (directional spotlights illuminating artwork).",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"],
    featured: true
  }
];

export const revalidate = 0;
export const dynamic = "force-dynamic";

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const forceSeed = searchParams.get("seed") === "true";

    let posts = await BlogPost.find({}).sort({ createdAt: -1 });
    
    if (posts.length === 0 || forceSeed) {
      if (forceSeed && posts.length > 0) {
        await BlogPost.deleteMany({});
      }
      await BlogPost.insertMany(defaultPosts);
      posts = await BlogPost.find({}).sort({ createdAt: -1 });
    }
    
    return NextResponse.json(posts, {
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });
  } catch (error) {
    console.error("GET blogs error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
