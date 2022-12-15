import express from "express";
const router = express.Router();
import { dueReports } from "../controllers/reportController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/").get(authenticateUser, dueReports);

export default router;
