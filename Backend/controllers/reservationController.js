const db = require('../database/db');

exports.getReservations = (req, res) => {
  db.all('SELECT r.id, u.name AS user, b.title AS book, r.date, r.returned FROM reservations r JOIN users u ON r.user_id = u.id JOIN books b ON r.book_id = b.id', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.createReservation = (req, res) => {
  const { user_id, book_id, date } = req.body;
  db.run('INSERT INTO reservations (user_id, book_id, date) VALUES (?, ?, ?)', [user_id, book_id, date], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    // Atualizar disponibilidade do livro
    db.run('UPDATE books SET available = 0 WHERE id = ?', [book_id]);
    res.json({ id: this.lastID, user_id, book_id, date });
  });
};

exports.returnBook = (req, res) => {
  const { id } = req.params;
  db.get('SELECT book_id FROM reservations WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Reserva não encontrada' });
    const book_id = row.book_id;
    db.run('UPDATE reservations SET returned = 1 WHERE id = ?', [id]);
    db.run('UPDATE books SET available = 1 WHERE id = ?', [book_id]);
    res.json({ message: 'Livro devolvido' });
  });
};
