const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Item Schema
const ListSchema = new Schema({
    listTitle: {
        type: String,
        required: false
    },
})

const ShopList = mongoose.model("ShopList", ListSchema)

module.exports = ShopList