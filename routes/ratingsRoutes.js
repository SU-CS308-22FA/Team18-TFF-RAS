import express from "express";
const router = express.Router();

import { createRating, getRating } from "../controllers/ratingsController";

// import testUser from "../middleware/testUser.js";

router.route("/").post(createRating);
// remember about :id
// router.route("/stats").get(showStats);
// router.route("/:id").delete(testUser, deleteJob).patch(testUser, updateJob);
router.route(":id").get(getRating);

export default router;
