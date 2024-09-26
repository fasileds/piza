import prisma from "..";
import bcrypt from "bcryptjs";

export const createRestorent = async (req, res) => {
  const { emaile, password, name, location, phoneNumber, restorantName, logo } =
    req.body;

  try {
    const existingRestorant = await prisma.restorant.findUnique({
      where: { emaile: emaile },
    });

    if (existingRestorant) {
      return res.status(400).json({ message: "Email is already in use." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const restorent = await prisma.restorant.create({
      data: {
        emaile: emaile,
        passworde: hashedPassword,
        name: name,
        location: location,
        phoneNumber: phoneNumber,
        restorantName: restorantName,
        logo: logo,
      },
    });
    res.status(201).json(restorent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getAllRestorents = async (req, res) => {
  try {
    const restorents = await prisma.restorant.findMany();
    res.status(200).json(restorents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const deleteRestorent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedRestorant = await prisma.restorant.delete({
      where: {
        id: id,
      },
    });

    res
      .status(200)
      .json({ message: "Restaurant deleted successfully.", deletedRestorant });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Restaurant not found." });
    }
    res.status(500).json({ message: "Internal server error." });
  }
};

export const updateRestorant = async (req, res) => {
  const { id } = req.params;
  const { emaile, password, name, location, phoneNumber, restorantName, logo } =
    req.body;

  try {
    const updatedRestorant = await prisma.restorant.update({
      where: {
        id: id,
      },
      data: {
        emaile: emaile,
        passworde: password,
        name: name,
        location: location,
        phoneNumber: phoneNumber,
        restorantName: restorantName,
        logo: logo,
      },
    });

    res
      .status(200)
      .json({ message: "Restaurant updated successfully.", updatedRestorant });
  } catch (error) {
    console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Restaurant not found." });
    }
    res.status(500).json({ message: "Internal server error." });
  }
};
