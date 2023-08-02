const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    name: { type: String },
    gender: { type: String },
    age: { type: Number },
    email: { type: String },
    phone: { type: Number }
  });




// new schema for pushing trip details to the Database.
const bookingSchema = new Schema({
    userData:[userSchema],
    fromTo:{From: {type:String}, To: {type:String}, Date: {type:String}},
    selectedBusDetails:{EndTime:{type:String},busFare:{type:Number},busName:{type:String},category: {type:String},rating: {type:Number},startTime:{type:String},totalSeats:{type:Number},totalWindowSeatsAvailable:{type:Number}},
    selectedSeats:{type:Array}
}, { timestamps: true })

// Registering the schema with mongoose model.
module.exports = mongoose.model('bookings', bookingSchema);