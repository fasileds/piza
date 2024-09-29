import express from "express";
import { deleteUser, getAllUser, getSingleUser } from "../controler/user.js";

const routes = express.Router();

routes.delete("/deleteUser/:id", deleteUser);
routes.get("/", getAllUser);
routes.get("/find/:id", getSingleUser);

export default routes;
