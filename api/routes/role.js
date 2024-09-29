import express from "express";
import { createRole, getAllRole } from "../controler/role.js";

const routes = express.Router();

routes.post("/createRole", createRole);
routes.get("/", getAllRole);

export default routes;
