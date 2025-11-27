const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");
const reservationRoutes = require("./routes/reservations");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Conexão SQLite
const db_name = path.join(__dirname, "database", "biblio.sqlite");
const db = new sqlite3.Database(db_name, err => {
  if (err) console.error(err.message);
  else console.log("Conectado ao SQLite.");
});

app.locals.db = db; // Disponibiliza o DB para os controllers

// Criação das tabelas
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    summary TEXT,
    available INTEGER DEFAULT 1
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    book_id INTEGER,
    status TEXT DEFAULT 'Reservado',
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(book_id) REFERENCES books(id)
  )`);
});

// Rotas
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/reservations", reservationRoutes);

// Teste simples
app.get("/", (req, res) => res.send("BiblioConecta backend funcionando!"));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
