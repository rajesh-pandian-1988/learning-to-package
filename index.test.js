const calc = require("./index");

test("testing addition of two numbers", () => {
  expect(calc.add(1, 2)).toBe(3);
});

test("testing addition of two numbers", () => {
  expect(calc.multiply(1, 2)).toBe(2);
});

test("testing addition of two numbers", () => {
  expect(calc.subtract(1, 2)).toBe(-1);
});

test("testing addition of two numbers", () => {
  expect(calc.divide(4, 2)).toBe(2);
});
