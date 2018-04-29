const config = require("./config.js");
const Promise = require("bluebird");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

//const apiRouter = require("./resources/api.router");
const services = require("./services")(config);

app.use("/", [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
  //apiRouter
]);

const configuration = require("./services/db/knexfile");
const database = require("knex")(configuration);

app.get(["/", "/startrek"], (req, res) => {
  res.status(200).render("home.ejs");
});

app.get("/startrek/episodes", (req, res) => {
  database("episode")
    .select()
    .then(episosdes => {
      res.status(200).json({ startrek: episosdes });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
});

app.get("/startrek/episodes/:id", (req, res) => {
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

app.post("/startrek/episodes", (req, res) => {
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

app.delete("/startrek/episodes/:id", (req, res) => {
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

app.patch("/startrek/episodes/:id", (req, res) => {
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

app.listen(config.express.port, () => {
  console.log("Your server is listening.");
});

module.exports = app;
