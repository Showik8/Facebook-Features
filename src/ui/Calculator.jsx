import { useState } from "react";
import Button from "./Button";
const Calculator = () => {
  const [inputValue, setInputValue] = useState(0);
  const [currentOperator, setCurrentOperator] = useState(null);
  const [output, setOutput] = useState(null);

  function finalResult() {
    if (currentOperator == "+") {
      setOutput(Number(inputValue) + Number(output));
      setInputValue(null);
    }
    if (currentOperator == "-") {
      setOutput(Number(inputValue) - Number(output));
      setInputValue(null);
    }
    if (currentOperator == "*") {
      setOutput(Number(inputValue) * Number(output));
      setInputValue(null);
    }
    if (currentOperator == "/") {
      setOutput(Number(inputValue) / Number(output));
      setInputValue(null);
    }
  }

  function handleOperation(operator) {
    setCurrentOperator(operator);
    setOutput(Number(inputValue));
    setInputValue(null);
  }

  function clear() {
    setCurrentOperator(null);
    setInputValue(0);
    setOutput(null);
  }

  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let ops = ["+", "-", "*", "/"];

  return (
    <div className="border-2 border-black flex flex-col w-500px h-full">
      <div className="flex flex-col">
        <h1>output:{output}</h1>
        <input type="text" value={inputValue} />
      </div>

      <div className="grid grid-cols-4 grid-rows-5 gap-2 ">
        {num.map((num) => (
          <Button key={num} value={num} PropsClick={setInputValue} />
        ))}
      </div>
      <div className="flex w-full justify-between">
        {ops.map((op) => {
          return (
            <Button
              key={op}
              PropsClick={handleOperation}
              value={op}
              type={"operator"}
            />
          );
        })}
        <Button PropsClick={finalResult} value={"="} type={"operator"} />

        <Button PropsClick={clear} value={"C"} type={"operator"} />
      </div>
    </div>
  );
};

export default Calculator;
