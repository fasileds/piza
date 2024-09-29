import prisma from "../index.js";

export const createOrder = async (req, res) => {
  const { userId, pizaId, quantity, topping } = req.body;

  try {
    const pizza = await prisma.piza.findUnique({
      where: { id: pizaId },
    });

    if (!pizza) {
      return res.status(404).json({ message: "Pizza not found." });
    }
    const totalPrice = pizza.price * quantity;
    const order = await prisma.order.create({
      data: {
        userId: userId,
        pizaId: pizaId,
        topping: topping,
        quantity: quantity,
        totalPrice: totalPrice,
      },
    });
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      include: {
        user: true,
        piza: true,
      },
    });

    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getSingleOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true,
        piza: true,
      },
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found." });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
