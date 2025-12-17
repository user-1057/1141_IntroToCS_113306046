const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const calcBtn = document.getElementById("calcBtn");
const resultText = document.getElementById("result");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "錯誤：不能除以0";
  }
  return a / b;
}

function calculate() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorSelect.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultText.textContent = "請輸入數字";
    return;
  }

  let result;

  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }

  if (typeof result === "string") {
    resultText.textContent = "Result: " + result;
  } else {
    resultText.textContent = "Result: " + result.toFixed(2);
  }
}

calcBtn.addEventListener("click", function () {
  calculate();
});
