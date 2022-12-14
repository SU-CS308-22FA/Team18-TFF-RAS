import express from "express";
const router = express.Router();
import { dueReports } from "../controllers/reportController.js";

router.route("/").post(dueReports);

export default router;
