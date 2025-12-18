// api/routes/kundli.route.js
import express from "express";
import auth from "../middleware/auth.js";
import { generateKundliAI } from "../controllers/kundliController.js";

const router = express.Router();

router.post("/ai", auth, generateKundliAI);

export default router;
