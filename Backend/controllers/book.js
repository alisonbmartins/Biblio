const db = require('../database/db');

// Exemplo: listar todos os livros
const getAllBooks = (req, res) => {
    const sql = "SELECT * FROM books";
    db.all(sql, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
};

const getBookById = (req, res) => {
    const { id } = req.params;
    const sql = "SELECT * FROM books WHERE id = ?";
    db.get(sql, [id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Livro não encontrado" });
        res.json(row);
    });
};

const addBook = (req, res) => {
    const { title, author, description } = req.body;
    const sql = "INSERT INTO books (title, author, description, available) VALUES (?, ?, ?, 1)";
    db.run(sql, [title, author, description], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Livro adicionado com sucesso", id: this.lastID });
    });
};

const updateBook = (req, res) => {
    const { id } = req.params;
    const { title, author, description, available } = req.body;
    const sql = "UPDATE books SET title = ?, author = ?, description = ?, available = ? WHERE id = ?";
    db.run(sql, [title, author, description, available, id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Livro não encontrado" });
        res.json({ message: "Livro atualizado com sucesso" });
    });
};

const deleteBook = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM books WHERE id = ?";
    db.run(sql, [id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes === 0) return res.status(404).json({ error: "Livro não encontrado" });
        res.json({ message: "Livro removido com sucesso" });
    });
};

// ⚠️ Exportando todas as funções corretamente
module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
