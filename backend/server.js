const express = require("express");
const app = express();

app.use(express.json());

// ✅ CORS (allow frontend to call backend)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

// login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    return res.json({ success: true, message: "Login successful" });
  }

  res.status(401).json({ success: false, message: "Wrong credentials" });
});

app.listen(8080, () => console.log("Backend running at http://localhost:8080"));
