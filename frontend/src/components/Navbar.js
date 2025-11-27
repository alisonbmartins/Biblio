import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isLogged, logout }) {
  return (
    <nav>
      <Link to="/">Catálogo</Link> |{" "}
      {isLogged ? (
        <>
          <Link to="/reservations">Minhas Reservas</Link> |{" "}
          <Link to="/admin">Admin</Link> |{" "}
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}
