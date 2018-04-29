const router = require("express").Router();
const controller = require("./api.controller.js");
const configuration = require("../services/db/knexfile");
const database = require("knex")(configuration);

router.get(["/", "/startrek"], controller.home);

router.get("/startrek/episodes", controller.getEpisodes);

router.get("/startrek/episodes/:id", controller.getEpisode);

router.post("/startrek/episodes", controller.createEpisode);

router.delete("/startrek/episodes/:id", controller.deleteEpisode);

router.patch("/startrek/episodes/:id", controller.updateEpisode);

module.exports = router;
