const express = require("express");
const router = express.Router();

const programController = require("../controllers/programController");

router.get("/:channelId", programController.getAllPrograms);
router.get("/category/:programCategoryId", programController.getProgramByCat);
router.get("/description/:programId", programController.getProgramInfo);
// router.get("/schedule/:programId", programController.getProgramSchedule);

module.exports = router;