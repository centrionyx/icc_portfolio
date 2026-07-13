import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    projectType: { type: String, required: true },
    message: { type: String },
    status: { type: String, default: "New" } // New, Contacted, In Progress, Closed
  },
  { timestamps: true }
);

if (mongoose.models.Enquiry) {
  delete mongoose.models.Enquiry;
}

export default mongoose.model("Enquiry", EnquirySchema);
