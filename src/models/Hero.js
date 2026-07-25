import mongoose from "mongoose";

const CtaSchema = new mongoose.Schema(
  {
    text: { type: String, default: "" },
    href: { type: String, default: "" },
  },
  { _id: false }
);

const SlideSchema = new mongoose.Schema(
  {
    titleLine1: { type: String, default: "" },
    titleLine2: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    primaryCta: { type: CtaSchema, default: () => ({ text: "Explore Our Work", href: "/projects" }) },
    secondaryCta: { type: CtaSchema, default: () => ({ text: "Watch Showreel", href: "#" }) },
  },
  { _id: true }
);

const StatSchema = new mongoose.Schema(
  {
    value: { type: String, default: "" },
    label: { type: String, default: "" },
  },
  { _id: true }
);

const HeroSchema = new mongoose.Schema(
  {
    slides: { type: [SlideSchema], default: [] },
    images: { type: [String], default: [] },
    stats: { type: [StatSchema], default: [] },
    rotationInterval: { type: Number, default: 3000 },
    transitionDuration: { type: Number, default: 1000 },
  },
  { timestamps: true }
);

if (mongoose.models.Hero) {
  delete mongoose.models.Hero;
}

export default mongoose.model("Hero", HeroSchema);
