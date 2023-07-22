const mongoose = require('mongoose');
const { Schema } = mongoose;

// new schema for pushing trip details to the Database.
const tripSchema = new Schema({
    date: { type: Date, default: Date.now },
    from: { type: String,  default:"" },
    to: { type: String,  default:"" },
    busOwnerID:{ type: String,  default:"" },
    startTime:{ type: String,  default:"" },
    EndTime: { type: String,  default:"" },
    category: { type: String,  default:"" },
    SeatBooked: [],
    bus_no: { type: String,  default:"" },
    animeties_list: [String],
    busFare: { type: Number,  default:"" },
    busName: { type: String,  default:"" },
}, { timestamps: true })

// Registering the schema with mongoose model.
module.exports = mongoose.model('trips', tripSchema);