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

  if (!name || !subject || !message || !email || !phone)) {
    alert(
      "All fields are required./n Please fill out the form completely."
    );
    return;
  }

  console.log("Form submitted successfully ${name}! Your message has been received.`
  );
});

//Thermometer function JS Begin

CountDownTimer('12/31/2023 10:1 AM', 'countdown');
CountDownTimer('12/31/2023 10:1 AM', 'newcountdown');

function CountDownTimer(dt, id)
{
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = '0';

            return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        document.getElementById(id).innerHTML = days /*+ ' days'*/;
        //document.getElementById(id).innerHTML += hours + 'hrs ';
        //document.getElementById(id).innerHTML += minutes + 'mins ';
        //document.getElementById(id).innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);
}

//Thermometer function JS End
