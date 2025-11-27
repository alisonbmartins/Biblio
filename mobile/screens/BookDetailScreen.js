import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import api from "../api/api";

export default function BookDetailScreen({ route }) {
  const { id } = route.params;
  const [book, setBook] = useState(null);

  useEffect(() => {
    api.get(`/books/${id}`).then(res => setBook(res.data));
  }, [id]);

  const reserveBook = async () => {
    try {
      await api.post("/reservations", { bookId: id });
      alert("Reserva realizada!");
    } catch (err) {
      alert(err.response.data.error || "Erro ao reservar");
    }
  };

  if (!book) return <Text>Carregando...</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.summary || "Sem resumo"}</Text>
      <Button title="Reservar" onPress={reserveBook} />
    </View>
  );
}
