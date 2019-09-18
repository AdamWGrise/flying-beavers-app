const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Item Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  currentlyOut: {
    type: Boolean,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = User = mongoose.model("items", ItemSchema);