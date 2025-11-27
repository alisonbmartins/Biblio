# Biblio# BiblioConecta

Plataforma multiplataforma para modernizar a interação entre bibliotecas e usuários.

## Funcionalidades

- Consultar catálogo de livros
- Verificar disponibilidade
- Reservar e gerenciar empréstimos
- Painel administrativo para gestão de livros

## Tecnologias

- Backend: Node.js + Express + SQLite
- Frontend: React
- Mobile: React Native (Expo)
- Arquitetura: REST

## Instruções de execução

### Backend

```bash
cd backend
npm install
npx prisma migrate dev --name init
npm run dev
