// const db = require("../models");

// Defining methods for the calendarController
module.exports = {
    lookUpEvents: function (req, res) {
        console.log("HA")

    }
};

// // Defining methods for the calendarController
// module.exports = {
//     findAll: function (req, res) {
//         db.Calendar
//             .find(req.query)
//             // .sort({ date: -1 })
//             // .sort({ date: -1, category: 'asc' })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     }
// };
