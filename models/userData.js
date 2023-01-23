const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    Author: String,
    Date: Number,
})

const userData = mongoose.model('Userdata', userDataSchema)

module.exports = userData