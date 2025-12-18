import express from "express";
import { dailyZodiac } from "../controllers/zodiacController.js";

const router = express.Router();

router.post("/daily", dailyZodiac);

export default router;
