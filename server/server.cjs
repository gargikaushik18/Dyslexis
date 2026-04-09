const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");

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

  socket.on("join-room", (roomId) => {
    socket.join(roomId);
    socket.to(roomId).emit("ready");
  });

  socket.on("offer", (offer, roomId) => {
    socket.to(roomId).emit("offer", offer);
  });

  socket.on("answer", (answer, roomId) => {
    socket.to(roomId).emit("answer", answer);
  });

  socket.on("ice-candidate", (candidate, roomId) => {
    socket.to(roomId).emit("ice-candidate", candidate);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

/* ================= DATABASE ================= */

mongoose
  .connect(
    "mongodb://gargikaushik1711_db_user:Gargi2004@ac-rvfx1rf-shard-00-00.gqywtpj.mongodb.net:27017,ac-rvfx1rf-shard-00-01.gqywtpj.mongodb.net:27017,ac-rvfx1rf-shard-00-02.gqywtpj.mongodb.net:27017/dyslexis?ssl=true&replicaSet=atlas-ogom8q-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("Mongo Error ❌:", err.message));

/* ================= USER MODEL ================= */

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
  scores: [Number],
});

/* ================= AUTH ROUTES ================= */

// REGISTER
app.post("/register", async (req, res) => {
  try {
    console.log("REGISTER HIT ✅");
    console.log("Data:", req.body);

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.send({ success: false, message: "User already exists" });
    }

    const newUser = new User({
      name,
      email,
      password,
      scores: [],
    });

    await newUser.save();

    console.log("User Saved ✅");

    res.send({ success: true });
  } catch (err) {
    console.log("Register Error:", err);
    res.send({ success: false });
  }
});

// LOGIN
app.post("/login", async (req, res) => {
  try {
    console.log("LOGIN HIT ✅");
    console.log("Data:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (user) {
      res.send({ success: true, user });
    } else {
      res.send({ success: false });
    }
  } catch (err) {
    console.log("Login Error:", err);
    res.send({ success: false });
  }
});

/* ================= START SERVER ================= */

server.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});