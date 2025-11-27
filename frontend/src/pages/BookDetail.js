import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const reserveBook = async () => {
    try {
      await api.post("/reservations", { bookId: book.id });
      alert("Reserva realizada com sucesso!");
    } catch (err) {
      alert(err.response.data.error || "Erro ao reservar");
    }
  };

  if (!book) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Autor: {book.author}</p>
      <p>Resumo: {book.summary || "Sem resumo"}</p>
      <p>Cópias disponíveis: {book.copies}</p>
      <button onClick={reserveBook}>Reservar</button>
    </div>
  );
}
