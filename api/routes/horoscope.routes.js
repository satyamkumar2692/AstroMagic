import express from "express";
import { aiHoroscope } from "../controllers/aiController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, aiHoroscope);

export default router;
