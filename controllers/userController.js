const express = require('express')
const router = express.Router()
const USERData = require('../models/userModel.js')

//Remember INDUCES

// Index
router.get('/', (req, res)=>{
    USERData.find({}, (err, foundUSERData)=>{
        res.json(foundUSERData)
    })
})

//New - Will be handled by React Application

//Delete
router.delete('/:id', (req, res)=>{
    USERData.findByIdAndRemove(req.params.id, (err, deletedUSERData)=>{
        res.json(deletedUSERData)
    })
})

// Update
router.put('/:id', (req, res)=>{
    USERData.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUSERData)=>{
        res.json(updatedUSERData)
    });
});

//Create
router.post('/', (req, res)=>{
    USERData.create(req.body, (err, createdUSERData)=>{
        res.json(createdUSERData) //.json() will send proper headers in response so client knows it's json coming back
    })
})

// Edit - Will be handled by React application

// Show
router.get('/:id', (req, res)=>{
    USERData.findById(req.params.id, (err, foundUSERData)=>{
        res.json(foundUSERData)
    })
})


module.exports = router