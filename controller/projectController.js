let projectModel = require("../models/project");

const createProject = (req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    projectModel.insertProject(newProject, (err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Project Successfully added", data: result })
        }
    })
}

const retrieveProject = (req,res) => {
    projectModel.getProject((err, result) => {
        if (err) {
            res.json({ statusCode: 400, message: err })
        }
        else {
            res.json({ statusCode: 200, message: "Success",data: result })
        }
    })
}

module.exports = {createProject, retrieveProject};