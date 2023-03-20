//Set the date we're counting down to
let countDownDate = new Date("Sep 02, 2023 15:00:00").getTime();

//Update seconds
let x = setInterval(function () {
  //Today's date and time
  let now = new Date().getTime();

  //Time between now and the countdown date
  let distance = countDownDate - now;

  //Time calculations
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Results display in element id="demo"
  document.getElementById("remaining_days").innerHTML = days;
  document.getElementById("remaining_hours").innerHTML = hours;
  document.getElementById("remaining_minutes").innerHTML = minutes;
  document.getElementById("remaining_seconds").innerHTML = seconds;

  //If the countdown is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
