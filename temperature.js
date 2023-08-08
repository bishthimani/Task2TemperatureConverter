javascript
function convertCelsiusToFahrenheit() {
  var celsiusInput = document.getElementById("celsiusInput").value;
  var fahrenheitOutput = document.getElementById("fahrenheitOutput");

  if (celsiusInput !== "") {
    var fahrenheit = (celsiusInput * 9/5) + 32;
    fahrenheitOutput.innerText = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
  } else {
    fahrenheitOutput.innerText = "";
  }
}

function convertFahrenheitToCelsius() {
  var fahrenheitInput = document.getElementById("fahrenheitInput").value;
  var celsiusOutput = document.getElementById("celsiusOutput");

  if (fahrenheitInput !== "") {
    var celsius = (fahrenheitInput - 32) * 5/9;
    celsiusOutput.innerText = "Temperature in Celsius: " + celsius.toFixed(2) + " °C";
  } else {
    celsiusOutput.innerText = "";
  }
}