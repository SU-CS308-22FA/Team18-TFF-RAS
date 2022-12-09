import express from "express";
const router = express.Router();

import { getReferee, getReferees } from "../controllers/refereesController.js";

// import testUser from "../middleware/testUser.js";

router.route("/").get(getReferees);
router.route("/:id").get(getReferee);

export default router;
