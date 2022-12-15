import express from "express";
const router = express.Router();
import {
  dueReports,
  editReport,
  submitReport,
} from "../controllers/reportController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/").get(authenticateUser, dueReports);
router.route("/edit-report/:id").patch(authenticateUser, editReport);
router.route("/submit-report/:id").post(authenticateUser, submitReport);
export default router;
