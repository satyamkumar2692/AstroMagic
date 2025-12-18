// api/routes/match.route.js
import express from "express";
import auth from "../middleware/auth.js";
import {
  matchKundliAI,
  matchKundliPDF,
} from "../controllers/matchController.js";

const router = express.Router();

// POST /api/match → AI result
router.post("/", auth, matchKundliAI);

// POST /api/match/pdf → PDF generation
router.post("/pdf", auth, matchKundliPDF);

export default router;
