const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Item Schema
const ItemSchema = new Schema({
  shoppingList: {
    type: String,
    required: true
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
    required: true
  },
  quantityUnits: {
    type: String,
    required: false
  },
  needed: {
    type: Boolean,
    required: true,
    default: true
  },
  onlyIfSale: {
    type: Boolean,
    required: true,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const ShopItem = mongoose.model("ShopItem", ItemSchema)

module.exports = ShopItem
