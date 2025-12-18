import express from "express";
import {
  addChatMessage,
  getChatHistory,
} from "../controllers/chat.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// Save chat message
router.post("/add", auth, addChatMessage);

// Get chat history
router.get("/history", auth, getChatHistory);

export default router;
