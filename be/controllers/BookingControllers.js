const bookingModel = require('../schema/bookingSchema.js')


const storeBookings = async (req, res) => {
    try {
        // const {  date, from,to,startTime,category,SeatBooked,bus_no,busFare,busName} = req.body;

        // const myData = new bookingModel({ date, from,to,startTime,category,SeatBooked,bus_no,busFare,busName });
        const myData = new bookingModel(req.body);
        const data = await myData.save();

        return res.status(200).json({
            message:"Booking successful",
            status:200,
            data:data
        })
    } catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
}

module.exports = {storeBookings }