import express from "express";
const router = express.Router();
import { dueReports } from "../controllers/reportController.js";

router.route("/").get(dueReports);

export default router;
