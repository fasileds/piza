import express from "express";
import {
  createPiza,
  deletePiza,
  getAllPiza,
  getSinglePiza,
  updatePiza,
} from "../controler/piza.js";

const routes = express.Router();

routes.get("/", getAllPiza);
routes.get("/find/:id", getSinglePiza);
routes.post("/createPiza", createPiza);
routes.put("/updatePiza/:id", updatePiza);
routes.delete("/dlete/:id", deletePiza);

export default routes;
