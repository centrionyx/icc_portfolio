import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    client: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    size: { type: String, required: true },
    scope: { type: String, required: true },
    duration: { type: String, default: "36 Weeks" },
    outcomes: { type: String },
    images: { type: [String], default: [] },
    image: { type: String }, // support backward compatibility
    completion: { type: Number, default: 100 },
  },
  { timestamps: true }
);

// Delete cached model to force Mongoose to rebuild the schema on changes
if (mongoose.models.Project) {
  delete mongoose.models.Project;
}

export default mongoose.model("Project", ProjectSchema);
