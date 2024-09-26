import prisma from "..";

export const createPiza = async (req, res) => {
  const { name, topping, price, restorantId } = req.body;

  try {
    const piza = await prisma.piza.create({
      data: {
        name: name,
        topping: topping,
        price: price,
        restorant: { connect: { id: restorantId } },
      },
    });
    res.status(201).json(piza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getAllPiza = async (req, res) => {
  try {
    const pizas = await prisma.piza.findMany({
      include: {
        restorant: true,
      },
    });
    res.status(200).json(pizas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getSinglePiza = async (req, res) => {
  const { id } = req.params;
  try {
    const singlePiza = await prisma.piza.findUnique({
      where: {
        id: id,
      },
      include: {
        restorant: true,
      },
    });

    if (!singlePiza) {
      return res.status(404).json({ message: "Pizza not found." });
    }

    res.status(200).json(singlePiza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const updatePiza = async (req, res) => {
  const { id } = req.params;
  const { name, topping, price } = req.body;

  try {
    const updatedPiza = await prisma.piza.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        topping: topping,
        price: price,
      },
      include: {
        restorant: true,
      },
    });

    res.status(200).json(updatedPiza);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const deletePiza = async (req, res) => {
  const { id } = req.body;

  try {
    const deletedPiza = await prisma.piza.delete({
      where: {
        id: id,
      },
    });
    res.status(200).json({ message: "Deleted successfully", deletedPiza });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Pizza not found." });
    }
    res.status(500).json({ message: "Internal server error." });
  }
};
