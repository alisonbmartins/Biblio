import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import api from "../api/api";
import BookCard from "../components/BookCard";

export default function CatalogScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get("/books").then(res => setBooks(res.data));
  }, []);

  return (
    <ScrollView>
      {books.map(book => (
        <BookCard key={book.id} book={book} onPress={(id) => navigation.navigate("BookDetail", { id })} />
      ))}
    </ScrollView>
  );
}
