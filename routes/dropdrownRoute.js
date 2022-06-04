const express = require("express");
let router = express.Router();
let controller = require("../controller");

router.get('/', (req, res) => {
    controller.dropdownController.renderDropdown(req, res);
})


module.exports = router;