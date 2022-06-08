let dropdownModel = require("../models/location");
let dropdownView = require("../views/dropdownView");


const createDropdown = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name": "Shams", "age": 13}});
}
const renderDropdown = (req,res) => {
    LocationModel.getLocation((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Success",data: result })
        }
    })
}
module.exports = {
    createDropdown, renderDropdown
}
