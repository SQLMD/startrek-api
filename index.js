const config = require("./config.js");
const Promise = require("bluebird");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const configuration = require("./db/knexfile");
const database = require("knex")(configuration);

const apiRouter = require("./resources/api.router");

app.use("/", [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true }),
  apiRouter
]);

app.listen(config.express.port, () => {
  console.log("Your server is listening.");
});

module.exports = app;
