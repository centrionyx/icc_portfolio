import mongoose from "mongoose";

const ClientLogoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    text: { type: String, required: true },
    logoUrl: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

if (mongoose.models.ClientLogo) {
  delete mongoose.models.ClientLogo;
}

export default mongoose.model("ClientLogo", ClientLogoSchema);
