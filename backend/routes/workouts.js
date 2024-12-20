const express = require('express')

const router = express.Router

// GET all workouts
router.get('/', (req, res) => {
    res,jason({mssg: 'GET all workouts'})
})

// GET a singe workouts
router.get('/:id', (req, res) => {
    res.jason({mssg: 'GET a single workouts'})
})

// POST a new workouts
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router