import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import api, { setAuthToken } from "../api/api";

export default function LoginScreen({ navigation, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, password });
      setAuthToken(res.data.token);
      setUser(res.data.user);
      navigation.navigate("Catalog");
    } catch (err) {
      alert(err.response.data.error || "Erro no login");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Senha</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
