const db = require("../models");

// Defining methods for the calendarController
module.exports = {
    findAll: function (req, res) {
        db.Calendar
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
