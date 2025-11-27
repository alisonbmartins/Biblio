import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import api from "../api/api";

export default function CatalogScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/books').then(res => setBooks(res.data));
  }, []);

  return (
    <View>
      <Text>Catálogo de Livros</Text>
      <FlatList
        data={books}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('BookDetail', { id: item.id })}>
            <Text>{item.title} - {item.author}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
