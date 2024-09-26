import prisma from "..";

export const getAllUser = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedUser = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    res.status(204).json({ message: "User successfully deleted." });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "User not found." });
    }

    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};
