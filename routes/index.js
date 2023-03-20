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
