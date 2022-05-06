const express = require("express");
let router = express.Router();
let controller = require("../controller");

router.get('/', (req, res) => {
    controller.projectController.retrieveProject(req, res);
})

router.post('/', (req, res) => {
    controller.projectController.createProject(req, res);
})

module.exports = router;