const configuration = require("../db/knexfile");
const database = require("knex")(configuration);

const OK = 200;
const CREATED = 201;
const FAIL = 400;
const SERVER_ERROR = 500;

module.exports = {
  home(req, res) {
    res.status(OK).render("home.ejs");
  },
  getEpisodes(req, res) {
    database("episode")
      .select()
      .then(episosdes => {
        res.status(OK).json({ startrek: episosdes });
      })
      .catch(error => {
        res.status(SERVER_ERROR).json({ error });
      });
  },
  getEpisode(req, res) {
    const id = req.params.id;
    database("episode")
      .where("number", id)
      .select()
      .then(episosde => {
        res.status(OK).json({ startrek: episosde });
      })
      .catch(error => {
        res.status(SERVER_ERROR).json({ error });
      });
  },
  createEpisode(req, res) {
    const episode = req.body;
    database("episode")
      .insert(episode, "id")
      .then(episode => {
        res.status(CREATED).json({ id: episode[0] });
      })
      .catch(error => {
        res.status(SERVER_ERROR).json({ error });
      });
  },
  deleteEpisode(req, res) {
    const id = req.params.id;
    database("episode")
      .where("number", id)
      .delete()
      .then(episode => {
        res
          .status(OK)
          .json({ message: `Data for Episode ${id} has been deleted` });
      })
      .catch(error => {
        res.status(SERVER_ERROR).json({ error });
      });
  },
  updateEpisode(req, res) {
    const episode = req.body;
    const id = req.params.id;
    database("episode")
      .where("number", id)
      .update(episode)
      .then(episode => {
        res
          .status(OK)
          .json({ message: `Data for Episode ${id} has been updated` });
      })
      .catch(error => {
        res.status(SERVER_ERROR).json({ error });
      });
  }
};
