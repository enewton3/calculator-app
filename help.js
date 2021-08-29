function parseCalculationString(s) {
  // --- Parse a calculation string into an array of numbers and operators
  var calculation = [],
    current = "";
  for (var i = 0, ch; (ch = s.charAt(i)); i++) {
    console.log(calculation);
    console.log(ch);
    console.log(s.charAt(i));
    console.log(current);
    if ("^*/+-".indexOf(ch) > -1) {
      if (current == "" && ch == "-") {
        current = "-";
      } else {
        calculation.push(parseFloat(current), ch);
        current = "";
      }
    } else {
      current += s.charAt(i);
    }
  }
  if (current != "") {
    calculation.push(parseFloat(current));
  }

  console.log(calculation);
}
parseCalculationString("44 + 55");
