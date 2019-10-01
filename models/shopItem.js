const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Item Schema
const ItemSchema = new Schema({
  shoppingList: {
    type: String,
    required: false
  },
  category: {
    type: String,
    required: false
  },
  itemName: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: false
  },
  quantityUnits: {
    type: String,
    required: false
  },
  needed: {
    type: Number,
    required: false,
    default: true
  },
  onlyIfSale: {
    type: Boolean,
    required: false,
    default: false
  },
  starred: {
    type: Number,
    required: false,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const ShopItem = mongoose.model("ShopItem", ItemSchema)

module.exports = ShopItem
