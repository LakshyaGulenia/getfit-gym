// Get the form element
var form = document.querySelector(".chart-calculate-form form");

// Add event listener to the form submit event
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get the input values
  var heightInput = document.querySelector('input[placeholder="Height / cm"]');
  var weightInput = document.querySelector('input[placeholder="Weight / kg"]');

  // Convert the input values to numbers
  var height = parseFloat(heightInput.value);
  var weight = parseFloat(weightInput.value);

  // Calculate the BMI
  var bmi = weight / ((height / 100) * (height / 100));

  // Display the BMI result
  alert("Your BMI is: " + bmi.toFixed(2));

  // Reset the form
  form.reset();
});
