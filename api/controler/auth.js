import prisma from ".."; // Ensure the path is correct
import bcrypt from "bcryptjs";
import { z } from "zod";
import jwt from "jsonwebtoken";

const registerSchema = z.object({
  emaile: z.string().email().nonempty({ message: "Email is required." }),
  name: z.string().nonempty({ message: "Name is required." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." }), // Adjust as needed
});

export const register = async (req, res) => {
  const result = registerSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  const { emaile, name, password } = result.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { emaile: emaile },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        emaile: emaile,
        name: name,
        passworde: hashedPassword,
      },
    });

    // Respond with user details without the password
    res.status(201).json({ id: user.id, emaile: user.emaile, name: user.name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const loginSchema = z.object({
  emaile: z.string().email().nonempty({ message: "Email is required." }),
  password: z.string().nonempty({ message: "Password is required." }),
});

export const login = async (req, res) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ errors: result.error.errors });
  }

  const { emaile, password } = result.data;

  try {
    const user = await prisma.user.findUnique({
      where: { emaile: emaile },
    });

    if (!user) {
      return res.status(404).json({ message: "User does not exist." });
    }

    const passwordChecked = await bcrypt.compare(password, user.passworde);

    if (!passwordChecked) {
      return res.status(401).json({ message: "Wrong credentials." });
    }

    const accessToken = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET, // Ensure this is defined in your .env
      { expiresIn: "3d" }
    );

    res.json({
      user: {
        id: user.id,
        emaile: user.emaile,
        name: user.name,
      },
      accessToken, // Updated variable name
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
