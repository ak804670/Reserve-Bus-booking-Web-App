const tripModel= require("../schema/tripSchema.js")

const storeTrips = async (req, res) => {
    try {
        const { date, from,to,busOwnerID,startTime,EndTime,category,SeatBooked,bus_no,animeties_list,busFare,busName} = req.body;

        const myData = new tripModel({ date, from,to,busOwnerID,startTime,EndTime,category,SeatBooked,bus_no,animeties_list,busFare,busName });
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




const getTrips = async (req, res) => {
    try {
        // find last five blogs 
        const data = await tripModel.find().sort({_id:-1}).limit(50)
        console.log(data)
        

        
        if (data.length === 0) {
            // if no blog found
            return res.status(200).json({
                message:"be the first to add somthing!",
                status:200,
                data:null
            })    
        }
        

        return res.send(data)
        
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:"something went wrong! do",
            status:503,
            data:{}
        })
    }
}

module.exports = { storeTrips, getTrips }