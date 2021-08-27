const { add, subtract, multiply, divide } = require("../operations");
const clearWhiteSpace = require("./clearWhiteSpace");

const operators = ["+", "-", "*", "/"];
const otherPossibleChars = ["(", ")", "."];

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

//parsing strings, you need to look at the next item, and then make a descision based on that item, and then look at the next item to make a descision based on that item, etc.
//good candidate for recursion...

const parseString = (str) => {
  //clear whitespace from the split up string
  const inputArr = clearWhiteSpace(str.split(""));

  const newArr = inputArr.map((item, index) => {
    if (otherPossibleChars.includes(item)) return true;
    if (parseInt(item)) return parseInt(item);
    if (operators.includes(item)) return item;
  });

  let firstNumber = newArr[0];
  let secondNumber = newArr[2];
  let operator = newArr[1];

  console.log(inputArr);
  console.log(newArr);
  console.log(customEval(operator, firstNumber, secondNumber));
};

// parseString("4*5/2");
// parseString("-5+-8--11*2");
parseString("1 + 2");
parseString("44 + 55");
// parseString("19 + cinnamon");
// parseString("(4-2)*3.5");
// parseString("-.32       /.5");

module.exports = {
  parseString,
  clearWhiteSpace,
};

const itemCheck = () => {
  if (parseInt(item)) return parseInt(item);
};

//Look at item
//If that item is a number, look at the next item

//if the next item is a

const recursiveParse = (str) => {};
