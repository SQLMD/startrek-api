/* eslint-disable no-console */

const PORT = process.env.PORT || 3000;
/* eslint-disable no-unused-vars*/
const should = require("chai").should();

const app = require("../index.js");
const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");

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

describe("GET /startrek/episodes", () => {
  let status;
  let response;
  let responseStartrek;

  before(done => {
    chai
      .request(app)
      .get("/startrek/episodes")
      .set("Content-Type", "application/json")
      .end((_, res) => {
        status = res.status;
        response = res.text;
        done();
      });
  });

  it("should return status 200.", done => {
    status.should.equal(200);
    done();
  });

  it("should be a JSON object.", done => {
    response.should.be.a("string");
    response = JSON.parse(response);
    response.should.be.an("object");
    done();
  });

  it('should have a "startrek" property containing an array.', done => {
    response.should.have.a.property("startrek").that.is.an("array");
    responseQuotes = response.quotes;
    done();
  });
});

describe("GET /startrek/episodes/:id", () => {
  let status;
  let response;
  let responseStartrek;

  before(done => {
    chai
      .request(app)
      .get("/startrek/episodes/1")
      .set("Content-Type", "application/json")
      .end((_, res) => {
        status = res.status;
        response = res.text;
        done();
      });
  });

  it("should return status 200.", done => {
    status.should.equal(200);
    done();
  });

  it("should be a JSON object.", done => {
    response.should.be.a("string");
    response = JSON.parse(response);
    response.should.be.an("object");
    done();
  });

  it('should have a "startrek" property containing an array.', done => {
    response.should.have.a.property("startrek").that.is.an("array");
    responseStartrek = response.stattrek;
    done();
  });
  it('should have a "startrek" property containing an array with length 1.', done => {
    response.startrek.length.should.equal(1);
    responseStartrek = response.startrek;
    done();
  });
});
