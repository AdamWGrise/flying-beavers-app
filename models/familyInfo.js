const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Item Schema
const FamilyInfoSchema = new Schema({
    category: {
        type: String,
        required: false
    },
    dataText: {
        type: String,
        required: false
    },
    lastUpdated: {
        type: Date,
        default: Date.now
    }
})

const FamilyInfo = mongoose.model("FamilyInfo", FamilyInfoSchema)

module.exports = FamilyInfo
