const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const KKSTData = require('./models/infoModel')
const cors = require('cors')
const db = mongoose.connection
const translationsData = require('./utilities/data')
const infosController = require('./controllers/infoController')


//Environmetal Variables
const app = express()
const mongoURI = process.env.MONGODB_URI
const PORT = process.env.PORT || 3001

// Connecting to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true},
    () => console.log('MongoDB connection established'))

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongodb not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false}))// extended: false - does not allow nested objects in query strings
app.use(express.json()) //use.json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!
app.use(cors({ origin: '*' })) // used to whitelist requests

// Routes
app.use('/KKST-App', infosController) // telling server.js to get the routes from controllers/infoController.js

// Seeding the db
app.get('/seed', async (req, res) => {
    await KKSTData.deleteMany({})
    await KKSTData.insertMany(translationsData)

    res.send('done!')
})

app.listen(PORT, () => {
    console.log('This message means nothing', PORT)
})