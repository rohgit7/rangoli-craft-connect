import express from "express";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

const router = express.Router();

// MongoDB setup
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let artistsCollection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db("kalaveridb");
    artistsCollection = db.collection("artists");
    console.log("Connected to MongoDB (artists collection)");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}
connectDB();

// POST /api/artists/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, confirmPassword, phone, artForm, bio } = req.body;

    // Basic validation
    if (!name || !email || !password || !confirmPassword || !artForm) {
      return res.status(400).json({ error: "Please fill all required fields." });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    // Check if email exists
    const existingArtist = await artistsCollection.findOne({ email });
    if (existingArtist) {
      return res.status(400).json({ error: "Email already registered." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into DB
    const newArtist = { name, email, password: hashedPassword, phone, artForm, bio, createdAt: new Date() };
    await artistsCollection.insertOne(newArtist);

    res.status(201).json({ message: "Artist registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
