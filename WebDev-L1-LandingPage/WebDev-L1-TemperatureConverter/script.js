var tempInput = document.getElementById("temp_input");
var unitSelect = document.getElementById("unit_select");
var convertBtn = document.getElementById("convert_btn");
var errorMsg = document.getElementById("error_msg");

var celsiusResult = document.getElementById("celsius_result");
var fahrenheitResult = document.getElementById("fahrenheit_result");
var kelvinResult = document.getElementById("kelvin_result");

convertBtn.addEventListener("click", function () {

    errorMsg.textContent = "";
    celsiusResult.textContent = "--";
    fahrenheitResult.textContent = "--";
    kelvinResult.textContent = "--";

    var inputValue = tempInput.value.trim();

    if (inputValue === "") {
        errorMsg.textContent = "Please enter a temperature value.";
        return;
    }

    var tempValue = parseFloat(inputValue);

    if (isNaN(tempValue)) {
        errorMsg.textContent = "Please enter a valid number.";
        return;
    }

    var selectedUnit = unitSelect.value;

    var celsiusValue;

    if (selectedUnit === "celsius") {
        celsiusValue = tempValue;
    }
    else if (selectedUnit === "fahrenheit") {
        celsiusValue = (tempValue - 32) * 5 / 9;
    }
    else if (selectedUnit === "kelvin") {
        celsiusValue = tempValue - 273.15;
    }

    if (celsiusValue < -273.15) {
        errorMsg.textContent = "Temperature cannot be below absolute zero (-273.15°C).";
        return;
    }

    var fahrenheitValue = (celsiusValue * 9 / 5) + 32;
    var kelvinValue = celsiusValue + 273.15;

    celsiusResult.textContent = celsiusValue.toFixed(2) + " °C";
    fahrenheitResult.textContent = fahrenheitValue.toFixed(2) + " °F";
    kelvinResult.textContent = kelvinValue.toFixed(2) + " K";

});
