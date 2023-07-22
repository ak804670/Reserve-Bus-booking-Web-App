const express = require('express')
const router = express.Router()
const {storeTrips, getTrips}= require("../controllers/Tripcontroller.js")


router.post('/newtrip', storeTrips)
router.get('/gettrip', getTrips)

module.exports = router