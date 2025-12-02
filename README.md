📚 BibliotecaConecta

BibliotecaConecta é uma plataforma completa e multiplataforma desenvolvida para modernizar a comunicação entre bibliotecas e seus usuários.
A solução inclui um sistema web, backend completo e aplicativo mobile para facilitar empréstimos, reservas e administração de acervos.


📌 Sumário

📚 Sobre o Projeto

✨ Funcionalidades

🏗️ Arquitetura

🛠️ Tecnologias

📦 Estrutura do Repositório

▶️ Como Rodar o Projeto

Backend

Frontend Web

App Mobile

📘 API

🖥️ Telas

🤝 Contribuição

📄 Licença

📚 Sobre o Projeto

O BibliotecaConecta visa facilitar o acesso a informações e serviços de bibliotecas públicas e privadas, permitindo que usuários consultem livros, façam reservas e acompanhem empréstimos diretamente do celular ou navegador.

Ao mesmo tempo, administradores têm acesso a um painel completo para gerenciar acervos, disponibilidade e usuários.

✨ Funcionalidades
👤 Para usuários

🔍 Consultar livros por título, autor ou categoria

📦 Verificar disponibilidade

📅 Realizar reservas

📚 Gerenciar empréstimos ativos e históricos

🛠️ Para administradores

📊 Painel de administração

➕ Adicionar/editar/excluir livros

👥 Gerenciar usuários

📘 Controlar empréstimos e devoluções

🏗️ Arquitetura

🛠️ Tecnologias
Backend

Node.js

Express

SQLite

Prisma ORM

JWT

Frontend Web

React

Axios

React Router

Aplicativo Mobile

React Native (Expo)

Axios

AsyncStorage


▶️ Como Rodar o Projeto
🔌 Backend
cd backend
npm install
npx prisma migrate dev --name init
npm run dev


O backend rodará em:

http://localhost:3000

🖥️ Frontend Web
cd frontend
npm install
npm start


A aplicação web abrirá em:

http://localhost:5173

📱 App Mobile (Expo)
cd mobile
npm install
npx expo start



📘 API

A API segue o padrão REST.

📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e distribuir.

ALISON BRAGA MARTINS (mobile, frontend), Raphael Rodrigues de Sousa (backend).
