const prisma = require("../database/prismaClient");

module.exports.getBooks = async (req, res) => {
  const books = await prisma.book.findMany();
  res.json(books);
};

module.exports.getBookById = async (req, res) => {
  const { id } = req.params;
  const book = await prisma.book.findUnique({ where: { id: Number(id) } });
  if (!book) return res.status(404).json({ error: "Livro não encontrado" });
  res.json(book);
};

module.exports.createBook = async (req, res) => {
  const { title, author, summary, copies } = req.body;
  const book = await prisma.book.create({ data: { title, author, summary, copies } });
  res.json(book);
};

module.exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, summary, copies } = req.body;
  const book = await prisma.book.update({
    where: { id: Number(id) },
    data: { title, author, summary, copies }
  });
  res.json(book);
};

module.exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  await prisma.book.delete({ where: { id: Number(id) } });
  res.json({ message: "Livro deletado" });
};
