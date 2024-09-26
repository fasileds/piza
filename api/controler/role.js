import prisma from "..";

export const createRole = async (req, res) => {
  try {
    const { name, description } = req.body;
    const role = await prisma.role.create({
      data: {
        name: name,
        description: description,
      },
    });
    res.status(201).json(role);
  } catch (error) {
    console.error(error);
    if (error.code === "P2002") {
      return res.status(400).json({ message: "Role name already exists." });
    }
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getAllRole = async (req, res) => {
  try {
    const roles = await prisma.role.findMany();
    res.status(200).json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
