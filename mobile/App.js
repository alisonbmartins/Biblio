import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import CatalogScreen from "./screens/CatalogScreen";
import BookDetailScreen from "./screens/BookDetailScreen";
import ReservationsScreen from "./screens/ReservationsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Catalog" component={CatalogScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="Reservations" component={ReservationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
