import React from "react";
import { View, Text, Button } from "react-native";

export default function BookCard({ book, onPress }) {
  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1 }}>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Button title="Detalhes" onPress={() => onPress(book.id)} />
    </View>
  );
}
