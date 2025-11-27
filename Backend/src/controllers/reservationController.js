const prisma = require("../database/prismaClient");

module.exports.getReservations = async (req, res) => {
  const reservations = await prisma.reservation.findMany({
    include: { user: true, book: true }
  });
  res.json(reservations);
};

module.exports.createReservation = async (req, res) => {
  const { bookId } = req.body;
  const reservation = await prisma.reservation.create({
    data: { userId: req.user.id, bookId, status: "pending" }
  });
  res.json(reservation);
};

module.exports.updateReservation = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const reservation = await prisma.reservation.update({
    where: { id: Number(id) },
    data: { status }
  });
  res.json(reservation);
};

module.exports.deleteReservation = async (req, res) => {
  const { id } = req.params;
  await prisma.reservation.delete({ where: { id: Number(id) } });
  res.json({ message: "Reserva deletada" });
};
