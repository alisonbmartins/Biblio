import React, { useEffect, useState } from "react";
import api from "../api/api";
import BookCard from "../components/BookCard";

export default function Catalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Catálogo de Livros</h2>
      <div className="catalog">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
