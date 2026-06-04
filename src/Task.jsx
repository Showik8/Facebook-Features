import { useState } from "react";

function Task() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <h1>რიცხვიიი: {count}</h1>

        <button onClick={() => handleClick()}>+1</button>
      </div>
    </>
  );
}

export default Task;
