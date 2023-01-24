const mongoose = require('mongoose')

const translationDataSchema = new mongoose.Schema({
    Phrase: String,
    Translation: String,
    Example: String,
    Author: String,
    Date: String
})

const KKSTData = mongoose.model('Translationdata', translationDataSchema)

module.exports = KKSTData