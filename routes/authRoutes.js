import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  message:
    "Too many requests from this IP address, please try again after 15 minutes",
});

import {
  register,
  login,
  updateUser,
  deleteUser,
  passwordEmail,
  updatePassword,
} from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, updateUser);
router.route("/deleteUser").delete(authenticateUser, deleteUser);
router.route("/resetPassword").post(apiLimiter, passwordEmail);
router.route("/reset_password/:emailtoken").post(updatePassword);
export default router;
