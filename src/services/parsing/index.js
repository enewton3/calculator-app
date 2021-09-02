const { operators, parens } = require("../operations");

//parseString is a function that takes a calculation string and returns an array of integers and operators, that can then be passed to a calculate function

const parseString = (str) => {
  const strArray = str.split("");
  let output = [];
  let current = "";
  //loop through split up string
  for (let i = 0; i < strArray.length; i++) {
    //if the character that you are on is an operator
    if (operators.includes(strArray[i])) {
      //if that operator is a negative sign, not a minus sign
      if (current === "" && strArray[i] === "-") {
        current = "-";
      } else if (current === "") {
        //neccessary because you can't parseFloat on a number that isn't there
        output.push(strArray[i]);
      } else {
        output.push(parseFloat(current), strArray[i]);
        current = "";
      }
    } else if (parens.includes(strArray[i])) {
      //paren support
      if (strArray[i] === "(") output.push(strArray[i]);
      if (strArray[i] === ")") {
        output.push(parseFloat(current), strArray[i]);
        current = "";
      }
    } else {
      // otherwise, it is a number, add it to current
      current += strArray[i];
    }
  }
  //make sure to push the final current number to the output
  if (current !== "") {
    output.push(parseFloat(current));
  }

  return output;
};

module.exports = {
  parseString,
};
