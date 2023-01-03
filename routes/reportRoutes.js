import express from "express";
const router = express.Router();
import { dueReports, submitReport } from "../controllers/reportController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/").get(authenticateUser, dueReports);
router.route("/:id").post(authenticateUser, submitReport);
export default router;
