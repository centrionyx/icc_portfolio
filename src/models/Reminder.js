import mongoose from "mongoose";

const ReminderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    time: { type: String, default: "12:00" },
    date: { type: String, required: true }, // YYYY-MM-DD
    type: { type: String, default: "scheduled" },
    email: { type: String, default: "" },
    emailSent: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.models.Reminder || mongoose.model("Reminder", ReminderSchema);
