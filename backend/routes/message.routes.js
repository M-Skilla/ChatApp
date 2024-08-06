import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.get("/:id", secureRoute, getMessages);
router.post("/send/:id", secureRoute, sendMessage);

export default router;
