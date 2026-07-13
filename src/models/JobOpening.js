import mongoose from "mongoose";

const JobOpeningSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, default: "Full-Time" },
    experience: { type: String, required: true },
    department: { type: String, required: true },
    summary: { type: String, required: true },
    requirements: { type: [String], default: [] },
    active: { type: Boolean, default: true }
  },
  { timestamps: true }
);

if (mongoose.models.JobOpening) {
  delete mongoose.models.JobOpening;
}

export default mongoose.model("JobOpening", JobOpeningSchema);
