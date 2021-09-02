const { customEval, operators, parens } = require("../operations");
// const { parseString } = require("../parsing");

export const calculate = (calcArray, calcs = []) => {
  //check to see if the input has parens in it. if it does, recursively call this function on whatever is inside the parens first, splices the parens section off of the input array
  if (calcArray.includes(...parens)) {
    const openParen = calcArray.indexOf("(");
    const closeParen = calcArray.indexOf(")");
    const diff = closeParen - openParen;
    let parensArray = calcArray.splice(openParen + 1, diff - 1);
    calcArray.splice(calcArray.indexOf("("), 2);
    calcs.push(calculate(parensArray));
  }

  operators.forEach((op, index) => {
    //loops through the operators array - order matters - does */+-

    //then loops through the calcArray looking for operators
    calcArray.forEach((item, index) => {
      //if it finds an operator that matches one from the operators array
      if (op === item) {
        //and if there are no calculations done yet,
        if (!calcs.length) {
          //pushes the result from that calc to the calcs array
          calcs.push(
            customEval(op, calcArray[index - 1], calcArray[index + 1])
          );
          calcArray.splice(index - 1, 3);
        } else {
          //if there is something in the calcs array, it uses what is in the calcs array already to do the calc
          if (calcArray.length === 2) {
            //if the calcArray is only two long at this point, it gets grumpy about not having a second number, so this checks to see which index in the calcArray is a number and uses that number with the calcs[0] for the calculation
            if (typeof calcArray[0] === "number") {
              calcs[0] = customEval(op, calcArray[0], calcs[0]);
              calcArray.splice(0);
            } else {
              calcs[0] = customEval(op, calcs[0], calcArray[1]);
              calcArray.splice(0);
            }
          } else {
            //if the calcArray is still greater than 2 at this point, this basically collapses the operation that needs to be done and changes it out for the result in the calcArray, so that on the next pass it can be done in the section above.
            let temp = customEval(
              op,
              calcArray[index - 1],
              calcArray[index + 1]
            );
            calcArray.splice(index - 1, 3, temp);
          }
        }
      }
    });
  });

  //returns the first index out of the calcs array, and if anything falsey (most likely NaN), returns a Syntax Error
  if (calcs[0]) {
    return calcs[0];
  } else return SyntaxError;
};

// console.log(calculate(parseString("4*5/2")));
// console.log(calculate(parseString("-5+-8--11*2")));
// console.log(calculate(parseString("1 + 2")));
// console.log(calculate(parseString("44 + 55")));
// console.log(calculate(parseString("19 + cinnamon")));
// console.log(calculate(parseString("(4-2)*3.5")));
// console.log(calculate(parseString("3.5 * (2 + 5)")));
// console.log(calculate(parseString("-.32       /.5")));
// console.log(calculate(parseString("2+-+-4")));
