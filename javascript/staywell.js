$(function () {
  $(".toggle").on("click", function () {
    if ($(".item").hasClass("active")) {
      $(".item").removeClass("active");
    } else {
      $(".item").addClass("active");
    }
  });
});

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

function autoSlider() {
  newIndex++;
  if (newIndex === 3) newIndex = 0;
  const activeSlide = document.querySelector("[data-active]");
  const slides = document
    .querySelector("[data-carousel]")
    .querySelector("[data-slides]");

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

setInterval(autoSlider, 3000);

/* 

Code for Google Maps API when we utilize our API Key

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

*/
const form = document.getElementById("contactForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (email && !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  if (phone && !phoneRegex.test(phone)) {
    alert("Please enter a valid phone number in format x-xxx-xxx-xxxx.");
  }

  if (!name || !subject || !message || !email || !phone) {
    alert("All fields are required./n Please fill out the form completely.");
    return;
  }

  console.log(
    "Form submitted successfully ${name}! Your message has been received."
  );
});
//Order Confirmation # Code Begin

function createConfirmationNumber(customerName, bookingNumber) {
  // Generate a random number between 1000 and 9999
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  // Combine the customer's name, booking number, and random number to create the confirmation number
  const confirmationNumber = `${customerName.slice(0, 3)}-${bookingNumber.slice(
    0,
    3
  )}-${randomNumber}`;
  return confirmationNumber;
}

const customerName = "John Doe";
const bookingNumber = "ABC123";
const confirmationNumber = createConfirmationNumber(
  customerName,
  bookingNumber
);

//Order Confirmation # Code End

//Alt Order Confirmation # Code Start

function createConfirmationNumber() {
  // Generate a random number between 1000 and 9999
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  // Load the customer and booking data using the fetch API
  Promise.all([
    fetch("customer.json").then((response) => response.json()),
    fetch("booking.json").then((response) => response.json()),
  ])
    .then((data) => {
      const customerData = data[0];
      const bookingData = data[1];
      // Get the customer's name and booking number from the JSON data
      const customerName = customerData.name;
      const bookingNumber = bookingData.number;
      // Combine the customer's name, booking number, and random number to create the confirmation number
      const confirmationNumber = `${customerName.slice(
        0,
        3
      )}-${bookingNumber.slice(0, 3)}-${randomNumber}`;
      // Set the confirmation number in the HTML
      document.getElementById("confirmation-number").innerText =
        confirmationNumber;
    })
    .catch((error) => {
      console.error(error);
    });
}

//Alt Order Confirmation # Code End

/*Local Attractions Json Data Pull Begins*/

fetch("../attractions.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (attractions) {
    let placeholder = document.querySelector("#attraction-list");
    let out = "";
    for (let attraction of attractions) {
      out += `
    <tr>
      <td> <img src='${attraction.image_url}'> </td>
      <td>${attraction.attraction}</td>
      <td>${attraction.address}</td>
      <td>${attraction.distance}</td>
    </tr>
    `;
    }

    placeholder.innerHTML = out;
  });
async function loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const { headers, rows } = await response.json();

  // Clear the table
  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  // Populate the headers
  for (const headerText of headers) {
    const headerElement = document.createElement("th");

    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
  }
  //Populate the rows
  for (const row of rows) {
    const rowElement = document.createElement("tr");

    for (const cellText of row) {
      HTMLTableCellElement.textContent = cellText;
      rowElement.appendChild(cellElement);
    }
    tableBody.appendChild(rowElement);
  }
}

loadIntoTable("./attractions.json", document.querySelector("table"));
