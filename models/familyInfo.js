const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Item Schema
const FamilyInfoSchema = new Schema({
    category: {
        type: String,
        required: true,
        default: "New Category"
    },
    dataText: {
        type: String,
        required: true,
        default: ""
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})

const FamilyInfo = mongoose.model("FamilyInfo", FamilyInfoSchema)

module.exports = FamilyInfo
