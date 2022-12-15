import express from "express";
const router = express.Router();

import RefereeFunc from "../controllers/refereesController.js";

// import testUser from "../middleware/testUser.js";

router.route("/").get(RefereeFunc.getReferees);
router.route("/:id").get(RefereeFunc.getReferee);

export default router;
