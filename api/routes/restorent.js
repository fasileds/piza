import express from "express";
import {
  createRestorent,
  deleteRestorent,
  getAllRestorents,
  getSingleRestorant,
  updateRestorant,
} from "../controler/restorent.js";

const routes = express.Router();

routes.get("/", getAllRestorents);
routes.get("/find/:id", getSingleRestorant);
routes.post("/createRestorant", createRestorent);
routes.put("/updateRestorant/:id", updateRestorant);
routes.delete("/deleteRestorant/:id", deleteRestorent);

export default routes;
