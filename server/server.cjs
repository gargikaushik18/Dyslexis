const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const server = http.createServer(app);

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= SOCKET.IO ================= */
const io = new Server(server, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
});

/* ================= DATABASE ================= */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("Mongo Error ❌:", err.message));

/* ================= USER MODEL ================= */

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,

  // ✅ FIXED SCHEMA
  scores: [
    {
      game: String,
      score: Number,
      date: String,
    },
  ],
});

/* ================= SAVE SCORE ================= */

app.post("/save-score", async (req, res) => {
  try {
    console.log("SAVE SCORE BODY:", req.body);

    const { userId, score, game } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.send({ success: false, message: "User not found" });
    }

    const newScore = {
      game: game,
      score: score,
      date: new Date().toLocaleString(),
    };

    user.scores.push(newScore);

    await user.save();

    console.log("Saved:", newScore);

    res.send({ success: true, scores: user.scores });
  } catch (err) {
    console.log("Score Error:", err);
    res.send({ success: false });
  }
});

/* ================= AUTH ROUTES ================= */

// REGISTER
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send({ success: false, message: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      scores: [{
    game: String,
    score: Number,
    date: String,
  },], // ✅ important
    });

    await newUser.save();

    res.send({ success: true });
  } catch (err) {
    console.log(err);
    res.send({ success: false });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.send({ success: true, user });
    } else {
      res.send({ success: false });
    }
  } catch (err) {
    console.log(err);
    res.send({ success: false });
  }
});

/* ================= START SERVER ================= */

server.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});