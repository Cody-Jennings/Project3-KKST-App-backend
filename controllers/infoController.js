const express = require('express')
const router = express.Router()
const KKSTData = require('../models/infoModel.js')

//Remember INDUCES

// Index
router.get('/', (req, res)=>{
    KKSTData.find({}, (err, foundKKSTData)=>{
        res.json(foundKKSTData)
    })
})

//New - Will be handled by React Application

//Delete
router.delete('/:id', (req, res)=>{
    KKSTData.findByIdAndRemove(req.params.id, (err, deletedKKSTData)=>{
        res.json(deletedKKSTData)
    })
})

// Update
router.put('/:id', (req, res)=>{
    KKSTData.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedKKSTData)=>{
        res.json(updatedKKSTData)
    });
});

//Create
router.post('/', (req, res)=>{
    KKSTData.create(req.body, (err, createdKKSTData)=>{
        res.json(createdKKSTData) //.json() will send proper headers in response so client knows it's json coming back
    })
})

// Edit - Will be handled by React application

// Show
router.get('/:id', (req, res)=>{
    KKSTData.findById(req.params.id, (err, foundKKSTData)=>{
        res.json(foundKKSTData)
    })
})


module.exports = router