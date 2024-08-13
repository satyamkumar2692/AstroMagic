import express, { Router } from "express";
import { login, logout, register } from "./controllers/authcontroller.js";
const router = express.Router();

router.route("/signup").post(register);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.get("/", (req, res) => res.status(200).json("get"));

export default router;
