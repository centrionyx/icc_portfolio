import mongoose from "mongoose";

const AboutSchema = new mongoose.Schema(
  {
    founderName: { type: String, default: "Yogesh Pawar" },
    founderRole: { type: String, default: "Founder" },
    founderBio: {
      type: String,
      default:
        "Project Management Consultant with 20+ years of experience delivering more than 10 million sq ft of commercial interior fit-out projects across India. Specialized in project governance, stakeholder alignment, technical due diligence, contractor selection, and end-to-end delivery of fast-track corporate workspace projects.",
    },
    founderEmail: { type: String, default: "yogesh.pawar@icc.ind.in" },
    founderImage: { type: String, default: "/founder.png" },
    founderExperience: { type: String, default: "20" },
    founderDeliveredArea: { type: String, default: "10M" },
    careerDeliveries: [
      {
        client: { type: String, required: true },
        size: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

if (mongoose.models.About) {
  delete mongoose.models.About;
}

export default mongoose.model("About", AboutSchema);
