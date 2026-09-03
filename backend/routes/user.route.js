import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUserSuggestions } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/suggestions", protectRoute, getUserSuggestions);

export default router;
