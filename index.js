function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function sum(num1, num2) {
  return num1 + num2;
}

const calculator = {};
calculator.add = sum;
calculator.multiply = multiply;
calculator.subtract = subtract;
calculator.divide = divide;
module.exports = calculator;
