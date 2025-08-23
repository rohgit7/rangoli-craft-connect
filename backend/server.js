// server.js
import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js"; // <-- import the auth routes
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import artistRoutes from "./routes/artistRoutes.js";




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Then use it


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
const uri = process.env.MONGO_URI; 
const client = new MongoClient(uri);

let collection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db("kalaveridb");
    collection = db.collection("artformDetails");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
connectDB();

// Routes
app.use("/api/auth", authRoutes);
// Add this route before `app.listen`
app.use("/api/artists", artistRoutes);

// Health check
app.get("/", (req, res) => res.send("Auth server running"));

// Get all artforms
app.get("/artforms", async (req, res) => {
  try {
    const artforms = await collection.find({}).toArray();
    res.json(artforms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get artform by _id
app.get("/artforms/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const artform = await collection.findOne({ _id: new ObjectId(_id) });
    if (!artform) return res.status(404).json({ error: "Artform not found" });
    res.json(artform);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get artform by id (string field)
app.get("/artforms/byid/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const artform = await collection.findOne({ id });
    if (!artform) return res.status(404).json({ error: "Artform not found" });
    res.json(artform);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new artform
app.post("/artforms", async (req, res) => {
  try {
    const newArtform = req.body;
    const result = await collection.insertOne(newArtform);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update artform by _id
app.put("/artforms/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const updateData = { $set: req.body };
    const result = await collection.updateOne({ _id: new ObjectId(_id) }, updateData);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete artform by _id
app.delete("/artforms/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await collection.deleteOne({ _id: new ObjectId(_id) });
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: "All fields are required" });

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already registered" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { name, email, password: hashedPassword };
    await usersCollection.insertOne(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

// Login route
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "All fields are required" });

    const user = await usersCollection.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid email or password" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(400).json({ error: "Invalid email or password" });

    // Return a mock token or user info (replace with JWT in real app)
    res.json({ message: "Login successful", token: "mock-jwt-token" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = "./uploads";
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}-${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

// POST endpoint for form submission
app.post("/api/transform", upload.single("photo"), (req, res) => {
  try {
    const { artform, artist, deliveryOption } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "Photo is required" });
    }

    if (!artform || !artist || !deliveryOption) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // For demo purposes, we just return the info
    res.json({
      message: "Form submitted successfully",
      data: {
        artform,
        artist,
        deliveryOption,
        photoUrl: `/uploads/${file.filename}`,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
