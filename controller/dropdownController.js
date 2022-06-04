let dropdownModel = require("../models/location");
let dropdownView = require("../views/dropdownView");


const createDropdown = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name": "Shams", "age": 13}});
}
const renderDropdown = (req,res) => {
    res.json({statusCode: 200, message:"Success", data: {"name": "Shams", "age": 13}});
}
module.exports = {
    createDropdown, renderDropdown
}
