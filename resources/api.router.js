const router = require("express").Router();
const controller = require("./api.controller.js");

router.get("/startrek", controller.home);
router.get("/", controller.home);
router.get("/startrek/episodes", controller.allEpisodes);

module.exports = router;
