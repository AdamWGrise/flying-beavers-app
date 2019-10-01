const db = require('../models')

// Defining methods for the familyInfosController
module.exports = {
  findAll: function (req, res) {
    db.FamilyInfo
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function (req, res) {
    db.FamilyInfo
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    console.log(req.body)
    db.FamilyInfo
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.FamilyInfo
      .findOneAndUpdate({ _id: req.params.id }, { dataText: req.body.dataText, lastUpdated: req.body.lastUpdated })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  remove: function (req, res) {
    console.log(req.params)
    db.FamilyInfo
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
