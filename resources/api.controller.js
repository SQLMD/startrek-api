const OK = 200;
const FAIL = 400;
//const SERVER_ERROR = 500;

const render = (res, code, page) => {
  // send a response
  res.status(code).render(page);
};

module.exports = {
  home(req, res) {
    render(res, OK, "home.ejs");
  }
};
