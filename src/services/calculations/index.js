const { customEval, operators, parens } = require("../operations");
const { parseString } = require("../parsing");

const calculate = (calcArray) => {
  let calcs = [];

  if (calcArray.includes(...parens)) {
    const openParen = calcArray.indexOf("(");
    const closeParen = calcArray.indexOf(")");
    const diff = closeParen - openParen;
    let parensArray = calcArray.splice(openParen + 1, diff - 1);
    calcArray.splice(calcArray.indexOf("("), 2);
    calcs.push(calculate(parensArray));
  }

  for (let i = 0; i < operators.length; i++) {
    for (let j = 0; j < calcArray.length; j++) {
      if (operators[i] === calcArray[j]) {
        console.log(operators[i]);
        console.log(calcs);
        if (calcs.length) {
          if (typeof calcArray[calcArray.length - 1] === "number") {
            let temp = calcs[0];
            calcs[0] = customEval(calcArray[j], temp, calcArray[j + 1]);
          } else {
            let temp = calcs[0];
            calcs[0] = customEval(calcArray[j], temp, calcArray[j - 1]);
          }
        } else {
          calcs.push(
            customEval(calcArray[j], calcArray[j - 1], calcArray[j + 1])
          );
        }
      }
    }
  }
  console.log(calcArray);

  if (calcs[0]) {
    return calcs[0];
  } else return SyntaxError;
};

console.log(calculate(parseString("4*5/2")));
console.log(calculate(parseString("-5+-8--11*2")));
console.log(calculate(parseString("1 + 2")));
console.log(calculate(parseString("44 + 55")));
console.log(calculate(parseString("19 + cinnamon")));
console.log(calculate(parseString("(4-2)*3.5")));
console.log(calculate(parseString("3.5 * (2 + 5)")));
console.log(calculate(parseString("-.32       /.5")));
console.log(calculate(parseString("2+-+-4")));

module.exports = { calculate };
