const db = require("../models");

// Defining methods for the shopItemsController
module.exports = {
  findAll: function (req, res) {
    db.ShopItem
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.ShopItem
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.ShopItem
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateStar: function (req, res) {
    db.ShopItem
      .findOneAndUpdate({ _id: req.params.id }, { $bit: { starred: { xor: 1 } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCheck: function (req, res) {
    db.ShopItem
      .findOneAndUpdate({ _id: req.params.id }, { $bit: { needed: { xor: 1 } } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.ShopItem
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
