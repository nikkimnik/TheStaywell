<<<<<<< HEAD
"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

const htmlRouter = require("./routes/html");

app.use("/html", htmlRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
=======
"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/index", (req, res) => {
  res.render("index");
});

const htmlRouter = require("./routes/html");

app.use("/html", htmlRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
>>>>>>> 530fdbe798924bc35ae27f2901bdb86f3c5d0465
