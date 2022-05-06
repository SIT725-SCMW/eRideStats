const express = require("express");
let router = express.Router();
let contoller = require("../controller");

router.get('/', (req, res) => {
    contoller.userController.getUser(req, res);
})

module.exports = router;