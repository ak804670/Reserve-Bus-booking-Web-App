const mongoose = require('mongoose');
const { Schema } = mongoose;

// new schema for pushing trip details to the Database.
const stateSchema = new Schema({
    state : {type : String },
    districts:{type:Array}
})

// Registering the schema with mongoose model.
module.exports = mongoose.model('state_district', stateSchema);