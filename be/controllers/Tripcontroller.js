const tripModel= require("../schema/tripSchema.js")

const storeTrips = async (req, res) => {
    try {
        const { date, from,to,busOwnerID,startTime,EndTime,category,SeatBooked,bus_no,animeties_list,busFare,busName} = req.body;

        const myData = new tripModel({ date, from,to,busOwnerID,startTime,EndTime,category,SeatBooked,bus_no,animeties_list,busFare,busName });
        const data = await myData.save();

        return res.status(200).json({
            message:"Trips Saved successfully",
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
                message:"No trip found",
                status:200,
                data:null
            })    
        }
        

        return res.send(data)
        
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:"something went wrong!",
            status:503,
            data:{}
        })
    }
}



const getTripsByDate = async (req, res) => {
    try {
        const d= req.query
        // const t = req.body.to
        // const f= req.body.from
        console.log(d)
        // const data = await tripModel.find({ "date": {$eq : d } })
        // const data = await tripModel.find({$eq : d })
        const data = await tripModel.find({date:d})
        // const data = await tripModel.find({$and:[{date:{$eq:d}},{from:{$eq:f}},{to:{$eq:t}}]})
        console.log(data)
        

        
        if (data.length === 0) {
            // if no blog found
            return res.status(200).json({
                message:"Nothing to show with this date",
                status:200,
                data:null
            })    
        }
        

        return res.send(data)
        
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:"something went wrong!",
            status:503,
            data:{}
        })
    }
}


const getTripsByQuery = async (req, res) => {
    try {
        const params = {};

        for (const key in req.query) {
          params[key] = req.query[key];
        }
      
        const data = await tripModel.find(params)


        
        // const d= req.body.date
        // const t = req.body.to
        // const f= req.body.from
        console.log(params)
        // const data = await tripModel.find({ "date": {$eq : d } })
       
        // const data = await tripModel.find({$and:[{date:{$eq:d}},{from:{$eq:f}},{to:{$eq:t}},{startTime:{$eq:req.body.startTime}},{EndTime:{$eq:req.body.EndTime}}]})
        console.log(data)
        

        
        if (data.length === 0) {
            // if no blog found
            return res.status(200).json({
                message:"Nothing to show with these parameters",
                status:200,
                data:null
            })    
        }
        

        return res.send(data)
        
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:"something went wrong!",
            status:503,
            data:{}
        })
    }
}

module.exports = { storeTrips, getTrips, getTripsByDate, getTripsByQuery }