const { add } = require("./addition");
const { divide } = require("./division");
const { multiply } = require("./multiplication");
const { subtract } = require("./subtraction");

const operators = ["*", "/", "+", "-"];
const parens = ["(", ")"];

const customEval = (str, a, b) => {
  switch (str) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

module.exports = {
  customEval,
  operators,
  parens,
};
