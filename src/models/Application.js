import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    role: { type: String, required: true }, // job id or key
    roleTitle: { type: String, required: true }, // human readable role title
    coverLetter: { type: String },
    resumeName: { type: String },
    resumeContent: { type: String }, // Base64 encoded file content
    status: { 
      type: String, 
      enum: ["Applied", "Under Review", "Interviewing", "Hired", "Declined"], 
      default: "Applied" 
    }
  },
  { timestamps: true }
);

if (mongoose.models.Application) {
  delete mongoose.models.Application;
}

export default mongoose.model("Application", ApplicationSchema);
