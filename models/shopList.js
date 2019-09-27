const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Item Schema
const ListSchema = new Schema({
    listName: {
        type: String,
        required: true
    }
})

const ShopList = mongoose.model("ShopList", ListSchema)

module.exports = ShopList