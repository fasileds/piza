import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const prisma = new PrismaClient();
app.listen(3001, () => {
  console.log("the app is running in port 3001");
});

export default prisma;
