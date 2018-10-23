let displayValue = "";
let buttonValue = "";
let runningTotal = "";
let operator = "";
const buttonBox = document.querySelector(".button-container");

function clearAll() {
  displayValue = "";
  buttonValue = "";
  runningTotal = "";
  operator = "";
}

function updateDisplay() {
  document.getElementById("display").innerHTML = displayValue;
}

function calculate() {
  switch (operator) {
    case "÷":
      runningTotal /= displayValue;
      break;
    case "×":
      runningTotal *= displayValue;
      break;
    case "-":
      runningTotal -= displayValue;
      break;
    case "+":
      runningTotal = parseFloat(runningTotal) + parseFloat(displayValue);
      break;
  }
}

buttonBox.addEventListener("click", function(event) {
  buttonValue = event.target.innerText;
  console.log(`You clicked on button ${buttonValue}`);
  if (isNaN(buttonValue) == false || buttonValue == ".") {
    if (displayValue == false) {
      displayValue = buttonValue;
    } else {
      displayValue += buttonValue;
    }
  } else if (buttonValue == "←") {
    displayValue = displayValue.slice(0, -1);
  } else if (buttonValue == "C") {
    clearAll();
  } else if (buttonValue == "=") {
    calculate();
    operator = "";
    displayValue = runningTotal;
  } else {
    if (runningTotal == false) {
      runningTotal = displayValue;
      displayValue = "";
    } else {
      calculate();
      displayValue = "";
    }
    operator = buttonValue;
  }
  updateDisplay();
  console.log(`running total: ${runningTotal}`);
  console.log(`operator: ${operator}`);
});
