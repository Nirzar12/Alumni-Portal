import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/dbConfig.js";
import userRoutes from "./routes/userRoutes.js";
import alumniRoutes from "./routes/alumniRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

import path from "path";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Allow only your frontend origin
    credentials: true, // Allow cookies & authentication headers
  })
);

// DB connection
connectDB();

// API Route
app.get("/", (req, res) => {
  res.send("Welcome to the Alumni Portal API!");
});
app.use("/api/users", userRoutes);
app.use("/api/app/alumni", alumniRoutes);
app.use("/api/app/events", eventRoutes);
// app.use("/uploads", express.static(path.join(path.resolve(), "/uploads")));

// Serve poster images
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
