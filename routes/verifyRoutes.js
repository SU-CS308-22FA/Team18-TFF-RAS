import express from "express";
const router = express.Router();

import { verify, verifyUser } from "../controllers/verifyController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/").post(authenticateUser, verify);
router.route("/:emailtoken").post(authenticateUser, verifyUser);

export default router;
