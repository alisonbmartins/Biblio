import React, { useEffect, useState } from "react";
import api from "../api/api";
import BookCard from "../components/BookCard";

function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/books').then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      {books.map(book => <BookCard key={book.id} book={book} />)}
    </div>
  );
}

export default Catalog;

