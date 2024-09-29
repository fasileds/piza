import express from "express";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import restorantRoutes from "./routes/restorent.js";
import pizaRoutes from "./routes/piza.js";
import orderRoutes from "./routes/order.js";
import roleRoutes from "./routes/role.js";
const app = express();
const prisma = new PrismaClient();
app.listen(3001, () => {
  console.log("the app is running in port 3001");
});

app.use("/api/auth", authRoutes);
app.use("/api/role", roleRoutes);

app.use("/api/user", userRoutes);
app.use("/api/piza", pizaRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/restorant", restorantRoutes);

export default prisma;
