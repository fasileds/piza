import express from "express";
import { login, register } from "../controler/auth.js";

const routes = express.Router();

routes.get("/register", register);
routes.get("/login", login);

export default routes;
