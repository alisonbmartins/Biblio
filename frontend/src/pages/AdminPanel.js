import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function AdminPanel() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await api.get("/books");
    setBooks(res.data);
  };

  const addBook = async () => {
    await api.post("/books", { title, author });
    setTitle(""); setAuthor("");
    fetchBooks();
  };

  return (
    <div>
      <h2>Painel Administrativo</h2>
      <h3>Adicionar Livro</h3>
      <input placeholder="Título" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Autor" value={author} onChange={e => setAuthor(e.target.value)} />
      <button onClick={addBook}>Adicionar</button>
      <h3>Livros Existentes</h3>
      <ul>
        {books.map(b => (
          <li key={b.id}>{b.title} - {b.author}</li>
        ))}
      </ul>
    </div>
  );
}
