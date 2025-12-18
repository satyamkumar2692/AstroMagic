import express, { Router } from "express";
import { login, logout, register } from "./controllers/authcontroller.js";
import profileRoute from "./routes/profileroute.js";
import chatRoutes from "./routes/chat.routes.js";
import horoscopeRoute from "./routes/horoscope.routes.js";
import matchRoute from "./routes/match.route.js";
import kundliRoute from "./routes/kundli.route.js";
import zodiacRoutes from "./routes/zodiac.routes.js";
const router = express.Router();

router.route("/signup").post(register);

router.route("/login").post(login);

router.route("/logout").post(logout);

router.use("/profile", profileRoute);

router.use("/horoscope", horoscopeRoute);

router.use("/chat", chatRoutes);

router.use("/match", matchRoute);

router.use("/kundli", kundliRoute);

router.use("/zodiac", zodiacRoutes);

router.get("/", (req, res) => res.status(200).json("get"));

export default router;
