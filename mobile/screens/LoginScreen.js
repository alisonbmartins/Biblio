import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import api from "../api/api";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      Alert.alert('Login realizado!');
      navigation.navigate('Catalog');
    } catch (err) {
      Alert.alert(err.response?.data?.error || 'Erro');
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}
