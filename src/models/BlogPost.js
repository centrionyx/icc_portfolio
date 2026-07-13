import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    readTime: { type: String, default: "5 min read" },
    summary: { type: String, required: true },
    content: { type: String },
    images: { type: [String], default: [] },
    image: { type: String }, // support backward compatibility
  },
  { timestamps: true }
);

// Delete cached model to force Mongoose to rebuild the schema on changes
if (mongoose.models.BlogPost) {
  delete mongoose.models.BlogPost;
}

export default mongoose.model("BlogPost", BlogPostSchema);
