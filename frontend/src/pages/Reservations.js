import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    api.get("/reservations")
      .then(res => setReservations(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>Minhas Reservas</h2>
      {reservations.length === 0 ? (
        <p>Nenhuma reserva encontrada.</p>
      ) : (
        <ul>
          {reservations.map(r => (
            <li key={r.id}>
              Livro: {r.book.title} | Status: {r.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
