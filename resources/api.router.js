const router = require("express").Router();
const controller = require("./api.controller.js");

router.get("/", controller.home);

module.exports = router;
