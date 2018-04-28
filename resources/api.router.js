const router = require("express").Router();
const controller = require("./api.controller.js");

router.get("/", controller.home);
router.get("/startrek", controller.home);
router.get("/startrek/episodes", controller.episodes);
router.post("/startrek/episodes", controller.addEpisode);
router.patch("/startrek/episodes/:id", controller.editEpisode);
//router.delete("/startrek/episodes", controller.deleteEpisode);

module.exports = router;
