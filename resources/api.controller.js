const OK = 200;
const CREATED = 201;
const FAIL = 400;
//const SERVER_ERROR = 500;

const render = (res, code, page) => {
  res.status(code).render(page);
};
const send = (res, code, data, json = true) => {
  res.status(code).send(json ? JSON.stringify(data) : data);
};

const episodeData = [
  { id: 1, title: "The Man Trap", airDate: "1966-09-08" },
  { id: 2, title: "Charlie X", airDate: "1966-09-15" }
];

module.exports = {
  home(req, res) {
    render(res, OK, "home.ejs");
  }
  // episodes(req, res) {
  //   send(res, OK, episodeData, true);
  // },
  // addEpisode(req, res) {
  //   services.db.episodes
  //     .create({
  //       seriesId: 1,
  //       seasonId: 1,
  //       number: 80,
  //       title: "DeleteMe",
  //       airDate: "1967-12-31"
  //     })
  //     .then(episode => res.status(CREATED).json(episode.serialize()))
  //     .catch(err => res.status(FAIL).send(err.message));

  //   send(res, OK, episodeData, true);
  // },
  // editEpisode(req, res) {
  //   const id = req.params.id;
  //   send(res, OK, id, false);
  // },
  // deleteEpisode(req, res) {
  //   const id = req.params.id;
  //   episodeData.splice(id - 1, 1);
  //   send(res, OK, episodeData, true);
  // }
};
