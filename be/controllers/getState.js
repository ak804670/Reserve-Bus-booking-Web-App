const stateModel = require('../schema/statesSchema.js')

const getState = async (req, res) => {
    try {
       
        const data = await stateModel.find()
        console.log(data)
        

        
        if (data.length === 0) {
            // if no blog found
            return res.status(200).json({
                message:"No data Found",
                status:200,
                data:null
            })    
        }
        

        return res.status(200).json({
            message:"states",
            status:200,
            data:data
        })
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:"something went wrong!",
            status:503,
            data:{}
        })
    }
}


const postState = async (req, res) => {
    try {
       
        const {state, districts}= req.body;
        const mydata = new stateModel({state, districts})
        const data= await mydata.save()
        console.log(data)
        

        
        return res.status(200).json({
            message:"State Saved successfully",
            status:200,
            data:data
        })
        
        
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:"something went wrong!",
            status:503,
            data:{}
        })
    }
}


module.exports = { getState, postState}