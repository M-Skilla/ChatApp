import express from "express";
import secureRoute from "../middleware/secureRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", secureRoute, getUsersForSidebar);

export default router;
