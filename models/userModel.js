const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    Author: String,
    Date: Number
})

const USERData = mongoose.model('Userdata', userDataSchema)

module.exports = USERData