/* eslint-disable no-console */
//const { expect } = require("chai");
//const config = require("../config");
//const knex = require("knex")(config.db);
//const db = require("../services/db")(config.db);
//const Promise = require("bluebird");
/* eslint-disable prefer-destructuring, no-console, no-restricted-syntax */
const PORT = process.env.PORT || 3000;
/* eslint-disable no-unused-vars*/
const should = require("chai").should();
//const fs = require("fs");
//const quotes = require("./quotes.json");
const app = require("../index.js");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("GET /", () => {
  let status;
  let response;

  before(done => {
    chai
      //.request(`http://localhost:${PORT}`)
      .request(app)
      .get("/")
      .set("Content-Type", "application/json")
      .end((_, res) => {
        status = res.statusCode;
        response = res.text;
        done();
      });
  });

  it("should return status 200.", done => {
    status.should.equal(200);
    done();
  });
});
