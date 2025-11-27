const express = require('express');
const app = express();
const port = 3001;

// Permitir JSON no corpo das requisições
app.use(express.json());

// Importar rotas
const bookRoutes = require('./routes/books');

// Usar rotas
app.use('/books', bookRoutes);

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
