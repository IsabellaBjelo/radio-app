const express = require("express");
const router = express.Router();

const programController = require("../controllers/programController");

router.get("/:channelId", programController.getAllPrograms);
// channelid 132 för att prova
router.get("/category/:programCategoryId", programController.getProgramByCat);
// jag får inte till det med att skriva in url:en 
router.get("/description/:programId", programController.getProgramInfo);
// programid 1120 för att prova
// router.get("/schedule/:programId", programController.getProgramSchedule);

module.exports = router;