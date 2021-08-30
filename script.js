const { customEval, operators } = require("./operations");
const { parseString } = require("./parsing");

const calculate = (str) => {
  let parsed = parseString(str);
  let calcs = [];

  for (let i = 0; i < operators.length; i++) {
    for (let j = 0; j < parsed.length; j++) {
      if (operators[i] === parsed[j]) {
        if (calcs.length) {
          let temp = calcs[0];
          calcs[0] = customEval(parsed[j], temp, parsed[j + 1]);
        } else {
          calcs.push(customEval(parsed[j], parsed[j - 1], parsed[j + 1]));
        }
      }
    }
  }
  console.log(parsed);
  // console.log(result);
  // console.log(parsed);
  return calcs[0];
};

console.log(calculate("4*5/2"));
console.log(calculate("-5+-8--11*2"));
console.log(calculate("1 + 2"));
console.log(calculate("44 + 55"));
console.log(calculate("19 + cinnamon"));
console.log(calculate("(4-2)*3.5"));
console.log(calculate("-.32       /.5"));
console.log(calculate("2+-+-4"));
