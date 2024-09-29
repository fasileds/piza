import express from "express";
import {
  createOrder,
  getAllOrders,
  getSingleOrder,
} from "../controler/order.js";

const routes = express.Router();

routes.get("/", getAllOrders);
routes.get("/find/:id", getSingleOrder);
routes.post("/createOrder", createOrder);

export default routes;
