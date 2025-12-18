import express from "express";
import auth from "../middleware/auth.js";
import { getProfile, saveProfile } from "../controllers/profilecontroller.js";

const router = express.Router();

router.get("/", auth, getProfile);
router.post("/", auth, saveProfile);

export default router;
