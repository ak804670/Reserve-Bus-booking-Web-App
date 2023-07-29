const express = require('express')
const router = express.Router()
const {storeTrips, getTrips, getTripsByDate, getTripsByQuery}= require("../controllers/Tripcontroller.js")
const {storeBookings}= require('../controllers/BookingControllers.js')

router.post('/newtrip', storeTrips)
router.get('/gettrip', getTrips)
router.get('/gettripbydate', getTripsByDate)
router.get('/gettripbyquery', getTripsByQuery)

router.post('/newbooking', storeBookings)

module.exports = router

// {
//     "date": "2023-07-28",
//      "from": "Ranchi",
//      "to": "Tata"
//    }