import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import api from "../api/api";

export default function ReservationsScreen() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    api.get("/reservations").then(res => setReservations(res.data));
  }, []);

  return (
    <View style={{ padding: 20 }}>
      {reservations.length === 0 ? (
        <Text>Nenhuma reserva.</Text>
      ) : reservations.map(r => (
        <Text key={r.id}>{r.book.title} - {r.status}</Text>
      ))}
    </View>
  );
}
