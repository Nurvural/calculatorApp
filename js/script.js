const calculation = document.querySelector(".calculation");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(event) {
  const clickedButton = event.target;
  const buttonValue = clickedButton.value;
  
  switch (buttonValue) {
    case "=":
      calculateResult();
      break;
    case "clearAll":
      calculateClearAll();
      break;
    case "clearLast":
      calculateClearLast();
      break;
    default:
      appendToInput(buttonValue);
      break;
  }
}

function calculateResult() {
  try {
    let result = eval(calculation.value);
    calculation.value = result;
  } catch (error) {
    calculation.value = "Error";
  }
}
function calculateClearAll() {
  calculation.value = "";
}
function calculateClearLast() {
  calculation.value = calculation.value.slice(0, -1);
}
function appendToInput(value) {
  calculation.value += value;
}