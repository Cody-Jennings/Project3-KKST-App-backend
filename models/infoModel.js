const mongoose = require('mongoose')

const translationDataSchema = new mongoose.Schema({
    Phrase: String,
    Translation: String,
    Example: String
})

const KKSTData = mongoose.model('Translationdata', translationDataSchema)

module.exports = KKSTData