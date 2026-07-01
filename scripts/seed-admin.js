const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const crypto = require("crypto");

// Manual dotenv parser
const envPath = path.join(__dirname, "../.env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf-8");
  envContent.split("\n").forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || "";
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.substring(1, value.length - 1);
      }
      process.env[key] = value.trim();
    }
  });
}

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI is missing from .env file");
  process.exit(1);
}

const AdminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  salt: { type: String, required: true }
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", AdminSchema);

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return { salt, hash };
}

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB successfully.");

    // Clean up existing admin to prevent duplicate key errors
    await Admin.deleteMany({ username: "admin" });

    const { salt, hash } = hashPassword("adminpassword");
    
    await Admin.create({
      username: "admin",
      passwordHash: hash,
      salt: salt
    });

    console.log("Successfully seeded admin user.");
    console.log("Username: admin");
    console.log("Password: adminpassword");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await mongoose.disconnect();
  }
}

seed();
