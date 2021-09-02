import { useState } from "react";
import { operators, parens } from "./services/operations";
import Input from "./components/Input";
import Button from "./components/Button";

import "./App.css";
import { calculate } from "./services/calculations";
import { parseString } from "./services/parsing";

function App() {
  const [calcString, setCalcString] = useState("");

  const handleButtonClick = (str) => {
    setCalcString(calcString.concat(str));
  };

  const handleSubmit = () => {
    const result = calculate(parseString(calcString));

    if (result === SyntaxError) {
      setCalcString("Invalid Input.");
    } else {
      setCalcString(result.toString());
    }
  };

  return (
    <div className="App">
      <h2>Simple Calculator</h2>
      <p>
        To use, type or use provided buttons to input your calculation string.
        <br />
        Hit enter to commence calculation
        <br />
        Hit C to clear the input line
      </p>
      <Input calcString={calcString} setCalcString={setCalcString} />
      <div className="keypad">
        {"789456123".split("").map((number) => {
          return (
            <Button
              content={number}
              handleButtonClick={handleButtonClick}
              key={number}
            />
          );
        })}
      </div>
      <div className="operators">
        {operators.map((item) => {
          return (
            <Button
              content={item}
              handleButtonClick={handleButtonClick}
              key={item}
            />
          );
        })}
      </div>
      <div className="parens">
        {parens.map((item) => {
          return (
            <Button
              content={item}
              handleButtonClick={handleButtonClick}
              key={item}
            />
          );
        })}
        <Button content={"."} handleButtonClick={handleButtonClick} key="." />
      </div>
      <div className="finals">
        <Button content={"C"} handleButtonClick={() => setCalcString("")} />
        <Button content={"ENTER"} handleButtonClick={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
