<<<<<<< HEAD
"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/contactus", (req, res) => {
  res.render("index");
});

module.exports = router;
=======
"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/contactus", (req, res) => {
  res.render("index");
});

module.exports = router;
>>>>>>> 530fdbe798924bc35ae27f2901bdb86f3c5d0465
