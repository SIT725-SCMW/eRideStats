let LocationModel = require("../models/location");

const retrieveLocation = (req,res) => {
    LocationModel.getLocation((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Success",data: result })
        }
    })
}

module.exports = {retrieveLocation};