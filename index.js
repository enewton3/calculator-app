const { operators } = require("./operations");
const { parseString } = require("./parsing");

const calculate = (str) => {
  const parsed = parseString(str);

  let firstPointer = 0;
  let secondPointer = 1;

  console.log(parsed);
};

calculate("4*5/2");
calculate("-5+-8--11*2");
calculate("1 + 2");
calculate("44 + 55");
calculate("19 + cinnamon");
calculate("(4-2)*3.5");
calculate("-.32       /.5");
