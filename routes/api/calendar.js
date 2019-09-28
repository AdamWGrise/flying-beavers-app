const router = require("express").Router();
const calendarController = require("../../controllers/calendarController");

// Matches with "/api/calendar"
router.route("/")
  .get(calendarController.findAll)

module.exports = router;
