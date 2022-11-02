import express from "express";
const router = express.Router();

import {
  register,
  login,
  updateUser,
  deleteUser,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/deleteUser").delete(authenticateUser, deleteUser);

export default router;
