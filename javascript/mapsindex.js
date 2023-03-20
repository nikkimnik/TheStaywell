const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

import fetch from "node-fetch";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

export default getData;

fetch(
  "https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap&v=weekly"
)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error(err));

const fetchMaps = async (searchtext) => {
  const url =
    "https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&callback=initMap&v=weekly";
};

router.get("/:searchtext", async (req, res) => {
  const searchtext = req.params.searchtext;
  const data = await fetchMaps(searchtext);
  res.json(data);
});

router.post("/", async (req, res) => {
  const searchtext = req.body.searchtext;
  const data = await fetchMaps(searchtext);
  res.json(data);
});

module.exports = router;
