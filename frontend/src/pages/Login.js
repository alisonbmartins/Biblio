import React, { useState } from 'react';
import api from '../api/api';
import './Login.css';

function Login({ navigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Preencha todos os campos!");
    }

    try {
      setLoading(true);
      const res = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/catalog');
    } catch (err) {
      alert(err?.response?.data?.error || "Erro ao conectar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Bem-vindo</h2>
        <p className="subtitle">Entre para continuar</p>

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleLogin} disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <button className="btn-google">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google"
          />
          Entrar com Google
        </button>

        <div className="links">
          <button className="link-btn" onClick={() => navigate('/register')}>
            Criar conta
          </button>

          <button className="link-btn" onClick={() => navigate('/forgot-password')}>
            Esqueci minha senha
          </button>
        </div>

      </div>
    </div>
  );
}

export default Login;
