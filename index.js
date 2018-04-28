const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("Your server is listening.");
});
