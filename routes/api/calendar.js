const router = require('express').Router()
const calendarController = require('../../controllers/calendarController')

// Matches with '/api/calendar'
router.route('/')
    .get(calendarController.lookUpEvents)

    // .get(calendarController.findAll)
    // .post(calendarController.create)

module.exports = router
