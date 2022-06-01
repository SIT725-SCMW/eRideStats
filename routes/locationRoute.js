const express = require("express");
let router = express.Router();
let controller = require("../controller");

router.get('/', (req, res) => {
    controller.locationController.retrieveLocation(req, res);
})


module.exports = router;