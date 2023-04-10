// Get the input fields for adults, children, and infants
const adultsInput = document.getElementById("adults");
const childrenInput = document.getElementById("children");
const infantsInput = document.getElementById("infants");

// Get the Reserve button and save its original state
const reserveBtn = document.getElementById("reserve-btn");
const reserveBtnDisabled = reserveBtn.disabled;

// Add event listener to the input fields to check occupancy limits and enable/disable the Reserve button
adultsInput.addEventListener("input", checkOccupancy);
childrenInput.addEventListener("input", checkOccupancy);
infantsInput.addEventListener("input", checkOccupancy);

// Function to check if the occupancy input is valid and enable/disable the Reserve button
function checkOccupancy() {
  const adults = parseInt(adultsInput.value);
  const children = parseInt(childrenInput.value);
  const infants = parseInt(infantsInput.value);

  // Calculate the total occupancy
  const totalOccupancy = adults + children + infants;

  // Check if the total occupancy exceeds 4 adults and children or 5 infants,
  // or if there are no adults selected
  if (
    adults + children > 4 ||
    infants > 5 ||
    totalOccupancy > 9 ||
    adults < 1
  ) {
    // If it does, disable the Reserve button and display an error message
    reserveBtn.disabled = true;
    document.getElementById("error-message").textContent =
      "You have exceeded the Maximum Number of Guests (4 -- not including Infants) and/or not chosen at least 1 Required Adult.";
  } else {
    // If it doesn't, enable the Reserve button and clear the error message
    reserveBtn.disabled = reserveBtnDisabled;
    document.getElementById("error-message").textContent = "";
  }
}

// Add event listener to the "Reserve" button to validate the input
reserveBtn.addEventListener("click", validateOccupancy);

// Function to validate the occupancy input
function validateOccupancy(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const adults = parseInt(adultsInput.value);
  const children = parseInt(childrenInput.value);
  const infants = parseInt(infantsInput.value);

  // Calculate the total occupancy
  const totalOccupancy = adults + children + infants;

  // Check if the total occupancy exceeds 4 adults and children or 5 infants,
  // or if there are no adults selected
  if (
    adults + children > 4 ||
    infants > 5 ||
    totalOccupancy > 9 ||
    adults < 1
  ) {
    // If it does, display an error message
    document.getElementById("error-message").textContent =
      "You have exceeded the Maximum Number of Guests (4 -- not including Infants) and/or not chosen at least 1 Required Adult.";
  } else {
    // If it doesn't, clear the error message and submit the form
    document.getElementById("error-message").textContent =
      "Your form has been submitted.";
    document.getElementById("reservation-form").submit();
  }
}
