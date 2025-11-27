const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const reservationRoutes = require("./routes/reservationRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/reservations", reservationRoutes);

app.get("/", (req, res) => res.send("BiblioConecta API rodando"));

module.exports = app;
