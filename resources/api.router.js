const router = require("express").Router();
const controller = require("./api.controller.js");
const configuration = require("../services/db/knexfile");
const database = require("knex")(configuration);

router.get(["/", "/startrek"], controller.home);

router.get("/startrek/episodes", (req, res) => {
  database("episode")
    .select()
    .then(episosdes => {
      res.status(200).json({ startrek: episosdes });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.get("/startrek/episodes/:id", (req, res) => {
  const id = req.params.id;
  database("episode")
    .where("number", id)
    .select()
    .then(episosde => {
      res.status(200).json({ startrek: episosde });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.post("/startrek/episodes", (req, res) => {
  const episode = req.body;
  database("episode")
    .insert(episode, "id")
    .then(episode => {
      res.status(201).json({ id: episode[0] });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.delete("/startrek/episodes/:id", (req, res) => {
  const id = req.params.id;
  database("episode")
    .where("number", id)
    .delete()
    .then(episode => {
      res.status(204).json({});
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

router.patch("/startrek/episodes/:id", (req, res) => {
  const episode = req.body;
  const id = req.params.id;
  database("episode")
    .where("number", id)
    .update(episode)
    .then(episode => {
      res.status(204).json({});
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

module.exports = router;
