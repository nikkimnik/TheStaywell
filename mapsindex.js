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

let map;
const staywellLatLong = { lat: 38.68237, lng: -84.59051 };
const arkEncounterLatLong = { lat: 38.62273, lng: -84.58446 };
const midpointLatLong = { lat: 38.66268, lng: -84.5752 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: midpointLatLong,
    zoom: 12,
    mapId: "5f1e5c6e5019b5f9",
  });

  window.initMap = initMap;

  let marker1 = new google.maps.Marker({
    position: arkEncounterLatLong,
    label: "Ark Encounter",
    map: map,
  });

  let marker2 = new google.maps.Marker({
    position: staywellLatLong,
    label: "The Staywell",
    map: map,
  });
}
